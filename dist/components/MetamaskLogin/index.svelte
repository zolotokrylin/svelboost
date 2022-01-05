<script lang="ts">"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.switchChainUri = exports.protocol = exports.networkName = exports.appName = exports.error = exports.onDismiss = exports.connect = exports.init = void 0;
var svelte_1 = require("svelte");
var index_svelte_1 = require("../Heading/index.svelte");
var index_svelte_2 = require("../Button/index.svelte");
var index_svelte_3 = require("../CircularLoading/index.svelte");
var utils_1 = require("../WalletProvider/utils");
var index_svelte_4 = require("../Icon/index.svelte");
var solid_1 = require("../Icons/solid");
var metamask_png_1 = require("./metamask.png");
exports.networkName = "main";
exports.protocol = "Ethereum";
exports.switchChainUri = "https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC"; // TODO: replace it when will be an article
var reload = function () { return window.location.reload(); };
</script>

<div class="popup-inner">{#if error === errorCodes.PROVIDER_MISSING}<div class="icon"><img loading="lazy" src="{metamaskImage}" alt="metamask icon"></div><Heading class="title" level="{3}">MetaMask</Heading><p class="description">You’ll need to install MetaMask to continue. Once you have it installed, refresh the page.</p><div class="btns"><Button type="alternate" label="Refresh" onClick="{reload}"></Button><Button label="Install Metamask" rel="_blank" href="https://metamask.io/download.html"></Button></div>{/if}{#if error === errorCodes.WRONG_CHAIN}<div class="icon text-warning pt9"><Icon icon="{exclamation}" width="{52}" height="{52}" colorInherit></Icon></div><Heading class="title" level="{3}">Wrong network</Heading><p class="description"> You are using a wrong network. Please manually connect to <b>{protocol} {networkName}</b>.</p><div class="btns"><Button target="_blank" label="How to?" href="{switchChainUri}" type="alternate"></Button><Button label="Try again" onClick="{init}"></Button></div>{/if}{#if error === errorCodes.CONNECTION_FAILED}<div class="icon text-warning pt9"><Icon icon="{exclamation}" width="{52}" height="{52}" colorInherit></Icon></div><Heading class="title" level="{3}">Connection failed</Heading><p class="description"> Manualy configure and switch to {' '}<b>{protocol} {networkName} {' '}</b>to continue.</p><div class="btns"><Button target="_blank" label="How to?" href="{switchChainUri}" type="alternate"></Button><Button label="Try again" onClick="{init}"></Button></div>{/if}{#if error === errorCodes.PERMISSIONS_DENIED}<div class="icon"><img loading="lazy" src="{metamaskImage}" alt="metamask icon"></div><Heading class="title text-error" level="{3}">Authorization failed</Heading><p class="description">{appName}  needs access to your wallet, please login and authorize MetaMask to continue.</p><div class="btns"><Button label="Try again" onClick="{init}"></Button></div>{/if}{#if error === errorCodes.SIGNATURE_DENIED}<div class="icon"><img loading="lazy" src="{metamaskImage}" alt="metamask icon"></div><Heading class="title text-error" level="{3}">Signature failed</Heading><p class="description">{appName} needs access to your wallet, please login and authorize MetaMask to continue.</p><div class="btns"><Button label="Try again" onClick="{connect}"></Button></div>{/if}{#if error === ''}<div class="icon with-loading"><img loading="lazy" src="{metamaskImage}" alt="metamask icon"><CircularLoading class="circle-wrapper" width="{70}" height="{70}" radius="{33}"></CircularLoading></div><Heading class="title" level="{3}">MetaMask</Heading><p class="description">{appName} needs access to your wallet, please login and authorize MetaMask to continue.</p><div class="btns"><Button type="alternate" label="Dismiss" onClick="{onDismiss}"></Button></div>{/if}</div>

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
.icon {
  position: relative;
  display: block;
  margin: 0 auto 1.5rem;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border-width: 1px;
  border-style: solid;
  border-color: #e8e8ea;
  border-color: var(--l4, #e8e8ea);
  background-color: #fff;
  background-color: var(--l1, #fff);
}
.icon :global(.circle-wrapper) {
  position: absolute;
  left: 0;
  top: 0;
}

img {
  position: absolute;
  content: "";
  width: 40px;
  height: 40px;
  left: 14px;
  top: 14px;
  -o-object-fit: contain;
     object-fit: contain;
  -o-object-position: center center;
     object-position: center center;
}

.popup-inner {
  text-align: center;
  padding: 23px 27px;
}
.popup-inner :global(.title) {
  margin-bottom: 0.5rem;
}

.description {
  position: relative;
  margin: 0 auto 1.5rem;
  color: #43495c;
  color: var(--f2, #43495c);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.8;
}

.btns {
  position: relative;
  display: flex;
  justify-content: center;
}

.btns :global(.btn) {
  margin: 0.3125rem;
}

.pt9 {
  padding-top: 0.5625rem;
}</style>
