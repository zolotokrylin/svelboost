<script lang="ts">
    import Icon from "../Icon/index.svelte";

    export let onClick: () => void = () => {};
    export let icon: any;

    export let pointerNone: boolean = false;

    // Used for control DOM element from outside
    export let forwardRef: HTMLButtonElement = null;
    export let forwardAction: any = () => {};

    export function getRef() {
        return forwardRef;
    }

    export let disabled: boolean = false;
    export let withBorder: boolean = false;

    let className: string;
    export { className as class };

    $: withBorderClass = withBorder ? "btn-icon--withBorder" : "";
</script>

<svelte:options accessors />

<template lang="pug" src="./template.pug" />

<style lang="sass" src="./style.sass">

</style>
