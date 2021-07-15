<script lang="ts">
    // @ts-check
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import { fade } from "svelte/transition";

    export let name: string;

    let className: string = "";
    export { className as class };

    let formTouched: Writable<Object> = getContext("formTouched");
    let formErrors: Writable<Object> = getContext("formErrors");

    $: touched = $formTouched[name];
    $: error = $formErrors[name];
    $: hasError = touched && error;
</script>

{#if hasError}
    <span class="error-message {className}" transition:fade|local>
        {error}</span
    >
{/if}

<style lang="sass" src="./style.sass">

</style>
