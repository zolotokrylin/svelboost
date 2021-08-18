<script lang="ts">
    import { writable } from "svelte/store";
    export let initialState: boolean = false;

    let state = writable<boolean>(initialState);

    let update = (newState: boolean) => state.set(newState);
    let toggle = () => state.set(!$state);
</script>

<slot active={$state} update={update} toggle={toggle} />
