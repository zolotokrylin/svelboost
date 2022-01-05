<script lang="ts">"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.onSubmitValidation = exports.onSubmit = exports.initialValues = exports.initialTouched = exports.initialErrors = exports.formBag = exports.enableReinitialize = void 0;
var svelte_1 = require("svelte");
var store_1 = require("svelte/store");
;
var utils_1 = require("../utils");
;
var merge = require("lodash-es/merge").default;
var mapValues = require("lodash-es/mapValues").default;
var isEmpty = require("lodash-es/isEmpty").default;
var isEqual = require("lodash-es/isEqual").default;
var pick = require("lodash-es/pick").default;
var pickBy = require("lodash-es/pickBy").default;
var minBy = require("lodash-es/minBy").default;
var toPairs = require("lodash-es/toPairs").default;
var keys = require("lodash-es/keys").default;
exports.enableReinitialize = false;
exports.initialErrors = {};
exports.initialTouched = {};
exports.initialValues = {};
var onSubmit = function () { };
exports.onSubmit = onSubmit;
var onSubmitValidation = function () { };
exports.onSubmitValidation = onSubmitValidation;
var validate = function () { };
exports.validate = validate;
var values = store_2.writable(exports.initialValues);
svelte_2.setContext("formValues", values);
var touched = store_2.writable(exports.initialTouched);
svelte_2.setContext("formTouched", touched);
var errors = store_2.writable(exports.initialErrors);
svelte_2.setContext("formErrors", errors);
var markers = store_2.writable({});
svelte_2.setContext("formMarkers", markers);
var isValid;
$: isValid = isEmpty(pickBy($errors));
var isDirty;
$: isDirty = !isEqual($values, exports.initialValues);
$: {
    if (exports.enableReinitialize) {
        values.set(exports.initialValues);
    }
}
var isSubmitting = false;
var setSubmitting = function (nextIsSubmitting) {
    isSubmitting = nextIsSubmitting;
};
function scrollFirstErrorIntoView() {
    var errorMarkers = pick($markers, keys(pickBy($errors)));
    var scrollHeights = mapValues(errorMarkers, function (node) {
        var domRect = node.getBoundingClientRect();
        return domRect.y;
    });
    var top = minBy(toPairs(scrollHeights), function (o) { return o[1]; });
    if (top) {
        $markers[top[0]].scrollIntoView();
    }
}
var setFieldError = function (field, errMsg) {
    return errors.update(function (_er) { return utils_2.setIn(_er, field, errMsg); });
};
var setErrors = function (fields) { return errors.set(fields); };
var validateOnBlur = true;
var setFieldTouched = function (field, isTouched, shouldValidate) {
    if (shouldValidate === void 0) { shouldValidate = validateOnBlur; }
    touched.update(function (_t) { return utils_2.setIn(_t, field, isTouched); });
    if (isTouched && shouldValidate) {
        handleValidate($values);
    }
};
function setTouched(fields, shouldValidate) {
    if (shouldValidate === void 0) { shouldValidate = validateOnBlur; }
    touched.set(fields);
    if (shouldValidate) {
        handleValidate($values);
    }
}
var setFieldValue = function (field, value, shouldValidate) {
    if (shouldValidate === void 0) { shouldValidate = validateOnBlur; }
    values.update(function (_v) { return utils_2.setIn(_v, field, value); });
    if (shouldValidate) {
        handleValidate($values);
    }
};
function setValues(fields, shouldValidate) {
    if (shouldValidate === void 0) { shouldValidate = validateOnBlur; }
    values.set(fields);
    if (shouldValidate) {
        handleValidate($values);
    }
}
var submitFailure = function (fields) {
    if (fields) {
        errors.set(fields);
    }
    isSubmitting = false;
};
var submitSuccess = function () {
    isSubmitting = false;
};
function submitForm() {
    if (isValid) {
        var result = handleSubmit();
        return Promise.resolve(result);
    }
    else {
        return Promise.reject();
    }
}
function resetForm() {
    values.set(exports.initialValues);
    errors.set(exports.initialErrors);
    touched.set(exports.initialTouched);
}
function validateField(field) {
    return handleValidate($values, field);
}
function validateForm(nextValues) {
    return handleValidate(nextValues || $values);
}
function handleBlur(_a) {
    var name = _a.target.name;
    touched.update(function (_t) { return utils_2.setIn(_t, name, true); });
    if (validateOnBlur) {
        handleValidate($values);
    }
}
function handleFocus(_a) {
    var _b = _a.target, name = _b.name, value = _b.value;
    if (value.length === 0) {
        touched.update(function (_t) { return utils_2.setIn(_t, name, undefined); });
    }
}
function handleInput(_a) {
    var target = _a.target;
    var name = target.name, type = target.type, checked = target.checked, value = target.value;
    var nextValue = value;
    if (type === "select-multiple") {
        nextValue = [].map.call(target.querySelectorAll(":checked"), function (option) { return option.value; });
    }
    else if (type === "checkbox") {
        nextValue = checked;
    }
    values.update(function (_v) { return utils_2.setIn(_v, name, nextValue); });
    if (validateOnBlur) {
        handleValidate($values);
    }
}
var getFieldProperty = function (injectedValue, inheritedValue) {
    return injectedValue || inheritedValue;
};
svelte_2.setContext("fieldProps", getFieldProperty);
exports.formBag = function () { return ({
    resetForm: resetForm,
    submitForm: submitForm,
    setFieldError: setFieldError,
    setErrors: setErrors,
    setFieldTouched: setFieldTouched,
    setTouched: setTouched,
    setFieldValue: setFieldValue,
    setValues: setValues,
    setSubmitting: setSubmitting,
    handleBlur: handleBlur,
    handleInput: handleInput,
    handleFocus: handleFocus,
    scrollFirstErrorIntoView: scrollFirstErrorIntoView,
}); };
svelte_2.setContext("formOptions", exports.formBag());
var validators = store_2.writable({});
function handleValidate(nextValues, onlyField) {
    if (onlyField) {
        if ($validators[onlyField]) {
            errors.update(function (_e) {
                var _a;
                return (__assign(__assign({}, _e), (_a = {}, _a[onlyField] = $validators[onlyField](nextValues[onlyField], exports.formBag()), _a)));
            });
        }
        return;
    }
    var nextErrors = merge(exports.validate(nextValues, exports.formBag()), mapValues($validators, function (_, name) {
        if (!$validators[name])
            return;
        return $validators[name](nextValues[name], exports.formBag());
    }));
    errors.set(nextErrors);
    return nextErrors;
}
var isValidating = false;
function handleSubmit() {
    touched.set(mapValues($values, function () { return true; }));
    isSubmitting = true;
    isValidating = true;
    var nextErrors = handleValidate($values);
    isValidating = false;
    // isValid hasn't updated yet
    if (!isEmpty(pickBy(nextErrors))) {
        isSubmitting = false;
        exports.onSubmitValidation && exports.onSubmitValidation(nextErrors);
        return;
    }
    var result = exports.onSubmit($values, exports.formBag());
    if (result && typeof result.then === "function") {
        return Promise.resolve(result)
            .then(submitSuccess)
            .catch(function (errors) { return submitFailure(errors); });
    }
}
</script>

<!-- 
    Example
    Form(values="{values}" onSubmit={submitFn} let:props)
        input()

 -->

<slot
    errors={$errors}
    touched={$touched}
    values={$values}
    isSubmitting={isSubmitting}
    handleSubmit={handleSubmit}
    props={{
        errors: $errors,
        touched: $touched,
        values: $values,
        isSubmitting: isSubmitting,
        handleSubmit: handleSubmit,
        ...formBag(),
    }}
/>
