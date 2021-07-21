<script lang="ts">
    import { writable } from "svelte/store";

    let className: string;
    export { className as class };

    let state = writable<boolean>(false);
    let toggleState = (newState: boolean) => state.set(newState);
</script>

<div class="dropdown {className}">
    <slot name="button" isShown={$state} toggle={() => toggleState(!$state)} />
    <slot name="menu" isShown={$state} toggle={toggleState} />
</div>
