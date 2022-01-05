<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class = exports.minWidth = exports.cells = exports.responsive = void 0;
var svelte_1 = require("svelte");
;
/**
 * Table should be responsive?
 */
exports.responsive = true;
/**
 * Table min width
 */
exports.minWidth = 870;
var tableStyle = exports.responsive ? "min-width: " + exports.minWidth + "px" : "";
/**
 * Table class
 */
var className = "";
exports.class = className;
svelte_2.setContext("tableCtx", { cells: exports.cells });
</script>

<div class="table-wrapper" class:table-wrapper--responsive={responsive}>
    <table style={tableStyle} class="table {className}">
        <slot />
    </table>
</div>

<style lang="sass" src="./table.sass">@-webkit-keyframes rotate-circle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes rotate-circle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.table {
  display: table;
  width: 100%;
  max-width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  text-indent: 0;
  background-color: transparent;
}
.table-wrapper {
  position: relative;
  display: block;
  width: 100%;
  border-radius: 10px;
  border-width: 1px;
  border-style: solid;
  border-color: #e8e8ea;
  border-color: var(--l4, #e8e8ea);
}
.table-wrapper--responsive {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}</style>
