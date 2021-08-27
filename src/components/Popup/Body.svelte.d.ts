import { SvelteComponentTyped } from 'svelte';
export default class Body extends SvelteComponentTyped<BodyProps, BodyEvents, BodySlots> {
}
declare const propDef: {
    props?: {};
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {
        default: {};
    };
};
export declare type BodyProps = typeof propDef.props;
export declare type BodyEvents = typeof propDef.events;
export declare type BodySlots = typeof propDef.slots;
export {};
