<script lang="ts">
    import { writable } from "svelte/store";
    import TabsHead from "./TabsHead.svelte";
    import TabItem from "./TabItem.svelte";

    type Item = {
        label: string;
        href: string;
        onClick?: () => void;
    };

    export let defaultActive: string = "0";
    export let skipBorder: boolean = false;
    export let items: Item[];

    let className: string = "";
    export { className as class };

    let tab = writable<string>(defaultActive);
    $: $tab = defaultActive;

    let handleTabClick = (index: number, clbk: any) => {
        tab.set(index.toString());
        if (clbk) clbk();
    };
</script>

<div class="tabs {className}">
    <TabsHead skipBorder={skipBorder}>
        {#each items as item, index}
            <TabItem
                {...$$restProps}
                label={item.label}
                href={item.href}
                onClick={() => handleTabClick(index, item.onClick)}
                isActive={$tab === index.toString()}
            />
        {/each}
    </TabsHead>
</div>
