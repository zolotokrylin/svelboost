type Props = {
    autosizeOnMount: boolean,
    resizeFn: (node: HTMLElement) => void
}

export default function resize(node: HTMLElement, properties: Props) {
    let { autosizeOnMount, resizeFn } = properties;

    if (autosizeOnMount) {
        resizeFn(node);
    }

    return {
        update(newProperties: Props) {
            newProperties.resizeFn(node);
        }
    }
};