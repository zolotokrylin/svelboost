import { SvelteComponentTyped } from 'svelte';
export default class TabHead extends SvelteComponentTyped<TabHeadProps, TabHeadEvents, TabHeadSlots> {
}
declare const propDef: {
    props?: {
        maxWidth?: number;
    };
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {
        default: {};
    };
};
export declare type TabHeadProps = typeof propDef.props;
export declare type TabHeadEvents = typeof propDef.events;
export declare type TabHeadSlots = typeof propDef.slots;
export {};
