import { SvelteComponentTyped } from 'svelte';
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
declare const propDef: {
    props?: {
        initialState?: boolean;
    };
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {
        default: {
            active: boolean;
            update: (newState: boolean) => void;
            toggle: () => void;
        };
    };
};
export declare type IndexProps = typeof propDef.props;
export declare type IndexEvents = typeof propDef.events;
export declare type IndexSlots = typeof propDef.slots;
export {};
