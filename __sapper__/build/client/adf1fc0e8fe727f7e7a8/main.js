!function(e){function t(t){for(var n,o,c=t[0],s=t[1],a=0,l=[];a<c.length;a++)o=c[a],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(i&&i(t);l.length;)l.shift()()}var n={},r={4:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=c);var s,a=document.createElement("script");a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.src=function(e){return o.p+"adf1fc0e8fe727f7e7a8/"+({0:"about",1:"blog",2:"blog_$slug",3:"index"}[e]||e)+"."+e+".js"}(e);var i=new Error;s=function(t){a.onerror=a.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",i.name="ChunkLoadError",i.type=o,i.request=c,n[1](i)}r[e]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:a})}),12e4);a.onerror=a.onload=s,document.head.appendChild(a)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="client/",o.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var i=s;o(o.s=1)}([function(e,t,n){"use strict";function r(){}n.d(t,"a",(function(){return te})),n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return y})),n.d(t,"e",(function(){return J})),n.d(t,"f",(function(){return w})),n.d(t,"g",(function(){return x})),n.d(t,"h",(function(){return _})),n.d(t,"i",(function(){return E})),n.d(t,"j",(function(){return u})),n.d(t,"k",(function(){return Z})),n.d(t,"l",(function(){return g})),n.d(t,"m",(function(){return m})),n.d(t,"n",(function(){return O})),n.d(t,"o",(function(){return $})),n.d(t,"p",(function(){return L})),n.d(t,"q",(function(){return d})),n.d(t,"r",(function(){return f})),n.d(t,"s",(function(){return X})),n.d(t,"t",(function(){return W})),n.d(t,"u",(function(){return M})),n.d(t,"v",(function(){return ee})),n.d(t,"w",(function(){return h})),n.d(t,"x",(function(){return i})),n.d(t,"y",(function(){return Q})),n.d(t,"z",(function(){return r})),n.d(t,"A",(function(){return b})),n.d(t,"B",(function(){return a})),n.d(t,"C",(function(){return l})),n.d(t,"D",(function(){return A})),n.d(t,"E",(function(){return k})),n.d(t,"F",(function(){return v})),n.d(t,"G",(function(){return j})),n.d(t,"H",(function(){return V})),n.d(t,"I",(function(){return K}));function o(e,t){for(const n in t)e[n]=t[n];return e}function c(e){return e()}function s(){return Object.create(null)}function a(e){e.forEach(c)}function i(e){return"function"==typeof e}function l(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function u(e,t,n){if(e){const r=f(e,t,n);return e[0](r)}}function f(e,t,n){return e[1]?o({},o(t.$$scope.ctx,e[1](n?n(t):{}))):t.$$scope.ctx}function d(e,t,n,r){return e[1]?o({},o(t.$$scope.changed||{},e[1](r?r(n):{}))):t.$$scope.changed||{}}function b(e){return null==e?"":e}new Set;function p(e,t){e.appendChild(t)}function h(e,t,n){e.insertBefore(t,n||null)}function m(e){e.parentNode.removeChild(e)}function g(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function O(e){return document.createElement(e)}function j(e){return document.createTextNode(e)}function v(){return j(" ")}function $(){return j("")}function y(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)}function w(e){return Array.from(e.childNodes)}function x(e,t,n,r){for(let r=0;r<e.length;r+=1){const o=e[r];if(o.nodeName===t){for(let e=0;e<o.attributes.length;e+=1){const t=o.attributes[e];n[t.name]||o.removeAttribute(t.name)}return e.splice(r,1)[0]}}return r?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(t):O(t)}function E(e,t){for(let n=0;n<e.length;n+=1){const r=e[n];if(3===r.nodeType)return r.data=""+t,e.splice(n,1)[0]}return j(t)}function _(e){return E(e," ")}function k(e,t){t=""+t,e.data!==t&&(e.data=t)}let S;function C(e){S=e}function P(){if(!S)throw new Error("Function called outside component initialization");return S}function A(e,t){P().$$.context.set(e,t)}function L(e){return P().$$.context.get(e)}const R=[],I=[],N=[],q=[],H=Promise.resolve();let U=!1;function z(){U||(U=!0,H.then(B))}function T(e){N.push(e)}function B(){const e=new Set;do{for(;R.length;){const e=R.shift();C(e),D(e.$$)}for(;I.length;)I.pop()();for(let t=0;t<N.length;t+=1){const n=N[t];e.has(n)||(n(),e.add(n))}N.length=0}while(R.length);for(;q.length;)q.pop()();U=!1}function D(e){e.fragment&&(e.update(e.dirty),a(e.before_update),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_update.forEach(T))}const F=new Set;let G;function M(){G={r:0,c:[],p:G}}function J(){G.r||a(G.c),G=G.p}function V(e,t){e&&e.i&&(F.delete(e),e.i(t))}function K(e,t,n,r){if(e&&e.o){if(F.has(e))return;F.add(e),G.c.push(()=>{F.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}"undefined"!=typeof window?window:global;function W(e,t){const n={},r={},o={$$scope:1};let c=e.length;for(;c--;){const s=e[c],a=t[c];if(a){for(const e in s)e in a||(r[e]=1);for(const e in a)o[e]||(n[e]=a[e],o[e]=1);e[c]=a}else for(const e in s)o[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function X(e){return"object"==typeof e&&null!==e?e:{}}let Y;function Q(e,t,n){const{fragment:r,on_mount:o,on_destroy:s,after_update:l}=e.$$;r.m(t,n),T(()=>{const t=o.map(c).filter(i);s?s.push(...t):a(t),e.$$.on_mount=[]}),l.forEach(T)}function Z(e,t){e.$$.fragment&&(a(e.$$.on_destroy),e.$$.fragment.d(t),e.$$.on_destroy=e.$$.fragment=null,e.$$.ctx={})}function ee(e,t,n,o,c,i){const l=S;C(e);const u=t.props||{},f=e.$$={fragment:null,ctx:null,props:i,update:r,not_equal:c,bound:s(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:s(),dirty:null};let d=!1;f.ctx=n?n(e,u,(t,n,r=n)=>(f.ctx&&c(f.ctx[t],f.ctx[t]=r)&&(f.bound[t]&&f.bound[t](r),d&&function(e,t){e.$$.dirty||(R.push(e),z(),e.$$.dirty=s()),e.$$.dirty[t]=!0}(e,t)),n)):u,f.update(),d=!0,a(f.before_update),f.fragment=o(f.ctx),t.target&&(t.hydrate?f.fragment.l(w(t.target)):f.fragment.c(),t.intro&&V(e.$$.fragment),Q(e,t.target,t.anchor),B()),C(l)}"undefined"!=typeof HTMLElement&&(Y=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(e,t,n){this[e]=n}$destroy(){Z(this,1),this.$destroy=r}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}});class te{$destroy(){Z(this,1),this.$destroy=r}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(){}}},function(e,t,n){"use strict";n.r(t);var r=n(0);const o=[];function c(e,t=r.z){let n;const c=[];function s(t){if(Object(r.C)(e,t)&&(e=t,n)){const t=!o.length;for(let t=0;t<c.length;t+=1){const n=c[t];n[1](),o.push(n,e)}if(t){for(let e=0;e<o.length;e+=2)o[e][0](o[e+1]);o.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(o,a=r.z){const i=[o,a];return c.push(i),1===c.length&&(n=t(s)||r.z),o(e),()=>{const e=c.indexOf(i);-1!==e&&c.splice(e,1),0===c.length&&(n(),n=null)}}}}const s={},a=()=>({});function i(e){var t,n,o,c,s,a,i,l,u,f,d,b,p,h,m,g;return{c(){t=Object(r.n)("nav"),n=Object(r.n)("ul"),o=Object(r.n)("li"),c=Object(r.n)("a"),s=Object(r.G)("home"),i=Object(r.F)(),l=Object(r.n)("li"),u=Object(r.n)("a"),f=Object(r.G)("about"),b=Object(r.F)(),p=Object(r.n)("li"),h=Object(r.n)("a"),m=Object(r.G)("blog"),this.h()},l(e){t=Object(r.g)(e,"NAV",{class:!0},!1);var a=Object(r.f)(t);n=Object(r.g)(a,"UL",{class:!0},!1);var d=Object(r.f)(n);o=Object(r.g)(d,"LI",{class:!0},!1);var g=Object(r.f)(o);c=Object(r.g)(g,"A",{class:!0,href:!0},!1);var O=Object(r.f)(c);s=Object(r.i)(O,"home"),O.forEach(r.m),g.forEach(r.m),i=Object(r.h)(d),l=Object(r.g)(d,"LI",{class:!0},!1);var j=Object(r.f)(l);u=Object(r.g)(j,"A",{class:!0,href:!0},!1);var v=Object(r.f)(u);f=Object(r.i)(v,"about"),v.forEach(r.m),j.forEach(r.m),b=Object(r.h)(d),p=Object(r.g)(d,"LI",{class:!0},!1);var $=Object(r.f)(p);h=Object(r.g)($,"A",{rel:!0,class:!0,href:!0},!1);var y=Object(r.f)(h);m=Object(r.i)(y,"blog"),y.forEach(r.m),$.forEach(r.m),d.forEach(r.m),a.forEach(r.m),this.h()},h(){Object(r.d)(c,"class",a=Object(r.A)(void 0===e.segment?"selected":"")+" svelte-11kwxiv"),Object(r.d)(c,"href","."),Object(r.d)(o,"class","svelte-11kwxiv"),Object(r.d)(u,"class",d=Object(r.A)("about"===e.segment?"selected":"")+" svelte-11kwxiv"),Object(r.d)(u,"href","about"),Object(r.d)(l,"class","svelte-11kwxiv"),Object(r.d)(h,"rel","prefetch"),Object(r.d)(h,"class",g=Object(r.A)("blog"===e.segment?"selected":"")+" svelte-11kwxiv"),Object(r.d)(h,"href","blog"),Object(r.d)(p,"class","svelte-11kwxiv"),Object(r.d)(n,"class","svelte-11kwxiv"),Object(r.d)(t,"class","svelte-11kwxiv")},m(e,a){Object(r.w)(e,t,a),Object(r.b)(t,n),Object(r.b)(n,o),Object(r.b)(o,c),Object(r.b)(c,s),Object(r.b)(n,i),Object(r.b)(n,l),Object(r.b)(l,u),Object(r.b)(u,f),Object(r.b)(n,b),Object(r.b)(n,p),Object(r.b)(p,h),Object(r.b)(h,m)},p(e,t){e.segment&&a!==(a=Object(r.A)(void 0===t.segment?"selected":"")+" svelte-11kwxiv")&&Object(r.d)(c,"class",a),e.segment&&d!==(d=Object(r.A)("about"===t.segment?"selected":"")+" svelte-11kwxiv")&&Object(r.d)(u,"class",d),e.segment&&g!==(g=Object(r.A)("blog"===t.segment?"selected":"")+" svelte-11kwxiv")&&Object(r.d)(h,"class",g)},i:r.z,o:r.z,d(e){e&&Object(r.m)(t)}}}function l(e,t,n){let{segment:r}=t;return e.$set=e=>{"segment"in e&&n("segment",r=e.segment)},{segment:r}}var u=class extends r.a{constructor(e){var t;super(),document.getElementById("svelte-11kwxiv-style")||((t=Object(r.n)("style")).id="svelte-11kwxiv-style",t.textContent="nav.svelte-11kwxiv{border-bottom:1px solid rgba(255,62,0,0.1);font-weight:300;padding:0 1em}ul.svelte-11kwxiv{margin:0;padding:0}ul.svelte-11kwxiv::after{content:'';display:block;clear:both}li.svelte-11kwxiv{display:block;float:left}.selected.svelte-11kwxiv{position:relative;display:inline-block}.selected.svelte-11kwxiv::after{position:absolute;content:'';width:calc(100% - 1em);height:2px;background-color:rgb(255,62,0);display:block;bottom:-1px}a.svelte-11kwxiv{text-decoration:none;padding:1em 0.5em;display:block}",Object(r.b)(document.head,t)),Object(r.v)(this,e,l,i,r.C,["segment"])}};function f(e){var t,n,o,c=new u({props:{segment:e.segment}});const s=e.$$slots.default,a=Object(r.j)(s,e,null);return{c(){c.$$.fragment.c(),t=Object(r.F)(),n=Object(r.n)("main"),a&&a.c(),this.h()},l(e){c.$$.fragment.l(e),t=Object(r.h)(e),n=Object(r.g)(e,"MAIN",{class:!0},!1);var o=Object(r.f)(n);a&&a.l(o),o.forEach(r.m),this.h()},h(){Object(r.d)(n,"class","svelte-1uhnsl8")},m(e,s){Object(r.y)(c,e,s),Object(r.w)(e,t,s),Object(r.w)(e,n,s),a&&a.m(n,null),o=!0},p(e,t){var n={};e.segment&&(n.segment=t.segment),c.$set(n),a&&a.p&&e.$$scope&&a.p(Object(r.q)(s,t,e,null),Object(r.r)(s,t,null))},i(e){o||(Object(r.H)(c.$$.fragment,e),Object(r.H)(a,e),o=!0)},o(e){Object(r.I)(c.$$.fragment,e),Object(r.I)(a,e),o=!1},d(e){Object(r.k)(c,e),e&&(Object(r.m)(t),Object(r.m)(n)),a&&a.d(e)}}}function d(e,t,n){let{segment:r}=t,{$$slots:o={},$$scope:c}=t;return e.$set=e=>{"segment"in e&&n("segment",r=e.segment),"$$scope"in e&&n("$$scope",c=e.$$scope)},{segment:r,$$slots:o,$$scope:c}}var b=class extends r.a{constructor(e){var t;super(),document.getElementById("svelte-1uhnsl8-style")||((t=Object(r.n)("style")).id="svelte-1uhnsl8-style",t.textContent="main.svelte-1uhnsl8{position:relative;max-width:56em;background-color:white;padding:2em;margin:0 auto;box-sizing:border-box}",Object(r.b)(document.head,t)),Object(r.v)(this,e,d,f,r.C,["segment"])}};function p(e){var t,n,o=e.error.stack+"";return{c(){t=Object(r.n)("pre"),n=Object(r.G)(o)},l(e){t=Object(r.g)(e,"PRE",{},!1);var c=Object(r.f)(t);n=Object(r.i)(c,o),c.forEach(r.m)},m(e,o){Object(r.w)(e,t,o),Object(r.b)(t,n)},p(e,t){e.error&&o!==(o=t.error.stack+"")&&Object(r.E)(n,o)},d(e){e&&Object(r.m)(t)}}}function h(e){var t,n,o,c,s,a,i,l,u,f=e.error.message+"";document.title=t=e.status;var d=e.dev&&e.error.stack&&p(e);return{c(){n=Object(r.F)(),o=Object(r.n)("h1"),c=Object(r.G)(e.status),s=Object(r.F)(),a=Object(r.n)("p"),i=Object(r.G)(f),l=Object(r.F)(),d&&d.c(),u=Object(r.o)(),this.h()},l(t){n=Object(r.h)(t),o=Object(r.g)(t,"H1",{class:!0},!1);var b=Object(r.f)(o);c=Object(r.i)(b,e.status),b.forEach(r.m),s=Object(r.h)(t),a=Object(r.g)(t,"P",{class:!0},!1);var p=Object(r.f)(a);i=Object(r.i)(p,f),p.forEach(r.m),l=Object(r.h)(t),d&&d.l(t),u=Object(r.o)(),this.h()},h(){Object(r.d)(o,"class","svelte-8od9u6"),Object(r.d)(a,"class","svelte-8od9u6")},m(e,t){Object(r.w)(e,n,t),Object(r.w)(e,o,t),Object(r.b)(o,c),Object(r.w)(e,s,t),Object(r.w)(e,a,t),Object(r.b)(a,i),Object(r.w)(e,l,t),d&&d.m(e,t),Object(r.w)(e,u,t)},p(e,n){e.status&&t!==(t=n.status)&&(document.title=t),e.status&&Object(r.E)(c,n.status),e.error&&f!==(f=n.error.message+"")&&Object(r.E)(i,f),n.dev&&n.error.stack?d?d.p(e,n):((d=p(n)).c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:r.z,o:r.z,d(e){e&&(Object(r.m)(n),Object(r.m)(o),Object(r.m)(s),Object(r.m)(a),Object(r.m)(l)),d&&d.d(e),e&&Object(r.m)(u)}}}function m(e,t,n){let{status:r,error:o}=t;return e.$set=e=>{"status"in e&&n("status",r=e.status),"error"in e&&n("error",o=e.error)},{status:r,error:o,dev:!1}}var g=class extends r.a{constructor(e){var t;super(),document.getElementById("svelte-8od9u6-style")||((t=Object(r.n)("style")).id="svelte-8od9u6-style",t.textContent="h1.svelte-8od9u6,p.svelte-8od9u6{margin:0 auto}h1.svelte-8od9u6{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-8od9u6{margin:1em auto}@media(min-width: 480px){h1.svelte-8od9u6{font-size:4em}}",Object(r.b)(document.head,t)),Object(r.v)(this,e,m,h,r.C,["status","error"])}};function O(e){var t,n,o=[e.level1.props],c=e.level1.component;function s(e){let t={};for(var n=0;n<o.length;n+=1)t=Object(r.c)(t,o[n]);return{props:t}}if(c)var a=new c(s());return{c(){a&&a.$$.fragment.c(),t=Object(r.o)()},l(e){a&&a.$$.fragment.l(e),t=Object(r.o)()},m(e,o){a&&Object(r.y)(a,e,o),Object(r.w)(e,t,o),n=!0},p(e,n){var i=e.level1?Object(r.t)(o,[Object(r.s)(n.level1.props)]):{};if(c!==(c=n.level1.component)){if(a){Object(r.u)();const e=a;Object(r.I)(e.$$.fragment,1,0,()=>{Object(r.k)(e,1)}),Object(r.e)()}c?((a=new c(s())).$$.fragment.c(),Object(r.H)(a.$$.fragment,1),Object(r.y)(a,t.parentNode,t)):a=null}else c&&a.$set(i)},i(e){n||(a&&Object(r.H)(a.$$.fragment,e),n=!0)},o(e){a&&Object(r.I)(a.$$.fragment,e),n=!1},d(e){e&&Object(r.m)(t),a&&Object(r.k)(a,e)}}}function j(e){var t,n=new g({props:{error:e.error,status:e.status}});return{c(){n.$$.fragment.c()},l(e){n.$$.fragment.l(e)},m(e,o){Object(r.y)(n,e,o),t=!0},p(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),n.$set(r)},i(e){t||(Object(r.H)(n.$$.fragment,e),t=!0)},o(e){Object(r.I)(n.$$.fragment,e),t=!1},d(e){Object(r.k)(n,e)}}}function v(e){var t,n,o,c,s=[j,O],a=[];function i(e,t){return t.error?0:1}return t=i(0,e),n=a[t]=s[t](e),{c(){n.c(),o=Object(r.o)()},l(e){n.l(e),o=Object(r.o)()},m(e,n){a[t].m(e,n),Object(r.w)(e,o,n),c=!0},p(e,c){var l=t;(t=i(0,c))===l?a[t].p(e,c):(Object(r.u)(),Object(r.I)(a[l],1,1,()=>{a[l]=null}),Object(r.e)(),(n=a[t])||(n=a[t]=s[t](c)).c(),Object(r.H)(n,1),n.m(o.parentNode,o))},i(e){c||(Object(r.H)(n),c=!0)},o(e){Object(r.I)(n),c=!1},d(e){a[t].d(e),e&&Object(r.m)(o)}}}function $(e){var t,n=[{segment:e.segments[0]},e.level0.props];let o={$$slots:{default:[v]},$$scope:{ctx:e}};for(var c=0;c<n.length;c+=1)o=Object(r.c)(o,n[c]);var s=new b({props:o});return{c(){s.$$.fragment.c()},l(e){s.$$.fragment.l(e)},m(e,n){Object(r.y)(s,e,n),t=!0},p(e,t){var o=e.segments||e.level0?Object(r.t)(n,[e.segments&&{segment:t.segments[0]},e.level0&&Object(r.s)(t.level0.props)]):{};(e.$$scope||e.error||e.status||e.level1)&&(o.$$scope={changed:e,ctx:t}),s.$set(o)},i(e){t||(Object(r.H)(s.$$.fragment,e),t=!0)},o(e){Object(r.I)(s.$$.fragment,e),t=!1},d(e){Object(r.k)(s,e)}}}function y(e,t,n){let{stores:o,error:c,status:a,segments:i,level0:l,level1:u=null}=t;return Object(r.D)(s,o),e.$set=e=>{"stores"in e&&n("stores",o=e.stores),"error"in e&&n("error",c=e.error),"status"in e&&n("status",a=e.status),"segments"in e&&n("segments",i=e.segments),"level0"in e&&n("level0",l=e.level0),"level1"in e&&n("level1",u=e.level1)},{stores:o,error:c,status:a,segments:i,level0:l,level1:u}}var w=class extends r.a{constructor(e){super(),Object(r.v)(this,e,y,$,r.C,["stores","error","status","segments","level0","level1"])}};const x=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],E=[{js:()=>n.e(3).then(n.bind(null,2)),css:"__SAPPER_CSS_PLACEHOLDER:index.svelte__"},{js:()=>n.e(0).then(n.bind(null,3)),css:"__SAPPER_CSS_PLACEHOLDER:about.svelte__"},{js:()=>n.e(1).then(n.bind(null,4)),css:"__SAPPER_CSS_PLACEHOLDER:blog/index.svelte__"},{js:()=>n.e(2).then(n.bind(null,5)),css:"__SAPPER_CSS_PLACEHOLDER:blog/[slug].svelte__"}],_=(e=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:e(t[1])})}]}])(decodeURIComponent);const k="undefined"!=typeof __SAPPER__&&__SAPPER__;let S,C,P,A=!1,L=[],R="{}";const I={page:c({}),preloading:c(null),session:c(k&&k.session)};let N,q;I.session.subscribe(async e=>{if(N=e,!A)return;q=!0;const t=G(new URL(location.href)),n=C={},{redirect:r,props:o,branch:c}=await K(t);n===C&&await V(r,c,o,t.page)});let H,U=null;let z,T=1;const B="undefined"!=typeof history?history:{pushState:(e,t,n)=>{},replaceState:(e,t,n)=>{},scrollRestoration:""},D={};function F(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[n]&&(t[n]=[t[n]]),"object"==typeof t[n]?t[n].push(r):t[n]=r}),t}function G(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(k.baseUrl))return null;let t=e.pathname.slice(k.baseUrl.length);if(""===t&&(t="/"),!x.some(e=>e.test(t)))for(let n=0;n<_.length;n+=1){const r=_[n],o=r.pattern.exec(t);if(o){const n=F(e.search),c=r.parts[r.parts.length-1],s=c.params?c.params(o):{},a={host:location.host,path:t,query:n,params:s};return{href:e.href,route:r,match:o,page:a}}}}function M(){return{x:pageXOffset,y:pageYOffset}}async function J(e,t,n,r){if(t)z=t;else{const e=M();D[z]=e,t=z=++T,D[z]=n?e:{x:0,y:0}}z=t,S&&I.preloading.set(!0);const o=U&&U.href===e.href?U.promise:K(e);U=null;const c=C={},{redirect:s,props:a,branch:i}=await o;if(c===C&&(await V(s,i,a,e.page),document.activeElement&&document.activeElement.blur(),!n)){let e=D[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}D[z]=e,e&&scrollTo(e.x,e.y)}}async function V(e,t,n,r){if(e)return function(e,t={replaceState:!1}){const n=G(new URL(e,document.baseURI));return n?(B[t.replaceState?"replaceState":"pushState"]({id:z},"",e),J(n,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(I.page.set(r),I.preloading.set(!1),S)S.$set(n);else{n.stores={page:{subscribe:I.page.subscribe},preloading:{subscribe:I.preloading.subscribe},session:I.session},n.level0={props:await P};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)Y(e.nextSibling);Y(e),Y(t)}S=new w({target:H,props:n,hydrate:!0})}L=t,R=JSON.stringify(r.query),A=!0,q=!1}async function K(e){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let o=null;const c={error:null,status:200,segments:[r[0]]},s={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(o&&(o.statusCode!==e||o.location!==t))throw new Error("Conflicting redirects");o={statusCode:e,location:t}},error:(e,t)=>{c.error="string"==typeof t?new Error(t):t,c.status=e}};let i;P||(P=k.preloaded[0]||a.call(s,{host:n.host,path:n.path,query:n.query,params:{}},N));let l=1;try{const o=JSON.stringify(n.query),a=t.pattern.exec(n.path);let u=!1;i=await Promise.all(t.parts.map(async(t,i)=>{const f=r[i];if(function(e,t,n,r){if(r!==R)return!0;const o=L[e];return!!o&&(t!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0))}(i,f,a,o)&&(u=!0),c.segments[l]=r[i+1],!t)return{segment:f};const d=l++;if(!q&&!u&&L[i]&&L[i].part===t.i)return L[i];u=!1;const{default:b,preload:p}=await X(E[t.i]);let h;return h=A||!k.preloaded[i+1]?p?await p.call(s,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},N):{}:k.preloaded[i+1],c[`level${d}`]={component:b,props:h,segment:f,match:a,part:t.i}}))}catch(e){c.error=e,c.status=500,i=[]}return{redirect:o,props:c,branch:i}}function W(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=()=>e(),r.onerror=n,document.head.appendChild(r)})}function X(e){const t="string"==typeof e.css?[]:e.css.map(W);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}function Y(e){e.parentNode.removeChild(e)}function Q(e){const t=G(new URL(e,document.baseURI));if(t)return U&&e===U.href||function(e,t){U={href:e,promise:t}}(e,K(t)),U.promise}let Z;function ee(e){clearTimeout(Z),Z=setTimeout(()=>{te(e)},20)}function te(e){const t=re(e.target);t&&"prefetch"===t.rel&&Q(t.href)}function ne(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=re(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const c=G(o);if(c){J(c,null,t.hasAttribute("sapper-noscroll"),o.hash),e.preventDefault(),B.pushState({id:z},"",o.href)}}function re(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function oe(e){if(D[z]=M(),e.state){const t=G(new URL(location.href));t?J(t,e.state.id):location.href=location.href}else(function(e){z=e})(T=T+1),B.replaceState({id:z},"",location.href)}var ce,se;ce={target:document.querySelector("#sapper")},"scrollRestoration"in B&&(B.scrollRestoration="manual"),se=ce.target,H=se,addEventListener("click",ne),addEventListener("popstate",oe),addEventListener("touchstart",te),addEventListener("mousemove",ee),Promise.resolve().then(()=>{const{hash:e,href:t}=location;B.replaceState({id:T},"",t);const n=new URL(location.href);if(k.error)return function(e){const{host:t,pathname:n,search:r}=location,{session:o,preloaded:c,status:s,error:a}=k;P||(P=c&&c[0]),V(null,[],{error:a,status:s,session:o,level0:{props:P},level1:{props:{status:s,error:a},component:g},segments:c},{host:t,path:n,query:F(r),params:{}})}();const r=G(n);return r?J(r,T,!0,e):void 0})}]);