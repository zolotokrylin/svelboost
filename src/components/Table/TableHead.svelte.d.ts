import { SvelteComponentTyped } from 'svelte';
export default class TableHead extends SvelteComponentTyped<TableHeadProps, TableHeadEvents, TableHeadSlots> {
}
declare const propDef: {
    props?: {
        /**
             * TableHead class
             */ class?: string;
    };
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {
        default: {};
    };
};
export declare type TableHeadProps = typeof propDef.props;
export declare type TableHeadEvents = typeof propDef.events;
export declare type TableHeadSlots = typeof propDef.slots;
export {};
