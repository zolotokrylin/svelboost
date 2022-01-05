<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.description = exports.text = void 0;
var index_svelte_1 = require("../Heading/index.svelte");
</script>

<div class="popup-header">
    <Heading level={3}>{text}</Heading>
    <p>{description}</p>
</div>

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
.popup-header {
  padding: 23px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #e8e8ea;
  border-bottom-color: var(--l4, #e8e8ea);
}

p {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.8;
  color: #43495c;
  color: var(--f2, #43495c);
}</style>
