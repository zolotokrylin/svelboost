<script context="module">
    function getFilesFromDropEvent({ dataTransfer: { files, items } }) {
        return files.length
            ? [...files]
            : items
                  .filter(({ kind }) => kind === "file")
                  .map(({ getAsFile }) => getAsFile());
    }

    function getFilesFromInputEvent({ target }) {
        const files = target.files ? [...target.files] : [];
        target.value = "";
        return files;
    }
</script>

<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.progress = exports.disabled = exports.accept = exports.class = exports.fileRequirement = exports.label = exports.isLoading = exports.placeholder = exports.name = void 0;
var controller_svelte_1 = require("./controller.svelte");
var index_svelte_1 = require("../FormGroup/index.svelte");
var index_svelte_2 = require("../../ButtonIcon/index.svelte");
var index_svelte_3 = require("../../CircularLoading/index.svelte");
var solid_1 = require("../../Icons/solid");
var index_svelte_4 = require("../Label/index.svelte");
var index_svelte_5 = require("../ErrorMessage/index.svelte");
exports.label = undefined;
exports.fileRequirement = undefined;
var className = "";
exports.class = className;
exports.accept = "image/png, image/jpeg";
exports.disabled = false;
exports.progress = 0;
var addClass = function (className, condition) {
    return condition ? className : "";
};
</script>

<Controller {...$$props} let:value let:context let:hasError let:handleDrop let:handleDragLeave let:handleDragOver let:isDragged><FormGroup class="file-field">{#if label}<Label name="{name}_label" label="{label}"></Label>{/if}{#if disabled}<input name="{name}" id="{name}_field_input" type="file">{:else}<input name="{name}" id="{name}_field_input" tabindex="-1" accept="{accept}" type="file" on:focus="{context.handleFocus}" on:input="{handleDrop(getFilesFromInputEvent)}">{/if}<label class="{className}" for="{name}_field_input" class:with-error="{!isLoading && hasError}" class:disabled="{disabled}" class:loading="{isLoading}" class:dropped="{isDragged}" class:active="{value}" on:dragover|preventDefault="{handleDragOver}" on:dragleave|preventDefault="{handleDragLeave}" on:drop|preventDefault="{handleDrop(getFilesFromDropEvent)}"><span class="placeholder">{#if value}{value.name ? value.name : value}{:else if isDragged}Drop file here{:else}{placeholder}{/if}</span>{#if isLoading}<CircularLoading class="circular-progress-block" width="{24}" height="{24}" radius="{10}" mode="determinate" progress="{progress}"></CircularLoading>{:else}{#if value}<ButtonIcon icon="{x}" pointerNone></ButtonIcon>{:else}<ButtonIcon icon="{folder}" pointerNone></ButtonIcon>{/if}{/if}<slot value="{value.name ? value.name : value}"></slot></label>{#if fileRequirement && !hasError}<div class="file-requirement">{fileRequirement}</div>{/if}{#if !isLoading}<ErrorMessage class="relative" name="{name}"></ErrorMessage>{/if}</FormGroup></Controller>

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
input {
  position: absolute;
  opacity: 0.00001;
  padding: 0;
  width: 0;
  height: 0;
  top: 0;
  left: 0;
}

label {
  position: relative;
  display: flex;
  cursor: pointer;
  text-align: left;
  justify-content: space-between;
  align-items: center;
  padding: 7px 15px;
  border-radius: 10px;
  transition: background-color 0.3s ease-in-out, border-color 0.3s ease-in-out;
  color: #303543;
  color: var(--f1, #303543);
  border-width: 1px;
  border-style: dashed;
  border-color: #a9adb6;
  border-color: var(--f4, #a9adb6);
  background-color: #fff;
  background-color: var(--l1, #fff);
}
label.with-error {
  border-color: #ff0222;
  border-color: var(--alert, #ff0222);
}
label.disabled {
  cursor: not-allowed;
}
label:hover {
  border-color: #303543;
  border-color: var(--f1, #303543);
}
label.dropped {
  border-color: #0066ff;
  border-color: var(--primary-accent, #0066ff);
}
label.active {
  border-style: solid;
  border-color: #e8e8ea;
  border-color: var(--l4, #e8e8ea);
}
label :global(.circular-progress-block) {
  margin: 5px;
}

.file-requirement {
  position: relative;
  margin-top: 8px;
  color: #a9adb6;
  color: var(--f4, #a9adb6);
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1;
}

.placeholder {
  position: relative;
  width: calc(100% - 48px);
  color: #303543;
  color: var(--f1, #303543);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.8;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}</style>
