<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class = exports.onClick = exports.isOutlined = exports.imgAlt = exports.imgSrc = exports.icon = exports.value = void 0;
var Selector_1 = require("../Selector");
exports.icon = undefined;
exports.imgSrc = undefined;
exports.imgAlt = undefined;
exports.isOutlined = false;
var className = "";
exports.class = className;
</script>

<div class="dropdown-option" on:click={onClick}>
    <SelectorOption
        class="custom-option {className}"
        value={value}
        icon={icon}
        imgSrc={imgSrc}
        imgAlt={imgAlt}
        isOutlined={isOutlined}
    />
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
.dropdown-option {
  position: relative;
  display: block;
}
.dropdown-option :global(.custom-option) {
  padding: 7px !important;
}
.dropdown-option :global(.custom-option:hover) {
  color: #53596b !important;
  color: var(--f3, #53596b) !important;
  background-color: #f5f5f6;
  background-color: var(--l2, #f5f5f6);
}
.dropdown-option + :global(.dropdown-option) {
  margin-top: 8px;
}</style>
