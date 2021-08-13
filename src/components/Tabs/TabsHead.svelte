<script lang="ts">
    /**
     * Should skip bottom border?
     */
    export let skipBorder: boolean = false;
</script>

<div class="tabs-head">
    <div
        class="tabs-head-wrapper"
        class:tabs-head-wrapper--skipBorder={skipBorder}
    >
        <slot />
    </div>
</div>

<style lang="sass" src="./tabs-head.sass">

</style>
