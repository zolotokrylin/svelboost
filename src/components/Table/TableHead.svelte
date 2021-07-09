<script lang="ts">
    let className: string = "";
    /**
     * TableHead class
     */
    export { className as class };
</script>

<thead class="table-head {className}">
    <slot />
</thead>
