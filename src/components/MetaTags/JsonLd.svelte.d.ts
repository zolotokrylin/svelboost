import { SvelteComponentTyped } from 'svelte';
export default class JsonLd extends SvelteComponentTyped<JsonLdProps, JsonLdEvents, JsonLdSlots> {
}
declare const propDef: {
    props?: {
        schema?: any;
    };
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {};
};
export declare type JsonLdProps = typeof propDef.props;
export declare type JsonLdEvents = typeof propDef.events;
export declare type JsonLdSlots = typeof propDef.slots;
export {};
