<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialState = void 0;
var store_1 = require("svelte/store");
exports.initialState = false;
var state = store_2.writable(exports.initialState);
var update = function (newState) { return state.set(newState); };
var toggle = function () { return state.set(!$state); };
</script>

<slot active={$state} update={update} toggle={toggle} />
