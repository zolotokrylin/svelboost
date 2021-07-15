import { SvelteComponentTyped } from 'svelte';
import type { BagState, CustomMouseEvent } from "./types";
export default class Form extends SvelteComponentTyped<FormProps, FormEvents, FormSlots> {
}
declare const propDef: {
    props?: {
        enableReinitialize?: boolean;
        formBag: () => BagState;
        initialErrors?: Object;
        initialTouched?: Object;
        initialValues?: Object;
        onSubmit?: (values: any, actions: BagState) => any;
        onSubmitValidation?: (props?: Object) => void;
        validate?: (values: any, actions: BagState) => Record<string, any> | void;
    };
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {
        default: {
            errors: Record<string, any>;
            touched: Record<string, any>;
            values: Record<string, any>;
            isSubmitting: boolean;
            handleSubmit: () => Promise<void> | void;
            props: {
                values: Record<string, any>;
                errors: Record<string, any>;
                touched: Record<string, any>;
                resetForm: () => void;
                submitForm: () => void;
                setFieldError: (field: string, value: any, validate?: boolean) => void;
                setErrors: (fields: Object) => void;
                setFieldTouched: (field: string, value: boolean, validate?: boolean) => void;
                setTouched: (fields: Object) => void;
                setFieldValue: (field: string, value: any, validate?: boolean) => void;
                setValues: (fields: Object) => void;
                setSubmitting: (status: boolean) => void;
                handleBlur: (event: CustomMouseEvent) => void;
                handleInput: (event: CustomMouseEvent) => void;
                handleFocus: (event: CustomMouseEvent) => void;
                scrollFirstErrorIntoView: () => void;
                isSubmitting: boolean;
                handleSubmit: () => Promise<void> | void;
            };
        };
    };
};
export declare type FormProps = typeof propDef.props;
export declare type FormEvents = typeof propDef.events;
export declare type FormSlots = typeof propDef.slots;
export {};
