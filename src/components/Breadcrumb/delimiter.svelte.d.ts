import { SvelteComponentTyped } from 'svelte';
export default class Delimiter extends SvelteComponentTyped<DelimiterProps, DelimiterEvents, DelimiterSlots> {
}
declare const propDef: {
    props?: {
        icon: any;
    };
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {};
};
export declare type DelimiterProps = typeof propDef.props;
export declare type DelimiterEvents = typeof propDef.events;
export declare type DelimiterSlots = typeof propDef.slots;
export {};
