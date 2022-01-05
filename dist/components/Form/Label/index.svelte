<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.label = exports.name = void 0;
</script>

<label class="input-label" for="{name}_field_input">
    {label}
</label>

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
.input-label {
  position: relative;
  display: block;
  text-align: left;
  margin-bottom: 0.5rem;
  color: #53596b;
  color: var(--f3, #53596b);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
}</style>
