<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coin = void 0;
var index_svelte_1 = require("../Input/index.svelte");
var index_svelte_2 = require("../../Button/index.svelte");
</script>

<div class="input-wrapper"><Input {...$$restProps} withSlot><Button type="alternate" size="small" label="{coin.symbol}" imageSrc="{coin.logoUrl}" imageAlt="{coin.symbol}"></Button></Input></div>

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
.input-wrapper :global(.btn) {
  position: absolute !important;
  top: 32px;
  right: 16px;
  pointer-events: none;
}
.input-wrapper :global(input) {
  position: relative;
  padding-right: 106px;
}</style>
