<script lang="ts">
    let className: string = "";
    /**
     * TableBody class
     */
    export { className as class };
</script>

<tbody class="table-body {className}">
    <slot />
</tbody>

<style lang="sass">
    .table-body :global(tr:last-of-type)
        border-bottom-width: 0
</style>
