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
    export let maxWidth: number = undefined;

    let applyStyle = (width: number) => {
        if (width === undefined) {
            return;
        }
        return `max-width: ${width}px`
    }
</script>

<div class="breadcrumb {className}" style="{applyStyle(maxWidth)}">
    {#each items as item, i}
        <BreadcrumbItem 
            item={item}
            withMaxWidth={maxWidth && i === items.length - 1}
        />
        {#if i < items.length - 1}
            <Delimiter icon={chevronRight} />
        {/if}
    {/each}
</div>

<style lang="sass" src="./style.sass">

</style>
