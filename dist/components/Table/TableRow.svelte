<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onClick = exports.hoverable = exports.class = void 0;
var className = "";
exports.class = className;
exports.hoverable = false;
/**
 * On Click Table Row
 */
var onClick = function () { };
exports.onClick = onClick;
$: hoverableClass = exports.hoverable ? "table-row--hoverable" : "";
</script>

<tr on:click="{onClick}" class="table-row {className} {hoverableClass}">
    <slot />
</tr>

<style lang="sass" src="./table-row.sass">@-webkit-keyframes rotate-circle {
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
.table-row {
  position: relative;
  background-color: transparent;
  border: 0;
  line-height: 1;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #e8e8ea;
  border-bottom-color: var(--l4, #e8e8ea);
}
.table-row--hoverable {
  transition: background-color 0.3s ease-in-out;
  cursor: pointer;
  background-color: #fff;
  background-color: var(--l1, #fff);
}
.table-row--hoverable:hover {
  background-color: #f5f5f6;
  background-color: var(--l2, #f5f5f6);
}
.table-row--hoverable:active {
  background-color: #efeff0;
  background-color: var(--l3, #efeff0);
}</style>
