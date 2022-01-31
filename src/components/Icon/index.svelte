<script lang="ts">
    export let icon: Icon;
    export let width: number = 24;
    export let height: number = 24;
    export let isOutlined: boolean = false;
    export let colorInherit: boolean = false;

    type Icon = {
        svg: any;
        paths: Array<any>;
    };

    let { svg, paths } = icon;

    export let forwardRef: SVGSVGElement = null;
    export let forwardAction: any = () => {};
</script>

<svg
    bind:this={forwardRef}
    use:forwardAction
    class:icon-outline={isOutlined}
    class:color-inherited={colorInherit}
    {...svg}
    {width}
    {height}
>
    {#each paths as pathProps}
        <path {...pathProps} />
    {/each}
</svg>

<style lang="sass" src="./style.sass">

</style>
