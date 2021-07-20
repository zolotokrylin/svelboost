<script lang="ts">
    import Delimiter from "./delimiter.svelte";
    import { chevronRight } from "../Icons/solid";
    import BreadcrumbItem from "./Item/index.svelte";

    type Item = {
        name: string;
        href?: string;
    };

    let className: string = undefined;
    export { className as class };

    export let items: Item[];
</script>

<div class="breadcrumb {className}">
    {#each items as item, i}
        <BreadcrumbItem item={item} />
        {#if i < items.length - 1}
            <Delimiter icon={chevronRight} />
        {/if}
    {/each}
</div>

<style lang="sass" src="./style.sass">

</style>
