<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorInherit = exports.isOutlined = exports.height = exports.width = exports.icon = void 0;
exports.width = 24;
exports.height = 24;
exports.isOutlined = false;
exports.colorInherit = false;
var svg = exports.icon.svg, paths = exports.icon.paths;
</script>

<svg
    class:icon-outline={isOutlined}
    class:color-inherited={colorInherit}
    {...svg}
    width={width}
    height={height}
>
    {#each paths as pathProps}
        <path {...pathProps} />
    {/each}
</svg>

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
svg {
  position: relative;
  display: inline-flex;
}
svg.icon-outline.color-inherited path {
  stroke: currentColor;
  fill: unset;
}
svg.color-inherited path {
  fill: currentColor;
}</style>
