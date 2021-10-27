<script lang="ts">
    let className: string = "";
    export { className as class };
</script>

<p class={className}>
    <slot />
</p>

<style lang="sass" src="./style.sass">

</style>
