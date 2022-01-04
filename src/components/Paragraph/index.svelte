<script lang="ts">
    let className: string = "";
    export { className as class };

    // Used for control DOM element from outside
    export let forwardRef: HTMLParagraphElement = undefined;
    export let forwardAction: any;
</script>

<p use:forwardAction bind:this={forwardRef} class={className}>
    <slot />
</p>

<style lang="sass" src="./style.sass">

</style>
