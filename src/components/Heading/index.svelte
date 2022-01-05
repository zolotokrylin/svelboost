<script context="module" lang="ts">
    export enum Level {
        H1 = 1,
        H2,
        H3,
        H4,
        H5,
        H6,
    }
</script>

<script lang="ts">
    export let level: Level = Level.H1;

    let className: string = "";
    export { className as class };

    export let isHoverable: boolean = false;
    export let isDisplay: boolean = false;
    export let asLink: boolean = false;
    export let href: string = undefined;

    $: hoverableClass = isHoverable ? "heading--isHoverable" : "";
    $: displayClass = isDisplay ? "heading--isDisplay" : "";
</script>

<template lang="pug" src="./template.pug" />

<style lang="sass" src="./style.sass">

</style>
