<script lang="ts">
    import Heading from "../Heading/index.svelte";
    import CircularLoading from "../CircularLoading/index.svelte";

    import failedTxImage from "./failed-tx.png";
    import successTxImage from "./success-tx.png";

    type Tx = {
        text: string;
        description: string;
    };

    enum Status {
        STARTING = 0,
        PENDING = 1,
        SUCCESS = 2,
        FAILURE = 3,
    }

    export let pendingTx: Tx;
    export let successTx: Tx;
    export let failedTx: Tx;
    export let status: Status;
</script>

<template lang="pug" src="./template.pug" />

<style lang="sass" src="./style.sass">

</style>
