<script lang="ts">
    import { getContext } from "svelte";
    import Heading from "../Heading/index.svelte";
    import Button from "../Button/index.svelte";
    import CircularLoading from "../CircularLoading/index.svelte";
    import { errorCodes } from "../WalletProvider/utils";

    export let init: () => Promise<void>;
    export let connect: () => Promise<void>;
    export let onDismiss: () => void;

    export let error: string;
    export let appName: string;
</script>

<template lang="pug" src="./template.pug" />

<style lang="sass" src="./style.sass">

</style>
