<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class = void 0;
var className = "";
exports.class = className;
</script>

<tbody class="table-body {className}">
    <slot />
</tbody>

<style lang="sass">.table-body :global(tr:last-of-type) {
  border-bottom-width: 0;
}</style>
