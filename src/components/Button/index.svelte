<script lang="ts">
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

    export let href: string;
    export let label: string;
    export let rel: string;
    export let onClick: () => void;

    export let icon: string = undefined;
    export let imageSrc: string = undefined;
    export let imageAlt: string = undefined;

    export let disabled: boolean = false;
    export let isSubmitBtn: boolean = false;
    export let type: Type = Type.PRIMARY;
    export let size: Size = Size.DEFAULT;

    $: typeClass = `btn--${type}`;
    $: sizeClass = `btn--${size}`;
    $: btnType = isSubmitBtn ? "submit" : "button";
</script>

<template lang="pug" src="./template.pug" />

<style lang="sass" src="./style.sass">

</style>
