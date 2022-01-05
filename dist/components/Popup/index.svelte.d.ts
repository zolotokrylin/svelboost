import { SvelteComponentTyped } from 'svelte';
import type { Item } from "../Breadcrumb/index.svelte";
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
declare const propDef: {
    props?: {
        onClickedOutside: any;
        isShown: boolean;
        steps?: Item[];
        currentStep?: number;
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
