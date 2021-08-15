import { SvelteComponentTyped } from 'svelte';
export default class TabsHead extends SvelteComponentTyped<TabsHeadProps, TabsHeadEvents, TabsHeadSlots> {
}
declare const propDef: {
    props?: {
        /**
             * Should skip bottom border?
             */ skipBorder?: boolean;
    };
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {
        default: {};
    };
};
export declare type TabsHeadProps = typeof propDef.props;
export declare type TabsHeadEvents = typeof propDef.events;
export declare type TabsHeadSlots = typeof propDef.slots;
export {};
