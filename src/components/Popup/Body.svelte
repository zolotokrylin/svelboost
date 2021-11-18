<div class="popup-body">
    <slot />
</div>

<style lang="sass">
    @import "../common-styles/utils"
    
    .popup-body
        padding: 23px 39px

        @include breakpoint($phone)
            padding: 23px
</style>
