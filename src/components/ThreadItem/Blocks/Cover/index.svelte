<script lang="ts">
    const { src, alt } = $$props;
</script>

<picture class="pr mb16">
    <img loading="lazy" class="custom" {src} {alt} />
</picture>

<style lang="sass" src="./style.sass">
    @import "../../../common-styles/utils"

    picture
        position: relative
        width: 100%
        padding-top: 56.25%
        border-radius: 10px
        @include var(background-color, 'f4')

    img
        position: absolute
        top: 0
        left: 0
        width: 100%
        height: 100%
        border-radius: 10px
        object-fit: cover
        object-position: center
</style>
