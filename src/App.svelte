<style lang="sass" global>
	@import "components/common-styles/common"
</style>

<main>
    <h1>Hello {name}!</h1>
    <p>
        Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
        how to build Svelte apps.
    </p>
</main>

<script lang="ts">
    export let name: string;
</script>
