<script lang="ts">
    /**
     * A Tooltip Component
     * @component
     */
    import { createPopperActions } from "./tooltip";
    import { fade } from "svelte/transition";

    import type { Placement, PositioningStrategy } from "@popperjs/core";

    export let tip: string;
    export let placement: Placement = "top";
    export let strategy: PositioningStrategy = "absolute";
    export let modifiers: Array<any> = [];

    let className: string = "";
    export { className as class };

    const defaultModifiers = [
        {
            name: "offset",
            options: {
                offset: [0, 10],
            },
        },
    ];

    const [popperRef, popperContent] = createPopperActions({
        modifiers: defaultModifiers,
    });

    $: popperOptions = {
        placement,
        strategy,
        modifiers: [...defaultModifiers, ...modifiers],
    };

    let isShown: boolean = false;
    let onMouseEnter = (ev: Event) => {
        isShown = true;
    };

    let onMouseLeave = (ev: Event) => {
        isShown = false;
    };

    let handlers = { onMouseEnter, onMouseLeave };

    let handleRef = (node: HTMLElement) => {
        return popperRef(node, handlers);
    };
</script>

<slot ref={handleRef} {isShown} />
{#if isShown}
    <div
        transition:fade|local
        class="tooltip {className}"
        id="tooltip"
        data-placement={placement}
        use:popperContent={popperOptions}
        role="tooltip"
    >
        {tip}
        <span class="tooltip-arrow" id="arrow" data-popper-arrow>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="9">
                <path
                    d="M 0 0 L 0 -2 L 12 -2 L 12 0 L 7.664 6.504 C 6.872 7.691 5.128 7.691 4.336 6.504 Z"
                    fill="currentColor"
                />
            </svg>
        </span>
    </div>
{/if}

<style lang="sass" src="./style.sass">

</style>
