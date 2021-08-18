<script lang="ts">
    export let width: number = 100;
    export let height: number = 100;
    export let radius: number = 20;
    export let strokeWidth: number = 3;
    export let strokeLimit: string = "10";

    type Mode = "determinate" | "indeterminate";
    export let mode: Mode = "indeterminate";
    export let progress: number = 0;
    export let progressColor: "accent" | "success" | "warning" = "accent";

    let className: string = "";
    export { className as class };

    let calculateStrokePercentage = (value: number, radius: number) => {
        if (mode === "indeterminate") return {};

        let c = Math.PI * (radius * 2);
        let pct = ((100 - value) / 100) * c;

        return {
            "stroke-dashoffset": pct,
            "stroke-dasharray": `${c} ${pct}`,
        };
    };
</script>

<svg
    class="circular {className} circular-{mode} circular-{progressColor}"
    width={width}
    height={height}
>
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
        stroke-offset="0"
        {...calculateStrokePercentage(progress, radius)}
        stroke-width={strokeWidth}
        stroke-miterlimit={strokeLimit}
    />
</svg>

<style lang="sass" src="./style.sass">

</style>
