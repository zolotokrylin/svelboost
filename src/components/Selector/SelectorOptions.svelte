<script lang="ts">
    import { fade } from "svelte/transition";
    import { portal, clickOutside } from "../../dom-actions";

    export let ref: HTMLElement;
    export let target: string;

    let className: string;
    export { className as class };

    export let isShown: boolean = false;
    export let toggle: (t: boolean) => void;

    enum Alignment {
        RIGHT = "right",
        LEFT = "left",
    }

    export let align: Alignment = Alignment.RIGHT;

    let onClickedOutside = () => {
        if (isShown) {
            toggle(false);
        }
    };

    let scrollY: number = 0;
    let scrollX: number = 0;

    type Props = {
        ref: HTMLElement;
        scrollX: number;
        scrollY: number;
    };

    let style = (node: HTMLDivElement, props: Props) => {
        setStyles(node, props);
        return {
            update(newProps: Props) {
                setStyles(node, newProps);
            },
        };
    };

    let setStyles = (node: HTMLDivElement, props: Props) => {
        let { ref, scrollX, scrollY } = props;
        let { width, height, top, left } = ref.getBoundingClientRect();
        node.style.width = `${width}px`;
        node.style.height = `${height}px`;
        node.style.left = `${scrollX + left}px`;
        node.style.top = `${scrollY + top}px`;
    };
</script>

<div
    class="selector-options-wrapper"
    style="position:absolute;display: block;"
    use:style={{ ref, scrollX, scrollY }}
    use:portal={target}
>
    <div
        class="selector-options {className}"
        transition:fade
        class:selector-options--left-aligned={align === Alignment.LEFT}
        class:selector-options--right-aligned={align === Alignment.RIGHT}
        class:selector-options--active={isShown}
        use:clickOutside={onClickedOutside}
    >
        <slot />
    </div>
</div>

<svelte:window bind:scrollX bind:scrollY />

<style lang="sass" src="./selector-options.sass">

</style>
