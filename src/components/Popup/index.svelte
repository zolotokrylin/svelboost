<script lang="ts">
    import { portal, clickOutside } from "../../dom-actions";
    import Breadcrumb from "../Breadcrumb/index.svelte";
    import type { Item } from "../Breadcrumb/index.svelte";

    export let onClickedOutside: any;
    export let isShown: boolean;

    export let steps: Item[] = undefined;
    export let currentStep: number = undefined;

    let className: string = "";
    export { className as class };
</script>

<template lang="pug" src="./template.pug" />

<style lang="sass" src="./style.sass">

</style>
