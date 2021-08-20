<script lang="ts">
    import Input from "../Input/index.svelte";
    import Button from "../../Button/index.svelte";

    type Coin = {
        symbol: string;
        logoUrl: string;
    };

    export let coin: Coin;
</script>

<template lang="pug" src="./template.pug" />

<style lang="sass" src="./style.sass">

</style>
