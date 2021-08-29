import { SvelteComponentTyped } from 'svelte';
export declare type Item = {
    name: string;
    href?: string;
};
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
declare const propDef: {
    props?: {
        class?: string;
        items: Item[];
        progressStep?: number;
        maxWidth?: number;
        icon?: any;
    };
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {};
};
export declare type IndexProps = typeof propDef.props;
export declare type IndexEvents = typeof propDef.events;
export declare type IndexSlots = typeof propDef.slots;
export {};
