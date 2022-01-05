<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class = exports.maxWidth = exports.items = exports.defaultActiveItemIndex = void 0;
var store_1 = require("svelte/store");
var TabItem_svelte_1 = require("./TabItem.svelte");
exports.defaultActiveItemIndex = 0;
exports.maxWidth = undefined;
var className = "";
exports.class = className;
var tab = store_2.writable(exports.defaultActiveItemIndex);
$: $tab = exports.defaultActiveItemIndex;
var handleTabClick = function (index, clbk) {
    tab.set(index);
    if (clbk)
        clbk();
};
var style = exports.maxWidth ? "width: " + exports.maxWidth + "px;" : "";
</script>

<div class="tabs {className}" style={style}>
    <div class="tabs-wrapper">
        {#each items as item, index}
            <TabItem
                {...$$restProps}
                label={item.label}
                href={item.href}
                onClick={() => handleTabClick(index, item.onClick)}
                isActive={$tab === index}
            />
        {/each}
    </div>
</div>

<style lang="sass" src="./tabs.sass">@-webkit-keyframes rotate-circle {
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
.tabs {
  position: relative;
  margin-bottom: 2rem;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}
.tabs::-webkit-scrollbar {
  display: none;
}
.tabs-wrapper {
  position: relative;
  display: flex;
  flex-direction: row;
}</style>
