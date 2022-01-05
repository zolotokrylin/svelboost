<script context="module" lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
var Status;
(function (Status) {
    Status[Status["STARTING"] = 0] = "STARTING";
    Status[Status["PENDING"] = 1] = "PENDING";
    Status[Status["SUCCESS"] = 2] = "SUCCESS";
    Status[Status["FAILURE"] = 3] = "FAILURE";
})(Status = exports.Status || (exports.Status = {}));
</script>

<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.btnOnClick = exports.btnLabel = exports.status = exports.failedTx = exports.successTx = exports.pendingTx = void 0;
var Popup_1 = require("../Popup");
var index_svelte_1 = require("../Button/index.svelte");
var index_svelte_2 = require("../CircularLoading/index.svelte");
var failed_tx_png_1 = require("./failed-tx.png");
var success_tx_png_1 = require("./success-tx.png");
var confirmTx = {
    text: "Confirm transaction",
    description: "Confirm transaction in your wallet",
};
exports.btnLabel = undefined;
exports.btnOnClick = undefined;
function getPopupHeaderProps(status) {
    switch (status) {
        case Status.STARTING:
            return confirmTx;
        case Status.PENDING:
            return exports.pendingTx;
        case Status.SUCCESS:
            return exports.successTx;
        case Status.FAILURE:
            return exports.failedTx;
    }
}
</script>

<div class="popup-inner"><PopupHeader {...getPopupHeaderProps(status)}></PopupHeader><PopupBody>{#if status === Status.STARTING}<div class="icon"><CircularLoading class="circle-wrapper" width="{100}" height="{100}" radius="{48}"></CircularLoading></div>{:else if status === Status.PENDING}<div class="icon"><CircularLoading class="circle-wrapper" progressColor="success" width="{100}" height="{100}" radius="{48}"></CircularLoading></div>{:else if status === Status.SUCCESS}<div class="icon"><img loading="lazy" src="{successTxImage}" alt="success icon"></div>{#if btnLabel}<Button label="{btnLabel}" onClick="{btnOnClick}"></Button>{/if}{:else if status === Status.FAILURE}<div class="icon"><img loading="lazy" src="{failedTxImage}" alt="success icon"></div>{/if}</PopupBody></div>

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
.popup-inner {
  position: relative;
  text-align: center;
}

.icon {
  position: relative;
  display: block;
  margin: 0 auto;
  width: 120px;
  height: 120px;
  padding: 10px;
}
.icon + :global(.btn) {
  margin-top: 2rem;
}

img {
  position: relative;
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
     object-fit: contain;
  -o-object-position: center center;
     object-position: center center;
}</style>
