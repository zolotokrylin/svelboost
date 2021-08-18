type Props = {
    autofocus: boolean
}

export default function focus(node: HTMLElement, properties: Props) {
    let { autofocus } = properties;
    if (autofocus) {
        setTimeout(() => { node.focus() }, 100);
    }
    return {
        destroy() {
            node.blur();
        }
    }
};