import { SvelteComponentTyped } from 'svelte';
export default class Table extends SvelteComponentTyped<TableProps, TableEvents, TableSlots> {
}
declare const propDef: {
    props?: {
        /**
             * Table should be responsive?
             */ responsive?: boolean;
        /**
             * Table items cells width
             */ cells: string[];
        /**
             * Table min width
             */ minWidth?: number;
        class?: string;
    };
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {
        default: {};
    };
};
export declare type TableProps = typeof propDef.props;
export declare type TableEvents = typeof propDef.events;
export declare type TableSlots = typeof propDef.slots;
export {};
