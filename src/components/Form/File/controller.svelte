<script lang="ts">
    // @ts-check
    import { getContext } from "svelte";
    import type { Writable } from "svelte/store";
    import type { BagState, CustomMouseEvent } from "../types";

    export let name: any;
    export let accept: string = "image/png, image/jpeg";
    export let maxSize = 1;

    export let onDrop: (fn: any) => void = () => {};

    let isDragged = false;

    let handleDragOver = () => (isDragged = true);
    let handleDragLeave = () => (isDragged = false);

    let formValues: Writable<Object> = getContext("formValues");
    let formErrors: Writable<Object> = getContext("formErrors");
    let formTouched: Writable<Object> = getContext("formTouched");
    let options: BagState = getContext("formOptions");

    $: value = $formValues[name];
    $: touched = $formTouched[name];
    $: error = $formErrors[name];
    $: hasError = touched && error;

    function handleInput(ev: CustomMouseEvent): void {
        if (ev.target.value.length > 0) {
            options.setFieldTouched(name, true);
        }
        return options.handleInput(ev);
    }

    let handleDrop = (getFilesFn: (arg0: CustomMouseEvent) => any) => (
        event: CustomMouseEvent
    ) => {
        handleDragLeave();
        let files = getFilesFn(event);
        if (files.length) {
            return handleTypeValidation(files[0].type, () =>
                handleSizeValidation(files[0].size, () => {
                    options.setFieldTouched(name, true, false);
                    options.setFieldValue(name, files[0]);
                    return onDrop(files);
                })
            );
        }
        return handleTypeValidation("", () => null);
    };

    function handleTypeValidation(fileType: string, clbk: () => void) {
        let acceptedTypes = accept.replace(/\s/g, "").split(",");
        if (!acceptedTypes.includes(fileType)) {
            options.setFieldError(name, "Wrong format");
            return setTimeout(() => {
                options.setFieldTouched(name, true, false);
            }, 500);
        }
        return clbk();
    }

    function handleSizeValidation(fileSize: number, clbk: () => void) {
        let acceptedMaxSize = 1024 ** 2 * maxSize;
        if (fileSize / acceptedMaxSize > 1) {
            options.setFieldError(name, `Max ${maxSize}MB`);
            return setTimeout(() => {
                options.setFieldTouched(name, true, false);
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
