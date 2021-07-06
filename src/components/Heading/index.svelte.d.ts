import { SvelteComponentTyped } from 'svelte';

export declare enum Level {
    H1 = 1,
    H2,
    H3,
    H4,
    H5,
    H6,
}
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
declare const propDef: {
    props?: {
        level?: Level;
        isHoverable?: boolean;
        isDisplay?: boolean;
        asLink?: boolean;
        href?: string;
        class?: string;
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
