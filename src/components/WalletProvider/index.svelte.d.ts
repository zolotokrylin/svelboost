import { SvelteComponentTyped } from 'svelte';
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
declare const propDef: {
    props?: {
        chainId: string;
        network: any;
    };
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {
        default: {
            switchChain: (newNetwork: any) => Promise<void>;
            state: {
                chainId: string;
                connectionStatus: number;
                accounts: any[];
                connectionError: string;
            };
        };
    };
};
export declare type IndexProps = typeof propDef.props;
export declare type IndexEvents = typeof propDef.events;
export declare type IndexSlots = typeof propDef.slots;
export {};
