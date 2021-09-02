<script lang="ts">
    import { SelectorOption } from "../Selector";

    export let value: string;
    export let icon: any = undefined;

    export let imgSrc: string = undefined;
    export let imgAlt: string = undefined;
    export let isOutlined: boolean = false;
    export let onClick: () => void;

    let className: string = "";
    export { className as class };
</script>

<div class="dropdown-option" on:click={onClick}>
    <SelectorOption
        class="custom-option {className}"
        value={value}
        icon={icon}
        imgSrc={imgSrc}
        imgAlt={imgAlt}
        isOutlined={isOutlined}
    />
</div>

<style lang="sass" src="./style.sass">
    @import "../common-styles/utils"

    .dropdown-option
        position: relative
        display: block

        :global(.custom-option)
            padding: 7px!important

        :global(.custom-option:hover)
            @include var(color, 'f3', 1, !important)
            @include var(background-color, 'l2')

        & + :global(.dropdown-option)
            margin-top: 8px
</style>
