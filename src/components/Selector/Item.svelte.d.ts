import { SvelteComponentTyped } from 'svelte';
export default class Item extends SvelteComponentTyped<ItemProps, ItemEvents, ItemSlots> {
}
declare const propDef: {
    props?: {
        isActive: boolean;
        isSelected: boolean;
        value: string;
        icon?: any;
        isOutlined?: boolean;
        class?: string;
    };
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {};
};
export declare type ItemProps = typeof propDef.props;
export declare type ItemEvents = typeof propDef.events;
export declare type ItemSlots = typeof propDef.slots;
export {};
