<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class = exports.currentStep = exports.steps = exports.isShown = exports.onClickedOutside = void 0;
var dom_actions_1 = require("../../dom-actions");
var index_svelte_1 = require("../Breadcrumb/index.svelte");
;
exports.steps = undefined;
exports.currentStep = undefined;
var className = "";
exports.class = className;
</script>

{#if isShown}<div class="popup-wrapper" use:portal="{'#layers'}"><div class="popup popup-absolute text-center {className}" class:withProgress="{steps}" use:clickOutside="{onClickedOutside}">{#if steps}<div class="popup popup-progress"><Breadcrumb items="{steps}" progressStep="{currentStep}"></Breadcrumb></div>{/if}<slot></slot></div></div>{/if}

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
.popup-absolute {
  position: absolute;
  display: flex;
  width: 350px;
  flex-direction: column;
}
.popup-absolute.withProgress {
  margin-top: 33px;
}
@media (max-width: 479px) {
  .popup-absolute {
    width: 290px;
    left: calc(50% - 145px);
  }
}
.popup-wrapper {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  overflow: hidden;
  overflow-y: auto;
  transition: opacity 0.3s ease-in-out;
  background-color: rgba(48, 53, 67, 0.5);
  background-color: rgba(var(--f1--rgb, #303543), 0.5);
}
@media (max-width: 479px) {
  .popup-wrapper {
    display: block;
    padding-top: 80px;
  }
}
.popup-progress {
  position: absolute;
  display: flex;
  justify-content: center;
  width: 100%;
  left: 0;
  bottom: calc(100% + 8px);
  padding: 23px;
}</style>
