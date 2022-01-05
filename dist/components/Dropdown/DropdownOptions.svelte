<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.align = exports.toggle = exports.isShown = exports.class = exports.target = exports.ref = void 0;
var transition_1 = require("svelte/transition");
var dom_actions_1 = require("../../dom-actions");
var className = "";
exports.class = className;
exports.isShown = false;
var Alignment;
(function (Alignment) {
    Alignment["RIGHT"] = "right";
    Alignment["LEFT"] = "left";
})(Alignment || (Alignment = {}));
exports.align = Alignment.RIGHT;
var onClickedOutside = function () {
    if (exports.isShown) {
        exports.toggle(false);
    }
};
var scrollY = 0;
var scrollX = 0;
var style = function (node, props) {
    setStyles(node, props);
    return {
        update: function (newProps) {
            setStyles(node, newProps);
        },
    };
};
var setStyles = function (node, props) {
    var ref = props.ref, scrollX = props.scrollX, scrollY = props.scrollY;
    var _a = ref.getBoundingClientRect(), width = _a.width, height = _a.height, top = _a.top, left = _a.left;
    node.style.width = width + "px";
    node.style.height = height + "px";
    node.style.left = scrollX + left + "px";
    node.style.top = scrollY + top + "px";
};
</script>

<div
    class="dropdown-options-wrapper"
    style="position:absolute;display: block;"
    use:style={{ ref, scrollX, scrollY }}
    use:portal={target}
>
    <div
        class="dropdown-options {className}"
        transition:fade|local
        class:dropdown-options--left-aligned={align === Alignment.LEFT}
        class:dropdown-options--right-aligned={align === Alignment.RIGHT}
        class:dropdown-options--active={isShown}
        use:clickOutside={onClickedOutside}
    >
        <slot />
    </div>
</div>

<svelte:window bind:scrollX bind:scrollY />

<style lang="sass" src="./dropdown-options.sass">@-webkit-keyframes rotate-circle {
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
.dropdown-options {
  position: absolute;
  top: calc(100% + 30px);
  opacity: 0;
  padding: 7px;
  visibility: hidden;
  pointer-events: none;
  border-radius: 12px;
  transition: opacity 0.3s ease-in-out 0s, visibility 0s ease-in-out 0s, transform 0.3s ease-in-out 0s;
}
.dropdown-options--left-aligned {
  left: 0;
}
.dropdown-options--right-aligned {
  right: 0;
}
.dropdown-options--active {
  opacity: 1;
  pointer-events: all;
  visibility: visible;
  opacity: 1;
  transform: translateY(-22px);
  transition: opacity 0.3s ease-in-out 0s, visibility 0.15s ease-in-out 0s, transform 0.3s ease-in-out 0s;
}</style>
