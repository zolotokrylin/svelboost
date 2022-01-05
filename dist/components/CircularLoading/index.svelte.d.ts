import { SvelteComponentTyped } from 'svelte';
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
declare const propDef: {
    props?: {
        width?: number;
        height?: number;
        radius?: number;
        strokeWidth?: number;
        strokeLimit?: string;
        mode?: "determinate" | "indeterminate";
        progress?: number;
        progressColor?: "accent" | "success" | "warning";
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
