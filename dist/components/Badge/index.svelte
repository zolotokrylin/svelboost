<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.class = exports.label = exports.status = void 0;
var className;
exports.class = className;
</script>

<div class="badge badge-{status} {className}">{ label }</div>

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
.badge {
  position: relative;
  display: inline-flex;
  text-align: center;
  padding: 4px 8px;
  white-space: nowrap;
  border-radius: 10px;
  transition: filter 0.3s ease-in-out;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1;
  color: #303543;
  color: var(--f1, #303543);
}
.badge-success {
  background-color: #04cd62;
  background-color: var(--success, #04cd62);
}
.badge-warning {
  background-color: #feb800;
  background-color: var(--warning, #feb800);
}
.badge-info {
  background-color: #dfdfe1;
  background-color: var(--l6, #dfdfe1);
}
.badge-error {
  color: #fff;
  color: var(--l1, #fff);
  background-color: #ff0222;
  background-color: var(--alert, #ff0222);
}</style>
