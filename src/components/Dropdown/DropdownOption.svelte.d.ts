import { SvelteComponentTyped } from 'svelte';
export default class DropdownOption extends SvelteComponentTyped<DropdownOptionProps, DropdownOptionEvents, DropdownOptionSlots> {
}
declare const propDef: {
    props?: {
        value: string;
        icon?: any;
        isOutlined?: boolean;
        onClick: () => void;
        class?: string;
    };
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {};
};
export declare type DropdownOptionProps = typeof propDef.props;
export declare type DropdownOptionEvents = typeof propDef.events;
export declare type DropdownOptionSlots = typeof propDef.slots;
export {};
