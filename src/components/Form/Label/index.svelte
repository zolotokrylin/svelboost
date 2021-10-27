<script lang="ts">
    // @ts-check
    export let name: string;
    export let label: string;
</script>

{#if label}
    <label class="input-label" for="{name}_field_input">
        {label}
    </label>
{/if}

<style lang="sass" src="./style.sass">

</style>
