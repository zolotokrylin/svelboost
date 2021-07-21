<script lang="ts">
    import Icon from "../Icon/index.svelte";

    export let isActive: boolean;
    export let isSelected: boolean;
    export let value: string;
    export let icon: any = undefined;

    let className: string;
    export { className as class };
</script>

<div
    class="option {className}"
    class:option-active={isActive}
    class:option-selected={isSelected}
>
    {#if icon}
        <Icon icon={icon} width={15} height={15} colorInherit />
    {/if}
    <span>{value}</span>
</div>

<style lang="sass" src="./item.sass">

</style>
