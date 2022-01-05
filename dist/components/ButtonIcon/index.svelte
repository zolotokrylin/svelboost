<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class = exports.withBorder = exports.disabled = exports.getRef = exports.pointerNone = exports.icon = exports.onClick = void 0;
var index_svelte_1 = require("../Icon/index.svelte");
var onClick = function () { };
exports.onClick = onClick;
exports.pointerNone = false;
// Used for control DOM element from outside
var ref;
function getRef() {
    return ref;
}
exports.getRef = getRef;
exports.disabled = false;
exports.withBorder = false;
var className;
exports.class = className;
$: withBorderClass = exports.withBorder ? "btn-icon--withBorder" : "";
</script>

<svelte:options accessors />

<button class="{['btn-icon', withBorderClass, className].join(' ')}" type="button" bind:this="{ref}" class:pointers-none="{pointerNone}" disabled="{disabled}" on:click="{onClick}"><Icon icon="{icon}" width="{18}" height="{18}" colorInherit></Icon></button>

<style lang="sass" src="./style.sass">@-webkit-keyframes rotate-circle {
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
.btn-icon {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border: 0;
  padding: 8px;
  background-color: transparent;
  border-radius: 12px;
  filter: brightness(1);
  transition: filter 0.3s ease-in-out;
  color: #303543;
  color: var(--f1, #303543);
  background-color: #fff;
  background-color: var(--l1, #fff);
}
.btn-icon.pointers-none {
  pointer-events: none;
}
.btn-icon--withBorder {
  padding: 7px;
  border-width: 1px;
  border-style: solid;
  border-color: #e8e8ea;
  border-color: var(--l4, #e8e8ea);
}
.btn-icon:not(:disabled).active, .btn-icon:not(:disabled):hover, .btn-icon:not(:disabled):focus {
  filter: brightness(0.95);
}
.btn-icon:not(:disabled):active {
  filter: brightness(0.9);
}</style>
