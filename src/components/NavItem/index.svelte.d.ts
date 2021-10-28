import { SvelteComponentTyped } from 'svelte';
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
declare const propDef: {
    props?: {
        icon: {
            svg: any;
            paths: Array<any>;
        };
        label?: string;
        href?: string;
        class?: string;
        active?: boolean;
        badge?: string;
        isDisabled?: boolean;
    };
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {};
};
export declare type IndexProps = typeof propDef.props;
export declare type IndexEvents = typeof propDef.events;
export declare type IndexSlots = typeof propDef.slots;
export { };