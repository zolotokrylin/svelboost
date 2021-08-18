declare type Props = {
    autosizeOnMount: boolean;
    resizeFn: (node: HTMLElement) => void;
};
export default function resize(node: HTMLElement, properties: Props): {
    update(newProperties: Props): void;
};
export {};
