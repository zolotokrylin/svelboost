<script lang="ts">
    export let item: {
        name: string;
        href?: string;
    };
    export let isActive: boolean = item?.href?.length > 0;
    export let withMaxWidth: boolean = false;
</script>

<template lang="pug" src="./template.pug" />

<style lang="sass" src="./style.sass">

</style>
