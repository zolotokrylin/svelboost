<script context="module" lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Type = exports.Size = void 0;
var Size;
(function (Size) {
    Size["LARGE"] = "large";
    Size["DEFAULT"] = "default";
    Size["SMALL"] = "small";
})(Size = exports.Size || (exports.Size = {}));
var Type;
(function (Type) {
    Type["PRIMARY"] = "primary";
    Type["SECONDARY"] = "secondary";
    Type["ALTERNATE"] = "alternate";
})(Type = exports.Type || (exports.Type = {}));
</script>

<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRef = exports.class = exports.size = exports.type = exports.isSubmitBtn = exports.disabled = exports.imageAlt = exports.imageSrc = exports.icon = exports.onClick = exports.rel = exports.label = exports.href = void 0;
var index_svelte_1 = require("../Icon/index.svelte");
exports.href = undefined;
exports.rel = undefined;
var onClick = function () { };
exports.onClick = onClick;
exports.icon = undefined;
exports.imageSrc = undefined;
exports.imageAlt = undefined;
exports.disabled = false;
exports.isSubmitBtn = false;
exports.type = Type.PRIMARY;
exports.size = Size.DEFAULT;
var className = "";
exports.class = className;
// Used for control DOM element from outside
var ref;
function getRef() {
    return ref;
}
exports.getRef = getRef;
$: typeClass = "btn--" + exports.type;
$: sizeClass = "btn--" + exports.size;
$: btnType = exports.isSubmitBtn ? "submit" : "button";
</script>

{#if href}<a class="{['btn', typeClass, sizeClass, className].join(' ')}" {...$$restProps} bind:this="{ref}" disabled="{disabled}" href="{href}" rel="{rel}">{#if icon}<Icon icon="{icon}" width="{15}" height="{15}" colorInherit isOutlined="{$$restProps.isOutlined}"></Icon>{:else if imageSrc}<img loading="lazy" src="{imageSrc}" alt="{imageAlt}">{/if}{#if label}{label}{/if}<slot></slot></a>{:else}<button class="{['btn', typeClass, sizeClass, className].join(' ')}" {...$$restProps} bind:this="{ref}" disabled="{disabled}" type="{btnType}" on:click="{onClick}">{#if icon}<Icon icon="{icon}" width="{15}" height="{15}" colorInherit isOutlined="{$$restProps.isOutlined}"></Icon>{:else if imageSrc}<img loading="lazy" src="{imageSrc}" alt="{imageAlt}">{/if}{#if label}{label}{/if}<slot></slot></button>{/if}

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
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border: 0;
  background-color: transparent;
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1;
}
.btn:is(a) {
  text-decoration: none;
}
.btn img,
.btn :global(svg) {
  position: relative;
  margin-right: 8px;
  width: 15px;
  height: 15px;
  vertical-align: top;
  display: inline-block;
}
.btn:disabled {
  cursor: not-allowed;
  color: #a9adb6;
  color: var(--f4, #a9adb6);
}
.btn--default {
  padding: 16px;
}
.btn--default.btn--alternate {
  padding: 15px;
}
.btn--small {
  padding: 8px 10px;
}
.btn--small.btn--alternate {
  padding: 7px 9px;
}
.btn--primary {
  color: #fff;
  color: var(--l1, #fff);
  background-color: #0066ff;
  background-color: var(--primary-accent, #0066ff);
}
.btn--primary:disabled {
  background-color: #dfdfe1;
  background-color: var(--l6, #dfdfe1);
}
.btn--secondary {
  color: #fff;
  color: var(--l1, #fff);
  background-color: #454545;
  background-color: var(--secondary-accent, #454545);
}
.btn--secondary:disabled {
  background-color: #dfdfe1;
  background-color: var(--l6, #dfdfe1);
}
.btn--alternate {
  border-radius: 12px;
  color: #303543;
  color: var(--f1, #303543);
  background-color: #fff;
  background-color: var(--l1, #fff);
  border-width: 1px;
  border-style: solid;
  border-color: #dfdfe1;
  border-color: var(--l6, #dfdfe1);
}
.btn--primary, .btn--secondary, .btn--alternate {
  transition: filter 0.3s ease-in-out, color 0.3s ease-in-out;
  border-radius: 12px;
  filter: brightness(1);
}
.btn--primary:not(:disabled).active, .btn--primary:not(:disabled):hover, .btn--primary:not(:disabled):focus, .btn--secondary:not(:disabled).active, .btn--secondary:not(:disabled):hover, .btn--secondary:not(:disabled):focus {
  filter: brightness(1.5);
}
.btn--primary:not(:disabled):active, .btn--secondary:not(:disabled):active {
  filter: brightness(0.85);
}
.btn--alternate:not(:disabled).active, .btn--alternate:not(:disabled):hover, .btn--alternate:not(:disabled):focus {
  filter: brightness(0.95);
}
.btn--alternate:not(:disabled):active {
  filter: brightness(0.9);
}</style>
