<script lang="ts">
    import { getContext } from "svelte";
    import { objectToStyle } from "../utils";

    import type { Ctx } from "./types";

    enum Type {
        TH = "th",
        TD = "td",
    }

    /**
     * Item index
     */
    export let index: number = 0;

    /**
     * Item type
     */
    export let type: Type = Type.TD;

    /**
     * Item text
     */
    export let label: string = "";

    let { cells } = getContext<Ctx>("tableCtx");
    let getItemStyle = (index: number) => {
        return objectToStyle({
            width: cells[index],
        });
    };

    export let align: "center" | "right" | "left" = "left";

    // Used for control DOM element from outside
    export let forwardRef: HTMLTableCellElement = undefined;
    export let forwardAction: any = () => {};
</script>

{#if type === Type.TD}
    <td
        {...$$restProps}
        use:forwardAction
        bind:this={forwardRef}
        class="table-cell"
        class:table-cell--left={align === "left"}
        class:table-cell--center={align === "center"}
        class:table-cell--right={align === "right"}
        data-index={index}
        style={getItemStyle(index)}
    >
        <slot>{label}</slot>
    </td>
{:else}
    <th
        {...$$restProps}
        use:forwardAction
        bind:this={forwardRef}
        class="table-cell"
        class:table-cell--left={align === "left"}
        class:table-cell--center={align === "center"}
        class:table-cell--right={align === "right"}
        data-index={index}
        style={getItemStyle(index)}
    >
        <slot>{label}</slot>
    </th>
{/if}

<style lang="sass" src="./table-cell.sass">

</style>
