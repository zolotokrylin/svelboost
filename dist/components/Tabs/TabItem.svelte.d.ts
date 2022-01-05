import { SvelteComponentTyped } from 'svelte';
export default class TabItem extends SvelteComponentTyped<TabItemProps, TabItemEvents, TabItemSlots> {
}
declare const propDef: {
    props?: {
        isActive: boolean;
        onClick: () => void;
        href: string;
        label: string;
    } & SvelteAllProps;
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {};
};
export declare type TabItemProps = typeof propDef.props;
export declare type TabItemEvents = typeof propDef.events;
export declare type TabItemSlots = typeof propDef.slots;
export {};
