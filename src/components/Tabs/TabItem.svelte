<script lang="ts">
    export let isActive: boolean;
    export let onClick: () => void;
    export let href: string;
    export let label: string;
</script>

{#if href}
    <a
        {...$$restProps}
        class="tab-item"
        class:tab-item--active={isActive}
        href={href}
        on:click={onClick}
    >
        {label}
    </a>
{:else}
    <div
        {...$$restProps}
        class="tab-item"
        class:tab-item--active={isActive}
        on:click={onClick}
    >
        {label}
    </div>
{/if}

<style lang="sass" src="./tab-item.sass">

</style>
