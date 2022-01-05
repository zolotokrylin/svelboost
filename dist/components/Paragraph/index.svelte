<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class = void 0;
var className = "";
exports.class = className;
</script>

<p class={className}>
    <slot />
</p>

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
p {
  position: relative;
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #53596b;
  color: var(--f3, #53596b);
}</style>
