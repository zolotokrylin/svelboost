import { tick } from 'svelte';


export type PortalElement = HTMLElement & {
    previousParentElement?: HTMLElement
}

type Target = string | HTMLElement;

let initTargetElement = async (targetEl: HTMLElement, target: Target) => {
    if (typeof target === "string") {
        targetEl = document.querySelector(target);
        if (targetEl === null) {
            await tick();
            targetEl = document.querySelector(target);
        }
    } else if (target instanceof HTMLElement) {
        targetEl = target;
    } else {
        throw new TypeError(
            `Unknown target type: ${target === null ? "null" : typeof target
            }. Allowed types: string (CSS selector) or HTMLElement.`
        );
    }
    return targetEl;
}

export default function portal(node: PortalElement, target: Target) {
    let targetEl: HTMLElement;

    async function setPortal(target: Target) {
        targetEl = await initTargetElement(targetEl, target);
        node.previousParentElement = node.parentElement; // save old parent reference
        targetEl.appendChild(node);
        document.body.classList.add(node.classList[0] + "-injected");
        node.hidden = false;
    }

    setPortal(target);

    return {
        update(newTarget: Target) {
            setPortal(newTarget);
        },
        destroy() {
            document.body.classList.remove(node.classList[0] + "-injected");
            if (node.parentNode) {
                targetEl.removeChild(node)
            }
        }
    }
}
