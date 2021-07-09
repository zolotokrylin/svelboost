import { SvelteComponentTyped } from 'svelte';
export default class TableBody extends SvelteComponentTyped<TableBodyProps, TableBodyEvents, TableBodySlots> {
}
declare const propDef: {
    props?: {
        /**
             * TableBody class
             */ class?: string;
    };
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {
        default: {};
    };
};
export declare type TableBodyProps = typeof propDef.props;
export declare type TableBodyEvents = typeof propDef.events;
export declare type TableBodySlots = typeof propDef.slots;
export {};
