<script lang="ts">
    import Web3 from "web3";
    import { setContext, onMount } from "svelte";
    import { writable } from "svelte/store";
    import { isMobile } from "@walletconnect/browser-utils/dist/cjs/browser";
    import { signatureMessage, STATUS, errorCodes } from "./utils";

    export let chainId: string;
    export let network: any;

    let instance;

    let noop = () => {};

    let initialState = {
        accounts: [],
        connectionError: "",
    };

    let state = writable({
        ...initialState,
        chainId: "",
        connectionStatus: STATUS.DISCONNECTED,
    });

    let setState = (exp) =>
        state.update((prevState) => ({ ...prevState, ...exp }));

    onMount(() => {
        identifyProvider(window);

        return () => {
            removeEvents(instance);
        };
    });

    let identifyProvider = async (w) => {
        if (w.ethereum) {
            const ethereum = w.ethereum;
            w.web3 = new Web3(ethereum);
            if (w.web3) {
                await getChainId(w.web3);
            }
        } else if (w.web3) {
            await getChainId(w.web3);
        } else {
            // non dapp browsers
            setState({ connectionError: errorCodes.PROVIDER_MISSING });
            return;
        }
        instance = new Web3(w.web3.currentProvider);
        setState({ connectionStatus: STATUS.ACTIVE });
        initEvents(instance.currentProvider);
    };

    let getChainId = async (instance) => {
        return instance.eth
            .getChainId()
            .then((chainId) => {
                setState({ chainId: parseInt(chainId) });
            })
            .catch((err) => {
                setState({ connectionError: errorCodes.PROVIDER_LOCKED });
                return;
            });
    };

    let initEvents = (provider) => {
        if (provider.on) {
            provider.on("accountsChanged", (accounts) =>
                setState({ accounts })
            );
            provider.on("chainChanged", (chainId) =>
                setState({ chainId: parseInt(chainId) })
            );
            provider.on("disconnect", (code, reason) =>
                setState({ connectionStatus: STATUS.DISCONNECTED })
            );
        }
    };

    let removeEvents = (instance) => {
        if (
            instance &&
            instance.currentProvider &&
            instance.currentProvider.removeListener
        ) {
            instance.currentProvider.removeListener("accountsChanged", noop);
            instance.currentProvider.removeListener("chainChanged", noop);
            instance.currentProvider.removeListener("disconnect", noop);
        }
    };

    let requestPermissions = async () => {
        return instance.currentProvider
            .request({
                method: "wallet_requestPermissions",
                params: [{ eth_accounts: {} }],
            })
            .then(() =>
                instance.currentProvider.request({
                    method: "eth_requestAccounts",
                })
            )
            .catch(rejectPermissionRequest);
    };

    let rejectPermissionRequest = () => {
        setState({
            connectionError: errorCodes.PERMISSIONS_DENIED,
        });
        return Promise.reject($state.connectionError);
    };

    let requestAccountInfo = async () => {
        if (instance.currentProvider.request) {
            return instance.currentProvider
                .request({
                    method: "eth_requestAccounts",
                })
                .catch(rejectPermissionRequest);
        } else {
            return instance.currentProvider
                .enable()
                .catch(rejectPermissionRequest);
        }
    };

    let requestAddEthereumChain = async (newNetwork: any) => {
        if (instance.currentProvider.request) {
            try {
                await instance.currentProvider.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: Web3.utils.toHex(newNetwork.chainId) }],
                });
            } catch (error) {
                if (error.code === 4902) {
                    try {
                        await instance.currentProvider.request({
                            method: "wallet_addEthereumChain",
                            params: [parseChain(newNetwork)],
                        });
                    } catch (addError) {
                        return rejectPermissionRequest();
                    }
                }
                return Promise.reject(error);
            }
        }
        return Promise.resolve();
    };

    let parseChain = (newNetwork: any) => {
        return {
            chainId: Web3.utils.toHex(newNetwork.chainId),
            chainName: newNetwork.name,
            nativeCurrency: newNetwork.nativeCurrency,
            rpcUrls: newNetwork.rpc,
            blockExplorerUrls: newNetwork.explorers.map((n) => n.url),
        };
    };

    let initConnection = async () => {
        setState({ connectionStatus: STATUS.CONNECTING });
        if (!instance) {
            setState({ connectionError: errorCodes.PROVIDER_MISSING });
            return Promise.reject($state.connectionError);
        }
        return requestConnection().then(async () => {
            let accounts = await instance.eth.getAccounts();
            setState({ accounts });
        });
    };

    let requestConnection = async () => {
        await requestAddEthereumChain(network).catch((err) => {
            if (err.code !== 4902) {
                if (parseInt($state.chainId) !== parseInt(chainId)) {
                    setState({ connectionError: errorCodes.WRONG_CHAIN });
                    return Promise.reject($state.connectionError);
                }
            }
        });
        await getChainId(instance);

        if (parseInt($state.chainId) === parseInt(chainId)) {
            setState({ connectionError: "" });
            if (isMobile()) {
                return requestAccountInfo().catch(rejectPermissionRequest);
            } else {
                return requestPermissions()
                    .then(() => requestAccountInfo())
                    .catch(rejectPermissionRequest);
            }
        } else {
            setState({ connectionError: errorCodes.WRONG_CHAIN });
            return Promise.reject($state.connectionError);
        }
    };

    let signatureSign = async (address, nonce) => {
        try {
            let signature = await instance.eth.personal.sign(
                signatureMessage.replace("%nonce%", nonce),
                address,
                ""
            );
            setState({ connectionError: "" });
            return { signature, address };
        } catch (error) {
            setState({ connectionError: errorCodes.SIGNATURE_DENIED });
            return Promise.reject($state.connectionError);
        }
    };

    let clearConnection = () =>
        setState({
            ...initialState,
            connectionStatus: STATUS.ACTIVE,
        });

    setContext("metamaskConnector", {
        state,
        initConnection,
        clearConnection,
        requestAddEthereumChain,
        signatureSign,
        errorCodes,
        statuses: STATUS,
    });
</script>

<slot switchChain={requestAddEthereumChain} state={$state} />
