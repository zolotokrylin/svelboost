<script lang="ts">
    import Heading from "../Heading/index.svelte";

    export let text: string;
    export let description: string;
</script>

<div class="popup-header">
    <Heading level={3}>{text}</Heading>
    <p>{description}</p>
</div>

<style lang="sass">
    @import "../common-styles/utils"

    .popup-header
        padding: 23px
        @include property(border-bottom, 1px, solid, 'l4')

    p
        margin: 0
        @include footnote-font()
        @include var(color, 'f2')
</style>
