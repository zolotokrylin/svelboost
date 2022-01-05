<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class = exports.progressColor = exports.progress = exports.mode = exports.strokeLimit = exports.strokeWidth = exports.radius = exports.height = exports.width = void 0;
exports.width = 100;
exports.height = 100;
exports.radius = 20;
exports.strokeWidth = 3;
exports.strokeLimit = "10";
exports.mode = "indeterminate";
exports.progress = 0;
exports.progressColor = "accent";
var className = "";
exports.class = className;
var calculateStrokePercentage = function (value, radius) {
    if (exports.mode === "indeterminate")
        return {};
    var c = Math.PI * (radius * 2);
    var pct = ((100 - value) / 100) * c;
    return {
        "stroke-dashoffset": pct,
        "stroke-dasharray": c + " " + pct,
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

<style lang="sass" src="./style.sass">@-webkit-keyframes rotate-circle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes rotate-circle {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes circular-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes circular-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes dash {
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }
  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
}
.circular {
  position: relative;
}
.circular-indeterminate {
  -webkit-animation: circular-rotate 2s linear infinite;
          animation: circular-rotate 2s linear infinite;
}
.circular-indeterminate .track {
  display: none;
}
.circular-indeterminate .path {
  stroke-dasharray: 80px, 200px;
  -webkit-animation: dash 2s ease-in-out infinite;
          animation: dash 2s ease-in-out infinite;
}
.circular-determinate {
  transform: rotate(-90deg);
}
.circular-determinate .path {
  transition: stroke-dasharray 0.3s linear;
}
.circular-accent .path {
  stroke: #0066ff;
  stroke: var(--primary-accent, #0066ff);
}
.circular-success .path {
  stroke: #04cd62;
  stroke: var(--success, #04cd62);
}
.circular-warning .path {
  stroke: #feb800;
  stroke: var(--warning, #feb800);
}

.track {
  stroke-linecap: butt;
  stroke: #dfdfe1;
  stroke: var(--l6, #dfdfe1);
}

.path {
  stroke-linecap: butt;
}</style>
