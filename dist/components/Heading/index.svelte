<script context="module" lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Level = void 0;
var Level;
(function (Level) {
    Level[Level["H1"] = 1] = "H1";
    Level[Level["H2"] = 2] = "H2";
    Level[Level["H3"] = 3] = "H3";
    Level[Level["H4"] = 4] = "H4";
    Level[Level["H5"] = 5] = "H5";
    Level[Level["H6"] = 6] = "H6";
})(Level = exports.Level || (exports.Level = {}));
</script>

<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.href = exports.asLink = exports.isDisplay = exports.isHoverable = exports.class = exports.level = void 0;
exports.level = Level.H1;
var className = "";
exports.class = className;
exports.isHoverable = false;
exports.isDisplay = false;
exports.asLink = false;
exports.href = undefined;
$: hoverableClass = exports.isHoverable ? "heading--isHoverable" : "";
$: displayClass = exports.isDisplay ? "heading--isDisplay" : "";
</script>

{#if asLink}<a class="{className} {asLink ? '' : className}" href="{href}">{#if level === 1}<h1 class="heading {hoverableClass} {displayClass} {asLink ? '' : className}"><slot></slot></h1>{:else if level === 2}<h2 class="heading {hoverableClass} {asLink ? '' : className}"><slot></slot></h2>{:else if level === 3}<h3 class="heading {hoverableClass} {asLink ? '' : className}"><slot></slot></h3>{:else if level === 4}<h4 class="heading {hoverableClass} {asLink ? '' : className}"><slot></slot></h4>{:else if level === 5}<h5 class="heading {hoverableClass} {asLink ? '' : className}"><slot></slot></h5>{:else if level === 6}<h6 class="heading {hoverableClass} {asLink ? '' : className}"><slot></slot></h6>{/if}</a>{:else} {#if level === 1}<h1 class="heading {hoverableClass} {displayClass} {asLink ? '' : className}"><slot></slot></h1>{:else if level === 2}<h2 class="heading {hoverableClass} {asLink ? '' : className}"><slot></slot></h2>{:else if level === 3}<h3 class="heading {hoverableClass} {asLink ? '' : className}"><slot></slot></h3>{:else if level === 4}<h4 class="heading {hoverableClass} {asLink ? '' : className}"><slot></slot></h4>{:else if level === 5}<h5 class="heading {hoverableClass} {asLink ? '' : className}"><slot></slot></h5>{:else if level === 6}<h6 class="heading {hoverableClass} {asLink ? '' : className}"><slot></slot></h6>{/if}{/if}

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
h1 {
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.3;
}

h2 {
  font-size: 2rem;
  font-weight: 500;
  line-height: 1.3;
}

h3 {
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 1.3;
}

h4 {
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.3;
}

h5 {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.3;
}

h6 {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.3;
}

a {
  text-decoration: none;
}

.heading {
  color: #303543;
  color: var(--f1, #303543);
  margin: 0;
}
.heading--isHoverable {
  cursor: pointer;
  transition: color 0.3s ease-in-out;
}
.heading--isHoverable:hover {
  color: #0066ff;
  color: var(--primary-accent, #0066ff);
}
.heading--isDisplay {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.1;
}</style>
