<script lang="ts">
    type Status = "warning" | "error" | "success";

    export let status: Status;
    export let label: string;

    let className: string;
    export { className as class };
</script>

<template lang="pug" src="./template.pug" />

<style lang="sass" src="./style.sass">

</style>
