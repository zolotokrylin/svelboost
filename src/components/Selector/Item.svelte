<script lang="ts">
    import Icon from "../Icon/index.svelte";

    export let isActive: boolean = false;
    export let isSelected: boolean = false;
    export let value: string | undefined;
    export let icon: any = undefined;
    export let imgSrc: string = undefined;
    export let imgAlt: string = undefined;
    export let isOutlined: boolean = false;

    let className: string = "";
    export { className as class };
</script>

<div
    class="option {className}"
    class:option-active={isActive}
    class:option-selected={isSelected}
>
    {#if icon}
        <Icon
            icon={icon}
            width={15}
            height={15}
            colorInherit
            isOutlined={isOutlined}
        />
    {/if}
    {#if imgSrc}
        <img loading="lazy" src={imgSrc} alt={imgAlt} />
    {/if}
    <span>{value ? value : "No options available"}</span>
</div>

<style lang="sass" src="./item.sass">

</style>
