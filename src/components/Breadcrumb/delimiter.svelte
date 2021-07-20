<script lang="ts">
    import Icon from "../Icon/index.svelte";

    export let icon: any;
</script>

<span class="delimiter">
    <Icon icon={icon} width={19} height={19} />
</span>

<style lang="sass">
    @import "../common-styles/utils"

    .delimiter
        position: relative
        display: inline-flex
        margin: 0 8px
        @include var(color, 'f4')
</style>
