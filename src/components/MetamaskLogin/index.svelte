<script lang="ts">
    import { getContext } from "svelte";
    import Heading from "../Heading/index.svelte";
    import Button from "../Button/index.svelte";
    import CircularLoading from "../CircularLoading/index.svelte";
    import { errorCodes } from "../WalletProvider/utils";
    import Icon from "../Icon/index.svelte";
    import { exclamation } from "../Icons/solid";
    import metamaskImage from "./metamask.png";

    export let init: () => Promise<void>;
    export let connect: () => Promise<void>;
    export let onDismiss: () => void;

    export let error: string;
    export let appName: string;
    export let networkName: string = "main";
    export let protocol: string = "Ethereum";
    export let switchChainUri: string =
        "https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC"; // TODO: replace it when will be an article

    let reload = () => window.location.reload();
</script>

<template lang="pug" src="./template.pug" />

<style lang="sass" src="./style.sass">

</style>
