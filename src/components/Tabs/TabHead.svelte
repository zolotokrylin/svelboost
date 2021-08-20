<script lang="ts">
    export let maxWidth: number = undefined;

    let headStyle = maxWidth ? `width: ${maxWidth}px;` : "";
</script>

<div class="tabs-head" style={headStyle}>
    <div class="tabs-head-wrapper">
        <slot />
    </div>
</div>

<style lang="sass" src="./tabs-head.sass">

</style>
