<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.align = exports.label = exports.type = exports.index = void 0;
var svelte_1 = require("svelte");
var utils_1 = require("../utils");
;
var Type;
(function (Type) {
    Type["TH"] = "th";
    Type["TD"] = "td";
})(Type || (Type = {}));
/**
 * Item index
 */
exports.index = 0;
/**
 * Item type
 */
exports.type = Type.TD;
/**
 * Item text
 */
exports.label = "";
var cells = svelte_2.getContext("tableCtx").cells;
var getItemStyle = function (index) {
    return utils_2.objectToStyle({
        width: cells[index],
    });
};
exports.align = "left";
</script>

{#if type === Type.TD}
    <td
        {...$$restProps}
        class="table-cell"
        class:table-cell--left={align === "left"}
        class:table-cell--center={align === "center"}
        class:table-cell--right={align === "right"}
        data-index={index}
        style={getItemStyle(index)}
    >
        <slot>{label}</slot>
    </td>
{:else}
    <th
        {...$$restProps}
        class="table-cell"
        class:table-cell--left={align === "left"}
        class:table-cell--center={align === "center"}
        class:table-cell--right={align === "right"}
        data-index={index}
        style={getItemStyle(index)}
    >
        <slot>{label}</slot>
    </th>
{/if}

<style lang="sass" src="./table-cell.sass">@-webkit-keyframes rotate-circle {
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
.table-cell {
  position: relative;
  text-align: left;
  border: 0;
}
.table-cell--center {
  text-align: center;
}
.table-cell--right {
  text-align: right;
}

th {
  padding: 15px 23px;
  height: 42px;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1;
  color: #53596b;
  color: var(--f3, #53596b);
  background-color: #f5f5f6;
  background-color: var(--l2, #f5f5f6);
}

td {
  padding: 23px;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1;
  color: #53596b;
  color: var(--f3, #53596b);
}</style>
