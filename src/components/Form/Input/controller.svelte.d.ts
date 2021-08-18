import { SvelteComponentTyped } from 'svelte';
import type { BagState, CustomMouseEvent } from "../types";
export default class Controller extends SvelteComponentTyped<ControllerProps, ControllerEvents, ControllerSlots> {
}
declare const propDef: {
    props?: {
        name: any;
    };
    events?: {
        [evt: string]: CustomEvent<any>;
    };
    slots?: {
        default: {
            value: any;
            touched: any;
            error: any;
            hasError: any;
            handleInput: (ev: CustomMouseEvent) => void;
            context: BagState;
            props: {
                value: any;
                hasError: any;
                touched: any;
                error: any;
                context: BagState;
                handleInput: (ev: CustomMouseEvent) => void;
            };
        };
    };
};
export declare type ControllerProps = typeof propDef.props;
export declare type ControllerEvents = typeof propDef.events;
export declare type ControllerSlots = typeof propDef.slots;
export {};
