<script lang="ts">
    import { writable } from "svelte/store";
    import TabItem from "./TabItem.svelte";

    type Item = {
        label: string;
        href: string;
        onClick?: () => void;
    };

    export let defaultActiveItemIndex: number = 0;
    export let items: Item[];

    let className: string = "";
    export { className as class };

    let tab = writable<number>(defaultActiveItemIndex);
    $: tab.update(a=> defaultActiveItemIndex);

    let handleTabClick = (index: number, clbk: any) => {
        tab.set(index);
        if (clbk) clbk();
    };
</script>

<div class="tabs {className}">
    {#each items as item, index}
        <TabItem
            {...$$restProps}
            label={item.label}
            href={item.href}
            onClick={() => handleTabClick(index, item.onClick)}
            isActive={$tab === index}
        />
    {/each}
</div>

<style lang="sass" src="./tabs.sass">
</style>