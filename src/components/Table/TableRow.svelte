<script lang="ts">
    let className: string = "";
    /**
     * TableRow class
     */
    export { className as class };
    
    export let hoverable: boolean = false;
    
    /**
     * On Click Table Row
     */
    export let onClick: () => void = () => {};

    $: hoverableClass = hoverable ? "table-row--hoverable" : "";
</script>

<tr on:click="{onClick}" class="table-row {className} {hoverableClass}">
    <slot />
</tr>

<style lang="sass" src="./table-row.sass">

</style>
