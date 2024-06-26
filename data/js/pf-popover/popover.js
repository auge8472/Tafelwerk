"use strict";(()=>{var c=class extends Event{oldState;newState;constructor(t,{oldState:o="",newState:r="",...i}={}){super(t,i),this.oldState=String(o||""),this.newState=String(r||"")}},N=new WeakMap;function P(e,t,o){N.set(e,setTimeout(()=>{N.has(e)&&e.dispatchEvent(new c("toggle",{cancelable:!1,oldState:t,newState:o}))},0))}var x=globalThis.ShadowRoot||function(){},V=globalThis.HTMLDialogElement||function(){},y=new WeakMap,p=new WeakMap,h=new WeakMap;function b(e){return h.get(e)||"hidden"}var L=new WeakMap;function O(e){let t=e.popoverTargetElement;if(!(t instanceof HTMLElement))return;let o=b(t);e.popoverTargetAction==="show"&&o==="showing"||e.popoverTargetAction==="hide"&&o==="hidden"||(o==="showing"?v(t,!0,!0):d(t,!1)&&(L.set(t,e),H(t)))}function d(e,t){return!(e.popover!=="auto"&&e.popover!=="manual"||!e.isConnected||t&&b(e)!=="showing"||!t&&b(e)!=="hidden"||e instanceof V&&e.hasAttribute("open")||document.fullscreenElement===e)}function F(e){return e?Array.from(p.get(e.ownerDocument)||[]).indexOf(e)+1:0}function $(e){let t=W(e),o=U(e);return F(t)>F(o)?t:o}function M(e){let t=p.get(e);for(let o of t||[])if(!o.isConnected)t.delete(o);else return o;return null}function g(e){return typeof e.getRootNode=="function"?e.getRootNode():e.parentNode?g(e.parentNode):e}function W(e){for(;e;){if(e instanceof HTMLElement&&e.popover==="auto"&&h.get(e)==="showing")return e;if(e=e.parentElement||g(e),e instanceof x&&(e=e.host),e instanceof Document)return}}function U(e){for(;e;){let t=e.popoverTargetElement;if(t instanceof HTMLElement)return t;if(e=e.parentElement||g(e),e instanceof x&&(e=e.host),e instanceof Document)return}}function G(e){let t=new Map,o=0;for(let l of p.get(e.ownerDocument)||[])t.set(l,o),o+=1;t.set(e,o),o+=1;let r=null;function i(l){let a=W(l);if(a===null)return null;let T=t.get(a);(r===null||t.get(r)<T)&&(r=a)}return i(e.parentElement||g(e)),r}function Q(e){return e.hidden||e instanceof x||(e instanceof HTMLButtonElement||e instanceof HTMLInputElement||e instanceof HTMLSelectElement||e instanceof HTMLTextAreaElement||e instanceof HTMLOptGroupElement||e instanceof HTMLOptionElement||e instanceof HTMLFieldSetElement)&&e.disabled||e instanceof HTMLInputElement&&e.type==="hidden"||e instanceof HTMLAnchorElement&&e.href===""?!1:typeof e.tabIndex=="number"&&e.tabIndex!==-1}function _(e){if(e.shadowRoot&&e.shadowRoot.delegatesFocus!==!0)return null;let t=e;t.shadowRoot&&(t=t.shadowRoot);let o=t.querySelector("[autofocus]");if(o)return o;{let l=t.querySelectorAll("slot");for(let a of l){let T=a.assignedElements({flatten:!0});for(let n of T){if(n.hasAttribute("autofocus"))return n;if(o=n.querySelector("[autofocus]"),o)return o}}}let r=e.ownerDocument.createTreeWalker(t,NodeFilter.SHOW_ELEMENT),i=r.currentNode;for(;i;){if(Q(i))return i;i=r.nextNode()}}function J(e){_(e)?.focus()}var S=new WeakMap;function H(e){if(!d(e,!1))return;let t=e.ownerDocument;if(!e.dispatchEvent(new c("beforetoggle",{cancelable:!0,oldState:"closed",newState:"open"}))||!d(e,!1))return;let o=!1;if(e.popover==="auto"){let i=e.getAttribute("popover"),l=G(e)||t;if(w(l,!1,!0),i!==e.getAttribute("popover")||!d(e,!1))return}M(t)||(o=!0),S.delete(e);let r=t.activeElement;e.classList.add(":popover-open"),h.set(e,"showing"),y.has(t)||y.set(t,new Set),y.get(t).add(e),J(e),e.popover==="auto"&&(p.has(t)||p.set(t,new Set),p.get(t).add(e),q(L.get(e),!0)),o&&r&&e.popover==="auto"&&S.set(e,r),P(e,"closed","open")}function v(e,t=!1,o=!1){if(!d(e,!0))return;let r=e.ownerDocument;if(e.popover==="auto"&&(w(e,t,o),!d(e,!0))||(q(L.get(e),!1),L.delete(e),o&&(e.dispatchEvent(new c("beforetoggle",{oldState:"open",newState:"closed"})),!d(e,!0))))return;y.get(r)?.delete(e),p.get(r)?.delete(e),e.classList.remove(":popover-open"),h.set(e,"hidden"),o&&P(e,"open","closed");let i=S.get(e);i&&(S.delete(e),t&&i.focus())}function B(e,t=!1,o=!1){let r=M(e);for(;r;)v(r,t,o),r=M(e)}function w(e,t,o){let r=e.ownerDocument||e;if(e instanceof Document)return B(r,t,o);let i=null,l=!1;for(let a of p.get(r)||[])if(a===e)l=!0;else if(l){i=a;break}if(!l)return B(r,t,o);for(;i&&b(i)==="showing"&&p.get(r)?.size;)v(i,t,o)}var A=new WeakMap;function D(e){if(!e.isTrusted)return;let t=e.composedPath()[0];if(!t)return;let o=t.ownerDocument;if(!M(o))return;let i=$(t);if(i&&e.type==="pointerdown")A.set(o,i);else if(e.type==="pointerup"){let l=A.get(o)===i;A.delete(o),l&&w(i||o,!1,!0)}}var k=new WeakMap;function q(e,t=!1){if(!e)return;k.has(e)||k.set(e,e.getAttribute("aria-expanded"));let o=e.popoverTargetElement;if(o instanceof HTMLElement&&o.popover==="auto")e.setAttribute("aria-expanded",String(t));else{let r=k.get(e);r?e.setAttribute("aria-expanded",r):e.removeAttribute("aria-expanded")}}var C=globalThis.ShadowRoot||function(){};function j(){return typeof HTMLElement<"u"&&typeof HTMLElement.prototype=="object"&&"popover"in HTMLElement.prototype}function f(e,t,o){let r=e[t];Object.defineProperty(e,t,{value(i){return r.call(this,o(i))}})}var X=/(^|[^\\]):popover-open\b/g;function Y(){return typeof globalThis.CSSLayerBlockRule=="function"}function Z(){let e=Y();return`
${e?"@layer popover-polyfill {":""}
  :where([popover]) {
    position: fixed;
    z-index: 2147483647;
    inset: 0;
    padding: 0.25em;
    width: fit-content;
    height: fit-content;
    border-width: initial;
    border-color: initial;
    border-image: initial;
    border-style: solid;
    background-color: canvas;
    color: canvastext;
    overflow: auto;
    margin: auto;
  }

  :where([popover]:not(.\\:popover-open)) {
    display: none;
  }

  :where(dialog[popover].\\:popover-open) {
    display: block;
  }

  :where(dialog[popover][open]) {
    display: revert;
  }

  :where([anchor].\\:popover-open) {
    inset: auto;
  }

  :where([anchor]:popover-open) {
    inset: auto;
  }

  @supports not (background-color: canvas) {
    :where([popover]) {
      background-color: white;
      color: black;
    }
  }

  @supports (width: -moz-fit-content) {
    :where([popover]) {
      width: -moz-fit-content;
      height: -moz-fit-content;
    }
  }

  @supports not (inset: 0) {
    :where([popover]) {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
${e?"}":""}
`}var m=null;function I(e){let t=Z();if(m===null)try{m=new CSSStyleSheet,m.replaceSync(t)}catch{m=!1}if(m===!1){let o=document.createElement("style");o.textContent=t,e instanceof Document?e.head.prepend(o):e.prepend(o)}else e.adoptedStyleSheets=[m,...e.adoptedStyleSheets]}function K(){if(typeof window>"u")return;window.ToggleEvent=window.ToggleEvent||c;function e(n){return n?.includes(":popover-open")&&(n=n.replace(X,"$1.\\:popover-open")),n}f(Document.prototype,"querySelector",e),f(Document.prototype,"querySelectorAll",e),f(Element.prototype,"querySelector",e),f(Element.prototype,"querySelectorAll",e),f(Element.prototype,"matches",e),f(Element.prototype,"closest",e),f(DocumentFragment.prototype,"querySelectorAll",e),f(DocumentFragment.prototype,"querySelectorAll",e),Object.defineProperties(HTMLElement.prototype,{popover:{enumerable:!0,configurable:!0,get(){if(!this.hasAttribute("popover"))return null;let n=(this.getAttribute("popover")||"").toLowerCase();return n===""||n=="auto"?"auto":"manual"},set(n){this.setAttribute("popover",n)}},showPopover:{enumerable:!0,configurable:!0,value(){H(this)}},hidePopover:{enumerable:!0,configurable:!0,value(){v(this,!0,!0)}},togglePopover:{enumerable:!0,configurable:!0,value(n){h.get(this)==="showing"&&n===void 0||n===!1?v(this,!0,!0):(n===void 0||n===!0)&&H(this)}}});let t=Element.prototype.attachShadow;t&&Object.defineProperties(Element.prototype,{attachShadow:{enumerable:!0,configurable:!0,writable:!0,value(n){let s=t.call(this,n);return I(s),s}}});let o=HTMLElement.prototype.attachInternals;o&&Object.defineProperties(HTMLElement.prototype,{attachInternals:{enumerable:!0,configurable:!0,writable:!0,value(){let n=o.call(this);return n.shadowRoot&&I(n.shadowRoot),n}}});let r=new WeakMap;function i(n){Object.defineProperties(n.prototype,{popoverTargetElement:{enumerable:!0,configurable:!0,set(s){if(s===null)this.removeAttribute("popovertarget"),r.delete(this);else if(s instanceof Element)this.setAttribute("popovertarget",""),r.set(this,s);else throw new TypeError("popoverTargetElement must be an element or null")},get(){if(this.localName!=="button"&&this.localName!=="input"||this.localName==="input"&&this.type!=="reset"&&this.type!=="image"&&this.type!=="button"||this.disabled||this.form&&this.type==="submit")return null;let s=r.get(this);if(s&&s.isConnected)return s;if(s&&!s.isConnected)return r.delete(this),null;let u=g(this),E=this.getAttribute("popovertarget");return(u instanceof Document||u instanceof C)&&E&&u.getElementById(E)||null}},popoverTargetAction:{enumerable:!0,configurable:!0,get(){let s=(this.getAttribute("popovertargetaction")||"").toLowerCase();return s==="show"||s==="hide"?s:"toggle"},set(s){this.setAttribute("popovertargetaction",s)}}})}i(HTMLButtonElement),i(HTMLInputElement);let l=n=>{let s=n.composedPath(),u=s[0];if(!(u instanceof Element)||u?.shadowRoot)return;let E=g(u);if(!(E instanceof C||E instanceof Document))return;let R=s.find(z=>z.matches?.("[popovertargetaction],[popovertarget]"));if(R){O(R),n.preventDefault();return}},a=n=>{let s=n.key,u=n.target;!n.defaultPrevented&&u&&(s==="Escape"||s==="Esc")&&w(u.ownerDocument,!0,!0)};(n=>{n.addEventListener("click",l),n.addEventListener("keydown",a),n.addEventListener("pointerdown",D),n.addEventListener("pointerup",D)})(document),I(document)}j()||K();})();
//# sourceMappingURL=popover.iife.min.js.map
