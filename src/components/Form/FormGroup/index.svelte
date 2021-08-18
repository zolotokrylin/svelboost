<script lang="ts">
    let className: string;
    export { className as class };
</script>

<div class="form-group {className}">
    <slot />
</div>

<style lang="sass" src="./style.sass">

</style>
