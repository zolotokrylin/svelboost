import { SvelteComponentTyped } from 'svelte';
export default class Header extends SvelteComponentTyped<HeaderProps, HeaderEvents, HeaderSlots> {
}
declare const propDef: {
    props?: {
        text: string;
        description: string;
    };
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {};
};
export declare type HeaderProps = typeof propDef.props;
export declare type HeaderEvents = typeof propDef.events;
export declare type HeaderSlots = typeof propDef.slots;
export {};
