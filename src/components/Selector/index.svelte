<script context="module" lang="ts">
    const close = {
        isOpen: false,
        selectionIndex: -1,
    };

    const openAtFirstItem = {
        isOpen: true,
        selectionIndex: 0,
    };

    type State = {
        isOpen: boolean;
        selectionIndex: number;
        close: any;
        closeWithClick: boolean;
        openAtFirstItem: any;
    };
</script>

<script lang="ts">
    import { writable } from "svelte/store";
    import Icon from "../Icon/index.svelte";
    import { clickOutside } from "../../dom-actions";
    import { chevronDown } from "../Icons/solid";

    export let value: any;
    export let placeholder: string;
    export let options: any[];
    export let disabled: boolean = false;
    export let id: string = "YxCqg0moG8alSAsFYgnSFA";

    export let onChange: (option: any) => void = () => {};

    let className: string = "";
    export { className as class };

    let state = writable<State>({
        isOpen: false,
        closeWithClick: false,
        selectionIndex: -1,
        close: close,
        openAtFirstItem: openAtFirstItem,
    });

    let updateState = (exp: Partial<State>) =>
        state.update((prevState) => ({ ...prevState, ...exp }));

    let selectorRef: HTMLDivElement;
    let selectorButton: HTMLButtonElement;
    let selectorMenu: HTMLDivElement;

    let outerHeight: number;

    $: isTopAligned = calculateMenuPosition(outerHeight);
    let calculateMenuPosition = (outerHeight: number) => {
        // @ts-ignore
        if (process.browser) {
            let rect = selectorRef?.getBoundingClientRect();
            let menuRect = selectorMenu?.getBoundingClientRect();
            if (rect && menuRect) {
                return rect.top + rect.height + menuRect.height > outerHeight;
            }
        }
        return false;
    };

    let refs = [];

    let handleClickOutside = () => {
        if ($state.isOpen) {
            updateState(close);
        }
    };

    let getActiveOptionIndex = (value: any): number => {
        let ind = 0;
        options.forEach((opt, index) => {
            if (opt === value) {
                ind = index;
            }
        });
        return ind;
    };

    let isItemActive = (item, value) => item === value;

    $: handleOpenedSelector($state.isOpen);
    $: handleIndexChange($state.selectionIndex);

    let handleOpenedSelector = (isOpen: boolean) => {
        if (isOpen) {
            scrollToIndex($state.selectionIndex);
        } else {
            setTimeout(() => selectorMenu?.scrollTo(0, 0), 300);
        }
    };

    let handleIndexChange = (currentIndex: number) => {
        if ($state.isOpen) {
            refs[currentIndex]?.focus({ preventScrolling: true });
        }
    };

    let scrollToIndex = (currentIndex: number) => {
        let item = getActiveOptionIndex(value);
        if (currentIndex !== -1) {
            if (item === 0) {
                refs[currentIndex]?.focus({ preventScrolling: true });
            } else {
                refs[currentIndex]?.focus({ preventScrolling: true });
            }
        } else {
            selectorMenu?.focus();
        }
    };

    interface CustomKeyboardEvent extends KeyboardEvent {
        target: HTMLButtonElement;
    }

    let handleKeyDown = (event: CustomKeyboardEvent) => {
        switch (event.key) {
            case "ArrowDown": {
                event.preventDefault();
                let nextIndex = $state.selectionIndex + 1;
                if (nextIndex !== options.length) {
                    updateState({ selectionIndex: nextIndex });
                } else {
                    updateState({ selectionIndex: 0 });
                }
                break;
            }
            case "ArrowUp": {
                event.preventDefault();
                let nextIndex = $state.selectionIndex - 1;
                if (nextIndex !== -1) {
                    updateState({ selectionIndex: nextIndex });
                } else {
                    updateState({ selectionIndex: options.length - 1 });
                }
                break;
            }
            case "Tab": {
                if (!$state.isOpen) {
                    selectorButton.focus();
                }
                break;
            }
            case "Backspace": {
                if (!$state.isOpen) {
                    updateState({
                        isOpen: true,
                        selectionIndex: getActiveOptionIndex(value),
                    });
                    break;
                }
            }
            case "Escape": {
                updateState(close);
                break;
            }
        }
    };

    let handleClick = () => {
        if (disabled) return;
        if ($state.isOpen) {
            updateState(close);
        } else {
            selectorButton.focus();
            if (value) {
                updateState({
                    isOpen: true,
                    selectionIndex: getActiveOptionIndex(value),
                });
            } else {
                updateState(openAtFirstItem);
            }
        }
    };

    let handleMouseDown = () =>
        $state.isOpen && updateState({ closeWithClick: true });

    let handleMenuBlur = (event) => {
        if (
            !$state.closeWithClick &&
            !selectorMenu.contains(event.relatedTarget)
        ) {
            updateState(close);
        }
    };

    let handleItemClick = (item: any) => {
        onChange(item);
        updateState(close);
    };

    let handleItemKeyDown = (event, item) => {
        if (event.key === "Enter") {
            event.preventDefault();
            onChange(item);
            updateState(close);
        }
    };
</script>

<svelte:window bind:outerHeight />

<template lang="pug" src="./template.pug" />

<style lang="sass" src="./style.sass">

</style>
