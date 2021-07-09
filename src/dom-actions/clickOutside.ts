type Props = (node: HTMLElement) => void;

export default function clickOutside(node: HTMLElement, onClickedOutside: Props) {
    let handleClick = (event: any) => {
        if (node && !node.contains(event.target) && !event.defaultPrevented) {
            return onClickedOutside(node);
        }
    }
    document.addEventListener("click", handleClick, true);
    return {
        destroy() {
            document.removeEventListener("click", handleClick, true);
        }
    }
};