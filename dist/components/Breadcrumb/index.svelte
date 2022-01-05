<script context="module" lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
</script>

<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.icon = exports.maxWidth = exports.progressStep = exports.items = exports.class = void 0;
var delimiter_svelte_1 = require("./delimiter.svelte");
var solid_1 = require("../Icons/solid");
var index_svelte_1 = require("./Item/index.svelte");
var className = undefined;
exports.class = className;
exports.progressStep = 0;
exports.maxWidth = undefined;
exports.icon = solid_2.chevronRight;
var applyStyle = function (width) {
    if (width === undefined) {
        return;
    }
    return "max-width: " + width + "px";
};
</script>

<div class="breadcrumb {className}" style={applyStyle(maxWidth)}>
    {#each items as item, i}
        <BreadcrumbItem
            item={item}
            isActive={progressStep > i}
            withMaxWidth={maxWidth && i === items.length - 1}
        />
        {#if i < items.length - 1}
            <Delimiter icon={icon} />
        {/if}
    {/each}
</div>

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
.breadcrumb {
  position: relative;
  display: flex;
  align-items: center;
}</style>
