import { SvelteComponentTyped } from 'svelte';
export declare type Tx = {
    text: string;
    description: string;
};
export declare enum Status {
    STARTING = 0,
    PENDING = 1,
    SUCCESS = 2,
    FAILURE = 3
}
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
declare const propDef: {
    props?: {
        pendingTx: Tx;
        successTx: Tx;
        failedTx: Tx;
        status: Status;
        btnLabel?: string;
        btnOnClick?: string;
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
