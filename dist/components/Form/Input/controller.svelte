<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.name = void 0;
var svelte_1 = require("svelte");
var utils_1 = require("../../utils");
;
;
var formValues = svelte_2.getContext("formValues");
var formErrors = svelte_2.getContext("formErrors");
var formTouched = svelte_2.getContext("formTouched");
var options = svelte_2.getContext("formOptions");
$: value = utils_2.getIn($formValues, exports.name);
$: touched = utils_2.getIn($formTouched, exports.name);
$: error = utils_2.getIn($formErrors, exports.name);
$: hasError = touched && error;
function handleInput(ev) {
    if (ev.target.value.length > 0) {
        options.setFieldTouched(exports.name, true);
    }
    return options.handleInput(ev);
}
</script>

<slot
    value={value}
    touched={touched}
    error={error}
    hasError={hasError}
    handleInput={handleInput}
    context={options}
    props={{
        value,
        hasError,
        touched,
        error,
        context: options,
        handleInput,
    }}
/>
