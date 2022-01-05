<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class = exports.isDisabled = exports.badge = exports.active = exports.href = exports.icon = exports.label = void 0;
var index_svelte_1 = require("../Icon/index.svelte");
exports.icon = undefined;
exports.badge = undefined;
exports.isDisabled = false;
var className = "";
exports.class = className;
</script>

<a class="nav-item {className}" {...$$restProps} href="{href}" class:nav-item-disabled="{isDisabled}" class:nav-item-active="{active}">{#if icon}<Icon icon="{icon}" isOutlined="{$$restProps.isOutlined}" width="{15}" height="{15}" colorInherit></Icon>{/if}<span>{ label }</span>{#if badge}<span class="badge">{ badge }</span>{/if}</a>

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
.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: flex-start;
  border-radius: 10px;
  background-color: transparent;
  padding: 12px 16px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  color: #53596b;
  color: var(--f3, #53596b);
  background-color: #fff;
  background-color: var(--l1, #fff);
}
.nav-item :global(svg) {
  margin-right: 0.5rem;
}
.nav-item span {
  position: relative;
  display: inline-flex;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.1;
}
.nav-item .badge {
  margin-left: 0.5rem;
  top: 1px;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1;
  color: #a9adb6;
  color: var(--f4, #a9adb6);
}
.nav-item-disabled {
  pointer-events: none;
}
.nav-item:hover:not(.nav-item-disabled), .nav-item:active:not(.nav-item-disabled) {
  color: #0066ff;
  color: var(--primary-accent, #0066ff);
  background-color: #f5f5f6;
  background-color: var(--l2, #f5f5f6);
}
.nav-item-active {
  color: #fff;
  color: var(--l1, #fff);
  background-color: #0066ff;
  background-color: var(--primary-accent, #0066ff);
}</style>
