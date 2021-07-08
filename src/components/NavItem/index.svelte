<script lang="ts">
    import Icon from "../Icon/index.svelte";

    export let label: string;
    export let icon: any;
    export let href: string;
    export let active: boolean;

    let className: string;
    export { className as class };
</script>

<template lang="pug" src="./template.pug" />

<style lang="sass" src="./style.sass">

</style>
