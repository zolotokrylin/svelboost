import { SvelteComponentTyped } from 'svelte';
export default class TableRow extends SvelteComponentTyped<TableRowProps, TableRowEvents, TableRowSlots> {
}
declare const propDef: {
    props?: {
        /**
             * TableRow class
             */ class?: string;
        hoverable?: boolean;
        /**
             * On Click Table Row
             */ onClick?: () => void;
    };
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {
        default: {};
    };
};
export declare type TableRowProps = typeof propDef.props;
export declare type TableRowEvents = typeof propDef.events;
export declare type TableRowSlots = typeof propDef.slots;
export {};
