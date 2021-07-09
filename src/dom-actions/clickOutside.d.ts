declare type Props = (node: HTMLElement) => void;
export default function clickOutside(node: HTMLElement, onClickedOutside: Props): {
    destroy(): void;
};
export {};
