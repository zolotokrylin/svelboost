<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class = exports.name = void 0;
var utils_1 = require("../../utils");
var svelte_1 = require("svelte");
;
var transition_1 = require("svelte/transition");
var className = "";
exports.class = className;
var formTouched = svelte_2.getContext("formTouched");
var formErrors = svelte_2.getContext("formErrors");
$: touched = utils_2.getIn($formTouched, exports.name);
$: error = utils_2.getIn($formErrors, exports.name);
$: hasError = touched && error;
</script>

{#if hasError}
    <span class="error-message {className}" transition:fade|local>
        {error}</span
    >
{/if}

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
.error-message {
  position: absolute;
  display: inline-block;
  text-align: right;
  top: 1px;
  right: 0;
  color: #ff0222;
  color: var(--alert, #ff0222);
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1;
}
.error-message.relative {
  position: relative;
  display: block;
  text-align: left;
  top: 0;
  right: 0;
  left: 0;
  margin-top: 8px;
}</style>
