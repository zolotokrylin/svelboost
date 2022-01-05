<script lang="ts">"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.withMaxWidth = exports.isActive = exports.item = void 0;
exports.isActive = ((_a = exports.item === null || exports.item === void 0 ? void 0 : exports.item.href) === null || _a === void 0 ? void 0 : _a.length) > 0;
exports.withMaxWidth = false;
</script>

{#if item.href}<a class="breadcrumb-item breadcrumb-item--active" href="{item.href}">{item.name}</a>{:else}<div class="breadcrumb-item" class:breadcrumb-item--active="{isActive}" class:with-max-width="{withMaxWidth}">{item.name}</div>{/if}

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
.breadcrumb-item {
  position: relative;
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1;
  color: #a9adb6;
  color: var(--f4, #a9adb6);
}
.breadcrumb-item:is(a), .breadcrumb-item--active {
  color: #53596b;
  color: var(--f3, #53596b);
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}
.breadcrumb-item:is(a):hover, .breadcrumb-item--active:hover {
  color: #0066ff;
  color: var(--primary-accent, #0066ff);
}
.breadcrumb-item.with-max-width {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}</style>
