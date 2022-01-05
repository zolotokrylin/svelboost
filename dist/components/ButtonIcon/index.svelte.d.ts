import { SvelteComponentTyped } from 'svelte';
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
    get getRef(): () => HTMLButtonElement;
    get onClick(): () => void;
    /**accessor*/
    set onClick(_: () => void);
    get icon(): any;
    /**accessor*/
    set icon(_: any);
    get pointerNone(): boolean;
    /**accessor*/
    set pointerNone(_: boolean);
    get undefined(): any;
    /**accessor*/
    set undefined(_: any);
    get disabled(): boolean;
    /**accessor*/
    set disabled(_: boolean);
    get withBorder(): boolean;
    /**accessor*/
    set withBorder(_: boolean);
    get class(): string;
    /**accessor*/
    set class(_: string);
}
declare const propDef: {
    props?: {
        onClick?: () => void;
        icon: any;
        pointerNone?: boolean;
        getRef?: () => HTMLButtonElement;
        disabled?: boolean;
        withBorder?: boolean;
        class?: string;
    };
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {};
};
export declare type IndexProps = typeof propDef.props;
export declare type IndexEvents = typeof propDef.events;
export declare type IndexSlots = typeof propDef.slots;
export {};
