<script context="module" lang="ts">var close = {
    isOpen: false,
    selectionIndex: -1,
};
var openAtFirstItem = {
    isOpen: true,
    selectionIndex: 0,
};
</script>

<script lang="ts">"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.class = exports.onChange = exports.id = exports.disabled = exports.options = exports.placeholder = exports.value = void 0;
var store_1 = require("svelte/store");
var index_svelte_1 = require("../Icon/index.svelte");
var dom_actions_1 = require("../../dom-actions");
var solid_1 = require("../Icons/solid");
exports.disabled = false;
exports.id = "YxCqg0moG8alSAsFYgnSFA";
var onChange = function () { };
exports.onChange = onChange;
var className = "";
exports.class = className;
var state = store_2.writable({
    isOpen: false,
    closeWithClick: false,
    selectionIndex: -1,
    close: close,
    openAtFirstItem: openAtFirstItem,
});
var updateState = function (exp) {
    return state.update(function (prevState) { return (__assign(__assign({}, prevState), exp)); });
};
var selectorRef;
var selectorButton;
var selectorMenu;
var outerHeight;
$: isTopAligned = calculateMenuPosition(outerHeight);
var calculateMenuPosition = function (outerHeight) {
    // @ts-ignore
    if (process.browser) {
        var rect = selectorRef === null || selectorRef === void 0 ? void 0 : selectorRef.getBoundingClientRect();
        var menuRect = selectorMenu === null || selectorMenu === void 0 ? void 0 : selectorMenu.getBoundingClientRect();
        if (rect && menuRect) {
            return rect.top + rect.height + menuRect.height > outerHeight;
        }
    }
    return false;
};
var refs = [];
var handleClickOutside = function () {
    if ($state.isOpen) {
        updateState(close);
    }
};
var getActiveOptionIndex = function (value) {
    var ind = 0;
    exports.options.forEach(function (opt, index) {
        if (opt === value) {
            ind = index;
        }
    });
    return ind;
};
var isItemActive = function (item, value) { return item === value; };
$: handleOpenedSelector($state.isOpen);
$: handleIndexChange($state.selectionIndex);
var handleOpenedSelector = function (isOpen) {
    if (isOpen) {
        scrollToIndex($state.selectionIndex);
    }
    else {
        setTimeout(function () { return selectorMenu === null || selectorMenu === void 0 ? void 0 : selectorMenu.scrollTo(0, 0); }, 300);
    }
};
var handleIndexChange = function (currentIndex) {
    var _a;
    if ($state.isOpen) {
        (_a = refs[currentIndex]) === null || _a === void 0 ? void 0 : _a.focus({ preventScrolling: true });
    }
};
var scrollToIndex = function (currentIndex) {
    var _a, _b;
    var item = getActiveOptionIndex(exports.value);
    if (currentIndex !== -1) {
        if (item === 0) {
            (_a = refs[currentIndex]) === null || _a === void 0 ? void 0 : _a.focus({ preventScrolling: true });
        }
        else {
            (_b = refs[currentIndex]) === null || _b === void 0 ? void 0 : _b.focus({ preventScrolling: true });
        }
    }
    else {
        selectorMenu === null || selectorMenu === void 0 ? void 0 : selectorMenu.focus();
    }
};
var handleKeyDown = function (event) {
    switch (event.key) {
        case "ArrowDown": {
            event.preventDefault();
            var nextIndex = $state.selectionIndex + 1;
            if (nextIndex !== exports.options.length) {
                updateState({ selectionIndex: nextIndex });
            }
            else {
                updateState({ selectionIndex: 0 });
            }
            break;
        }
        case "ArrowUp": {
            event.preventDefault();
            var nextIndex = $state.selectionIndex - 1;
            if (nextIndex !== -1) {
                updateState({ selectionIndex: nextIndex });
            }
            else {
                updateState({ selectionIndex: exports.options.length - 1 });
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
                    selectionIndex: getActiveOptionIndex(exports.value),
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
var handleClick = function () {
    if (exports.disabled)
        return;
    if ($state.isOpen) {
        updateState(close);
    }
    else {
        selectorButton.focus();
        if (exports.value) {
            updateState({
                isOpen: true,
                selectionIndex: getActiveOptionIndex(exports.value),
            });
        }
        else {
            updateState({ isOpen: true });
        }
    }
};
var handleMouseDown = function () {
    return $state.isOpen && updateState({ closeWithClick: true });
};
var handleMenuBlur = function (event) {
    if (!$state.closeWithClick &&
        !selectorMenu.contains(event.relatedTarget)) {
        updateState(close);
    }
};
var handleItemClick = function (item) {
    exports.onChange(item);
    updateState(close);
};
var handleItemKeyDown = function (event, item) {
    if (event.key === "Enter") {
        event.preventDefault();
        exports.onChange(item);
        updateState(close);
    }
};
</script>

<svelte:window bind:outerHeight />

<div class="selector {className}" bind:this="{selectorRef}" use:clickOutside="{handleClickOutside}"><button class="selector-button" id="{id}" disabled="{disabled}" class:active="{$state.isOpen}" type="button" aria-haspopup="menu" aria-expanded="{$state.isOpen}" bind:this="{selectorButton}" on:keydown="{handleKeyDown}" on:click="{handleClick}" on:mousedown="{handleMouseDown}"><span class="value" class:empty="{!value}">{#if value}<slot name="button" item="{value}" isActive="{$state.isOpen}"></slot>{:else}{ placeholder}{/if}</span><slot name="icon"><Icon icon="{chevronDown}" width="{19}" height="{19}" colorInherit></Icon></slot></button><div class="selector-menu" bind:this="{selectorMenu}" aria-labelledby="{id}" class:top-aligned="{isTopAligned}" class:active="{$state.isOpen}" role="menu" tabIndex="-1" on:blur="{handleMenuBlur}" on:keydown="{handleKeyDown}">{#if options && options.length}{#each options as option, index}<div class="selector-menu--item" bind:this="{refs[index]}" on:click="{() => handleItemClick(option)}" on:keydown="{(ev) => handleItemKeyDown(ev, option)}" tabIndex="-1" role="menuitem"><slot name="item" item="{option}" isSelected="{$state.selectionIndex === index}" isActive="{isItemActive(option, value)}"></slot></div>{/each}{:else}<div class="selector-menu--item" bind:this="{refs[0]}" tabIndex="-1" on:click="{() => handleItemClick('')}" role="menuitem"><slot name="item" item="" isSelected="{false}" isActive="{false}"></slot></div>{/if}</div></div>

<style lang="sass" src="./style.sass">@-webkit-keyframes rotate-circle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes rotate-circle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.selector {
  position: relative;
}

.selector-button {
  position: relative;
  width: 100%;
  height: 50px;
  margin: 0;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
  color: #303543;
  color: var(--f1, #303543);
  background-color: #f5f5f6;
  background-color: var(--l2, #f5f5f6);
  border-width: 1px;
  border-style: solid;
  border-color: rgba(0, 102, 255, 0);
  border-color: rgba(var(--primary-accent--rgb, #0066ff), 0);
}
.selector-button:hover {
  background-color: #efeff0;
  background-color: var(--l3, #efeff0);
}
.selector-button.active, .selector-button:focus, .selector-button:focus:hover {
  border-color: #0066ff;
  border-color: var(--primary-accent, #0066ff);
  background-color: #f5f5f6;
  background-color: var(--l2, #f5f5f6);
}
.selector-button:disabled {
  cursor: not-allowed;
}

.value {
  position: relative;
  display: inline-block;
  width: 100%;
  color: inherit;
  text-align: left;
  max-width: calc(100% - 28px);
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 400;
  line-height: 18px;
}
.value.empty {
  color: #a9adb6;
  color: var(--f4, #a9adb6);
}

.selector-menu {
  position: absolute;
  opacity: 0;
  padding: 7px;
  visibility: hidden;
  pointer-events: none;
  border-radius: 12px;
  max-height: 165px;
  overflow-y: scroll;
  width: 100%;
  text-align: left;
  top: calc(100% + 8px);
  z-index: 5;
  transition: opacity 0.3s ease-in-out, visibility 0.15s ease-in-out;
  box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  background-color: var(--l1, #fff);
  border-width: 1px;
  border-style: solid;
  border-color: #e8e8ea;
  border-color: var(--l4, #e8e8ea);
}
.selector-menu.top-aligned {
  bottom: calc(100% + 8px);
  top: auto;
}
.selector-menu.active {
  opacity: 1;
  pointer-events: auto;
  visibility: visible;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
}

.selector-menu--item {
  position: relative;
  display: block;
}
.selector-menu--item + .selector-menu--item {
  margin-top: 8px;
}</style>
