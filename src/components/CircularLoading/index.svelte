<script lang="ts">
    export let width: number = 100;
    export let height: number = 100;
    export let radius: number = 20;
    export let strokeWidth: number = 3;
    export let strokeLimit: string = "10";

    type Mode = "determinate" | "indeterminate";
    export let mode: Mode = "indeterminate";
    export let progress: number = 0;

    let className: string = "";
    export { className as class };
</script>

<svg class="circular {className} circular-{mode}" width={width} height={height}>
    <circle
        class="track"
        cx={width / 2}
        cy={height / 2}
        r={radius}
        fill="none"
        stroke-width={strokeWidth}
        stroke-miterlimit={strokeLimit}
    />
    <circle
        class="path"
        cx={width / 2}
        cy={height / 2}
        r={radius}
        fill="none"
        stroke-dasharray="{(progress / 100) * (width + width / 4)} 200px"
        stroke-width={strokeWidth}
        stroke-miterlimit={strokeLimit}
    />
</svg>

<style lang="sass" src="./style.sass">

</style>
