<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class = exports.onChange = exports.disabled = exports.options = exports.placeholder = exports.label = exports.name = void 0;
var index_svelte_1 = require("../Label/index.svelte");
var index_svelte_2 = require("../FormGroup/index.svelte");
var index_svelte_3 = require("../ErrorMessage/index.svelte");
var Selector_1 = require("../../Selector");
var svelte_1 = require("svelte");
var utils_1 = require("../../utils");
;
;
exports.disabled = false;
exports.onChange = undefined;
var className = "";
exports.class = className;
var formValues = svelte_2.getContext("formValues");
var formErrors = svelte_2.getContext("formErrors");
var formTouched = svelte_2.getContext("formTouched");
var contextOptions = svelte_2.getContext("formOptions");
$: value = utils_2.getIn($formValues, exports.name);
$: touched = utils_2.getIn($formTouched, exports.name);
$: error = utils_2.getIn($formErrors, exports.name);
$: hasError = touched && error;
var handleOnChange = function (option) {
    if (exports.onChange) {
        exports.onChange(option);
    }
    else {
        contextOptions.setFieldTouched(exports.name, true, false);
        contextOptions.setFieldValue(exports.name, option);
    }
};
</script>

<FormGroup class="select-field"><Label name="{name}" label="{label}"></Label><ErrorMessage name="{name}"></ErrorMessage><Selector class="form-selector {hasError ? 'with-error' : ''} {className}" id="{name}_field-input" value="{value}" options="{options}" disabled="{disabled}" placeholder="{placeholder}" onChange="{handleOnChange}"><svelte:fragment slot="button" let:item><slot name="button" item="{item}"></slot></svelte:fragment><svelte:fragment slot="item" let:isActive let:isSelected let:item><slot name="item" item="{item}" isActive="{isActive}" isSelected="{isSelected}"></slot></svelte:fragment></Selector></FormGroup>

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
:global(.form-selector) {
  position: relative;
  display: block;
}

:global(.form-selector.with-error button) {
  border-color: #ff0222 !important;
  border-color: var(--alert, #ff0222) !important;
}</style>
