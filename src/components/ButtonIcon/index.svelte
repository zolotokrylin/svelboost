<script lang="ts">
    import Icon from "../Icon/index.svelte";

    export let onClick: () => void;
    export let icon: any;

    export let ref: HTMLButtonElement;

    export let disabled: boolean = false;
    export let withBorder: boolean = false;

    let className: string;
    export { className as class };

    $: withBorderClass = withBorder ? "btn-icon--withBorder" : "";
</script>

<template lang="pug" src="./template.pug" />

<style lang="sass" src="./style.sass">

</style>
