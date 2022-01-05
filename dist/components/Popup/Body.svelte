<div class="popup-body">
    <slot />
</div>

<style lang="sass">@-webkit-keyframes rotate-circle {
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
.popup-body {
  padding: 23px 39px;
}
@media (max-width: 479px) {
  .popup-body {
    padding: 23px;
  }
}</style>
