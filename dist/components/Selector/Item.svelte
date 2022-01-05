<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class = exports.isOutlined = exports.imgAlt = exports.imgSrc = exports.icon = exports.value = exports.isSelected = exports.isActive = void 0;
var index_svelte_1 = require("../Icon/index.svelte");
exports.isActive = false;
exports.isSelected = false;
exports.icon = undefined;
exports.imgSrc = undefined;
exports.imgAlt = undefined;
exports.isOutlined = false;
var className = "";
exports.class = className;
</script>

<div
    class="option {className}"
    class:option-active={isActive}
    class:option-selected={isSelected}
>
    {#if icon}
        <Icon
            icon={icon}
            width={15}
            height={15}
            colorInherit
            isOutlined={isOutlined}
        />
    {/if}
    {#if imgSrc}
        <img loading="lazy" src={imgSrc} alt={imgAlt} />
    {/if}
    <span>{value ? value : "No options available"}</span>
</div>

<style lang="sass" src="./item.sass">@-webkit-keyframes rotate-circle {
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
.option {
  position: relative;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  justify-content: flex-start;
  border-radius: 10px;
  background-color: transparent;
  padding: 12px 16px;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  color: #53596b;
  color: var(--f3, #53596b);
  background-color: #fff;
  background-color: var(--l1, #fff);
}
.option :global(svg) {
  margin-right: 8px;
}
.option span {
  position: relative;
  text-align: left;
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.2;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.option img {
  position: relative;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 8px;
}
.option:hover, .option-selected, .option-active {
  color: #0066ff;
  color: var(--primary-accent, #0066ff);
}
.option-selected {
  background-color: #f5f5f6;
  background-color: var(--l2, #f5f5f6);
}</style>
