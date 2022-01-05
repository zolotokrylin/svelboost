<script lang="ts">"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.network = exports.chainId = void 0;
var web3_1 = require("web3");
var svelte_1 = require("svelte");
var store_1 = require("svelte/store");
var cjs_1 = require("@walletconnect/utils/dist/cjs");
var utils_1 = require("./utils");
var instance;
var noop = function () { };
var initialState = {
    accounts: [],
    connectionError: "",
};
var state = store_2.writable(__assign(__assign({}, initialState), { chainId: "", connectionStatus: utils_2.STATUS.DISCONNECTED }));
var setState = function (exp) {
    return state.update(function (prevState) { return (__assign(__assign({}, prevState), exp)); });
};
svelte_2.onMount(function () {
    identifyProvider(window);
    return function () {
        removeEvents(instance);
    };
});
var identifyProvider = function (w) { return __awaiter(void 0, void 0, void 0, function () {
    var ethereum;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!w.ethereum) return [3 /*break*/, 3];
                ethereum = w.ethereum;
                w.web3 = new web3_2.default(ethereum);
                if (!w.web3) return [3 /*break*/, 2];
                return [4 /*yield*/, getChainId(w.web3)];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [3 /*break*/, 6];
            case 3:
                if (!w.web3) return [3 /*break*/, 5];
                return [4 /*yield*/, getChainId(w.web3)];
            case 4:
                _a.sent();
                return [3 /*break*/, 6];
            case 5:
                // non dapp browsers
                setState({ connectionError: utils_2.errorCodes.PROVIDER_MISSING });
                return [2 /*return*/];
            case 6:
                instance = new web3_2.default(w.web3.currentProvider);
                setState({ connectionStatus: utils_2.STATUS.ACTIVE });
                initEvents(instance.currentProvider);
                return [2 /*return*/];
        }
    });
}); };
var getChainId = function (instance) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, instance.eth
                .getChainId()
                .then(function (chainId) {
                setState({ chainId: parseInt(chainId) });
            })
                .catch(function (err) {
                setState({ connectionError: utils_2.errorCodes.PROVIDER_LOCKED });
                return;
            })];
    });
}); };
var initEvents = function (provider) {
    if (provider.on) {
        provider.on("accountsChanged", function (accounts) {
            return setState({ accounts: accounts });
        });
        provider.on("chainChanged", function (chainId) {
            return setState({ chainId: parseInt(chainId) });
        });
        provider.on("disconnect", function (code, reason) {
            return setState({ connectionStatus: utils_2.STATUS.DISCONNECTED });
        });
    }
};
var removeEvents = function (instance) {
    if (instance &&
        instance.currentProvider &&
        instance.currentProvider.removeListener) {
        instance.currentProvider.removeListener("accountsChanged", noop);
        instance.currentProvider.removeListener("chainChanged", noop);
        instance.currentProvider.removeListener("disconnect", noop);
    }
};
var requestPermissions = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, instance.currentProvider
                .request({
                method: "wallet_requestPermissions",
                params: [{ eth_accounts: {} }],
            })
                .then(function () {
                return instance.currentProvider.request({
                    method: "eth_requestAccounts",
                });
            })
                .catch(rejectPermissionRequest)];
    });
}); };
var rejectPermissionRequest = function () {
    setState({
        connectionError: utils_2.errorCodes.PERMISSIONS_DENIED,
    });
    return Promise.reject($state.connectionError);
};
var requestAccountInfo = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (instance.currentProvider.request) {
            return [2 /*return*/, instance.currentProvider
                    .request({
                    method: "eth_requestAccounts",
                })
                    .catch(rejectPermissionRequest)];
        }
        else {
            return [2 /*return*/, instance.currentProvider
                    .enable()
                    .catch(rejectPermissionRequest)];
        }
        return [2 /*return*/];
    });
}); };
var requestAddEthereumChain = function (newNetwork) { return __awaiter(void 0, void 0, void 0, function () {
    var error_1, addError_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!instance.currentProvider.request) return [3 /*break*/, 8];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 8]);
                return [4 /*yield*/, instance.currentProvider.request({
                        method: "wallet_switchEthereumChain",
                        params: [{ chainId: web3_2.default.utils.toHex(newNetwork.chainId) }],
                    })];
            case 2:
                _a.sent();
                return [3 /*break*/, 8];
            case 3:
                error_1 = _a.sent();
                if (!(error_1.code === 4902)) return [3 /*break*/, 7];
                _a.label = 4;
            case 4:
                _a.trys.push([4, 6, , 7]);
                return [4 /*yield*/, instance.currentProvider.request({
                        method: "wallet_addEthereumChain",
                        params: [parseChain(newNetwork)],
                    })];
            case 5:
                _a.sent();
                return [3 /*break*/, 7];
            case 6:
                addError_1 = _a.sent();
                return [2 /*return*/, rejectPermissionRequest()];
            case 7: return [2 /*return*/, Promise.reject(error_1)];
            case 8: return [2 /*return*/, Promise.resolve()];
        }
    });
}); };
var parseChain = function (newNetwork) {
    return {
        chainId: web3_2.default.utils.toHex(newNetwork.chainId),
        chainName: newNetwork.name,
        nativeCurrency: newNetwork.nativeCurrency,
        rpcUrls: newNetwork.rpc,
        blockExplorerUrls: newNetwork.explorers.map(function (n) { return n.url; }),
    };
};
var initConnection = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        setState({ connectionStatus: utils_2.STATUS.CONNECTING });
        if (!instance) {
            setState({ connectionError: utils_2.errorCodes.PROVIDER_MISSING });
            return [2 /*return*/, Promise.reject($state.connectionError)];
        }
        return [2 /*return*/, requestConnection().then(function () { return __awaiter(void 0, void 0, void 0, function () {
                var accounts;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, instance.eth.getAccounts()];
                        case 1:
                            accounts = _a.sent();
                            setState({ accounts: accounts });
                            return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
var requestConnection = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, requestAddEthereumChain(exports.network).catch(function (err) {
                    if (err.code !== 4902) {
                        if (parseInt($state.chainId) !== parseInt(exports.chainId)) {
                            setState({ connectionError: utils_2.errorCodes.WRONG_CHAIN });
                            return Promise.reject($state.connectionError);
                        }
                    }
                })];
            case 1:
                _a.sent();
                return [4 /*yield*/, getChainId(instance)];
            case 2:
                _a.sent();
                if (parseInt($state.chainId) === parseInt(exports.chainId)) {
                    setState({ connectionError: "" });
                    if (cjs_2.isMobile()) {
                        return [2 /*return*/, requestAccountInfo().catch(rejectPermissionRequest)];
                    }
                    else {
                        return [2 /*return*/, requestPermissions()
                                .then(function () { return requestAccountInfo(); })
                                .catch(rejectPermissionRequest)];
                    }
                }
                else {
                    setState({ connectionError: utils_2.errorCodes.WRONG_CHAIN });
                    return [2 /*return*/, Promise.reject($state.connectionError)];
                }
                return [2 /*return*/];
        }
    });
}); };
var signatureSign = function (address, nonce) { return __awaiter(void 0, void 0, void 0, function () {
    var signature, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, instance.eth.personal.sign(utils_2.signatureMessage.replace("%nonce%", nonce), address, "")];
            case 1:
                signature = _a.sent();
                setState({ connectionError: "" });
                return [2 /*return*/, { signature: signature, address: address }];
            case 2:
                error_2 = _a.sent();
                setState({ connectionError: utils_2.errorCodes.SIGNATURE_DENIED });
                return [2 /*return*/, Promise.reject($state.connectionError)];
            case 3: return [2 /*return*/];
        }
    });
}); };
var clearConnection = function () {
    return setState(__assign(__assign({}, initialState), { connectionStatus: utils_2.STATUS.ACTIVE }));
};
svelte_2.setContext("metamaskConnector", {
    state: state,
    initConnection: initConnection,
    clearConnection: clearConnection,
    requestAddEthereumChain: requestAddEthereumChain,
    signatureSign: signatureSign,
    errorCodes: utils_2.errorCodes,
    statuses: utils_2.STATUS,
});
</script>

<slot switchChain={requestAddEthereumChain} state={$state} />
