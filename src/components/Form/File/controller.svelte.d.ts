/// <reference types="node" />
import { SvelteComponentTyped } from 'svelte';
import type { BagState, CustomMouseEvent } from "../types";
export default class Controller extends SvelteComponentTyped<ControllerProps, ControllerEvents, ControllerSlots> {
}
declare const propDef: {
    props?: {
        name: any;
        accept?: string;
        maxSize?: number;
        onDrop?: (fn: any) => void;
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
            isDragged: boolean;
            handleDrop: (getFilesFn: (arg0: CustomMouseEvent) => any) => (event: CustomMouseEvent) => void | NodeJS.Timeout;
            handleDragOver: () => boolean;
            handleDragLeave: () => boolean;
            context: BagState;
            props: {
                value: any;
                touched: any;
                error: any;
                hasError: any;
                context: BagState;
                isDragged: boolean;
                handleDrop: (getFilesFn: (arg0: CustomMouseEvent) => any) => (event: CustomMouseEvent) => void | NodeJS.Timeout;
                handleDragOver: () => boolean;
                handleDragLeave: () => boolean;
            };
        };
    };
};
export declare type ControllerProps = typeof propDef.props;
export declare type ControllerEvents = typeof propDef.events;
export declare type ControllerSlots = typeof propDef.slots;
export {};
