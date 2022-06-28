<script lang="ts">
    import Icon from "../Icon/index.svelte";

    export let label: string;
    export let icon: any = undefined;
    export let href: string;
    export let active: boolean;

    export let badge: string = undefined;
    export let isDisabled: boolean = false;
    export let disabledBackground: boolean = false;

    let className: string = "";
    export { className as class };
</script>

<template lang="pug" src="./template.pug" />

<style lang="sass" src="./style.sass">

</style>
