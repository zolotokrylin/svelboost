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
        label: string;
        onClick: () => void;
        type?: Type;
        size?: Size;
        class?: string;
        href?: string;
        rel?: string;
        icon?: any;
        imageSrc?: string;
        imageAlt?: string;
        isSubmitBtn?: boolean;
        disabled?: boolean;
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
