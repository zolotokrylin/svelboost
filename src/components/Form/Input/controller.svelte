<script lang="ts">
    // @ts-check
    import { getContext } from "svelte";
    import { getIn } from "../../utils";
    import type { Writable } from "svelte/store";
    import type { BagState, CustomMouseEvent } from "../types";

    export let name: any;

    let formValues: Writable<Object> = getContext("formValues");
    let formErrors: Writable<Object> = getContext("formErrors");
    let formTouched: Writable<Object> = getContext("formTouched");
    let options: BagState = getContext("formOptions");

    $: value = getIn($formValues, name);
    $: touched = getIn($formTouched, name);
    $: error = getIn($formErrors, name);
    $: hasError = touched && error;

    function handleInput(ev: CustomMouseEvent): void {
        if (ev.target.value.length > 0) {
            options.setFieldTouched(name, true);
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
