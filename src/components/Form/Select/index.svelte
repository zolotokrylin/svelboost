<script lang="ts">
    // @ts-check
    import Label from "../Label/index.svelte";
    import FormGroup from "../FormGroup/index.svelte";
    import ErrorMessage from "../ErrorMessage/index.svelte";
    import { Selector } from "../../Selector";
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import type { BagState } from "../types";

    export let name: any;
    export let label: string;
    export let placeholder: string;
    export let options: any[];
    export let disabled: boolean = false;

    let className: string = "";
    export { className as class };

    let formValues: Writable<Object> = getContext("formValues");
    let formErrors: Writable<Object> = getContext("formErrors");
    let formTouched: Writable<Object> = getContext("formTouched");
    let contextOptions: BagState = getContext("formOptions");

    $: value = $formValues[name];
    $: touched = $formTouched[name];
    $: error = $formErrors[name];
    $: hasError = touched && error;

    let handleOnChange = (option: Object) => {
        contextOptions.setFieldTouched(name, true, false);
        contextOptions.setFieldValue(name, option);
    };
</script>

<template lang="pug" src="./template.pug" />

<style lang="sass" src="./style.sass">

</style>
