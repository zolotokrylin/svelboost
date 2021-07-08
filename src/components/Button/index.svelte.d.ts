import { SvelteComponentTyped } from 'svelte';

export declare enum Size {
    LARGE = "large",
    DEFAULT = "default",
    SMALL = "small",
};

export declare enum Type {
    PRIMARY = "primary",
    SECONDARY = "secondary",
    ALTERNATE = "alternate",
}

export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
declare const propDef: {
    props?: {
        href?: string;
        label: string;
        rel?: string;
        icon?: any;
        imageSrc?: string;
        imageAlt?: string;
        disabled: boolean;
        isSubmitBtn: boolean;
        type: Type
        size: Size;
        onClick: () => void;
    };
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {};
};
export declare type IndexProps = typeof propDef.props;
export declare type IndexEvents = typeof propDef.events;
export declare type IndexSlots = typeof propDef.slots;
export { };
