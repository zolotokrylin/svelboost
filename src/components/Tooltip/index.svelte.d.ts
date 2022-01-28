import { SvelteComponentTyped } from 'svelte';
import type { Placement, PositioningStrategy } from "@popperjs/core";
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
declare const propDef: {
    props?: {
        tip: string;
        placement?: Placement;
        strategy?: PositioningStrategy;
        modifiers?: Array<any>;
        class?: string;
    };
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {
        default: {
            ref: (node: HTMLElement) => {
                destroy(): void;
            };
            isShown: boolean;
        };
    };
};
export declare type IndexProps = typeof propDef.props;
export declare type IndexEvents = typeof propDef.events;
export declare type IndexSlots = typeof propDef.slots;
export {};
