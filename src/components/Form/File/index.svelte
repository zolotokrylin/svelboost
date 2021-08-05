<script context="module">
    function getFilesFromDropEvent({ dataTransfer: { files, items } }) {
        return files.length
            ? [...files]
            : items
                  .filter(({ kind }) => kind === "file")
                  .map(({ getAsFile }) => getAsFile());
    }

    function getFilesFromInputEvent({ target }) {
        const files = target.files ? [...target.files] : [];
        target.value = "";
        return files;
    }
</script>

<script lang="ts">
    // @ts-check
    import Controller from "./controller.svelte";
    import FormGroup from "../FormGroup/index.svelte";
    import ButtonIcon from "../../ButtonIcon/index.svelte";
    import CircularLoading from "../../CircularLoading/index.svelte";
    import { folder, x } from "../../Icons/solid";
    import Label from "../Label/index.svelte";
    import ErrorMessage from "../ErrorMessage/index.svelte";

    export let name: any;
    export let placeholder: string;
    export let isLoading: boolean;
    export let label: string = undefined;
    export let fileRequirement: string = undefined;

    let className: string = "";
    export { className as class };
    export let accept: string = "image/png, image/jpeg";
    export let disabled: boolean = false;
    export let progress: number = 0;

    let addClass = (className: string, condition: boolean): string =>
        condition ? className : "";
</script>

<template lang="pug" src="./template.pug" />

<style lang="sass" src="./style.sass">

</style>
