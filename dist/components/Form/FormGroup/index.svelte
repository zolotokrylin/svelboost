<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class = void 0;
var className;
exports.class = className;
</script>

<div class="form-group {className}">
    <slot />
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
.form-group {
  position: relative;
  display: block;
  margin-bottom: 1.5rem;
}</style>
