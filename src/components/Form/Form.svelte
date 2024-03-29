<script lang="ts">
    import { setContext } from "svelte";
    import { writable } from "svelte/store";
    import type { Writable } from "svelte/store";
    import type { BagState, CustomMouseEvent, InputPropertyFn } from "./types";
    import { default as merge } from "lodash-es/merge";
    import { default as mapValues } from "lodash-es/mapValues";
    import { default as isEmpty } from "lodash-es/isEmpty";
    import { default as isEqual } from "lodash-es/isEqual";
    import { default as pick } from "lodash-es/pick";
    import { default as pickBy } from "lodash-es/pickBy";
    import { default as minBy } from "lodash-es/minBy";
    import { default as toPairs } from "lodash-es/toPairs";
    import { default as keys } from "lodash-es/keys";

    export let enableReinitialize: boolean = false;
    export let formBag: () => BagState;

    export let initialErrors: Object = {};
    export let initialTouched: Object = {};
    export let initialValues: Object = {};

    export let onSubmit: (values: any, actions: BagState) => any = () => {};
    export let onSubmitValidation: (props?: Object) => void = () => {};
    export let validate: (
        values: any,
        actions: BagState
    ) => Record<string, any> | void = () => {};

    const values: Writable<Record<string, any>> = writable(initialValues);
    setContext("formValues", values);

    const touched: Writable<Record<string, any>> = writable(initialTouched);
    setContext("formTouched", touched);

    const errors: Writable<Record<string, any>> = writable(initialErrors);
    setContext("formErrors", errors);

    const markers: Writable<Record<string, any>> = writable({});
    setContext("formMarkers", markers);

    let isValid: boolean;
    $: isValid = isEmpty(pickBy($errors));

    let isDirty: boolean;
    $: isDirty = !isEqual($values, initialValues);

    $: {
        if (enableReinitialize) {
            values.set(initialValues);
        }
    }

    let isSubmitting = false;
    const setSubmitting = (nextIsSubmitting: boolean): void => {
        isSubmitting = nextIsSubmitting;
    };

    function scrollFirstErrorIntoView() {
        const errorMarkers = pick($markers, keys(pickBy($errors)));
        const scrollHeights = mapValues(errorMarkers, (node) => {
            const domRect = node.getBoundingClientRect();
            return domRect.y;
        });
        const top = minBy(toPairs(scrollHeights), (o) => o[1]);
        if (top) {
            $markers[top[0]].scrollIntoView();
        }
    }

    const setFieldError = (field: string, errMsg: string | undefined): void =>
        errors.update((_er) => ({ ..._er, [field]: errMsg }));
    const setErrors = (fields: Object): void => errors.set(fields);

    let validateOnBlur = true;
    const setFieldTouched = (
        field: string,
        isTouched: boolean,
        shouldValidate: boolean = validateOnBlur
    ): void => {
        touched.update((_t) => ({ ..._t, [field]: isTouched }));
        if (isTouched && shouldValidate) {
            handleValidate($values);
        }
    };
    function setTouched(fields, shouldValidate = validateOnBlur) {
        touched.set(fields);
        if (shouldValidate) {
            handleValidate($values);
        }
    }

    const setFieldValue = (
        field: string,
        value: any,
        shouldValidate: boolean = validateOnBlur
    ): void => {
        values.update((_v) => ({ ..._v, [field]: value }));
        if (shouldValidate) {
            handleValidate($values);
        }
    };
    function setValues(
        fields: Record<string, any>,
        shouldValidate: boolean = validateOnBlur
    ): void {
        values.set(fields);
        if (shouldValidate) {
            handleValidate($values);
        }
    }

    const submitFailure = (fields?: Record<string, any>): void => {
        if (fields) {
            errors.set(fields);
        }
        isSubmitting = false;
    };
    const submitSuccess = (): void => {
        isSubmitting = false;
    };

    function submitForm(): Promise<any> {
        if (isValid) {
            let result = handleSubmit();
            return Promise.resolve(result);
        } else {
            return Promise.reject();
        }
    }

    function resetForm(): void {
        values.set(initialValues);
        errors.set(initialErrors);
        touched.set(initialTouched);
    }

    function validateField(field: string): Record<string, any> {
        return handleValidate($values, field);
    }

    function validateForm(
        nextValues?: Record<string, any>
    ): Record<string, any> {
        return handleValidate(nextValues || $values);
    }

    function handleBlur({ target: { name } }: CustomMouseEvent): void {
        touched.update((_t) => ({ ..._t, [name]: true }));
        if (validateOnBlur) {
            handleValidate($values);
        }
    }

    function handleFocus({ target: { name, value } }: CustomMouseEvent): void {
        if (value.length === 0) {
            touched.update((_t) => ({ ..._t, [name]: undefined }));
        }
    }

    function handleInput({ target }: CustomMouseEvent): void {
        const { name, type, checked, value } = target;

        let nextValue = value;
        if (type === "select-multiple") {
            nextValue = [].map.call(
                target.querySelectorAll(":checked"),
                (option) => option.value
            );
        } else if (type === "checkbox") {
            nextValue = checked;
        }
        values.update((_v) => ({ ..._v, [name]: nextValue }));
        if (validateOnBlur) {
            handleValidate($values);
        }
    }

    const getFieldProperty: InputPropertyFn = (
        injectedValue,
        inheritedValue
    ) => {
        return injectedValue || inheritedValue;
    };
    setContext("fieldProps", getFieldProperty);

    formBag = (): BagState => ({
        resetForm,
        submitForm,
        setFieldError,
        setErrors,
        setFieldTouched,
        setTouched,
        setFieldValue,
        setValues,
        setSubmitting,
        handleBlur,
        handleInput,
        handleFocus,
        scrollFirstErrorIntoView,
    });

    setContext("formOptions", formBag());

    let validators = writable({});
    function handleValidate(
        nextValues: Record<string, any>,
        onlyField?: string
    ): Record<string, any> {
        if (onlyField) {
            if ($validators[onlyField]) {
                errors.update((_e) => ({
                    ..._e,
                    [onlyField]: $validators[onlyField](
                        nextValues[onlyField],
                        formBag()
                    ),
                }));
            }
            return;
        }
        const nextErrors = merge(
            validate(nextValues, formBag()),
            mapValues($validators, (_, name) => {
                if (!$validators[name]) return;
                return $validators[name](nextValues[name], formBag());
            })
        );
        errors.set(nextErrors);
        return nextErrors;
    }

    let isValidating: boolean = false;
    function handleSubmit(): Promise<void> | void {
        touched.set(mapValues($values, () => true));
        isSubmitting = true;
        isValidating = true;
        const nextErrors = handleValidate($values);
        isValidating = false;
        // isValid hasn't updated yet
        if (!isEmpty(pickBy(nextErrors))) {
            isSubmitting = false;
            onSubmitValidation && onSubmitValidation(nextErrors);
            return;
        }
        const result = onSubmit($values, formBag());
        if (result && typeof result.then === "function") {
            return Promise.resolve(result)
                .then(submitSuccess)
                .catch((errors) => submitFailure(errors));
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
    {isSubmitting}
    {handleSubmit}
    props={{
        errors: $errors,
        touched: $touched,
        values: $values,
        isSubmitting: isSubmitting,
        handleSubmit: handleSubmit,
        ...formBag(),
    }}
/>
