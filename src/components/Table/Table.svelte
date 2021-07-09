<script lang="ts">
    import { setContext } from "svelte";
    import type { Ctx } from "./types";

    /**
     * Table should be responsive?
     */
    export let responsive: boolean = true;

    /**
     * Table items cells width
     */
    export let cells: string[];

    /**
     * Table min width
     */
    export let minWidth: number = 870;
    let tableStyle = responsive ? `min-width: ${minWidth}px` : "";

    /**
     * Table class
     */
    let className: string = "";
    export { className as class };

    setContext<Ctx>("tableCtx", { cells });
</script>

<div class="table-wrapper" class:table-wrapper--responsive={responsive}>
    <table style={tableStyle} class="table {className}">
        <slot />
    </table>
</div>

<style lang="sass" src="./table.sass">

</style>
