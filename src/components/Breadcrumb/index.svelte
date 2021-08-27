<script context="module" lang="ts">
    export type Item = {
        name: string;
        href?: string;
    };
</script>

<script lang="ts">
    import Delimiter from "./delimiter.svelte";
    import { chevronRight } from "../Icons/solid";
    import BreadcrumbItem from "./Item/index.svelte";

    let className: string = undefined;
    export { className as class };

    export let items: Item[];
    export let progressStep: number = 0;
    export let maxWidth: number = undefined;
    export let icon: any = chevronRight;

    let applyStyle = (width: number) => {
        if (width === undefined) {
            return;
        }
        return `max-width: ${width}px`;
    };
</script>

<div class="breadcrumb {className}" style={applyStyle(maxWidth)}>
    {#each items as item, i}
        <BreadcrumbItem
            item={item}
            isActive={progressStep > i}
            withMaxWidth={maxWidth && i === items.length - 1}
        />
        {#if i < items.length - 1}
            <Delimiter icon={icon} />
        {/if}
    {/each}
</div>

<style lang="sass" src="./style.sass">

</style>
