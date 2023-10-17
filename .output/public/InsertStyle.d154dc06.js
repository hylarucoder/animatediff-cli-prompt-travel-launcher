import{h as w}from"./index.esm.201addbf.js";import{D as S,r as u,I as x,$ as d,m as I,s as k}from"./entry.978b97f1.js";var j=Symbol("iconContext"),O=function(){return S(j,{prefixCls:u("anticon"),rootClassName:u(""),csp:u()})};function f(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function R(n,e){return n&&n.contains?n.contains(e):!1}var g="data-vc-order",N="vc-icon-key",s=new Map;function v(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.mark;return e?e.startsWith("data-")?e:"data-".concat(e):N}function l(n){if(n.attachTo)return n.attachTo;var e=document.querySelector("head");return e||document.body}function A(n){return n==="queue"?"prependQueue":n?"prepend":"append"}function h(n){return Array.from((s.get(n)||n).children).filter(function(e){return e.tagName==="STYLE"})}function y(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!f())return null;var t=e.csp,i=e.prepend,r=document.createElement("style");r.setAttribute(g,A(i)),t&&t.nonce&&(r.nonce=t.nonce),r.innerHTML=n;var a=l(e),c=a.firstChild;if(i){if(i==="queue"){var o=h(a).filter(function(C){return["prepend","prependQueue"].includes(C.getAttribute(g))});if(o.length)return a.insertBefore(r,o[o.length-1].nextSibling),r}a.insertBefore(r,c)}else a.appendChild(r);return r}function E(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=l(e);return h(t).find(function(i){return i.getAttribute(v(e))===n})}function P(n,e){var t=s.get(n);if(!t||!R(document,t)){var i=y("",e),r=i.parentNode;s.set(n,r),n.removeChild(i)}}function T(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=l(t);P(i,t);var r=E(e,t);if(r)return t.csp&&t.csp.nonce&&r.nonce!==t.csp.nonce&&(r.nonce=t.csp.nonce),r.innerHTML!==n&&(r.innerHTML=n),r;var a=y(n,t);return a.setAttribute(v(t),e),a}function m(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),i.forEach(function(r){D(n,r,t[r])})}return n}function D(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function H(n,e){}function Q(n){return typeof n=="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(typeof n.icon=="object"||typeof n.icon=="function")}function p(n,e,t){return t?d(n.tag,m({key:e},t,n.attrs),(n.children||[]).map(function(i,r){return p(i,"".concat(e,"-").concat(n.tag,"-").concat(r))})):d(n.tag,m({key:e},n.attrs),(n.children||[]).map(function(i,r){return p(i,"".concat(e,"-").concat(n.tag,"-").concat(r))}))}function Y(n){return w(n)[0]}function $(n){return n?Array.isArray(n)?n:[n]:[]}var K={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},M=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;function b(n){return n&&n.getRootNode&&n.getRootNode()}function _(n){return f()?b(n)instanceof ShadowRoot:!1}function L(n){return _(n)?b(n):null}var q=function(){var e=O(),t=e.prefixCls,i=e.csp,r=I(),a=M;t&&(a=a.replace(/anticon/g,t.value)),x(function(){if(f()){var c=r.vnode.el,o=L(c);T(a,"@ant-design-vue-icons",{prepend:!0,csp:i.value,attachTo:o})}})},U=k({name:"InsertStyles",setup:function(){return q(),function(){return null}}});export{U as I,p as a,Y as g,Q as i,$ as n,K as s,O as u,H as w};
