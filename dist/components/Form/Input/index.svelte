<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withSlot = exports.disabled = exports.autofocus = exports.label = exports.placeholder = exports.name = exports.type = void 0;
var controller_svelte_1 = require("./controller.svelte");
var index_svelte_1 = require("../FormGroup/index.svelte");
var index_svelte_2 = require("../Label/index.svelte");
var index_svelte_3 = require("../ErrorMessage/index.svelte");
var dom_actions_1 = require("../../../dom-actions");
exports.type = "text";
exports.autofocus = false;
exports.disabled = false;
exports.withSlot = false;
</script>

<Controller name="{name}" let:hasError let:value let:context let:handleInput><FormGroup class="input-field"><Label name="{name}" label="{label}"></Label><ErrorMessage name="{name}"></ErrorMessage><input class:with-error="{hasError}" use:focus="{{autofocus}}" id="{name}_field_input" name="{name}" placeholder="{placeholder}" type="{type}" value="{value}" disabled="{disabled}" on:blur="{context.handleBlur}" on:focus="{context.handleFocus}" on:input="{handleInput}">{#if withSlot}<slot></slot>{/if}</FormGroup></Controller>

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
input {
  position: relative;
  display: block;
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 15px;
  text-align: left;
  border-radius: 10px;
  transition: box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out;
  color: #303543;
  color: var(--f1, #303543);
  font-size: 1rem;
  font-weight: 400;
  line-height: 18px;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 102, 255, 0);
  border-color: rgba(var(--primary-accent--rgb, #0066ff), 0);
  box-shadow: 0 0 0 1000px #f5f5f6  inset;
  box-shadow: 0 0 0 1000px var(--l2, #f5f5f6)  inset;
}
input::-webkit-input-placeholder {
  font: inherit;
  opacity: 1;
  color: #a9adb6;
  color: var(--f4, #a9adb6);
}

input:-moz-placeholder {
  font: inherit;
  opacity: 1;
  color: #a9adb6;
  color: var(--f4, #a9adb6);
}

input::-moz-placeholder {
  font: inherit;
  opacity: 1;
  color: #a9adb6;
  color: var(--f4, #a9adb6);
}

input:-ms-input-placeholder {
  font: inherit;
  opacity: 1;
  color: #a9adb6;
  color: var(--f4, #a9adb6);
}

input:hover {
  box-shadow: 0 0 0 1000px #efeff0  inset;
  box-shadow: 0 0 0 1000px var(--l3, #efeff0)  inset;
}
input.with-error {
  border-color: #ff0222;
  border-color: var(--alert, #ff0222);
}
input:focus, input:focus:hover {
  border-color: #0066ff;
  border-color: var(--primary-accent, #0066ff);
  box-shadow: 0 0 0 1000px #f5f5f6  inset;
  box-shadow: 0 0 0 1000px var(--l2, #f5f5f6)  inset;
}
input:disabled {
  cursor: not-allowed;
}
input:-webkit-autofill {
  -webkit-text-fill-color: #303543;
  -webkit-text-fill-color: var(--f1, #303543);
}
input:-webkit-autofill:hover {
  -webkit-text-fill-color: #303543;
  -webkit-text-fill-color: var(--f1, #303543);
}</style>
