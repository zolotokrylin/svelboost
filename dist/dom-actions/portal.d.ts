export declare type PortalElement = HTMLElement & {
    previousParentElement?: HTMLElement;
};
declare type Target = string | HTMLElement;
export default function portal(node: PortalElement, target: Target): {
    update(newTarget: Target): void;
    destroy(): void;
};
export {};
