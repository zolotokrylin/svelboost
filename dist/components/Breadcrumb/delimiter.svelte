<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.icon = void 0;
var index_svelte_1 = require("../Icon/index.svelte");
</script>

<span class="delimiter">
    <Icon icon={icon} width={19} height={19} />
</span>

<style lang="sass">@-webkit-keyframes rotate-circle {
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
.delimiter {
  position: relative;
  display: inline-flex;
  margin: 0 8px;
  color: #a9adb6;
  color: var(--f4, #a9adb6);
}</style>
