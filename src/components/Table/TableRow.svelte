<script lang="ts">
    let className: string = "";
    /**
     * TableRow class
     */
    export { className as class };
</script>

<tr class="table-row {className}">
    <slot />
</tr>

<style lang="sass" src="./table-row.sass">

</style>
