<script context="module" lang="ts">
    enum Size {
        LARGE = "large",
        DEFAULT = "default",
        SMALL = "small",
    }

    enum Type {
        PRIMARY = "primary",
        SECONDARY = "secondary",
        ALTERNATE = "alternate",
    }
</script>

<script lang="ts">
    import Icon from "../Icon/index.svelte";

    export let href: string = undefined;
    export let label: string;
    export let rel: string = undefined;
    export let onClick: () => void = () => {};

    export let icon: any = undefined;
    export let imageSrc: string = undefined;
    export let imageAlt: string = undefined;

    export let disabled: boolean = false;
    export let isSubmitBtn: boolean = false;
    export let type: Type = Type.PRIMARY;
    export let size: Size = Size.DEFAULT;

    let className: string = "";
    export { className as class };

    // Used for control DOM element from outside
    export let forwardRef: HTMLButtonElement = undefined;
    export let forwardAction: any = () => {};

    export function getRef() {
        return forwardRef;
    }

    $: typeClass = `btn--${type}`;
    $: sizeClass = `btn--${size}`;
    $: btnType = isSubmitBtn ? "submit" : "button";
</script>

<template lang="pug" src="./template.pug" />

<style lang="sass" src="./style.sass">

</style>
