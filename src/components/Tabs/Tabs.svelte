<script lang="ts">
    import { writable } from "svelte/store";

    import TabHead from "./TabHead.svelte";
    import TabItem from "./TabItem.svelte";

    type Item = {
        label: string;
        href: string;
        onClick?: () => void;
    };

    export let defaultActiveItemIndex: number = 0;
    export let items: Item[];
    export let maxWidth: number = undefined;

    let className: string = "";
    export { className as class };

    let tab = writable<number>(defaultActiveItemIndex);
    $: $tab = defaultActiveItemIndex;

    let handleTabClick = (index: number, clbk: any) => {
        tab.set(index);
        if (clbk) clbk();
    };
</script>

<div class="tabs {className}">
    <TabHead maxWidth={maxWidth}>
        {#each items as item, index}
            <TabItem
                {...$$restProps}
                label={item.label}
                href={item.href}
                onClick={() => handleTabClick(index, item.onClick)}
                isActive={$tab === index}
            />
        {/each}
    </TabHead>
</div>

<style lang="sass" src="./tabs.sass">

</style>
