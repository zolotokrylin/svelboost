<script lang="ts">
    import type { Item } from "./types";

    import Title from "./Blocks/Title/index.svelte";
    import Cover from "./Blocks/Cover/index.svelte";
    import Content from "./Blocks/Content/index.svelte";
    import { parseThreadCover, getFirstParagraph } from "./utils";

    export let item: Item = undefined;
    export let loading: boolean = false;

    let body: any;
    $: {
        try {
            body = JSON.parse(item?.body);
        } catch (error) {
            body = {};
        }
    }

    $: content = getFirstParagraph(body?.blocks || []);
    $: [cover, _] = parseThreadCover(body?.block || []);
</script>

<template lang="pug" src="./item.pug" />

<style lang="sass" src="./style.sass">

</style>
