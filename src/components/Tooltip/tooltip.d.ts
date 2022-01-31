import type { Instance, OptionsGeneric, Modifier } from '@popperjs/core';
export declare type PopperOptions<TModifier> = Partial<OptionsGeneric<TModifier>> | undefined;
export declare type ReferenceAction = (node: HTMLElement, handlers: any) => {
    destroy(): void;
};
export declare type ContentAction<TModifier> = (node: HTMLElement, popperOptions?: PopperOptions<TModifier>) => {
    update(popperOptions: PopperOptions<TModifier>): void;
    destroy(): void;
};
export declare function createPopperActions<TModifier extends Partial<Modifier<any, any>>>(initOptions?: PopperOptions<TModifier>): [ReferenceAction, ContentAction<TModifier>, () => Instance | null];
