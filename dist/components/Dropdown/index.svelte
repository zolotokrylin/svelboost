<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class = void 0;
var store_1 = require("svelte/store");
var className = "";
exports.class = className;
var state = store_2.writable(false);
var toggleState = function (newState) { return state.set(newState); };
</script>

<div class="dropdown {className}">
    <slot name="button" isShown={$state} toggle={() => toggleState(!$state)} />
    <slot name="menu" isShown={$state} toggle={toggleState} />
</div>
