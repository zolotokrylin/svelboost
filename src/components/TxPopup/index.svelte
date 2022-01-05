<script context="module" lang="ts">
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
</script>

<script lang="ts">
    import { PopupHeader, PopupBody } from "../Popup";
    import Button from "../Button/index.svelte";
    import CircularLoading from "../CircularLoading/index.svelte";

    import failedTxImage from "./failed-tx.png";
    import successTxImage from "./success-tx.png";

    export let pendingTx: Tx;
    export let successTx: Tx;
    export let failedTx: Tx;
    export let status: Status;

    const confirmTx: Tx = {
        text: "Confirm transaction",
        description: "Confirm transaction in your wallet",
    };

    export let btnLabel: string = undefined;
    export let btnOnClick: string = undefined;

    function getPopupHeaderProps(status: Status) {
        switch (status) {
            case Status.STARTING:
                return confirmTx;
            case Status.PENDING:
                return pendingTx;
            case Status.SUCCESS:
                return successTx;
            case Status.FAILURE:
                return failedTx;
        }
    }
</script>

<template lang="pug" src="./template.pug" />

<style lang="sass" src="./style.sass">

</style>
