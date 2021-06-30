<script lang="ts">
    export let width: number = 100;
    export let height: number = 100;
    export let radius: number = 20;
    export let strokeWidth: number = 3;
    export let strokeLimit: string = "10";

    let className: string;
    export { className as class };
</script>

<svg class="circular {className}" width={width} height={height}>
    <circle
        class="path"
        cx={width / 2}
        cy={height / 2}
        r={radius}
        fill="none"
        stroke-width={strokeWidth}
        stroke-miterlimit={strokeLimit}
    />
</svg>

<style lang="sass" src="./style.sass">

</style>
