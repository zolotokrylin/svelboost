<script context="module">
    export const store = writable({
        backgrounds: {
            value: "dark",
        },
    });
</script>

<script lang="ts">
    import { writable } from "svelte/store";

    $: theme = $store?.backgrounds?.value || "dark";
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin="anonymous"
    />
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
    />
</svelte:head>

<div class="main {theme}">
    <slot />
    <div id="layers" />
</div>

<style lang="sass" global>
    @import "src/components/common-styles/common"

    *
        font-family: Inter

    .main
        padding: 30px
        @include createVariables('light')
        @include var(background-color, 'l1')

        &.dark
            @include createVariables('dark')
</style>
