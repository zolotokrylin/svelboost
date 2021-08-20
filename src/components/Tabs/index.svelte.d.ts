import { SvelteComponentTyped } from 'svelte';
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
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
export declare type IndexProps = typeof propDef.props;
export declare type IndexEvents = typeof propDef.events;
export declare type IndexSlots = typeof propDef.slots;
export {};
