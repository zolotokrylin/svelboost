<style lang="sass" global>
    @import "src/components/common-styles/utils"

    .main
        padding: 30px
        @include createVariables('light')
        @include var(background-color, 'l1')

        &.dark
            @include createVariables('dark')
</style>

<div class="main {theme}">
    <slot />
</div>

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
