<script lang="ts">
    // @ts-check
    import Controller from "./controller.svelte";
    import FormGroup from "../FormGroup/index.svelte";
    import Label from "../Label/index.svelte";
    import ErrorMessage from "../ErrorMessage/index.svelte";
    import { focus } from "../../../dom-actions";

    type InputType = "text" | "password" | "email";

    export let type: InputType = "text";
    export let name: any;
    export let placeholder: string;
    export let label: string | undefined;

    export let autofocus: boolean = false;
    export let disabled: boolean = false;
    export let withSlot: boolean = false;
</script>

<template lang="pug" src="./template.pug" />

<style lang="sass" src="./style.sass">

</style>
