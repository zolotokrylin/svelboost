interface InputTarget extends HTMLInputElement {
    value: any;
}
export declare type CustomMouseEvent = {
    target: InputTarget;
};
export declare type BagState = {
    values?: Record<string, any>;
    errors?: Record<string, any>;
    touched?: Record<string, any>;
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
};
export declare type InputPropertyFn = {
    (injectedValue: any, inheritedValue: any): any;
};
export {};
