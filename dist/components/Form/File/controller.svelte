<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.onDrop = exports.maxSize = exports.accept = exports.name = void 0;
var svelte_1 = require("svelte");
var utils_1 = require("../../utils");
;
;
exports.accept = "image/png, image/jpeg";
exports.maxSize = 1;
var onDrop = function () { };
exports.onDrop = onDrop;
var isDragged = false;
var handleDragOver = function () { return (isDragged = true); };
var handleDragLeave = function () { return (isDragged = false); };
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
var handleDrop = function (getFilesFn) { return function (event) {
    handleDragLeave();
    var files = getFilesFn(event);
    if (files.length) {
        return handleTypeValidation(files[0].type, function () {
            return handleSizeValidation(files[0].size, function () {
                options.setFieldTouched(exports.name, true, false);
                options.setFieldValue(exports.name, files[0]);
                return exports.onDrop(files);
            });
        });
    }
    return handleTypeValidation("", function () { return null; });
}; };
function handleTypeValidation(fileType, clbk) {
    var acceptedTypes = exports.accept.replace(/\s/g, "").split(",");
    if (!acceptedTypes.includes(fileType)) {
        options.setFieldError(exports.name, "Wrong format");
        return setTimeout(function () {
            options.setFieldTouched(exports.name, true, false);
        }, 500);
    }
    return clbk();
}
function handleSizeValidation(fileSize, clbk) {
    var acceptedMaxSize = Math.pow(1024, 2) * exports.maxSize;
    if (fileSize / acceptedMaxSize > 1) {
        options.setFieldError(exports.name, "Max " + exports.maxSize + "MB");
        return setTimeout(function () {
            options.setFieldTouched(exports.name, true, false);
        }, 500);
    }
    return clbk();
}
</script>

<slot
    value={value}
    touched={touched}
    error={error}
    hasError={hasError}
    isDragged={isDragged}
    handleDrop={handleDrop}
    handleDragOver={handleDragOver}
    handleDragLeave={handleDragLeave}
    context={options}
    props={{
        value: value,
        touched: touched,
        error: error,
        hasError: hasError,
        context: options,
        isDragged,
        handleDrop,
        handleDragOver,
        handleDragLeave,
    }}
/>
