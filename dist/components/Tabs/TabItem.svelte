<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.label = exports.href = exports.onClick = exports.isActive = void 0;
</script>

{#if href}
    <a
        {...$$restProps}
        class="tab-item"
        class:tab-item--active={isActive}
        href={href}
        on:click={onClick}
    >
        {label}
    </a>
{:else}
    <div
        {...$$restProps}
        class="tab-item"
        class:tab-item--active={isActive}
        on:click={onClick}
    >
        {label}
    </div>
{/if}

<style lang="sass" src="./tab-item.sass">@-webkit-keyframes rotate-circle {
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
.tab-item {
  position: relative;
  white-space: nowrap;
  display: inline-block;
  cursor: pointer;
  padding-bottom: 6px;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1;
  color: #a9adb6;
  color: var(--f4, #a9adb6);
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: rgba(169, 173, 182, 0);
  border-bottom-color: rgba(var(--f4--rgb, #a9adb6), 0);
}
.tab-item:is(a) {
  text-decoration: none;
}
.tab-item:hover:not(.tab-item--active) {
  border-color: #a9adb6;
  border-color: var(--f4, #a9adb6);
}
.tab-item--active {
  color: #303543;
  color: var(--f1, #303543);
  border-color: #0066ff;
  border-color: var(--primary-accent, #0066ff);
}
.tab-item + :global(.tab-item) {
  margin-left: 16px;
}</style>
