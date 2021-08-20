import { SvelteComponentTyped } from 'svelte';
export default class Tabs extends SvelteComponentTyped<TabsProps, TabsEvents, TabsSlots> {
}
declare const propDef: {
    props?: {
        defaultActiveItemIndex?: number;
        items: {
            label: string;
            href: string;
            onClick?: () => void;
        }[];
        maxWidth?: number;
        class?: string;
    } & SvelteAllProps;
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {};
};
export declare type TabsProps = typeof propDef.props;
export declare type TabsEvents = typeof propDef.events;
export declare type TabsSlots = typeof propDef.slots;
export {};
