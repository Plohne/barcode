!function(){let e,t,r;var n,i,s,a,o,l,h,u,c,d,f,p,m,g,y,v,w,b,E,_,T,I,S,C,A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},k={},N={},R=A.parcelRequirea202;null==R&&((R=function(e){if(e in k)return k[e].exports;if(e in N){var t=N[e];delete N[e];var r={id:e,exports:{}};return k[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){N[e]=t},A.parcelRequirea202=R);var D=R.register;D("6qd2L",function(e,t){var r,n,i,s=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function l(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var h=[],u=!1,c=-1;function d(){u&&i&&(u=!1,i.length?h=i.concat(h):c=-1,h.length&&f())}function f(){if(!u){var e=l(d);u=!0;for(var t=h.length;t;){for(i=h,h=[];++c<t;)i&&i[c].run();c=-1,t=h.length}i=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function m(){}s.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];h.push(new p(e,t)),1!==h.length||u||l(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(e){return[]},s.binding=function(e){throw Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw Error("process.chdir is not supported")},s.umask=function(){return 0}}),D("3c8ZQ",function(e,t){e.exports=R("4WKyX")(R("iE7OH").resolve("Oreqb")).then(()=>R("dZsGG"))}),D("4WKyX",function(e,t){var r=R("2prpb");e.exports=r(function(e){return new Promise(function(t,r){if([].concat(document.getElementsByTagName("script")).some(function(t){return t.src===e})){t();return}var n=document.createElement("link");n.href=e,n.rel="preload",n.as="script",document.head.appendChild(n);var i=document.createElement("script");i.async=!0,i.type="text/javascript",i.src=e,i.onerror=function(t){var n=TypeError("Failed to fetch dynamically imported module: ".concat(e,". Error: ").concat(t.message));i.onerror=i.onload=null,i.remove(),r(n)},i.onload=function(){i.onerror=i.onload=null,t()},document.getElementsByTagName("head")[0].appendChild(i)})})}),D("2prpb",function(e,t){var r={},n={},i={};e.exports=function(e,t){return function(s){var a=function(e){switch(e){case"preload":return n;case"prefetch":return i;default:return r}}(t);return a[s]?a[s]:a[s]=e.apply(null,arguments).catch(function(e){throw delete a[s],e})}}});let L=(e="",t="")=>{let r=Math.random().toString(36).substring(2,8);return`${"string"==typeof e&&""!==e?e+"-":""}${r}${"string"==typeof t&&""!==t?"-"+t:""}`},O=(e,t)=>{if(Object.prototype.hasOwnProperty.call(t,e)){let r=t[e];delete t[e],t[e]=r}},P=0,x=`
  :host {
    box-sizing: border-box;
    display: inline-block;
    contain: content;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.375rem 0.75rem;
    white-space: nowrap;
    cursor: pointer;
  }

  :host([disabled]) .tab {
    opacity: 0.7;
    cursor: not-allowed;
  }

  :host([selected]) .tab {
    color: var(--selected-tab-color);
    background-color: var(--selected-tab-bg-color);
  }

  .tab__close {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    font-size: inherit;
    cursor: pointer;
  }
`,M=document.createElement("template");M.innerHTML=`
  <style>
    ${x}
  </style>

  <div part="base" class="tab">
    <slot></slot>
  </div>
`;class U extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(M.content.cloneNode(!0))}static get observedAttributes(){return["selected","disabled","closable"]}attributeChangedCallback(e,t,r){if("selected"===e&&t!==r&&this.setAttribute("aria-selected",this.selected.toString()),"disabled"===e&&t!==r&&(this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0")),"closable"===e&&t!==r){if(this.closable){let e=document.createElement("span");e.className="tab__close",e.setAttribute("part","close-tab"),e.innerHTML='<svg part="close-tab-icon" xmlns="http://www.w3.org/2000/svg" width="0.875em" height="0.875em" fill="currentColor" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>',this.shadowRoot?.querySelector(".tab")?.appendChild(e),e.addEventListener("click",this.#e)}else{let e=this.shadowRoot?.querySelector(".tab__close");e?.removeEventListener("click",this.#e),e?.remove()}}}connectedCallback(){this.#t("selected"),this.#t("disabled"),this.#t("closable"),this.id||(this.id=L("tab",(++P).toString())),this.setAttribute("slot","tab"),this.setAttribute("role","tab"),this.setAttribute("aria-selected","false"),this.setAttribute("tabindex",this.disabled?"-1":"0")}disconnectedCallback(){let e=this.shadowRoot?.querySelector(".tab__close");e?.removeEventListener("click",this.#e)}get selected(){return this.hasAttribute("selected")}set selected(e){this.toggleAttribute("selected",!!e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get closable(){return this.hasAttribute("closable")}set closable(e){this.toggleAttribute("closable",!!e)}#e=e=>{e.stopPropagation(),this.dispatchEvent(new CustomEvent("a-tab-close",{bubbles:!0,composed:!0,detail:{tabId:this.id}}))};#t(e){return O(e,this)}static defineCustomElement(e="a-tab"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,U)}}U.defineCustomElement();let V=0,F=`
  :host {
    box-sizing: border-box;
    display: block;
    contain: content;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }
`,B=document.createElement("template");B.innerHTML=`
  <style>
    ${F}
  </style>

  <div part="base" class="tab-panel">
    <slot></slot>
  </div>
`;class z extends HTMLElement{constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(B.content.cloneNode(!0))}connectedCallback(){this.setAttribute("slot","panel"),this.setAttribute("role","tabpanel"),this.setAttribute("hidden",""),this.id||(this.id=L("panel",(++V).toString()))}static defineCustomElement(e="a-tab-panel"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,z)}}z.defineCustomElement();let j={TOP:"top",BOTTOM:"bottom",START:"start",END:"end"},q=Object.entries(j).map(([,e])=>e),$={AUTO:"auto",MANUAL:"manual"},H={DOWN:"ArrowDown",LEFT:"ArrowLeft",RIGHT:"ArrowRight",UP:"ArrowUp",HOME:"Home",END:"End",ENTER:"Enter",SPACE:" "},K=`
  :host {
    --selected-tab-color: #005fcc;
    --selected-tab-bg-color: transparent;
    --tabs-scroll-behavior: smooth;
    --scroll-button-width: 2.125em;
    --scroll-button-height: 2.125em;
    --scroll-button-inline-offset: 0rem;

    box-sizing: border-box;
    display: block;
    contain: content;
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      --tabs-scroll-behavior: auto;
    }
  }

  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  .tab-group {
    display: flex;
    width: 100%;
  }

  .tab-group__nav {
    position: relative;
  }

  .tab-group__nav--has-scroll-controls {
    padding: 0 calc(var(--scroll-button-width) + var(--scroll-button-inline-offset));
  }

  .tab-group__scroll-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: var(--scroll-button-width);
    height: var(--scroll-button-height);
    padding: 0; /* Required for iOS, otherwise the svg is not visible: https://stackoverflow.com/questions/66532071/flex-svg-behaving-strange-in-ios-safari-14-0-3 */
    border: 0;
    z-index: 1;
    background-color: transparent;
    font-size: inherit;
    cursor: pointer;
    color: currentColor;
  }

  .tab-group__scroll-button--start {
    left: var(--scroll-button-inline-offset);
  }

  .tab-group__scroll-button--end {
    right: var(--scroll-button-inline-offset);
  }

  .tab-group__tabs {
    display: flex;
    padding: 0.25rem;
    overflow-x: auto;
    scroll-behavior: var(--tabs-scroll-behavior);
    scrollbar-width: none;
  }

  .tab-group__tabs::-webkit-scrollbar {
    display: none;
  }

  .tab-group__panels {
    padding: 1rem 0;
  }

  /* placement="top" */
  .tab-group,
  :host([placement="${j.TOP}"]) .tab-group {
    flex-direction: column;
  }

  /* placement="bottom" */
  :host([placement="${j.BOTTOM}"]) .tab-group {
    flex-direction: column;
  }

  :host([placement="${j.BOTTOM}"]) .tab-group__nav {
    order: 1;
  }

  /* placement="start" */
  :host([placement="${j.START}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${j.START}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${j.START}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }

  /* placement="end" */
  :host([placement="${j.END}"]) .tab-group {
    flex-direction: row;
  }

  :host([placement="${j.END}"]) .tab-group__nav {
    order: 1;
  }

  :host([placement="${j.END}"]) .tab-group__tabs {
    flex-direction: column;
    align-items: flex-start;
  }

  :host([placement="${j.END}"]) .tab-group__panels {
    flex: 1;
    padding: 0 1rem;
  }
`,G=document.createElement("template");G.innerHTML=`
  <style>
    ${K}
  </style>

  <div part="base" class="tab-group">
    <div part="nav" class="tab-group__nav">
      <button type="button" part="scroll-button scroll-button--start" class="tab-group__scroll-button tab-group__scroll-button--start" aria-label="Scroll to start" tabindex="-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>

      <div part="tabs" class="tab-group__tabs" role="tablist" tabindex="-1">
        <slot name="tab"></slot>
      </div>

      <button type="button" part="scroll-button scroll-button--end" class="tab-group__scroll-button tab-group__scroll-button--end" aria-label="Scroll to end" tabindex="-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1em" fill="currentColor" viewBox="0 0 16 16" part="scroll-button-icon">
          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
    </div>

    <div part="panels" class="tab-group__panels">
      <slot name="panel"></slot>
    </div>
  </div>
`;class W extends HTMLElement{#r=null;#n=null;#i=!1;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(G.content.cloneNode(!0))}static get observedAttributes(){return["placement","no-scroll-controls"]}attributeChangedCallback(e,t,r){"placement"===e&&t!==r&&this.#s(),"no-scroll-controls"===e&&t!==r&&this.#s()}get placement(){return this.getAttribute("placement")||j.TOP}set placement(e){null!=e&&this.setAttribute("placement",e)}get noScrollControls(){return this.hasAttribute("no-scroll-controls")}set noScrollControls(e){this.toggleAttribute("no-scroll-controls",!!e)}get scrollDistance(){return Math.abs(Number(this.getAttribute("scroll-distance")))||200}set scrollDistance(e){this.setAttribute("scroll-distance",Math.abs(e).toString()||"200")}get activation(){return this.getAttribute("activation")||$.AUTO}set activation(e){this.setAttribute("activation",e||$.AUTO)}get noTabCycling(){return this.hasAttribute("no-tab-cycling")}set noTabCycling(e){this.toggleAttribute("no-tab-cycling",!!e)}connectedCallback(){this.#t("placement"),this.#t("noScrollControls"),this.#t("scrollDistance"),this.#t("activation"),this.#t("noTabCycling");let e=this.shadowRoot?.querySelector("slot[name=tab]"),t=this.shadowRoot?.querySelector("slot[name=panel]"),r=this.shadowRoot?.querySelector(".tab-group__tabs"),n=this.shadowRoot?.querySelector(".tab-group__nav"),i=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);e?.addEventListener("slotchange",this.#a),t?.addEventListener("slotchange",this.#a),r?.addEventListener("click",this.#o),r?.addEventListener("keydown",this.#l),i.forEach(e=>e.addEventListener("click",this.#h)),this.addEventListener("a-tab-close",this.#u),"ResizeObserver"in window&&(this.#r=new ResizeObserver(e=>{this.#n=window.requestAnimationFrame(()=>{let t=e?.[0],r=t?.target,s=r?.scrollWidth>r?.clientWidth;i.forEach(e=>e.toggleAttribute("hidden",!s)),n?.part.toggle("nav--has-scroll-controls",s),n?.classList.toggle("tab-group__nav--has-scroll-controls",s)})})),this.#c(),this.#s()}disconnectedCallback(){let e=this.shadowRoot?.querySelector("slot[name=tab]"),t=this.shadowRoot?.querySelector("slot[name=panel]"),r=this.shadowRoot?.querySelector(".tab-group__tabs"),n=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);e?.removeEventListener("slotchange",this.#a),t?.removeEventListener("slotchange",this.#a),r?.removeEventListener("click",this.#o),r?.removeEventListener("keydown",this.#l),n.forEach(e=>e.removeEventListener("click",this.#h)),this.removeEventListener("a-tab-close",this.#u),this.#d()}#f(){if(!this.#r)return;let e=this.shadowRoot?.querySelector(".tab-group__tabs");e&&(this.#r.unobserve(e),this.#r.observe(e))}#d(){this.#r&&(this.#r.disconnect(),null!==this.#n&&(window.cancelAnimationFrame(this.#n),this.#n=null))}#p(){return getComputedStyle(this).direction||"ltr"}#c(){this.hidden=0===this.#m().length}#g(){let e=this.#m();this.#c(),e.forEach(e=>{let t=e.nextElementSibling;if(!t||"a-tab-panel"!==t.tagName.toLowerCase())return console.error(`Tab #${e.id} is not a sibling of a <a-tab-panel>`);e.setAttribute("aria-controls",t.id),t.setAttribute("aria-labelledby",e.id)})}#y(){return Array.from(this.querySelectorAll("a-tab-panel"))}#m(){return Array.from(this.querySelectorAll("a-tab"))}#v(e){let t=e.getAttribute("aria-controls");return this.querySelector(`#${t}`)}#w(){return this.#m().find(e=>!e.disabled)||null}#b(){let e=this.#m();for(let t=e.length-1;t>=0;t--)if(!e[t].disabled)return e[t];return null}#E(){let e=this.#m(),t=this.activation===$.MANUAL?e.findIndex(e=>e.matches(":focus"))-1:e.findIndex(e=>e.selected)-1;for(;e[(t+e.length)%e.length].disabled;)t--;return this.noTabCycling&&t<0?null:e[(t+e.length)%e.length]}#_(){let e=this.#m(),t=this.activation===$.MANUAL?e.findIndex(e=>e.matches(":focus"))+1:e.findIndex(e=>e.selected)+1;for(;e[t%e.length].disabled;)t++;return this.noTabCycling&&t>=e.length?null:e[t%e.length]}#T(){let e=this.#m(),t=this.#y();e.forEach(e=>e.selected=!1),t.forEach(e=>e.hidden=!0)}#s(){let e=this.shadowRoot?.querySelector(".tab-group__nav"),t=Array.from(this.shadowRoot?.querySelectorAll(".tab-group__scroll-button")||[]);this.noScrollControls||this.placement===j.START||this.placement===j.END?(this.#d(),t.forEach(e=>e.hidden=!0),e?.part.remove("nav--has-scroll-controls"),e?.classList.remove("tab-group__nav--has-scroll-controls")):(this.#f(),t.forEach(e=>e.hidden=!1))}#I(){let e=this.#m(),t=e.find(e=>e.selected&&!e.disabled)||e.find(e=>!e.disabled);t&&(this.#i&&!t.selected&&this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:t.id}})),this.#S(t))}#S(e){this.#T(),e&&(e.selected=!0);let t=this.#v(e);t&&(t.hidden=!1)}#a=e=>{this.#g(),this.#s(),this.#I(),"tab"===e.target.name&&(this.#i=!0)};#l=e=>{if("a-tab"!==e.target.tagName.toLowerCase()||e.altKey)return;let t=q.includes(this.placement||"")?this.placement:j.TOP,r=[j.TOP,j.BOTTOM].includes(t||"")?"horizontal":"vertical",n=this.#p(),i=null;switch(e.key){case H.LEFT:"horizontal"===r&&(i="ltr"===n?this.#E():this.#_())&&(this.activation===$.MANUAL?i.focus():this.selectTab(i));break;case H.RIGHT:"horizontal"===r&&(i="ltr"===n?this.#_():this.#E())&&(this.activation===$.MANUAL?i.focus():this.selectTab(i));break;case H.UP:"vertical"===r&&(i=this.#E())&&(this.activation===$.MANUAL?i.focus():this.selectTab(i));break;case H.DOWN:"vertical"===r&&(i=this.#_())&&(this.activation===$.MANUAL?i.focus():this.selectTab(i));break;case H.HOME:(i=this.#w())&&(this.activation===$.MANUAL?i.focus():this.selectTab(i));break;case H.END:(i=this.#b())&&(this.activation===$.MANUAL?i.focus():this.selectTab(i));break;case H.ENTER:case H.SPACE:(i=e.target)&&this.selectTab(i);break;default:return}e.preventDefault()};#o=e=>{let t=e.target.closest("a-tab");t&&this.selectTab(t)};#h=e=>{let t=e.target.closest(".tab-group__scroll-button"),r=this.shadowRoot?.querySelector(".tab-group__tabs");if(!t||!r)return;let n=t.classList.contains("tab-group__scroll-button--start")?-1:1,i=r.scrollLeft;r.scrollTo({left:i+n*this.scrollDistance})};#u=e=>{let t=e.target,r=this.#v(t);t&&(t.remove(),t.selected&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:t.id}}))),r&&"a-tab-panel"===r.tagName.toLowerCase()&&r.remove()};#t(e){return O(e,this)}selectTabByIndex(e){let t=this.#m()[e];t&&this.selectTab(t)}selectTabById(e){let t=this.#m().find(t=>t.id===e);t&&this.selectTab(t)}selectTab(e){let t=this.#m().find(e=>e.selected);!e||e.disabled||e.selected||"a-tab"!==e.tagName.toLowerCase()||(this.#S(e),window.requestAnimationFrame(()=>{e.scrollIntoView({inline:"nearest",block:"nearest"}),e.focus()}),t&&this.dispatchEvent(new CustomEvent("a-tab-hide",{bubbles:!0,composed:!0,detail:{tabId:t.id}})),this.dispatchEvent(new CustomEvent("a-tab-show",{bubbles:!0,composed:!0,detail:{tabId:e.id}})))}static defineCustomElement(e="a-tab-group"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,W)}}W.defineCustomElement(),Object.defineProperty({},"WebShare",{get:function(){return X},set:void 0,enumerable:!0,configurable:!0});let Q=`
  :host {
    display: inline-block;
  }
`,Y=document.createElement("template");Y.innerHTML=`
  <style>${Q}</style>
  <slot name="button"><button type="button" part="button"><slot name="button-content">Share</slot></button></slot>
`;class X extends HTMLElement{#e;#t;#r=[];constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open",delegatesFocus:!0}).appendChild(Y.content.cloneNode(!0)),this.#e=this.shadowRoot?.querySelector('slot[name="button"]')||null,this.#t=this.#a()}static get observedAttributes(){return["disabled"]}attributeChangedCallback(e,t,r){"disabled"===e&&t!==r&&this.#t&&(this.#t.toggleAttribute("disabled",this.disabled),this.#t.setAttribute("aria-disabled",this.disabled.toString()),this.#t.part&&this.#t.part.contains("button")&&this.#t.part.toggle("button--disabled",this.disabled))}connectedCallback(){this.#o("shareUrl"),this.#o("shareTitle"),this.#o("shareText"),this.#o("shareFiles"),this.#o("disabled"),this.#e?.addEventListener("slotchange",this.#i),this.#t?.addEventListener("click",this.#l)}disconnectedCallback(){this.#e?.removeEventListener("slotchange",this.#i),this.#t?.removeEventListener("click",this.#l)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get shareUrl(){return this.getAttribute("share-url")||""}set shareUrl(e){this.setAttribute("share-url",e)}get shareTitle(){return this.getAttribute("share-title")||""}set shareTitle(e){this.setAttribute("share-title",e)}get shareText(){return this.getAttribute("share-text")||""}set shareText(e){this.setAttribute("share-text",e)}get shareFiles(){return this.#r}set shareFiles(e){Array.isArray(e)&&e.length>0&&(this.#r=e)}async share(){if(!this.disabled)try{let e={};this.shareUrl&&(e.url=this.shareUrl),this.shareTitle&&(e.title=this.shareTitle),this.shareText&&(e.text=this.shareText),Array.isArray(this.shareFiles)&&this.shareFiles.length>0&&navigator.canShare&&navigator.canShare({files:this.shareFiles})&&(e.files=this.shareFiles),await navigator.share(e),this.dispatchEvent(new CustomEvent("web-share:success",{bubbles:!0,composed:!0,detail:{shareData:e}}))}catch(e){if(e instanceof Error&&"AbortError"===e.name){this.dispatchEvent(new CustomEvent("web-share:abort",{bubbles:!0,composed:!0,detail:{error:e}}));return}this.dispatchEvent(new CustomEvent("web-share:error",{bubbles:!0,composed:!0,detail:{error:e}}))}}#l=e=>{e.preventDefault(),this.disabled||this.share()};#i=e=>{e.target&&"button"===e.target.name&&(this.#t?.removeEventListener("click",this.#l),this.#t=this.#a(),this.#t&&(this.#t.addEventListener("click",this.#l),"BUTTON"===this.#t.nodeName||this.#t.hasAttribute("role")||this.#t.setAttribute("role","button")))};#a(){return this.#e&&this.#e.assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"button"===e.getAttribute("slot"))||null}#o(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(e="web-share"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,X)}}X.defineCustomElement(),Object.defineProperty({},"FilesDropzone",{get:function(){return ed},set:void 0,enumerable:!0,configurable:!0});let J=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["jxl","image/jxl"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["markdown","text/markdown"],["md","text/markdown"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]),Z=[".DS_Store","Thumbs.db"],ee=e=>{let{name:t}=e;if(t&&-1!==t.lastIndexOf(".")&&!e.type){let r=(t.split(".").pop()||"").toLowerCase(),n=J.get(r);n&&Object.defineProperty(e,"type",{value:n,writable:!1,configurable:!1,enumerable:!0})}return e},et=(e,t)=>{let r=ee(e);if("string"!=typeof r.path){let{webkitRelativePath:n}=e;Object.defineProperty(r,"path",{value:"string"==typeof t?t:n||e.name,writable:!1,configurable:!1,enumerable:!0})}return r},er=async e=>await new Promise((t,r)=>{e.readEntries(t,r)}),en=async e=>{let t=[],r=await er(e);for(;r.length>0;)t.push(...r),r=await er(e);return t},ei=e=>new Promise((t,r)=>{e.file(r=>t(et(r,e.fullPath)),r)}),es=async e=>{let t=[],r=[];for(let t of e){if("file"!==t.kind)continue;let e=t.getAsEntry?t.getAsEntry():t.webkitGetAsEntry();r.push(e)}for(;r.length>0;){let e=r.shift();if(e){if(e.isFile){let r=await ei(e);-1===Z.indexOf(r.name)&&t.push(r)}else e.isDirectory&&r.push(...await en(e.createReader()))}}return t},ea=async e=>{let t=[];for(let r of e)-1===Z.indexOf(r.name)&&t.push(et(r));return t},eo=async e=>e.dataTransfer?e.dataTransfer.items?await es(e.dataTransfer.items):await ea(e.dataTransfer.files):await ea(e.target.files),el="files-dropzone",eh="TOO_MANY_FILES",eu=document.createElement("template"),ec=`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :host([hidden]),
  [hidden] {
    display: none !important;
  }

  :host {
    --dropzone-border-width: 2px;
    --dropzone-border-style: dashed;
    --dropzone-border-radius: 0.25rem;
    --dropzone-border-color: #6c757d;
    --dropzone-border-color-dragover: #0d6efd;
    --dropzone-border-color-hover: var(--dropzone-border-color-dragover);
    --dropzone-background-color: #ffffff;
    --dropzone-background-color-dragover: #f4f4f5;
    --dropzone-background-color-hover: var(--dropzone-background-color-dragover);
    --dropzone-body-color: #3f3f46;
    --dropzone-body-color-dragover: var(--dropzone-body-color);
    --dropzone-body-color-hover: var(--dropzone-body-color-dragover);
    --dropzone-focus-shadow-rgb: 49,132,253;
    --dropzone-focus-box-shadow: 0 0 0 0.25rem rgba(var(--dropzone-focus-shadow-rgb), 0.5);
    --transition-duration: 0.2s; /* for backwards compatibility */
    --dropzone-transition-duration: var(--transition-duration);

    display: block;
  }

  :host(:not([no-style])) .dropzone {
    border: var(--dropzone-border-width) var(--dropzone-border-style) var(--dropzone-border-color);
    border-radius: var(--dropzone-border-radius);
    padding: 3rem 1rem;
    overflow: hidden;
    background-color: var(--dropzone-background-color);
    color: var(--dropzone-body-color);
    text-align: center;
    cursor: pointer;
    transition: border var(--dropzone-transition-duration) ease-in-out, background-color var(--dropzone-transition-duration) ease-in-out, color var(--dropzone-transition-duration) ease-in-out, box-shadow var(--dropzone-transition-duration) ease-in-out;
  }

  :host(:not([no-style])[no-click]) .dropzone {
    cursor: default;
  }

  :host(:not([no-style])[disabled]) .dropzone {
    opacity: 0.8;
    cursor: not-allowed;
  }

  :host(:not([no-style]):not([disabled])) .dropzone--dragover {
    border-color: var(--dropzone-border-color-dragover);
    background-color: var(--dropzone-background-color-dragover);
    color: var(--dropzone-body-color-dragover);
  }

  :host(:not([no-style]):not([disabled])) .dropzone:focus-visible {
    outline: none;
    box-shadow: var(--dropzone-focus-box-shadow);
  }

  @media (hover: hover) {
    :host(:not([no-style]):not([disabled])) .dropzone:not(.dropzone--dragover):hover {
      border-color: var(--dropzone-border-color-hover);
      background-color: var(--dropzone-background-color-hover);
      color: var(--dropzone-body-color-hover);
    }
  }
`;eu.innerHTML=`
  <style>
    ${ec}
  </style>

  <input type="file" id="fileInput" hidden>

  <div part="dropzone" class="dropzone" id="dropzoneEl" tabindex="0" role="presentation">
    <slot>Drag 'n' drop files here, or click to select files</slot>
  </div>
`;class ed extends HTMLElement{#t=null;#e=null;constructor(){super(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(eu.content.cloneNode(!0)),this.shadowRoot&&(this.#t=this.shadowRoot.getElementById("fileInput"),this.#e=this.shadowRoot.getElementById("dropzoneEl"))}static get observedAttributes(){return["accept","disabled","multiple","no-keyboard"]}attributeChangedCallback(e,t,r){"accept"===e&&t!==r&&this.#t&&(this.#t.accept=this.accept),"disabled"===e&&t!==r&&this.#t&&(this.#t.disabled=this.disabled,this.disabled?this.#e?.removeAttribute("tabindex"):this.#e?.setAttribute("tabindex","0")),"multiple"===e&&t!==r&&this.#t&&(this.#t.multiple=this.multiple),"no-keyboard"===e&&t!==r&&this.#e&&(this.noKeyboard?this.#e.removeAttribute("tabindex"):this.#e.setAttribute("tabindex","0"))}connectedCallback(){this.#n("accept"),this.#n("disabled"),this.#n("maxFiles"),this.#n("maxSize"),this.#n("minSize"),this.#n("multiple"),this.#n("noClick"),this.#n("noDrag"),this.#n("noKeyboard"),this.#n("autoFocus"),this.#n("noStyle"),this.#t?.addEventListener("change",this.#a),this.#e?.addEventListener("dragenter",this.#o),this.#e?.addEventListener("dragover",this.#i),this.#e?.addEventListener("dragleave",this.#l),this.#e?.addEventListener("drop",this.#r),this.#e?.addEventListener("click",this.#u),this.#e?.addEventListener("keyup",this.#s),this.autoFocus&&this.#e?.focus()}disconnectedCallback(){this.#t?.removeEventListener("change",this.#a),this.#e?.removeEventListener("dragenter",this.#o),this.#e?.removeEventListener("dragover",this.#i),this.#e?.removeEventListener("dragleave",this.#l),this.#e?.removeEventListener("drop",this.#r),this.#e?.removeEventListener("click",this.#u),this.#e?.removeEventListener("keyup",this.#s)}get accept(){return this.getAttribute("accept")||""}set accept(e){this.setAttribute("accept",null!=e?e.toString():e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){this.toggleAttribute("disabled",!!e)}get maxFiles(){let e=Number(this.getAttribute("max-files"))||0;return e<=0?1/0:Math.floor(Math.abs(e))}set maxFiles(e){this.setAttribute("max-files",null!=e?e.toString():e)}get maxSize(){let e=this.getAttribute("max-size");if(null===e)return 1/0;let t=Number(e);return Number.isNaN(t)?1/0:t}set maxSize(e){this.setAttribute("max-size",null!=e?e.toString():e)}get minSize(){let e=this.getAttribute("min-size");if(null===e)return 0;let t=Number(e);return Number.isNaN(t)?0:t}set minSize(e){this.setAttribute("min-size",null!=e?e.toString():e)}get multiple(){return this.hasAttribute("multiple")}set multiple(e){this.toggleAttribute("multiple",!!e)}get noClick(){return this.hasAttribute("no-click")}set noClick(e){this.toggleAttribute("no-click",!!e)}get noDrag(){return this.hasAttribute("no-drag")}set noDrag(e){this.toggleAttribute("no-drag",!!e)}get noKeyboard(){return this.hasAttribute("no-keyboard")}set noKeyboard(e){this.toggleAttribute("no-keyboard",!!e)}get autoFocus(){return this.hasAttribute("auto-focus")}set autoFocus(e){this.toggleAttribute("auto-focus",!!e)}get noStyle(){return this.hasAttribute("no-style")}set noStyle(e){this.toggleAttribute("no-style",!!e)}#a=async e=>{try{this.#p(await eo(e))}catch(e){this.dispatchEvent(new CustomEvent(`${el}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}};#o=()=>{this.disabled||this.noDrag||this.dispatchEvent(new Event(`${el}-dragenter`,{bubbles:!0,composed:!0}))};#i=e=>{if(e.preventDefault(),this.disabled||this.noDrag){e.dataTransfer.dropEffect="none";return}e.dataTransfer.dropEffect="copy",this.#e&&(this.#e.classList.add("dropzone--dragover"),this.#e.part.add("dropzone--dragover")),this.dispatchEvent(new Event(`${el}-dragover`,{bubbles:!0,composed:!0}))};#l=()=>{this.disabled||this.noDrag||(this.#e&&(this.#e.classList.remove("dropzone--dragover"),this.#e.part.remove("dropzone--dragover")),this.dispatchEvent(new Event(`${el}-dragleave`,{bubbles:!0,composed:!0})))};#r=async e=>{if(!this.disabled&&!this.noDrag){e.preventDefault(),this.#e&&(this.#e.classList.remove("dropzone--dragover"),this.#e.part.remove("dropzone--dragover"));try{this.#p(await eo(e))}catch(e){this.dispatchEvent(new CustomEvent(`${el}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}}};#u=()=>{this.disabled||this.noClick||this.#t?.click()};#s=e=>{this.disabled||this.noKeyboard||" "!==e.key&&"Enter"!==e.key||this.#t?.click()};#p(e){if(!Array.isArray(e)||!e.length)return;let t=[],r=[],n=e.length;if(!this.multiple&&n>1)for(let t of e)r.push({file:t,errors:[{code:eh,message:"Too many files selected. Only 1 file is allowed."}]});else if(this.multiple&&n>this.maxFiles)for(let t of e)r.push({file:t,errors:[{code:eh,message:`Too many files selected. Only ${this.maxFiles} ${this.maxFiles>1?"files are":"file is"} allowed.`}]});else for(let n of e){let e=function(e,t=""){if(!t)return!0;let r=[...new Set(t.split(",").map(e=>e.trim()).filter(Boolean))],n=e.type,i=n.replace(/\/.*$/,"");for(let t of r)if("."===t.charAt(0)){if(-1!==e.name.toLowerCase().indexOf(t.toLowerCase(),e.name.length-t.length))return!0}else if(/\/\*$/.test(t)){if(i===t.replace(/\/.*$/,""))return!0}else if(n===t)return!0;return!1}(n,this.accept),i=n.size>this.maxSize,s=n.size<this.minSize;if(!e||i||s){let t=[];e||t.push({code:"INVALID_MIME_TYPE",message:`File type "${n.type}" is not accepted.`}),i&&t.push({code:"FILE_TOO_LARGE",message:`File size ${n.size} exceeds the maximum size of ${this.maxSize}.`}),s&&t.push({code:"FILE_TOO_SMALL",message:`File size ${n.size} is smaller than the minimum size of ${this.minSize}.`}),r.push({file:n,errors:t})}else t.push(n)}this.dispatchEvent(new CustomEvent(`${el}-drop`,{bubbles:!0,composed:!0,detail:{acceptedFiles:t,rejectedFiles:r}})),t.length>0&&this.dispatchEvent(new CustomEvent(`${el}-drop-accepted`,{bubbles:!0,composed:!0,detail:{acceptedFiles:t}})),r.length>0&&this.dispatchEvent(new CustomEvent(`${el}-drop-rejected`,{bubbles:!0,composed:!0,detail:{rejectedFiles:r}})),this.#t&&(this.#t.value=this.#t.defaultValue)}openFileDialog(){this.disabled||this.#t?.click()}#n(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(e=el){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,ed)}}function ef(e){return null!==e&&"object"==typeof e?"share"in navigator&&"canShare"in navigator&&navigator.canShare(e):"share"in navigator}function ep(e,t,r){if(!t.has(e))throw TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function em(e,t){var r;return(r=ep(e,t,"get")).get?r.get.call(e):r.value}function eg(e,t){if(t.has(e))throw TypeError("Cannot initialize the same private elements twice on an object")}function ey(e,t,r){eg(e,t),t.set(e,r)}function ev(e,t,r){return function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw TypeError("attempted to set read only private field");t.value=r}}(e,ep(e,t,"set"),r),r}function ew(e,t,r){if(!t.has(e))throw TypeError("attempted to get private field on non-instance");return r}function eb(e,t){eg(e,t),t.add(e)}ed.defineCustomElement(),Object.defineProperty({},"ResizeObserverElement",{get:function(){return eR},set:o,enumerable:!0,configurable:!0});let eE=document.createElement("template"),e_=String.raw;eE.innerHTML=e_`
  <style>:host { display: contents; }</style>
  <slot></slot>
`;var eT=new WeakMap,eI=new WeakMap,eS=new WeakMap,eC=new WeakSet,eA=new WeakSet,ek=new WeakMap,eN=new WeakSet;class eR extends HTMLElement{static get observedAttributes(){return["disabled"]}attributeChangedCallback(e,t,r){"disabled"===e&&t!==r&&(this.disabled?ew(this,eA,eL).call(this):ew(this,eC,eD).call(this))}connectedCallback(){ew(this,eN,eO).call(this,"disabled"),"ResizeObserver"in window&&(ev(this,eI,new ResizeObserver(e=>{this.dispatchEvent(new CustomEvent("resize-observer:resize",{bubbles:!0,composed:!0,detail:{entries:e}}))})),this.disabled||ew(this,eC,eD).call(this),em(this,eT).addEventListener("slotchange",em(this,ek)))}disconnectedCallback(){ew(this,eA,eL).call(this),em(this,eT).removeEventListener("slotchange",em(this,ek))}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}static defineCustomElement(e="resize-observer"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,eR)}constructor(){super(),eb(this,eC),eb(this,eA),eb(this,eN),ey(this,eT,{writable:!0,value:void 0}),ey(this,eI,{writable:!0,value:void 0}),ey(this,eS,{writable:!0,value:void 0}),ey(this,ek,{writable:!0,value:()=>{this.disabled||ew(this,eC,eD).call(this)}}),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(eE.content.cloneNode(!0))),ev(this,eT,this.shadowRoot.querySelector("slot")),ev(this,eI,null),ev(this,eS,[])}}function eD(){em(this,eT)&&em(this,eI)&&(em(this,eS).forEach(e=>em(this,eI).unobserve(e)),ev(this,eS,[]),em(this,eT).assignedElements().forEach(e=>{em(this,eI).observe(e),em(this,eS).push(e)}))}function eL(){em(this,eI)&&em(this,eI).disconnect()}function eO(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}eR.defineCustomElement();let eP=(e,t,r)=>(Number.isNaN(t)&&(t=0),Number.isNaN(r)&&(r=0),Math.min(Math.max(e,Math.min(t,r)),Math.max(t,r))),ex="capture-photo",eM=`
  :host {
    display: block;
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  :host([hidden]),
  [hidden],
  ::slotted([hidden]) {
    display: none;
  }

  video {
    display: block;
  }

  #output:empty {
    display: none;
  }
`,eU=document.createElement("template");eU.innerHTML=`
  <style>${eM}</style>

  <video part="video" playsinline></video>

  <canvas hidden></canvas>

  <div part="actions-container">
    <slot name="capture-button">
      <button part="capture-button" type="button">
        <slot name="capture-button-content">Capture photo</slot>
      </button>
    </slot>

    <slot name="facing-mode-button" hidden>
      <button part="facing-mode-button" type="button">
        <slot name="facing-mode-button-content">Toggle facing mode</slot>
      </button>
    </slot>

    <slot name="actions"></slot>
  </div>

  <slot></slot>

  <div part="output-container" id="output"></div>
`;class eV extends HTMLElement{#e={};#t=null;#a=null;#n=null;#l=null;#i=null;#r=null;#o=null;#s=null;constructor(){super(),this.#e=this.getSupportedConstraints(),this.shadowRoot||this.attachShadow({mode:"open"}).appendChild(eU.content.cloneNode(!0))}static get observedAttributes(){return["no-image","facing-mode","camera-resolution","pan","tilt","zoom"]}attributeChangedCallback(e,t,r){if(!this.isConnected)return;let n=this.getTrackCapabilities(),i=this.getTrackSettings();if("no-image"===e&&t!==r&&this.#f(),"facing-mode"===e&&t!==r&&"facingMode"in this.#e){let e=["user","environment"].includes(this.facingMode||"");"facingMode"in i&&e&&(this.stopVideoStream(),this.startVideoStream())}if("camera-resolution"===e&&t!==r&&"string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[e=0,t=0]=this.cameraResolution.split("x").map(e=>Number(e));if(e>0&&t>0&&"width"in n&&"height"in n){let r=!!(n.width?.min&&n.width?.max)&&e>=n?.width?.min&&e<=n?.width?.max,s=!!(n.height?.min&&n.height?.max)&&t>=n?.height?.min&&t<=n?.height?.max;"width"in i&&"height"in i&&r&&s&&(this.stopVideoStream(),this.startVideoStream())}}if("pan"===e&&t!==r&&"pan"in this.#e){let e=!!("pan"in n&&n.pan?.min&&n.pan?.max)&&this.pan>=n.pan.min&&this.pan<=n.pan.max;"pan"in i&&"number"==typeof this.pan&&e&&this.#c("pan",this.pan)}if("tilt"===e&&t!==r&&"tilt"in this.#e){let e=!!("tilt"in n&&n.tilt?.min&&n.tilt?.max)&&this.tilt>=n.tilt.min&&this.tilt<=n.tilt.max;"tilt"in i&&"number"==typeof this.tilt&&e&&this.#c("tilt",this.tilt)}if("zoom"===e&&t!==r&&"zoom"in this.#e){let e=!!("zoom"in n&&n.zoom?.min&&n.zoom?.max)&&this.zoom>=n.zoom.min&&this.zoom<=n.zoom.max;"zoom"in i&&"number"==typeof this.zoom&&e&&this.#c("zoom",this.zoom)}}connectedCallback(){if(this.#u("autpoPlay"),this.#u("noImage"),this.#u("facingMode"),this.#u("cameraResolution"),this.#u("pan"),this.#u("tilt"),this.#u("zoom"),this.#u("calculateFileSize"),this.#a=this.shadowRoot?.querySelector("canvas")||null,this.#n=this.shadowRoot?.getElementById("output")||null,this.#l=this.shadowRoot?.querySelector("video")||null,this.#i=this.shadowRoot?.querySelector('slot[name="capture-button"]')||null,this.#r=this.#h(),this.#o=this.shadowRoot?.querySelector('slot[name="facing-mode-button"]')||null,this.#s=this.#g(),this.#l?.addEventListener("loadedmetadata",this.#p),this.#i?.addEventListener("slotchange",this.#m),this.#r?.addEventListener("click",this.#d),this.#o?.addEventListener("slotchange",this.#v),this.#s?.addEventListener("click",this.#y),!eV.isSupported())return this.dispatchEvent(new CustomEvent(`${ex}:error`,{bubbles:!0,composed:!0,detail:{error:{name:"NotSupportedError",message:"Not supported"}}}));this.autoPlay&&this.startVideoStream()}disconnectedCallback(){this.stopVideoStream(),this.#s?.removeEventListener("click",this.#y),this.#r?.removeEventListener("click",this.#d),this.#l?.removeEventListener("canplay",this.#p),this.#i?.removeEventListener("slotchange",this.#m),this.#o?.removeEventListener("slotchange",this.#v)}get autoPlay(){return this.hasAttribute("auto-play")}set autoPlay(e){this.toggleAttribute("auto-play",!!e)}get noImage(){return this.hasAttribute("no-image")}set noImage(e){this.toggleAttribute("no-image",!!e)}get facingMode(){return this.getAttribute("facing-mode")||"user"}set facingMode(e){this.setAttribute("facing-mode",e)}get cameraResolution(){return this.getAttribute("camera-resolution")||""}set cameraResolution(e){this.setAttribute("camera-resolution",e)}get pan(){return Number(this.getAttribute("pan"))||0}set pan(e){this.setAttribute("pan",null!=e?e.toString():e)}get tilt(){return Number(this.getAttribute("tilt"))||0}set tilt(e){this.setAttribute("tilt",null!=e?e.toString():e)}get zoom(){return Number(this.getAttribute("zoom"))||1}set zoom(e){this.setAttribute("zoom",null!=e?e.toString():e)}get loading(){return this.hasAttribute("loading")}get calculateFileSize(){return this.hasAttribute("calculate-file-size")}set calculateFileSize(e){this.toggleAttribute("calculate-file-size",!!e)}#y=e=>{e.preventDefault(),this.loading||(this.facingMode="user"!==this.facingMode&&this.facingMode?"user":"environment")};#d=e=>{e.preventDefault(),this.capture()};#p=e=>{let t=e.target;t.play().then(()=>{this.dispatchEvent(new CustomEvent(`${ex}:video-play`,{bubbles:!0,composed:!0,detail:{video:t}}))}).catch(e=>{this.dispatchEvent(new CustomEvent(`${ex}:error`,{bubbles:!0,composed:!0,detail:{error:e}}))}).finally(()=>{this.removeAttribute("loading")})};#f(){this.#n&&Array.from(this.#n.childNodes).forEach(e=>e.remove())}#c(e,t){if(!this.#t||!e||!t)return;let[r]=this.#t.getVideoTracks(),n=this.getTrackCapabilities();e in this.getTrackSettings()&&r.applyConstraints({advanced:[{[e]:eP(Number(t),n[e]?.min||1,n[e]?.max||1)}]})}#m=e=>{e.target?.name==="capture-button"&&(this.#r?.removeEventListener("click",this.#d),this.#r=this.#h(),this.#r&&(this.#r.addEventListener("click",this.#d),"BUTTON"===this.#r.nodeName||this.#r.hasAttribute("role")||this.#r.setAttribute("role","button")))};#v=e=>{e.target?.name==="facing-mode-button"&&(this.#s?.removeEventListener("click",this.#y),this.#s=this.#g(),this.#s&&(this.#s.addEventListener("click",this.#y),"BUTTON"===this.#s.nodeName||this.#s.hasAttribute("role")||this.#s.setAttribute("role","button")))};#g(){return this.#o&&this.#o.assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"facing-mode-button"===e.getAttribute("slot"))||null}#h(){return this.#i&&this.#i.assignedElements({flatten:!0}).find(e=>"BUTTON"===e.nodeName||"capture-button"===e.getAttribute("slot"))||null}#u(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}async startVideoStream(){if(!eV.isSupported()||this.#t)return;this.setAttribute("loading","");let e={video:{facingMode:{ideal:this.facingMode||"user"},pan:!0,tilt:!0,zoom:!0},audio:!1};if("string"==typeof this.cameraResolution&&this.cameraResolution.trim().length>0){let[t=0,r=0]=this.cameraResolution.split("x").map(e=>Number(e));t>0&&r>0&&(e.video.width=t,e.video.height=r)}try{this.#t=await navigator.mediaDevices.getUserMedia(e),this.#l&&(this.#l.srcObject=this.#t),this.#c("pan",this.pan),this.#c("tilt",this.tilt),this.#c("zoom",this.zoom);let t=this.getTrackSettings();"facingMode"in t&&this.#o&&(this.#o.hidden=!1)}catch(e){this.dispatchEvent(new CustomEvent(`${ex}:error`,{bubbles:!0,composed:!0,detail:{error:e}}))}finally{this.removeAttribute("loading")}}stopVideoStream(){if(!this.#l||!this.#t)return;let[e]=this.#t.getVideoTracks();e?.stop(),this.#l.srcObject=null,this.#t=null}async capture(){if(!this.loading&&this.#a&&this.#l)try{let e=this.#a.getContext("2d"),t=this.#l.videoWidth,r=this.#l.videoHeight;this.#a.width=t,this.#a.height=r,e?.drawImage(this.#l,0,0,t,r);let n=this.#a.toDataURL("image/png");if("string"==typeof n&&n.includes("data:image")){if(!this.noImage){let e=new Image;e.src=n,e.width=t,e.height=r,e.setAttribute("part","output-image"),this.#f(),this.#n?.appendChild(e)}let e={dataURI:n,width:t,height:r};if(this.calculateFileSize)try{let t=await fetch(n),r=(await t.blob()).size;r&&(e.size=r)}catch(e){}this.dispatchEvent(new CustomEvent(`${ex}:success`,{bubbles:!0,composed:!0,detail:e}))}}catch(e){this.dispatchEvent(new CustomEvent(`${ex}:error`,{bubbles:!0,composed:!0,detail:{error:e}}))}}getSupportedConstraints(){return eV.isSupported()&&navigator.mediaDevices.getSupportedConstraints()||{}}getTrackCapabilities(){if(!this.#t)return{};let[e]=this.#t.getVideoTracks();return e&&"function"==typeof e.getCapabilities&&e.getCapabilities()||{}}getTrackSettings(){if(!this.#t)return{};let[e]=this.#t.getVideoTracks();return e&&"function"==typeof e.getSettings&&e.getSettings()||{}}static isSupported(){return!!navigator.mediaDevices?.getUserMedia}static defineCustomElement(e=ex){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,eV)}}function eF(e){return new Promise(function(t,r){e.oncomplete=e.onsuccess=function(){return t(e.result)},e.onabort=e.onerror=function(){return r(e.error)}})}function eB(){if(!l){var e,t,r;e="keyval",(t=indexedDB.open("keyval-store")).onupgradeneeded=function(){return t.result.createObjectStore(e)},r=eF(t),l=function(t,n){return r.then(function(r){return n(r.transaction(e,t).objectStore(e))})}}return l}let ez="barcode-scanner/",ej="settings",eq="history",e$=async e=>{try{return{value:await function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:eB();return t("readonly",function(t){return eF(t.get(e))})}(e),error:void 0}}catch(e){return{value:void 0,error:e}}},eH=async(e,t)=>{try{return await function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:eB();return r("readwrite",function(r){return r.put(t,e),eF(r.transaction)})}(e,t),{error:void 0}}catch(e){return{error:e}}},eK=async()=>e$(ez+ej),eG=async e=>eH(ez+ej,e),eW=async()=>e$(ez+eq),eQ=async e=>eH(ez+eq,e),eY=document.getElementById("toastContainer"),eX=e=>{let t=e.currentTarget;t.removeEventListener("click",eX),eY.removeChild(t.parentNode)},eJ=(e="",t="info")=>{["info","warning","danger"].includes(t)||(t="info");let r=`
    ${e}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  `,n=document.createElement("div");n.className=`alert alert-${t} alert-dismissible text-break`,n.innerHTML=r,n.querySelector("button").addEventListener("click",eX),eY.appendChild(n),setTimeout(()=>n.classList.add("show"),100)},eZ=(e,t=0,r=!1)=>{let n=null;if("function"!=typeof e)throw TypeError("Expected a function for first argument");return(...i)=>{clearTimeout(n),r&&!n&&e(...i),n=setTimeout(()=>{n=null,r||e(...i)},t)}},e0="clipboard-copy",e1="success",e2="error",e4=document.createElement("template");e4.innerHTML=`
  <style>
    :host([hidden]),
    [hidden],
    ::slotted([hidden]) {
      display: none !important;
    }
  </style>

  <button type="button" part="button">
    <slot name="copy">Copy</slot>
    <slot name="success" hidden>Copied!</slot>
    <slot name="error" hidden>Error</slot>
  </button>
`;class e5 extends HTMLElement{#e=null;#t;#n;#r;#a;constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(e4.content.cloneNode(!0))),this.#t=this.shadowRoot.querySelector("button"),this.#n=this.shadowRoot.querySelector('slot[name="copy"]'),this.#r=this.shadowRoot.querySelector('slot[name="success"]'),this.#a=this.shadowRoot.querySelector('slot[name="error"]')}static get observedAttributes(){return["disabled"]}connectedCallback(){this.#o("value"),this.#o("from"),this.#o("disabled"),this.#o("feedbackDuration"),this.#t.addEventListener("click",this.#l)}disconnectedCallback(){this.#t.removeEventListener("click",this.#l),this.#i()}attributeChangedCallback(e){"disabled"===e&&(this.#t.disabled=this.disabled,this.#t.setAttribute("aria-disabled",this.disabled.toString()),this.#t.part.contains("button")&&this.#t.part.toggle("button--disabled",this.disabled))}get value(){return this.getAttribute("value")}set value(e){this.setAttribute("value",e)}get from(){return this.getAttribute("from")}set from(e){this.setAttribute("from",e)}get disabled(){return this.hasAttribute("disabled")}set disabled(e){e?this.setAttribute("disabled",""):this.removeAttribute("disabled")}get feedbackDuration(){return Number(this.getAttribute("feedback-duration"))||1e3}set feedbackDuration(e){this.setAttribute("feedback-duration",e)}async #s(){if(this.value||this.from)try{let e="";if(this.value)e=this.value;else if(this.from){let t="getRootNode"in Element.prototype?this.#t.getRootNode({composed:!0}):this.#t.ownerDocument;if(!t||!(t instanceof Document||t instanceof ShadowRoot))return;let r=t.querySelector(this.from);if(!r)return;e=r instanceof HTMLInputElement||r instanceof HTMLTextAreaElement?r.value:r instanceof HTMLAnchorElement&&r.hasAttribute("href")?r.href:r.textContent}await navigator.clipboard.writeText(e),this.#u(e1),this.dispatchEvent(new CustomEvent(`${e0}-success`,{bubbles:!0,composed:!0,detail:{value:e}}))}catch(e){this.#u(e2),this.dispatchEvent(new CustomEvent(`${e0}-error`,{bubbles:!0,composed:!0,detail:{error:e}}))}}#l=e=>{e.preventDefault(),this.disabled||this.#e||this.#s()};#u(e){this.#n.hidden=!0,this.#r.hidden=e!==e1,this.#a.hidden=e!==e2,this.#t.part.remove("button--success"),this.#t.part.remove("button--error"),this.#t.part.add(`button--${e}`),this.#e&&clearTimeout(this.#e),this.#e=setTimeout(()=>{this.#n.hidden=!1,this.#r.hidden=!0,this.#a.hidden=!0,this.#t.part.remove(`button--${e}`),this.#e=null},this.feedbackDuration)}#i(){this.#e&&clearTimeout(this.#e),this.#e=null,this.#n.hidden=!1,this.#r.hidden=!0,this.#a.hidden=!0,this.#t.part.remove("button--success"),this.#t.part.remove("button--error")}#o(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(e=e0){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,e5)}}class e6 extends e5{constructor(){super();let e=this.shadowRoot.querySelector('slot[name="copy"]'),t=this.shadowRoot.querySelector('slot[name="success"]');e.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>
      <span class="text">Copy</span>
    `,t.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
      </svg>
      <span class="text">Copied!</span>
    `}static get observedAttributes(){return[...super.observedAttributes,"only-icon"]}attributeChangedCallback(e,t,r){if(super.attributeChangedCallback(e,t,r),"only-icon"===e&&t!==r){let e=this.shadowRoot.querySelector('slot[name="copy"]'),t=this.shadowRoot.querySelector('slot[name="success"]'),r=e.querySelector(".text"),n=t.querySelector(".text");r&&(r.hidden=this.onlyIcon),n&&(n.hidden=this.onlyIcon)}}get onlyIcon(){return this.hasAttribute("only-icon")}set onlyIcon(e){e?this.setAttribute("only-icon",""):this.removeAttribute("only-icon")}connectedCallback(){super.connectedCallback(),this.#C("onlyIcon"),this.hasAttribute("feedback-duration")||this.setAttribute("feedback-duration","1500")}disconnectedCallback(){super.disconnectedCallback()}#C(e){if(Object.prototype.hasOwnProperty.call(this,e)){let t=this[e];delete this[e],this[e]=t}}static defineCustomElement(e="custom-clipboard-copy"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,e6)}}e6.defineCustomElement();let e9=()=>void 0;var e3=R("6qd2L");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e8=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:(i<2048?t[r++]=i>>6|192:((64512&i)==55296&&n+1<e.length&&(64512&e.charCodeAt(n+1))==56320?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128):t[r++]=i>>12|224,t[r++]=i>>6&63|128),t[r++]=63&i|128)}return t},e7=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let s=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{let s=e[r++],a=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")},te={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){let i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,h=i>>2,u=(3&i)<<4|a>>4,c=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(c=64)),n.push(r[h],r[u],r[c],r[d])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(e8(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):e7(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){let i=r[e.charAt(t++)],s=t<e.length?r[e.charAt(t)]:0,a=++t<e.length?r[e.charAt(t)]:64,o=++t<e.length?r[e.charAt(t)]:64;if(++t,null==i||null==s||null==a||null==o)throw new tt;let l=i<<2|s>>4;if(n.push(l),64!==a){let e=s<<4&240|a>>2;if(n.push(e),64!==o){let e=a<<6&192|o;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class tt extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let tr=function(e){let t=e8(e);return te.encodeByteArray(t,!0)},tn=function(e){return tr(e).replace(/\./g,"")},ti=function(e){try{return te.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null},ts=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==A)return A;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,ta=()=>{if(void 0===e3||void 0===e3.env)return;let e=void 0;if(e)return JSON.parse(e)},to=()=>{let e;if("undefined"==typeof document)return;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}let t=e&&ti(e[1]);return t&&JSON.parse(t)},tl=()=>{try{return e9()||ts()||ta()||to()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},th=e=>tl()?.emulatorHosts?.[e],tu=e=>{let t=th(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return"["===t[0]?[t.substring(1,r-1),n]:[t.substring(0,r),n]},tc=()=>tl()?.config,td=e=>tl()?.[`_${e}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),"function"==typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function tm(e){return(await fetch(e,{credentials:"include"})).ok}let tg={},ty=!1;function tv(e,t){if("undefined"==typeof window||"undefined"==typeof document||!tp(window.location.host)||tg[e]===t||tg[e]||ty)return;function r(e){return`__firebase__banner__${e}`}tg[e]=t;let n="__firebase__banner",i=function(){let e={prod:[],emulator:[]};for(let t of Object.keys(tg))tg[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function s(){let e,t;let s=(e=document.getElementById(n),t=!1,e||((e=document.createElement("div")).setAttribute("id",n),t=!0),{created:t,element:e}),a=r("text"),o=document.getElementById(a)||document.createElement("span"),l=r("learnmore"),h=document.getElementById(l)||document.createElement("a"),u=r("preprendIcon"),c=document.getElementById(u)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(s.created){let e=s.element;e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center",h.setAttribute("id",l),h.innerText="Learn more",h.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",h.setAttribute("target","__blank"),h.style.paddingLeft="5px",h.style.textDecoration="underline";let t=function(){let e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{ty=!0,function(){let e=document.getElementById(n);e&&e.remove()}()},e}();c.setAttribute("width","24"),c.setAttribute("id",u),c.setAttribute("height","24"),c.setAttribute("viewBox","0 0 24 24"),c.setAttribute("fill","none"),c.style.marginLeft="-6px",e.append(c,o,h,t),document.body.appendChild(e)}i?(o.innerText="Preview backend disconnected.",c.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(c.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,o.innerText="Preview backend running in this workspace."),o.setAttribute("id",a)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",s):s()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}class tb extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name="FirebaseError",Object.setPrototypeOf(this,tb.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,tE.prototype.create)}}class tE{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){let r=t[0]||{},n=`${this.service}/${e}`,i=this.errors[e],s=i?i.replace(t_,(e,t)=>{let n=r[t];return null!=n?String(n):`<${t}?>`}):"Error",a=`${this.serviceName}: ${s} (${n}).`;return new tb(n,a,r)}}let t_=/\{\$([^}]+)}/g;function tT(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);for(let i of r){if(!n.includes(i))return!1;let r=e[i],s=t[i];if(tI(r)&&tI(s)){if(!tT(r,s))return!1}else if(r!==s)return!1}for(let e of n)if(!r.includes(e))return!1;return!0}function tI(e){return null!==e&&"object"==typeof e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(e){let t=[];for(let[r,n]of Object.entries(e))Array.isArray(n)?n.forEach(e=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function tC(e){let t={};return e.replace(/^\?/,"").split("&").forEach(e=>{if(e){let[r,n]=e.split("=");t[decodeURIComponent(r)]=decodeURIComponent(n)}}),t}function tA(e){let t=e.indexOf("?");if(!t)return"";let r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}class tk{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(void 0===e&&void 0===t&&void 0===r)throw Error("Missing Observer.");void 0===(n=!function(e,t){if("object"!=typeof e||null===e)return!1;for(let r of t)if(r in e&&"function"==typeof e[r])return!0;return!1}(e,["next","error","complete"])?{next:e,error:t,complete:r}:e).next&&(n.next=tN),void 0===n.error&&(n.error=tN),void 0===n.complete&&(n.complete=tN);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}}),this.observers.push(n),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tN(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tR(e){return e&&e._delegate?e._delegate:e}class tD{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tL="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){let e=new tf;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{let r=this.getOrInitializeService({instanceIdentifier:t});r&&e.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){let t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(e){if(r)return null;throw e}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:tL})}catch(e){}for(let[e,t]of this.instancesDeferred.entries()){let r=this.normalizeInstanceIdentifier(e);try{let e=this.getOrInitializeService({instanceIdentifier:r});t.resolve(e)}catch(e){}}}}clearInstance(e=tL){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=tL){return this.instances.has(e)}getOptions(e=tL){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(let[e,t]of this.instancesDeferred.entries())r===this.normalizeInstanceIdentifier(e)&&t.resolve(n);return n}onInit(e,t){let r=this.normalizeInstanceIdentifier(t),n=this.onInitCallbacks.get(r)??new Set;n.add(e),this.onInitCallbacks.set(r,n);let i=this.instances.get(r);return i&&e(i,r),()=>{n.delete(e)}}invokeOnInitCallbacks(e,t){let r=this.onInitCallbacks.get(t);if(r)for(let n of r)try{n(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e===tL?void 0:e,options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tL){return this.component?this.component.multipleInstances?e:tL:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let t=this.getProvider(e.name);if(t.isComponentSet())throw Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let t=new tO(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tx=[];(i=h||(h={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let tM={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},tU=h.INFO,tV={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},tF=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=tV[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class tB{constructor(e){this.name=e,this._logLevel=tU,this._logHandler=tF,this._userLogHandler=null,tx.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in h))throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?tM[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...e),this._logHandler(this,h.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...e),this._logHandler(this,h.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,h.INFO,...e),this._logHandler(this,h.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,h.WARN,...e),this._logHandler(this,h.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...e),this._logHandler(this,h.ERROR,...e)}}let tz=(e,t)=>t.some(t=>e instanceof t),tj=new WeakMap,tq=new WeakMap,t$=new WeakMap,tH=new WeakMap,tK=new WeakMap,tG={get(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return tq.get(e);if("objectStoreNames"===t)return e.objectStoreNames||t$.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return tW(e[t])},set:(e,t,r)=>(e[t]=r,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function tW(r){var n;if(r instanceof IDBRequest)return function(e){let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(tW(e.result)),n()},s=()=>{r(e.error),n()};e.addEventListener("success",i),e.addEventListener("error",s)});return t.then(t=>{t instanceof IDBCursor&&tj.set(t,e)}).catch(()=>{}),tK.set(t,e),t}(r);if(tH.has(r))return tH.get(r);let i="function"==typeof(n=r)?n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(t||(t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(...e){return n.apply(tQ(this),e),tW(tj.get(this))}:function(...e){return tW(n.apply(tQ(this),e))}:function(e,...t){let r=n.call(tQ(this),e,...t);return t$.set(r,e.sort?e.sort():[e]),tW(r)}:(n instanceof IDBTransaction&&function(e){if(tq.has(e))return;let t=new Promise((t,r)=>{let n=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),n()},s=()=>{r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)});tq.set(e,t)}(n),tz(n,e||(e=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(n,tG):n;return i!==r&&(tH.set(r,i),tK.set(i,r)),i}let tQ=e=>tK.get(e),tY=["get","getKey","getAll","getAllKeys","count"],tX=["put","add","delete","clear"],tJ=new Map;function tZ(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&"string"==typeof t))return;if(tJ.get(t))return tJ.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=tX.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||tY.includes(r)))return;let s=async function(e,...t){let s=this.transaction(e,i?"readwrite":"readonly"),a=s.store;return n&&(a=a.index(t.shift())),(await Promise.all([a[r](...t),i&&s.done]))[0]};return tJ.set(t,s),s}tG={...n=tG,get:(e,t,r)=>tZ(e,t)||n.get(e,t,r),has:(e,t)=>!!tZ(e,t)||n.has(e,t)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(!function(e){let t=e.getComponent();return t?.type==="VERSION"}(e))return null;{let t=e.getImmediate();return`${t.library}/${t.version}`}}).filter(e=>e).join(" ")}}let t1="@firebase/app",t2="0.14.6",t4=new tB("@firebase/app"),t5="[DEFAULT]",t6={[t1]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/data-connect":"fire-data-connect","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","@firebase/ai":"fire-vertex","fire-js":"fire-js",firebase:"fire-js-all"},t9=new Map,t3=new Map,t8=new Map;function t7(e,t){try{e.container.addComponent(t)}catch(r){t4.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function re(e){let t=e.name;if(t8.has(t))return t4.debug(`There were multiple attempts to register component ${t}.`),!1;for(let r of(t8.set(t,e),t9.values()))t7(r,e);for(let t of t3.values())t7(t,e);return!0}function rt(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function rr(e){return null!=e&&void 0!==e.settings}let rn=new tE("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tD("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rs="12.6.0";function ra(e,t={}){let r=e;"object"!=typeof t&&(t={name:t});let n={name:t5,automaticDataCollectionEnabled:!0,...t},i=n.name;if("string"!=typeof i||!i)throw rn.create("bad-app-name",{appName:String(i)});if(r||(r=tc()),!r)throw rn.create("no-options");let s=t9.get(i);if(s){if(tT(r,s.options)&&tT(n,s.config))return s;throw rn.create("duplicate-app",{appName:i})}let a=new tP(i);for(let e of t8.values())a.addComponent(e);let o=new ri(r,n,a);return t9.set(i,o),o}function ro(e=t5){let t=t9.get(e);if(!t&&e===t5&&tc())return ra();if(!t)throw rn.create("no-app",{appName:e});return t}function rl(e,t,r){let n=t6[e]??e;r&&(n+=`-${r}`);let i=n.match(/\s|\//),s=t.match(/\s|\//);if(i||s){let e=[`Unable to register library "${n}" with version "${t}":`];i&&e.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),t4.warn(e.join(" "));return}re(new tD(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}let rh="firebase-heartbeat-store",ru=null;function rc(){return ru||(ru=(function(e,t,{blocked:r,upgrade:n,blocking:i,terminated:s}={}){let a=indexedDB.open(e,1),o=tW(a);return n&&a.addEventListener("upgradeneeded",e=>{n(tW(a.result),e.oldVersion,e.newVersion,tW(a.transaction),e)}),r&&a.addEventListener("blocked",e=>r(e.oldVersion,e.newVersion,e)),o.then(e=>{s&&e.addEventListener("close",()=>s()),i&&e.addEventListener("versionchange",e=>i(e.oldVersion,e.newVersion,e))}).catch(()=>{}),o})("firebase-heartbeat-database",0,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(rh)}catch(e){console.warn(e)}}}).catch(e=>{throw rn.create("idb-open",{originalErrorMessage:e.message})})),ru}async function rd(e){try{let t=(await rc()).transaction(rh),r=await t.objectStore(rh).get(rp(e));return await t.done,r}catch(e){if(e instanceof tb)t4.warn(e.message);else{let t=rn.create("idb-get",{originalErrorMessage:e?.message});t4.warn(t.message)}}}async function rf(e,t){try{let r=(await rc()).transaction(rh,"readwrite"),n=r.objectStore(rh);await n.put(t,rp(e)),await r.done}catch(e){if(e instanceof tb)t4.warn(e.message);else{let t=rn.create("idb-set",{originalErrorMessage:e?.message});t4.warn(t.message)}}}function rp(e){return`${e.name}!${e.options.appId}`}class rm{constructor(e){this.container=e,this._heartbeatsCache=null;let t=this.container.getProvider("app").getImmediate();this._storage=new ry(t),this._heartbeatsCachePromise=this._storage.read().then(e=>(this._heartbeatsCache=e,e))}async triggerHeartbeat(){try{let e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=rg();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===t||this._heartbeatsCache.heartbeats.some(e=>e.date===t))return;if(this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats.length>30){let e=function(e){if(0===e.length)return -1;let t=0,r=e[0].date;for(let n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n);return t}(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){t4.warn(e)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||0===this._heartbeatsCache.heartbeats.length)return"";let e=rg(),{heartbeatsToSend:t,unsentEntries:r}=function(e,t=1024){let r=[],n=e.slice();for(let i of e){let e=r.find(e=>e.agent===i.agent);if(e){if(e.dates.push(i.date),rv(r)>t){e.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),rv(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=tn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}catch(e){return t4.warn(e),""}}}function rg(){return new Date().toISOString().substring(0,10)}class ry{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(e){t(e)}}).then(()=>!0).catch(()=>!1)}async read(){if(!await this._canUseIndexedDBPromise)return{heartbeats:[]};{let e=await rd(this.app);return e?.heartbeats?e:{heartbeats:[]}}}async overwrite(e){if(await this._canUseIndexedDBPromise){let t=await this.read();return rf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){if(await this._canUseIndexedDBPromise){let t=await this.read();return rf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??t.lastSentHeartbeatDate,heartbeats:[...t.heartbeats,...e.heartbeats]})}}}function rv(e){return tn(JSON.stringify({version:2,heartbeats:e})).length}function rw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}re(new tD("platform-logger",e=>new t0(e),"PRIVATE")),re(new tD("heartbeat",e=>new rm(e),"PRIVATE")),rl(t1,t2,""),rl(t1,t2,"esm2020"),rl("fire-js",""),rl("firebase","12.7.0","app");let rb=new tE("auth","Firebase",rw()),rE=new tB("@firebase/auth");function r_(e,...t){rE.logLevel<=h.ERROR&&rE.error(`Auth (${rs}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(e,...t){throw rA(e,...t)}function rI(e,...t){return rA(e,...t)}function rS(e,t,r){return new tE("auth","Firebase",{...rw(),[t]:r}).create(t,{appName:e.name})}function rC(e){return rS(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rA(e,...t){if("string"!=typeof e){let r=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(r,...n)}return rb.create(e,...t)}function rk(e,t,...r){if(!e)throw rA(t,...r)}function rN(e){let t="INTERNAL ASSERTION FAILED: "+e;throw r_(t),Error(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(){return"undefined"!=typeof self&&self.location?.href||""}function rD(){return"undefined"!=typeof self&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rL{constructor(e,t){this.shortDelay=e,this.longDelay=t,t>e||rN("Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tw())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===rD()||"https:"===rD()||function(){let e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rO(e,t){e.emulator||rN("Emulator should always be set here");let{url:r}=e.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void rN("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void rN("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void rN("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},rM=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],rU=new rL(3e4,6e4);function rV(e,t){return e.tenantId&&!t.tenantId?{...t,tenantId:e.tenantId}:t}async function rF(e,t,r,n,i={}){return rB(e,i,async()=>{let i={},s={};n&&("GET"===t?s=n:i={body:JSON.stringify(n)});let a=tS({key:e.config.apiKey,...s}).slice(1),o=await e._getAdditionalHeaders();o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode);let l={method:t,headers:o,...i};return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&tp(e.emulatorConfig.host)&&(l.credentials="include"),rP.fetch()(await rj(e,e.config.apiHost,r,a),l)})}async function rB(e,t,r){e._canInitEmulator=!1;let n={...rx,...t};try{let t=new rq(e),i=await Promise.race([r(),t.promise]);t.clearNetworkTimeout();let s=await i.json();if("needConfirmation"in s)throw r$(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{let[t,r]=(i.ok?s.errorMessage:s.error.message).split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===t)throw r$(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===t)throw r$(e,"email-already-in-use",s);if("USER_DISABLED"===t)throw r$(e,"user-disabled",s);let a=n[t]||t.toLowerCase().replace(/[_\s]+/g,"-");if(r)throw rS(e,a,r);rT(e,a)}}catch(t){if(t instanceof tb)throw t;rT(e,"network-request-failed",{message:String(t)})}}async function rz(e,t,r,n,i={}){let s=await rF(e,t,r,n,i);return"mfaPendingCredential"in s&&rT(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function rj(e,t,r,n){let i=`${t}${r}?${n}`,s=e.config.emulator?rO(e.config,i):`${e.config.apiScheme}://${i}`;return rM.includes(r)&&(await e._persistenceManagerAvailable,"COOKIE"===e._getPersistenceType())?e._getPersistence()._getFinalTarget(s).toString():s}class rq{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(rI(this.auth,"network-request-failed")),rU.get())})}}function r$(e,t,r){let n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);let i=rI(e,t,n);return i.customData._tokenResponse=r,i}function rH(e){return void 0!==e&&void 0!==e.enterprise}class rK{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],void 0===e.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||0===this.recaptchaEnforcementState.length)return null;for(let t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return function(e){switch(e){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}(t.enforcementState);return null}isProviderEnabled(e){return"ENFORCE"===this.getProviderEnforcementState(e)||"AUDIT"===this.getProviderEnforcementState(e)}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function rG(e,t){return rF(e,"GET","/v2/recaptchaConfig",rV(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rW(e,t){return rF(e,"POST","/v1/accounts:delete",t)}async function rQ(e,t){return rF(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rY(e){if(e)try{let t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}async function rX(e,t=!1){let r=tR(e),n=await r.getIdToken(t),i=rZ(n);rk(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");let s="object"==typeof i.firebase?i.firebase:void 0,a=s?.sign_in_provider;return{claims:i,token:n,authTime:rY(rJ(i.auth_time)),issuedAtTime:rY(rJ(i.iat)),expirationTime:rY(rJ(i.exp)),signInProvider:a||null,signInSecondFactor:s?.sign_in_second_factor||null}}function rJ(e){return 1e3*Number(e)}function rZ(e){let[t,r,n]=e.split(".");if(void 0===t||void 0===r||void 0===n)return r_("JWT malformed, contained fewer than 3 sections"),null;try{let e=ti(r);if(!e)return r_("Failed to decode base64 JWT payload"),null;return JSON.parse(e)}catch(e){return r_("Caught error parsing JWT payload as JSON",e?.toString()),null}}function r0(e){let t=rZ(e);return rk(t,"internal-error"),rk(void 0!==t.exp,"internal-error"),rk(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r1(e,t,r=!1){if(r)return t;try{return await t}catch(t){throw t instanceof tb&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){if(!e)return this.errorBackoff=3e4,Math.max(0,(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5);{let e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}}schedule(e=!1){if(!this.isRunning)return;let t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=rY(this.lastLoginAt),this.creationTime=rY(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r5(e){let t=e.auth,r=await e.getIdToken(),n=await r1(e,rQ(t,{idToken:r}));rk(n?.users.length,t,"internal-error");let i=n.users[0];e._notifyReloadListener(i);let s=i.providerUserInfo?.length?r9(i.providerUserInfo):[],a=[...e.providerData.filter(e=>!s.some(t=>t.providerId===e.providerId)),...s],o=e.isAnonymous,l=!(e.email&&i.passwordHash)&&!a?.length;Object.assign(e,{uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new r4(i.createdAt,i.lastLoginAt),isAnonymous:!!o&&l})}async function r6(e){let t=tR(e);await r5(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function r9(e){return e.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r3(e,t){let r=await rB(e,{},async()=>{let r=tS({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:i}=e.config,s=await rj(e,n,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";let o={method:"POST",headers:a,body:r};return e.emulatorConfig&&tp(e.emulatorConfig.host)&&(o.credentials="include"),rP.fetch()(s,o)});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function r8(e,t){return rF(e,"POST","/v2/accounts:revokeToken",rV(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r7{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){rk(e.idToken,"internal-error"),rk(void 0!==e.idToken,"internal-error"),rk(void 0!==e.refreshToken,"internal-error");let t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):r0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){rk(0!==e.length,"internal-error");let t=r0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(rk(this.refreshToken,e,"user-token-expired"),this.refreshToken)?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){let{accessToken:r,refreshToken:n,expiresIn:i}=await r3(e,t);this.updateTokensAndExpiration(r,n,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}static fromJSON(e,t){let{refreshToken:r,accessToken:n,expirationTime:i}=t,s=new r7;return r&&(rk("string"==typeof r,"internal-error",{appName:e}),s.refreshToken=r),n&&(rk("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),i&&(rk("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new r7,this.toJSON())}_performRefresh(){return rN("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e,t){rk("string"==typeof e||void 0===e,"internal-error",{appName:t})}class nt{constructor({uid:e,auth:t,stsTokenManager:r,...n}){this.providerId="firebase",this.proactiveRefresh=new r2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new r4(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(e){let t=await r1(this,this.stsTokenManager.getToken(this.auth,e));return rk(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return rX(this,e)}reload(){return r6(this)}_assign(e){this!==e&&(rk(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>({...e})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let t=new nt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){rk(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await r5(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rr(this.auth.app))return Promise.reject(rC(this.auth));let e=await this.getIdToken();return await r1(this,rW(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){let r=t.displayName??void 0,n=t.email??void 0,i=t.phoneNumber??void 0,s=t.photoURL??void 0,a=t.tenantId??void 0,o=t._redirectEventId??void 0,l=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:u,emailVerified:c,isAnonymous:d,providerData:f,stsTokenManager:p}=t;rk(u&&p,e,"internal-error");let m=r7.fromJSON(this.name,p);rk("string"==typeof u,e,"internal-error"),ne(r,e.name),ne(n,e.name),rk("boolean"==typeof c,e,"internal-error"),rk("boolean"==typeof d,e,"internal-error"),ne(i,e.name),ne(s,e.name),ne(a,e.name),ne(o,e.name),ne(l,e.name),ne(h,e.name);let g=new nt({uid:u,auth:e,email:n,emailVerified:c,displayName:r,isAnonymous:d,photoURL:s,phoneNumber:i,tenantId:a,stsTokenManager:m,createdAt:l,lastLoginAt:h});return f&&Array.isArray(f)&&(g.providerData=f.map(e=>({...e}))),o&&(g._redirectEventId=o),g}static async _fromIdTokenResponse(e,t,r=!1){let n=new r7;n.updateFromServerResponse(t);let i=new nt({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return await r5(i),i}static async _fromGetAccountInfoResponse(e,t,r){let n=t.users[0];rk(void 0!==n.localId,"internal-error");let i=void 0!==n.providerUserInfo?r9(n.providerUserInfo):[],s=!(n.email&&n.passwordHash)&&!i?.length,a=new r7;a.updateFromIdToken(r);let o=new nt({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:s});return Object.assign(o,{uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:i,metadata:new r4(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!i?.length}),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nr=new Map;function nn(e){e instanceof Function||rN("Expected a class definition");let t=nr.get(e);return t?t instanceof e||rN("Instance stored in cache mismatched with class"):(t=new e,nr.set(e,t)),t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){let t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(e,t,r){return`firebase:${e}:${t}:${r}`}ni.type="NONE";class na{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;let{config:n,name:i}=this.auth;this.fullUserKey=ns(this.userKey,n.apiKey,i),this.fullPersistenceKey=ns("persistence",n.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){let t=await rQ(this.auth,{idToken:e}).catch(()=>void 0);return t?nt._fromGetAccountInfoResponse(this.auth,t,e):null}return nt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new na(nn(ni),e,r);let n=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e),i=n[0]||nn(ni),s=ns(r,e.config.apiKey,e.name),a=null;for(let r of t)try{let t=await r._get(s);if(t){let n;if("string"==typeof t){let r=await rQ(e,{idToken:t}).catch(()=>void 0);if(!r)break;n=await nt._fromGetAccountInfoResponse(e,r,t)}else n=nt._fromJSON(e,t);r!==i&&(a=n),i=r;break}}catch{}let o=n.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&o.length&&(i=o[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(s)}catch{}}))),new na(i,e,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(e){let t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";{if(nc(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(nl(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(nf(t))return"Blackberry";if(np(t))return"Webos";if(nh(t))return"Safari";if((t.includes("chrome/")||nu(t))&&!t.includes("edge/"))return"Chrome";if(nd(t))return"Android";let r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if(r?.length===2)return r[1]}return"Other"}function nl(e=tw()){return/firefox\//i.test(e)}function nh(e=tw()){let t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function nu(e=tw()){return/crios\//i.test(e)}function nc(e=tw()){return/iemobile/i.test(e)}function nd(e=tw()){return/android/i.test(e)}function nf(e=tw()){return/blackberry/i.test(e)}function np(e=tw()){return/webos/i.test(e)}function nm(e=tw()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ng(e=tw()){return nm(e)||nd(e)||np(e)||nf(e)||/windows phone/i.test(e)||nc(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ny(e,t=[]){let r;switch(e){case"Browser":r=no(tw());break;case"Worker":r=`${no(tw())}-${e}`;break;default:r=e}let n=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${rs}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){let r=t=>new Promise((r,n)=>{try{let n=e(t);r(n)}catch(e){n(e)}});r.onAbort=t,this.queue.push(r);let n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let t=[];try{for(let r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(e){for(let e of(t.reverse(),t))try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:e?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nw(e,t={}){return rF(e,"GET","/v2/passwordPolicy",rV(e,t))}class nb{constructor(e){let t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??6,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),void 0!==t.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),void 0!==t.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),void 0!==t.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),void 0!==t.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){let t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){let r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){let r;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new n_(this),this.idTokenSubscription=new n_(this),this.beforeStateQueue=new nv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=rb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(e=>this._resolvePersistenceManagerAvailable=e)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=nn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await na.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(this.currentUser||e){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let t=await rQ(this,{idToken:e}),r=await nt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(e){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",e),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(rr(this.app)){let e=this.app.settings.authIdToken;return e?new Promise(t=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(e).then(t,t))}):this.directlySetCurrentUser(null)}let t=await this.assertedPersistence.getCurrentUser(),r=t,n=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let t=this.redirectUser?._redirectEventId,i=r?._redirectEventId,s=await this.tryRedirectSignIn(e);(!t||t===i)&&s?.user&&(r=s.user,n=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(e))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return(rk(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId)?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await r5(e)}catch(e){if(e?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rr(this.app))return Promise.reject(rC(this));let t=e?tR(e):null;return t&&rk(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&rk(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rr(this.app)?Promise.reject(rC(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rr(this.app)?Promise.reject(rC(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nn(e))})}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=new nb(await nw(this));null===this.tenantId?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new tE("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){let t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await r8(this,t)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){let r=await this.getOrInitRedirectPersistenceManager(t);return null===e?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let t=e&&nn(e)||this._popupRedirectResolver;rk(t,this,"argument-error"),this.redirectPersistenceManager=await na.create(this,[nn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return(this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e)?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};let i="function"==typeof t?t:t.next.bind(t),s=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(rk(a,this,"internal-error"),a.then(()=>{s||i(this.currentUser)}),"function"==typeof t){let i=e.addObserver(t,r,n);return()=>{s=!0,i()}}{let r=e.addObserver(t);return()=>{s=!0,r()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return rk(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ny(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){let e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);let t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);let r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(rr(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&function(e,...t){rE.logLevel<=h.WARN&&rE.warn(`Auth (${rs}): ${e}`,...t)}(`Error while retrieving App Check token: ${e.error}`),e?.token}}class n_{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){let r=new tk(e,void 0);return r.subscribe.bind(r)}(e=>this.observer=e)}get next(){return rk(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nT={async loadJS(){throw Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function nI(e){return`__${e}${Math.floor(1e6*Math.random())}`}class nS{constructor(){this.enterprise=new nC}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class nC{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}let nA="NO_RECAPTCHA";class nk{constructor(e){this.type="recaptcha-enterprise",this.auth=tR(e)}async verify(e="verify",t=!1){async function r(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise(async(t,r)=>{rG(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(n=>{if(void 0===n.recaptchaKey)r(Error("recaptcha Enterprise site key undefined"));else{let r=new rK(n);return null==e.tenantId?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,t(r.siteKey)}}).catch(e=>{r(e)})})}function n(t,r,n){let i=window.grecaptcha;rH(i)?i.enterprise.ready(()=>{i.enterprise.execute(t,{action:e}).then(e=>{r(e)}).catch(()=>{r(nA)})}):n(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new nS().execute("siteKey",{action:"verify"}):new Promise((e,i)=>{r(this.auth).then(r=>{if(!t&&rH(window.grecaptcha))n(r,e,i);else{var s;if("undefined"==typeof window){i(Error("RecaptchaVerifier is only supported in browser"));return}let t=nT.recaptchaEnterpriseScript;0!==t.length&&(t+=r),(s=t,nT.loadJS(s)).then(()=>{n(r,e,i)}).catch(e=>{i(e)})}}).catch(e=>{i(e)})})}}async function nN(e,t,r,n=!1,i=!1){let s;let a=new nk(e);if(i)s=nA;else try{s=await a.verify(r)}catch(e){s=await a.verify(r,!0)}let o={...t};if("mfaSmsEnrollment"===r||"mfaSmsSignIn"===r){if("phoneEnrollmentInfo"in o){let e=o.phoneEnrollmentInfo.phoneNumber,t=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:t,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){let e=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:e,captchaResponse:s,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return n?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function nR(e,t,r,n,i){if("EMAIL_PASSWORD_PROVIDER"===i){if(!e._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER"))return n(e,t).catch(async i=>{if("auth/missing-recaptcha-token"!==i.code)return Promise.reject(i);{console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let i=await nN(e,t,r,"getOobCode"===r);return n(e,i)}});{let i=await nN(e,t,r,"getOobCode"===r);return n(e,i)}}if("PHONE_PROVIDER"!==i)return Promise.reject(i+" provider is not supported.");if(e._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){let i=await nN(e,t,r);return n(e,i).catch(async i=>{if(e._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&("auth/missing-recaptcha-token"===i.code||"auth/invalid-app-credential"===i.code)){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${r} flow.`);let i=await nN(e,t,r,!1,!0);return n(e,i)}return Promise.reject(i)})}{let i=await nN(e,t,r,!1,!0);return n(e,i)}}async function nD(e){let t=tR(e),r=new rK(await rG(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}));null==t.tenantId?t._agentRecaptchaConfig=r:t._tenantRecaptchaConfigs[t.tenantId]=r,r.isAnyProviderEnabled()&&new nk(t).verify()}function nL(e){let t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function nO(e){if(!e)return null;let t=Number(e);return isNaN(t)?null:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return rN("not implemented")}_getIdTokenResponse(e){return rN("not implemented")}_linkToIdToken(e,t){return rN("not implemented")}_getReauthenticationResolver(e){return rN("not implemented")}}async function nx(e,t){return rF(e,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nM(e,t){return rz(e,"POST","/v1/accounts:signInWithPassword",rV(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nU(e,t){return rz(e,"POST","/v1/accounts:signInWithEmailLink",rV(e,t))}async function nV(e,t){return rz(e,"POST","/v1/accounts:signInWithEmailLink",rV(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF extends nP{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new nF(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new nF(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let t="string"==typeof e?JSON.parse(e):e;if(t?.email&&t?.password){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return nR(e,{returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signInWithPassword",nM,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return nU(e,{email:this._email,oobCode:this._password});default:rT(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return nR(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nx,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return nV(e,{idToken:t,email:this._email,oobCode:this._password});default:rT(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nB(e,t){return rz(e,"POST","/v1/accounts:signInWithIdp",rV(e,t))}class nz extends nP{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let t=new nz(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rT("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let{providerId:t,signInMethod:r,...n}="string"==typeof e?JSON.parse(e):e;if(!t||!r)return null;let i=new nz(t,r);return i.idToken=n.idToken||void 0,i.accessToken=n.accessToken||void 0,i.secret=n.secret,i.nonce=n.nonce,i.pendingToken=n.pendingToken||null,i}_getIdTokenResponse(e){return nB(e,this.buildRequest())}_linkToIdToken(e,t){let r=this.buildRequest();return r.idToken=t,nB(e,r)}_getReauthenticationResolver(e){let t=this.buildRequest();return t.autoCreate=!1,nB(e,t)}buildRequest(){let e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tS(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nj(e,t){return rF(e,"POST","/v1/accounts:sendVerificationCode",rV(e,t))}async function nq(e,t){return rz(e,"POST","/v1/accounts:signInWithPhoneNumber",rV(e,t))}async function n$(e,t){let r=await rz(e,"POST","/v1/accounts:signInWithPhoneNumber",rV(e,t));if(r.temporaryProof)throw r$(e,"account-exists-with-different-credential",r);return r}let nH={USER_NOT_FOUND:"user-not-found"};async function nK(e,t){return rz(e,"POST","/v1/accounts:signInWithPhoneNumber",rV(e,{...t,operation:"REAUTH"}),nH)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nG extends nP{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new nG({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new nG({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return nq(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return n$(e,{idToken:t,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return nK(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:n}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));let{verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}=e;return r||t||n||i?new nG({verificationId:t,verificationCode:r,phoneNumber:n,temporaryProof:i}):null}}class nW{constructor(e){let t=tC(tA(e)),r=t.apiKey??null,n=t.oobCode??null,i=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(t.mode??null);rk(r&&n&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=n,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){let t=function(e){let t=tC(tA(e)).link,r=t?tC(tA(t)).deep_link_id:null,n=tC(tA(e)).deep_link_id;return(n?tC(tA(n)).link:null)||n||r||t||e}(e);try{return new nW(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nQ{constructor(){this.providerId=nQ.PROVIDER_ID}static credential(e,t){return nF._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){let r=nW.parseLink(t);return rk(r,"argument-error"),nF._fromEmailAndCode(e,r.code,r.tenantId)}}nQ.PROVIDER_ID="password",nQ.EMAIL_PASSWORD_SIGN_IN_METHOD="password",nQ.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nY{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nX extends nY{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nJ extends nX{constructor(){super("facebook.com")}static credential(e){return nz._fromParams({providerId:nJ.PROVIDER_ID,signInMethod:nJ.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nJ.credentialFromTaggedObject(e)}static credentialFromError(e){return nJ.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nJ.credential(e.oauthAccessToken)}catch{return null}}}nJ.FACEBOOK_SIGN_IN_METHOD="facebook.com",nJ.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nZ extends nX{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nz._fromParams({providerId:nZ.PROVIDER_ID,signInMethod:nZ.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return nZ.credentialFromTaggedObject(e)}static credentialFromError(e){return nZ.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return nZ.credential(t,r)}catch{return null}}}nZ.GOOGLE_SIGN_IN_METHOD="google.com",nZ.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0 extends nX{constructor(){super("github.com")}static credential(e){return nz._fromParams({providerId:n0.PROVIDER_ID,signInMethod:n0.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return n0.credentialFromTaggedObject(e)}static credentialFromError(e){return n0.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return n0.credential(e.oauthAccessToken)}catch{return null}}}n0.GITHUB_SIGN_IN_METHOD="github.com",n0.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1 extends nX{constructor(){super("twitter.com")}static credential(e,t){return nz._fromParams({providerId:n1.PROVIDER_ID,signInMethod:n1.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return n1.credentialFromTaggedObject(e)}static credentialFromError(e){return n1.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return n1.credential(t,r)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n2(e,t){return rz(e,"POST","/v1/accounts:signUp",rV(e,t))}n1.TWITTER_SIGN_IN_METHOD="twitter.com",n1.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,n=!1){return new n4({user:await nt._fromIdTokenResponse(e,r,n),providerId:n5(r),_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){return await e._updateTokensIfNecessary(r,!0),new n4({user:e,providerId:n5(r),_tokenResponse:r,operationType:t})}}function n5(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n6(e){if(rr(e.app))return Promise.reject(rC(e));let t=tR(e);if(await t._initializationPromise,t.currentUser?.isAnonymous)return new n4({user:t.currentUser,providerId:null,operationType:"signIn"});let r=await n2(t,{returnSecureToken:!0}),n=await n4._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(n.user),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n9 extends tb{constructor(e,t,r,n){super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,n9.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new n9(e,t,r,n)}}function n3(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch(r=>{if("auth/multi-factor-auth-required"===r.code)throw n9._fromErrorAndOperation(e,r,t,n);throw r})}async function n8(e,t,r=!1){let n=await r1(e,t._linkToIdToken(e.auth,await e.getIdToken()),r);return n4._forOperation(e,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n7(e,t,r=!1){let{auth:n}=e;if(rr(n.app))return Promise.reject(rC(n));let i="reauthenticate";try{let s=await r1(e,n3(n,i,t,e),r);rk(s.idToken,n,"internal-error");let a=rZ(s.idToken);rk(a,n,"internal-error");let{sub:o}=a;return rk(e.uid===o,n,"user-mismatch"),n4._forOperation(e,i,s)}catch(e){throw e?.code==="auth/user-not-found"&&rT(n,"user-mismatch"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ie(e,t,r=!1){if(rr(e.app))return Promise.reject(rC(e));let n="signIn",i=await n3(e,n,t),s=await n4._fromIdTokenResponse(e,n,i);return r||await e._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(e,t){return rF(e,"POST","/v2/accounts/mfaEnrollment:start",rV(e,t))}new WeakMap;let ir="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(ir,"1"),this.storage.removeItem(ir),Promise.resolve(!0)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){let t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}class is extends ii{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ng(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let t of Object.keys(this.listeners)){let r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((e,t,r)=>{this.notifyListeners(e,r)});return}let r=e.key;t?this.detachListener():this.stopPolling();let n=()=>{let e=this.storage.getItem(r);(t||this.localCache[r]!==e)&&this.notifyListeners(r,e)},i=this.storage.getItem(r);(function(){let e=tw();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0})()&&10===document.documentMode&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){let t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}is.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia extends ii{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ia.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;let r=new io(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let{eventId:t,eventType:r,data:n}=e.data,i=this.handlersMap[r];if(!i?.size)return;e.ports[0].postMessage({status:"ack",eventId:t,eventType:r});let s=Array.from(i).map(async t=>t(e.origin,n)),a=await Promise.all(s.map(async e=>{try{let t=await e;return{fulfilled:!0,value:t}}catch(e){return{fulfilled:!1,reason:e}}}));e.ports[0].postMessage({status:"done",eventId:t,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(e="",t=10){let r="";for(let e=0;e<t;e++)r+=Math.floor(10*Math.random());return e+r}io.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){let n,i;let s="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!s)throw Error("connection_unavailable");return new Promise((a,o)=>{let l=il("",20);s.port1.start();let h=setTimeout(()=>{o(Error("unsupported_event"))},r);i={messageChannel:s,onMessage(e){if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(h),n=setTimeout(()=>{o(Error("timeout"))},3e3);break;case"done":clearTimeout(n),a(e.data.response);break;default:clearTimeout(h),clearTimeout(n),o(Error("invalid_response"))}}},this.handlers.add(i),s.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[s.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(){return void 0!==iu().WorkerGlobalScope&&"function"==typeof iu().importScripts}async function id(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ip="firebaseLocalStorageDb",im="firebaseLocalStorage",ig="fbase_key";class iy{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function iv(e,t){return e.transaction([im],t?"readwrite":"readonly").objectStore(im)}function iw(){let e=indexedDB.open(ip,1);return new Promise((t,r)=>{e.addEventListener("error",()=>{r(e.error)}),e.addEventListener("upgradeneeded",()=>{let t=e.result;try{t.createObjectStore(im,{keyPath:ig})}catch(e){r(e)}}),e.addEventListener("success",async()=>{let r=e.result;r.objectStoreNames.contains(im)?t(r):(r.close(),await new iy(indexedDB.deleteDatabase(ip)).toPromise(),t(await iw()))})})}async function ib(e,t,r){return new iy(iv(e,!0).put({[ig]:t,value:r})).toPromise()}async function iE(e,t){let r=iv(e,!1).get(t),n=await new iy(r).toPromise();return void 0===n?null:n.value}function i_(e,t){return new iy(iv(e,!0).delete(t)).toPromise()}class iT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await iw()),this.db}async _withRetries(e){let t=0;for(;;)try{let t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ic()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=io._getInstance(ic()?self:null),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await id(),!this.activeServiceWorker)return;this.sender=new ih(this.activeServiceWorker);let e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&(navigator?.serviceWorker?.controller||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await iw();return await ib(e,ir,"1"),await i_(e,ir),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ib(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){let t=await this._withRetries(t=>iE(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>i_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(e=>new iy(iv(e,!1).getAll()).toPromise());if(!e||0!==this.pendingWrites)return[];let t=[],r=new Set;if(0!==e.length)for(let{fbase_key:n,value:i}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(i)&&(this.notifyListeners(n,i),t.push(n));for(let e of Object.keys(this.localCache))this.localCache[e]&&!r.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;let r=this.listeners[e];if(r)for(let e of Array.from(r))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(e,t){return rF(e,"POST","/v2/accounts/mfaSignIn:start",rV(e,t))}iT.type="LOCAL",nI("rcb"),new rL(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iS="recaptcha";async function iC(e,t,r){if(!e._getRecaptchaConfig())try{await nD(e)}catch(e){console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let n;if(n="string"==typeof t?{phoneNumber:t}:t,"session"in n){let t=n.session;if("phoneNumber"in n){rk("enroll"===t.type,e,"internal-error");let i={idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:n.phoneNumber,clientType:"CLIENT_TYPE_WEB"}},s=async(e,t)=>{if(t.phoneEnrollmentInfo.captchaResponse===nA){rk(r?.type===iS,e,"argument-error");let n=await iA(e,t,r);return it(e,n)}return it(e,t)},a=nR(e,i,"mfaSmsEnrollment",s,"PHONE_PROVIDER");return(await a.catch(e=>Promise.reject(e))).phoneSessionInfo.sessionInfo}{rk("signin"===t.type,e,"internal-error");let i=n.multiFactorHint?.uid||n.multiFactorUid;rk(i,e,"missing-multi-factor-info");let s={mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}},a=async(e,t)=>{if(t.phoneSignInInfo.captchaResponse===nA){rk(r?.type===iS,e,"argument-error");let n=await iA(e,t,r);return iI(e,n)}return iI(e,t)},o=nR(e,s,"mfaSmsSignIn",a,"PHONE_PROVIDER");return(await o.catch(e=>Promise.reject(e))).phoneResponseInfo.sessionInfo}}{let t={phoneNumber:n.phoneNumber,clientType:"CLIENT_TYPE_WEB"},i=async(e,t)=>{if(t.captchaResponse===nA){rk(r?.type===iS,e,"argument-error");let n=await iA(e,t,r);return nj(e,n)}return nj(e,t)},s=nR(e,t,"sendVerificationCode",i,"PHONE_PROVIDER");return(await s.catch(e=>Promise.reject(e))).sessionInfo}}finally{r?._reset()}}async function iA(e,t,r){rk(r.type===iS,e,"argument-error");let n=await r.verify();rk("string"==typeof n,e,"argument-error");let i={...t};if("phoneEnrollmentInfo"in i){let e=i.phoneEnrollmentInfo.phoneNumber,t=i.phoneEnrollmentInfo.captchaResponse,r=i.phoneEnrollmentInfo.clientType,s=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:e,recaptchaToken:n,captchaResponse:t,clientType:r,recaptchaVersion:s}}),i}if(!("phoneSignInInfo"in i))return Object.assign(i,{recaptchaToken:n}),i;{let e=i.phoneSignInInfo.captchaResponse,t=i.phoneSignInInfo.clientType,r=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:n,captchaResponse:e,clientType:t,recaptchaVersion:r}}),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(e){this.providerId=ik.PROVIDER_ID,this.auth=tR(e)}verifyPhoneNumber(e,t){return iC(this.auth,e,tR(t))}static credential(e,t){return nG._fromVerification(e,t)}static credentialFromResult(e){return ik.credentialFromTaggedObject(e)}static credentialFromError(e){return ik.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:t,temporaryProof:r}=e;return t&&r?nG._fromTokenResponse(t,r):null}}ik.PROVIDER_ID="phone",ik.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN extends nP{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return nB(e,this._buildIdpRequest())}_linkToIdToken(e,t){return nB(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return nB(e,this._buildIdpRequest())}_buildIdpRequest(e){let t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function iR(e){return ie(e.auth,new iN(e),e.bypassAuthState)}function iD(e){let{auth:t,user:r}=e;return rk(r,t,"internal-error"),n7(r,new iN(e),e.bypassAuthState)}async function iL(e){let{auth:t,user:r}=e;return rk(r,t,"internal-error"),n8(r,new iN(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iO{constructor(e,t,r,n,i=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}})}async onAuthEvent(e){let{urlResponse:t,sessionId:r,postBody:n,tenantId:i,error:s,type:a}=e;if(s){this.reject(s);return}let o={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iR;case"linkViaPopup":case"linkViaRedirect":return iL;case"reauthViaPopup":case"reauthViaRedirect":return iD;default:rT(this.auth,"internal-error")}}resolve(e){this.pendingPromise||rN("Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){this.pendingPromise||rN("Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iP=new rL(2e3,1e4);class ix extends iO{constructor(e,t,r,n,i){super(e,t,n,i),this.provider=r,this.authWindow=null,this.pollId=null,ix.currentPopupAction&&ix.currentPopupAction.cancel(),ix.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return rk(e,this.auth,"internal-error"),e}async onExecution(){1===this.filter.length||rN("Popup operations only handle one event");let e=il();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(rI(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(rI(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ix.currentPopupAction=null}pollUserCancellation(){let e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rI(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iP.get())};e()}}ix.currentPopupAction=null;let iM=new Map;class iU extends iO{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=iM.get(this.auth._key());if(!e){try{let t=await iV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}iM.set(this.auth._key(),e)}return this.bypassAuthState||iM.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"===e.type){this.resolve(null);return}if(e.eventId){let t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function iV(e,t){let r=ns("pendingRedirect",t.config.apiKey,t.name),n=nn(e._redirectPersistence);if(!await n._isAvailable())return!1;let i=await n._get(r)==="true";return await n._remove(r),i}function iF(e,t){iM.set(e._key(),t)}async function iB(e,t,r=!1){if(rr(e.app))return Promise.reject(rC(e));let n=tR(e),i=t?nn(t):(rk(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver),s=new iU(n,i,r),a=await s.execute();return a&&!r&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,t)),a}class iz{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return iq(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!iq(e)){let r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(rI(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){let r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ij(e))}saveEventToCache(e){this.cachedEventUids.add(ij(e)),this.lastProcessedEventTime=Date.now()}}function ij(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function iq({type:e,error:t}){return"unknown"===e&&t?.code==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i$(e,t={}){return rF(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iH=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iK=/^https?/;async function iG(e){if(e.config.emulator)return;let{authorizedDomains:t}=await i$(e);for(let e of t)try{if(function(e){let t=rR(),{protocol:r,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){let i=new URL(e);return""===i.hostname&&""===n?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&i.hostname===n}if(!iK.test(r))return!1;if(iH.test(e))return n===e;let i=e.replace(/\./g,"\\.");return RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}(e))return}catch{}rT(e,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iW=new rL(3e4,6e4);function iQ(){let e=iu().___jsl;if(e?.H){for(let t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}}let iY=null,iX=new rL(5e3,15e3),iJ={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iZ=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function i0(e){let t=await (iY=iY||new Promise((t,r)=>{function n(){iQ(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{iQ(),r(rI(e,"network-request-failed"))},timeout:iW.get()})}if(iu().gapi?.iframes?.Iframe)t(gapi.iframes.getContext());else if(iu().gapi?.load)n();else{var i;let t=nI("iframefcb");return iu()[t]=()=>{gapi.load?n():r(rI(e,"network-request-failed"))},(i=`${nT.gapiScript}?onload=${t}`,nT.loadJS(i)).catch(e=>r(e))}}).catch(e=>{throw iY=null,e})),r=iu().gapi;return rk(r,e,"internal-error"),t.open({where:document.body,url:function(e){let t=e.config;rk(t.authDomain,e,"auth-domain-config-required");let r=t.emulator?rO(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:rs},i=iZ.get(e.config.apiHost);i&&(n.eid=i);let s=e._getFrameworks();return s.length&&(n.fw=s.join(",")),`${r}?${tS(n).slice(1)}`}(e),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iJ,dontclear:!0},t=>new Promise(async(r,n)=>{await t.restyle({setHideOnLeave:!1});let i=rI(e,"network-request-failed"),s=iu().setTimeout(()=>{n(i)},iX.get());function a(){iu().clearTimeout(s),r(t)}t.ping(a).then(a,()=>{n(i)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class i2{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}let i4=encodeURIComponent("fac");async function i5(e,t,r,n,i,s){rk(e.config.authDomain,e,"auth-domain-config-required"),rk(e.config.apiKey,e,"invalid-api-key");let a={apiKey:e.config.apiKey,appName:e.name,authType:r,redirectUrl:n,v:rs,eventId:i};if(t instanceof nY)for(let[r,n]of(t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",!function(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())&&(a.customParameters=JSON.stringify(t.getCustomParameters())),Object.entries(s||{})))a[r]=n;if(t instanceof nX){let e=t.getScopes().filter(e=>""!==e);e.length>0&&(a.scopes=e.join(","))}for(let t of(e.tenantId&&(a.tid=e.tenantId),Object.keys(a)))void 0===a[t]&&delete a[t];let o=await e._getAppCheckToken(),l=o?`#${i4}=${encodeURIComponent(o)}`:"";return`${function({config:e}){return e.emulator?rO(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}(e)}?${tS(a).slice(1)}${l}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i6="webStorageSupport",i9=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ia,this._completeRedirectFn=iB,this._overrideRedirectResult=iF}async _openPopup(e,t,r,n){this.eventManagers[e._key()]?.manager||rN("_initialize() not called before _openPopup()");let i=await i5(e,t,r,rR(),n);return function(e,t,r,n=500,i=600){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString(),o="",l={...i1,width:n.toString(),height:i.toString(),top:s,left:a},h=tw().toLowerCase();r&&(o=nu(h)?"_blank":r),nl(h)&&(t=t||"http://localhost",l.scrollbars="yes");let u=Object.entries(l).reduce((e,[t,r])=>`${e}${t}=${r},`,"");if(function(e=tw()){return nm(e)&&!!window.navigator?.standalone}(h)&&"_self"!==o)return function(e,t){let r=document.createElement("a");r.href=e,r.target=t;let n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}(t||"",o),new i2(null);let c=window.open(t||"",o,u);rk(c,e,"popup-blocked");try{c.focus()}catch(e){}return new i2(c)}(e,i,il())}async _openRedirect(e,t,r,n){var i;return await this._originValidation(e),i=await i5(e,t,r,rR(),n),iu().location.href=i,new Promise(()=>{})}_initialize(e){let t=e._key();if(this.eventManagers[t]){let{manager:e,promise:r}=this.eventManagers[t];return e?Promise.resolve(e):(r||rN("If manager is not set, promise should be"),r)}let r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){let t=await i0(e),r=new iz(e);return t.register("authEvent",t=>(rk(t?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(t.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(i6,{type:i6},r=>{let n=r?.[0]?.[i6];void 0!==n&&t(!!n),rT(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iG(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ng()||nh()||nm()}};class i3{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return rN("unexpected MultiFactorSessionType")}}}class i8 extends i3{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new i8(e)}_finalizeEnroll(e,t,r){return rF(e,"POST","/v2/accounts/mfaEnrollment:finalize",rV(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(e,t){return rF(e,"POST","/v2/accounts/mfaSignIn:finalize",rV(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}}class i7 extends i3{constructor(e,t,r){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=r}static _fromSecret(e,t){return new i7(t,void 0,e)}static _fromEnrollmentId(e,t){return new i7(t,e)}async _finalizeEnroll(e,t,r){return rk(void 0!==this.secret,e,"argument-error"),rF(e,"POST","/v2/accounts/mfaEnrollment:finalize",rV(e,{idToken:t,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(e,t){rk(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");let r={verificationCode:this.otp};return rF(e,"POST","/v2/accounts/mfaSignIn:finalize",rV(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r}))}}class se{constructor(e,t,r,n,i,s,a){this.sessionInfo=s,this.auth=a,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=r,this.codeIntervalSeconds=n,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(e,t){return new se(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){let r=!1;return(st(e)||st(t))&&(r=!0),r&&(st(e)&&(e=this.auth.currentUser?.email||"unknownuser"),st(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function st(e){return void 0===e||e?.length===0}var sr="@firebase/auth",sn="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return(this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser)?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let t=this.auth.onIdTokenChanged(t=>{e(t?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){rk(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}let ss=td("authIdTokenMaxAge")||300,sa=null,so=e=>async t=>{let r=t&&await t.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>ss)return;let i=r?.token;sa!==i&&(sa=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};nT={loadJS:e=>new Promise((t,r)=>{let n=document.createElement("script");n.setAttribute("src",e),n.onload=t,n.onerror=e=>{let t=rI("internal-error");t.customData=e,r(t)},n.type="text/javascript",n.charset="UTF-8",(document.getElementsByTagName("head")?.[0]??document).appendChild(n)}),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},s="Browser",re(new tD("auth",(e,{options:t})=>{let r=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;rk(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});let l=new nE(r,n,i,{apiKey:a,authDomain:o,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ny(s)});return function(e,t){let r=t?.persistence||[],n=(Array.isArray(r)?r:[r]).map(nn);t?.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,t?.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),re(new tD("auth-internal",e=>new si(tR(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),rl(sr,sn,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(s)),rl(sr,sn,"esm2020");var sl="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==A?A:"undefined"!=typeof self?self:{},sh={};(function(){function e(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function t(e,t,r){r||(r=0);let n=Array(16);if("string"==typeof t)for(var i=0;i<16;++i)n[i]=t.charCodeAt(r++)|t.charCodeAt(r++)<<8|t.charCodeAt(r++)<<16|t.charCodeAt(r++)<<24;else for(i=0;i<16;++i)n[i]=t[r++]|t[r++]<<8|t[r++]<<16|t[r++]<<24;t=e.g[0],r=e.g[1],i=e.g[2];let s=e.g[3],a;a=t+(s^r&(i^s))+n[0]+3614090360&4294967295,a=s+(i^(t=r+(a<<7&4294967295|a>>>25))&(r^i))+n[1]+3905402710&4294967295,a=i+(r^(s=t+(a<<12&4294967295|a>>>20))&(t^r))+n[2]+606105819&4294967295,a=r+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+n[3]+3250441966&4294967295,a=t+(s^(r=i+(a<<22&4294967295|a>>>10))&(i^s))+n[4]+4118548399&4294967295,a=s+(i^(t=r+(a<<7&4294967295|a>>>25))&(r^i))+n[5]+1200080426&4294967295,a=i+(r^(s=t+(a<<12&4294967295|a>>>20))&(t^r))+n[6]+2821735955&4294967295,a=r+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+n[7]+4249261313&4294967295,a=t+(s^(r=i+(a<<22&4294967295|a>>>10))&(i^s))+n[8]+1770035416&4294967295,a=s+(i^(t=r+(a<<7&4294967295|a>>>25))&(r^i))+n[9]+2336552879&4294967295,a=i+(r^(s=t+(a<<12&4294967295|a>>>20))&(t^r))+n[10]+4294925233&4294967295,a=r+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+n[11]+2304563134&4294967295,a=t+(s^(r=i+(a<<22&4294967295|a>>>10))&(i^s))+n[12]+1804603682&4294967295,a=s+(i^(t=r+(a<<7&4294967295|a>>>25))&(r^i))+n[13]+4254626195&4294967295,a=i+(r^(s=t+(a<<12&4294967295|a>>>20))&(t^r))+n[14]+2792965006&4294967295,a=r+(t^(i=s+(a<<17&4294967295|a>>>15))&(s^t))+n[15]+1236535329&4294967295,r=i+(a<<22&4294967295|a>>>10),a=t+(i^s&(r^i))+n[1]+4129170786&4294967295,t=r+(a<<5&4294967295|a>>>27),a=s+(r^i&(t^r))+n[6]+3225465664&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^r&(s^t))+n[11]+643717713&4294967295,i=s+(a<<14&4294967295|a>>>18),a=r+(s^t&(i^s))+n[0]+3921069994&4294967295,r=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(r^i))+n[5]+3593408605&4294967295,t=r+(a<<5&4294967295|a>>>27),a=s+(r^i&(t^r))+n[10]+38016083&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^r&(s^t))+n[15]+3634488961&4294967295,i=s+(a<<14&4294967295|a>>>18),a=r+(s^t&(i^s))+n[4]+3889429448&4294967295,r=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(r^i))+n[9]+568446438&4294967295,t=r+(a<<5&4294967295|a>>>27),a=s+(r^i&(t^r))+n[14]+3275163606&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^r&(s^t))+n[3]+4107603335&4294967295,i=s+(a<<14&4294967295|a>>>18),a=r+(s^t&(i^s))+n[8]+1163531501&4294967295,r=i+(a<<20&4294967295|a>>>12),a=t+(i^s&(r^i))+n[13]+2850285829&4294967295,t=r+(a<<5&4294967295|a>>>27),a=s+(r^i&(t^r))+n[2]+4243563512&4294967295,s=t+(a<<9&4294967295|a>>>23),a=i+(t^r&(s^t))+n[7]+1735328473&4294967295,i=s+(a<<14&4294967295|a>>>18),a=r+(s^t&(i^s))+n[12]+2368359562&4294967295,a=t+((r=i+(a<<20&4294967295|a>>>12))^i^s)+n[5]+4294588738&4294967295,a=s+((t=r+(a<<4&4294967295|a>>>28))^r^i)+n[8]+2272392833&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^r)+n[11]+1839030562&4294967295,a=r+((i=s+(a<<16&4294967295|a>>>16))^s^t)+n[14]+4259657740&4294967295,a=t+((r=i+(a<<23&4294967295|a>>>9))^i^s)+n[1]+2763975236&4294967295,a=s+((t=r+(a<<4&4294967295|a>>>28))^r^i)+n[4]+1272893353&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^r)+n[7]+4139469664&4294967295,a=r+((i=s+(a<<16&4294967295|a>>>16))^s^t)+n[10]+3200236656&4294967295,a=t+((r=i+(a<<23&4294967295|a>>>9))^i^s)+n[13]+681279174&4294967295,a=s+((t=r+(a<<4&4294967295|a>>>28))^r^i)+n[0]+3936430074&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^r)+n[3]+3572445317&4294967295,a=r+((i=s+(a<<16&4294967295|a>>>16))^s^t)+n[6]+76029189&4294967295,a=t+((r=i+(a<<23&4294967295|a>>>9))^i^s)+n[9]+3654602809&4294967295,a=s+((t=r+(a<<4&4294967295|a>>>28))^r^i)+n[12]+3873151461&4294967295,a=i+((s=t+(a<<11&4294967295|a>>>21))^t^r)+n[15]+530742520&4294967295,a=r+((i=s+(a<<16&4294967295|a>>>16))^s^t)+n[2]+3299628645&4294967295,r=i+(a<<23&4294967295|a>>>9),a=t+(i^(r|~s))+n[0]+4096336452&4294967295,t=r+(a<<6&4294967295|a>>>26),a=s+(r^(t|~i))+n[7]+1126891415&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~r))+n[14]+2878612391&4294967295,i=s+(a<<15&4294967295|a>>>17),a=r+(s^(i|~t))+n[5]+4237533241&4294967295,r=i+(a<<21&4294967295|a>>>11),a=t+(i^(r|~s))+n[12]+1700485571&4294967295,t=r+(a<<6&4294967295|a>>>26),a=s+(r^(t|~i))+n[3]+2399980690&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~r))+n[10]+4293915773&4294967295,i=s+(a<<15&4294967295|a>>>17),a=r+(s^(i|~t))+n[1]+2240044497&4294967295,r=i+(a<<21&4294967295|a>>>11),a=t+(i^(r|~s))+n[8]+1873313359&4294967295,t=r+(a<<6&4294967295|a>>>26),a=s+(r^(t|~i))+n[15]+4264355552&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~r))+n[6]+2734768916&4294967295,i=s+(a<<15&4294967295|a>>>17),a=r+(s^(i|~t))+n[13]+1309151649&4294967295,r=i+(a<<21&4294967295|a>>>11),a=t+(i^(r|~s))+n[4]+4149444226&4294967295,t=r+(a<<6&4294967295|a>>>26),a=s+(r^(t|~i))+n[11]+3174756917&4294967295,s=t+(a<<10&4294967295|a>>>22),a=i+(t^(s|~r))+n[2]+718787259&4294967295,i=s+(a<<15&4294967295|a>>>17),a=r+(s^(i|~t))+n[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function r(e,t){this.h=t;let r=[],n=!0;for(let i=e.length-1;i>=0;i--){let s=0|e[i];n&&s==t||(r[i]=s,n=!1)}this.g=r}!function(e,t){function r(){}r.prototype=t.prototype,e.F=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.D=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}(e,function(){this.blockSize=-1}),e.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},e.prototype.v=function(e,r){void 0===r&&(r=e.length);let n=r-this.blockSize,i=this.C,s=this.h,a=0;for(;a<r;){if(0==s)for(;a<=n;)t(this,e,a),a+=this.blockSize;if("string"==typeof e){for(;a<r;)if(i[s++]=e.charCodeAt(a++),s==this.blockSize){t(this,i),s=0;break}}else for(;a<r;)if(i[s++]=e[a++],s==this.blockSize){t(this,i),s=0;break}}this.h=s,this.o+=r},e.prototype.A=function(){var e=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;t=8*this.o;for(var r=e.length-8;r<e.length;++r)e[r]=255&t,t/=256;for(this.v(e),e=Array(16),t=0,r=0;r<4;++r)for(let n=0;n<32;n+=8)e[t++]=this.g[r]>>>n&255;return e};var n,i={};function s(e){return -128<=e&&e<128?Object.prototype.hasOwnProperty.call(i,e)?i[e]:i[e]=new r([0|e],e<0?-1:0):new r([0|e],e<0?-1:0)}function a(e){if(isNaN(e)||!isFinite(e))return o;if(e<0)return p(a(-e));let t=[],n=1;for(let r=0;e>=n;r++)t[r]=e/n|0,n*=4294967296;return new r(t,0)}var o=s(0),l=s(1),h=s(16777216);function d(e){if(0!=e.h)return!1;for(let t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function f(e){return -1==e.h}function p(e){let t=e.g.length,n=[];for(let r=0;r<t;r++)n[r]=~e.g[r];return new r(n,~e.h).add(l)}function m(e,t){return e.add(p(t))}function g(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function y(e,t){this.g=e,this.h=t}function v(e,t){if(d(t))throw Error("division by zero");if(d(e))return new y(o,o);if(f(e))return t=v(p(e),t),new y(p(t.g),p(t.h));if(f(t))return t=v(e,p(t)),new y(p(t.g),t.h);if(e.g.length>30){if(f(e)||f(t))throw Error("slowDivide_ only works with positive integers.");for(var r=l,n=t;0>=n.l(e);)r=w(r),n=w(n);var i=b(r,1),s=b(n,1);for(n=b(n,2),r=b(r,2);!d(n);){var h=s.add(n);0>=h.l(e)&&(i=i.add(r),s=h),n=b(n,1),r=b(r,1)}return t=m(e,i.j(t)),new y(i,t)}for(i=o;e.l(t)>=0;){for(n=(n=Math.ceil(Math.log(r=Math.max(1,Math.floor(e.m()/t.m())))/Math.LN2))<=48?1:Math.pow(2,n-48),h=(s=a(r)).j(t);f(h)||h.l(e)>0;)r-=n,h=(s=a(r)).j(t);d(s)&&(s=l),i=i.add(s),e=m(e,h)}return new y(i,e)}function w(e){let t=e.g.length+1,n=[];for(let r=0;r<t;r++)n[r]=e.i(r)<<1|e.i(r-1)>>>31;return new r(n,e.h)}function b(e,t){let n=t>>5;t%=32;let i=e.g.length-n,s=[];for(let r=0;r<i;r++)s[r]=t>0?e.i(r+n)>>>t|e.i(r+n+1)<<32-t:e.i(r+n);return new r(s,e.h)}(n=r.prototype).m=function(){if(f(this))return-p(this).m();let e=0,t=1;for(let r=0;r<this.g.length;r++){let n=this.i(r);e+=(n>=0?n:4294967296+n)*t,t*=4294967296}return e},n.toString=function(e){if((e=e||10)<2||36<e)throw Error("radix out of range: "+e);if(d(this))return"0";if(f(this))return"-"+p(this).toString(e);let t=a(Math.pow(e,6));var r=this;let n="";for(;;){let i=v(r,t).g,s=(((r=m(r,i.j(t))).g.length>0?r.g[0]:r.h)>>>0).toString(e);if(d(r=i))return s+n;for(;s.length<6;)s="0"+s;n=s+n}},n.i=function(e){return e<0?0:e<this.g.length?this.g[e]:this.h},n.l=function(e){return f(e=m(this,e))?-1:d(e)?0:1},n.abs=function(){return f(this)?p(this):this},n.add=function(e){let t=Math.max(this.g.length,e.g.length),n=[],i=0;for(let r=0;r<=t;r++){let t=i+(65535&this.i(r))+(65535&e.i(r)),s=(t>>>16)+(this.i(r)>>>16)+(e.i(r)>>>16);i=s>>>16,t&=65535,s&=65535,n[r]=s<<16|t}return new r(n,-2147483648&n[n.length-1]?-1:0)},n.j=function(e){if(d(this)||d(e))return o;if(f(this))return f(e)?p(this).j(p(e)):p(p(this).j(e));if(f(e))return p(this.j(p(e)));if(0>this.l(h)&&0>e.l(h))return a(this.m()*e.m());let t=this.g.length+e.g.length,n=[];for(var i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(let t=0;t<e.g.length;t++){let r=this.i(i)>>>16,s=65535&this.i(i),a=e.i(t)>>>16,o=65535&e.i(t);n[2*i+2*t]+=s*o,g(n,2*i+2*t),n[2*i+2*t+1]+=r*o,g(n,2*i+2*t+1),n[2*i+2*t+1]+=s*a,g(n,2*i+2*t+1),n[2*i+2*t+2]+=r*a,g(n,2*i+2*t+2)}for(e=0;e<t;e++)n[e]=n[2*e+1]<<16|n[2*e];for(e=t;e<2*t;e++)n[e]=0;return new r(n,0)},n.B=function(e){return v(this,e).h},n.and=function(e){let t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)&e.i(r);return new r(n,this.h&e.h)},n.or=function(e){let t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)|e.i(r);return new r(n,this.h|e.h)},n.xor=function(e){let t=Math.max(this.g.length,e.g.length),n=[];for(let r=0;r<t;r++)n[r]=this.i(r)^e.i(r);return new r(n,this.h^e.h)},e.prototype.digest=e.prototype.A,e.prototype.reset=e.prototype.u,e.prototype.update=e.prototype.v,c=sh.Md5=e,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.B,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=a,r.fromString=function e(t,r){if(0==t.length)throw Error("number format error: empty string");if((r=r||10)<2||36<r)throw Error("radix out of range: "+r);if("-"==t.charAt(0))return p(e(t.substring(1),r));if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character');let n=a(Math.pow(r,8)),i=o;for(let e=0;e<t.length;e+=8){var s=Math.min(8,t.length-e);let o=parseInt(t.substring(e,e+s),r);s<8?(s=a(Math.pow(r,s)),i=i.j(s).add(a(o))):i=(i=i.j(n)).add(a(o))}return i},u=sh.Integer=r}).apply(void 0!==sl?sl:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var su="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==A?A:"undefined"!=typeof self?self:{},sc={};(function(){var e,t,r=Object.defineProperty,n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof su&&su];for(var t=0;t<e.length;++t){var r=e[t];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}(this);function i(e,t){if(t)e:{var i=n;e=e.split(".");for(var s=0;s<e.length-1;s++){var a=e[s];if(!(a in i))break e;i=i[a]}(t=t(s=i[e=e[e.length-1]]))!=s&&null!=t&&r(i,e,{configurable:!0,writable:!0,value:t})}}i("Symbol.dispose",function(e){return e||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(e){return e||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(e){return e||function(e){var t,r=[];for(t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push([t,e[t]]);return r}});var s=s||{},a=this||self;function o(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function l(e,t,r){return e.call.apply(e.bind,arguments)}function h(e,t,r){return(h=l).apply(null,arguments)}function u(e,t){var r=Array.prototype.slice.call(arguments,1);return function(){var t=r.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function c(e,t){function r(){}r.prototype=t.prototype,e.Z=t.prototype,e.prototype=new r,e.prototype.constructor=e,e.Ob=function(e,r,n){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[r].apply(e,i)}}var b="undefined"!=typeof AsyncContext&&"function"==typeof AsyncContext.Snapshot?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function E(e){let t=e.length;if(t>0){let r=Array(t);for(let n=0;n<t;n++)r[n]=e[n];return r}return[]}function _(e,t){for(let t=1;t<arguments.length;t++){let n=arguments[t];var r=typeof n;if("array"==(r="object"!=r?r:n?Array.isArray(n)?"array":r:"null")||"object"==r&&"number"==typeof n.length){r=e.length||0;let t=n.length||0;e.length=r+t;for(let i=0;i<t;i++)e[r+i]=n[i]}else e.push(n)}}var T=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return this.h>0?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new I,e=>e.reset());class I{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let S,C=!1,A=new class{constructor(){this.h=this.g=null}add(e,t){let r=T.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}},k=()=>{let e=Promise.resolve(void 0);S=()=>{e.then(N)}};function N(){let e;for(var t;e=null,A.g&&(e=A.g,A.g=A.g.next,A.g||(A.h=null),e.next=null),t=e;){try{t.h.call(t.g)}catch(e){!function(e){a.setTimeout(()=>{throw e},0)}(e)}T.j(t),T.h<100&&(T.h++,t.next=T.g,T.g=t)}C=!1}function R(){this.u=this.u,this.C=this.C}function D(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},D.prototype.h=function(){this.defaultPrevented=!0};var L=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{let e=()=>{};a.addEventListener("test",e,t),a.removeEventListener("test",e,t)}catch(e){}return e}();function O(e){return/^[\s\xa0]*$/.test(e)}function P(e,t){D.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,t)}c(P,D),P.prototype.init=function(e,t){let r=this.type=e.type,n=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=t,(t=e.relatedTarget)||("mouseover"==r?t=e.fromElement:"mouseout"==r&&(t=e.toElement)),this.relatedTarget=t,n?(this.clientX=void 0!==n.clientX?n.clientX:n.pageX,this.clientY=void 0!==n.clientY?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&P.Z.h.call(this)},P.prototype.h=function(){P.Z.h.call(this);let e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var x="closure_listenable_"+(1e6*Math.random()|0),M=0;function U(e,t,r,n,i){this.listener=e,this.proxy=null,this.src=t,this.type=r,this.capture=!!n,this.ha=i,this.key=++M,this.da=this.fa=!1}function V(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function F(e,t,r){for(let n in e)t.call(r,e[n],n,e)}function B(e){let t={};for(let r in e)t[r]=e[r];return t}let z="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(e,t){let r,n;for(let t=1;t<arguments.length;t++){for(r in n=arguments[t])e[r]=n[r];for(let t=0;t<z.length;t++)r=z[t],Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}}function q(e){this.src=e,this.g={},this.h=0}function $(e,t){let r=t.type;if(r in e.g){var n,i=e.g[r],s=Array.prototype.indexOf.call(i,t,void 0);(n=s>=0)&&Array.prototype.splice.call(i,s,1),n&&(V(t),0==e.g[r].length&&(delete e.g[r],e.h--))}}function H(e,t,r,n){for(let i=0;i<e.length;++i){let s=e[i];if(!s.da&&s.listener==t&&!!r==s.capture&&s.ha==n)return i}return -1}q.prototype.add=function(e,t,r,n,i){let s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);let a=H(e,t,n,i);return a>-1?(t=e[a],r||(t.fa=!1)):((t=new U(t,this.src,s,!!n,i)).fa=r,e.push(t)),t};var K="closure_lm_"+(1e6*Math.random()|0),G={};function W(e,t,r,n,i,s){if(!t)throw Error("Invalid event type");let a=o(i)?!!i.capture:!!i,l=J(e);if(l||(e[K]=l=new q(e)),(r=l.add(t,r,n,a,s)).proxy)return r;if(n=function e(t){return X.call(e.src,e.listener,t)},r.proxy=n,n.src=e,n.listener=r,e.addEventListener)L||(i=a),void 0===i&&(i=!1),e.addEventListener(t.toString(),n,i);else if(e.attachEvent)e.attachEvent(Y(t.toString()),n);else if(e.addListener&&e.removeListener)e.addListener(n);else throw Error("addEventListener and attachEvent are unavailable.");return r}function Q(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[x])$(t.i,e);else{var r=e.type,n=e.proxy;t.removeEventListener?t.removeEventListener(r,n,e.capture):t.detachEvent?t.detachEvent(Y(r),n):t.addListener&&t.removeListener&&t.removeListener(n),(r=J(t))?($(r,e),0==r.h&&(r.src=null,t[K]=null)):V(e)}}}function Y(e){return e in G?G[e]:G[e]="on"+e}function X(e,t){if(e.da)e=!0;else{t=new P(t,this);let r=e.listener,n=e.ha||e.src;e.fa&&Q(e),e=r.call(n,t)}return e}function J(e){return(e=e[K])instanceof q?e:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function ee(e){return"function"==typeof e?e:(e[Z]||(e[Z]=function(t){return e.handleEvent(t)}),e[Z])}function et(){R.call(this),this.i=new q(this),this.M=this,this.G=null}function er(e,t){let r,n;var i,s=e.G;if(s)for(i=[];s;s=s.G)i.push(s);if(e=e.M,s=t.type||t,"string"==typeof t)t=new D(t,e);else if(t instanceof D)t.target=t.target||e;else{var a=t;j(t=new D(s,e),a)}if(a=!0,i)for(n=i.length-1;n>=0;n--)a=en(r=t.g=i[n],s,!0,t)&&a;if(a=en(r=t.g=e,s,!0,t)&&a,a=en(r,s,!1,t)&&a,i)for(n=0;n<i.length;n++)a=en(r=t.g=i[n],s,!1,t)&&a}function en(e,t,r,n){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();let i=!0;for(let s=0;s<t.length;++s){let a=t[s];if(a&&!a.da&&a.capture==r){let t=a.listener,r=a.ha||a.src;a.fa&&$(e.i,a),i=!1!==t.call(r,n)&&i}}return i&&!n.defaultPrevented}c(et,R),et.prototype[x]=!0,et.prototype.removeEventListener=function(e,t,r,n){!function e(t,r,n,i,s){if(Array.isArray(r))for(var a=0;a<r.length;a++)e(t,r[a],n,i,s);else(i=o(i)?!!i.capture:!!i,n=ee(n),t&&t[x])?(t=t.i,(a=String(r).toString())in t.g&&(n=H(r=t.g[a],n,i,s))>-1&&(V(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[a],t.h--))):t&&(t=J(t))&&(r=t.g[r.toString()],t=-1,r&&(t=H(r,n,i,s)),(n=t>-1?r[t]:null)&&Q(n))}(this,e,t,r,n)},et.prototype.N=function(){if(et.Z.N.call(this),this.i){var e=this.i;for(let t in e.g){let r=e.g[t];for(let e=0;e<r.length;e++)V(r[e]);delete e.g[t],e.h--}}this.G=null},et.prototype.J=function(e,t,r,n){return this.i.add(String(e),t,!1,r,n)},et.prototype.K=function(e,t,r,n){return this.i.add(String(e),t,!0,r,n)};class ei extends R{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:function e(t){t.g=function(e,t){if("function"!=typeof e){if(e&&"function"==typeof e.handleEvent)e=h(e.handleEvent,e);else throw Error("Invalid listener argument")}return Number(t)>2147483647?-1:a.setTimeout(e,t||0)}(()=>{t.g=null,t.i&&(t.i=!1,e(t))},t.l);let r=t.h;t.h=null,t.m.apply(null,r)}(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function es(e){R.call(this),this.h=e,this.g={}}c(es,R);var ea=[];function eo(e){F(e.g,function(e,t){this.g.hasOwnProperty(t)&&Q(e)},e),e.g={}}es.prototype.N=function(){es.Z.N.call(this),eo(this)},es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var el=a.JSON.stringify,eh=a.JSON.parse,eu=class{stringify(e){return a.JSON.stringify(e,void 0)}parse(e){return a.JSON.parse(e,void 0)}};function ec(){}function ed(){}var ef={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ep(){D.call(this,"d")}function em(){D.call(this,"c")}c(ep,D),c(em,D);var eg={},ey=null;function ev(){return ey=ey||new et}function ew(e){D.call(this,eg.Ia,e)}function eb(e){let t=ev();er(t,new ew(t))}function eE(e,t){D.call(this,eg.STAT_EVENT,e),this.stat=t}function e_(e){let t=ev();er(t,new eE(t,e))}function eT(e,t){D.call(this,eg.Ja,e),this.size=t}function eI(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){e()},t)}function eS(){this.g=!0}function eC(e,t,r,n){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{let s=JSON.parse(t);if(s){for(e=0;e<s.length;e++)if(Array.isArray(s[e])){var r=s[e];if(!(r.length<2)){var n=r[1];if(Array.isArray(n)&&!(n.length<1)){var i=n[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(let e=1;e<n.length;e++)n[e]=""}}}}return el(s)}catch(e){return t}}(e,r)+(n?" "+n:"")})}eg.Ia="serverreachability",c(ew,D),eg.STAT_EVENT="statevent",c(eE,D),eg.Ja="timingevent",c(eT,D),eS.prototype.ua=function(){this.g=!1},eS.prototype.info=function(){};var eA={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ek={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function eN(){}function eR(e){return encodeURIComponent(String(e))}function eD(e,t,r,n){this.j=e,this.i=t,this.l=r,this.S=n||1,this.V=new es(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new eL}function eL(){this.i=null,this.g="",this.h=!1}c(eN,ec),eN.prototype.g=function(){return new XMLHttpRequest},e=new eN;var eO={},eP={};function ex(e,t,r){e.M=1,e.A=e6(e0(t)),e.u=r,e.R=!0,eM(e,null)}function eM(e,t){e.F=Date.now(),eV(e),e.B=e0(e.A);var r=e.B,n=e.S;Array.isArray(n)||(n=[String(n)]),th(r.i,"t",n),e.C=0,r=e.j.L,e.h=new eL,e.g=tQ(e.j,r?t:null,!e.u),e.P>0&&(e.O=new ei(h(e.Y,e,e.g),e.P)),t=e.V,r=e.g,n=e.ba;var i="readystatechange";Array.isArray(i)||(i&&(ea[0]=i.toString()),i=ea);for(let e=0;e<i.length;e++){let s=function e(t,r,n,i,s){if(i&&i.once)return function e(t,r,n,i,s){if(Array.isArray(r)){for(let a=0;a<r.length;a++)e(t,r[a],n,i,s);return null}return n=ee(n),t&&t[x]?t.K(r,n,o(i)?!!i.capture:!!i,s):W(t,r,n,!0,i,s)}(t,r,n,i,s);if(Array.isArray(r)){for(let a=0;a<r.length;a++)e(t,r[a],n,i,s);return null}return n=ee(n),t&&t[x]?t.J(r,n,o(i)?!!i.capture:!!i,s):W(t,r,n,!1,i,s)}(r,i[e],n||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}t=e.J?B(e.J):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,t)):(e.v="GET",e.g.ea(e.B,e.v,null,t)),eb(),function(e,t,r,n,i,s){e.info(function(){if(e.g){if(s){var a="",o=s.split("&");for(let e=0;e<o.length;e++){var l=o[e].split("=");if(l.length>1){let e=l[0];l=l[1];let t=e.split("_");a=t.length>=2&&"type"==t[1]?a+(e+"=")+l+"&":a+(e+"=redacted&")}}}else a=null}else a=s;return"XMLHTTP REQ ("+n+") [attempt "+i+"]: "+t+"\n"+r+"\n"+a})}(e.i,e.v,e.B,e.l,e.S,e.u)}function eU(e){return!!e.g&&"GET"==e.v&&2!=e.M&&e.j.Aa}function eV(e){e.T=Date.now()+e.H,eF(e,e.H)}function eF(e,t){if(null!=e.D)throw Error("WatchDog timer not null");e.D=eI(h(e.aa,e),t)}function eB(e){e.D&&(a.clearTimeout(e.D),e.D=null)}function ez(e){0==e.j.I||e.K||t$(e.j,e)}function ej(e){eB(e);var t=e.O;t&&"function"==typeof t.dispose&&t.dispose(),e.O=null,eo(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.dispose())}function eq(e,t){try{var r=e.j;if(0!=r.I&&(r.g==e||eW(r.h,e))){if(!e.L&&eW(r.h,e)&&3==r.I){try{var n=r.Ba.g.parse(t)}catch(e){n=null}if(Array.isArray(n)&&3==n.length){var i=n;if(0==i[0]){e:if(!r.v){if(r.g){if(r.g.F+3e3<e.F)tq(r),tO(r);else break e}tB(r),e_(18)}}else r.xa=i[1],0<r.xa-r.K&&i[2]<37500&&r.F&&0==r.A&&!r.C&&(r.C=eI(h(r.Va,r),6e3));1>=eG(r.h)&&r.ta&&(r.ta=void 0)}else tK(r,11)}else if((e.L||r.g==e)&&tq(r),!O(t))for(i=r.Ba.g.parse(t),t=0;t<i.length;t++){let o=i[t],l=o[0];if(!(l<=r.K)){if(r.K=l,o=o[1],2==r.I){if("c"==o[0]){r.M=o[1],r.ba=o[2];let t=o[3];null!=t&&(r.ka=t,r.j.info("VER="+r.ka));let i=o[4];null!=i&&(r.za=i,r.j.info("SVER="+r.za));let l=o[5];null!=l&&"number"==typeof l&&l>0&&(n=1.5*l,r.O=n,r.j.info("backChannelRequestTimeoutMs_="+n)),n=r;let h=e.g;if(h){let e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=n.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(eQ(s,s.h),s.h=null))}if(n.G){let e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(n.wa=e,e5(n.J,n.G,e))}}if(r.I=3,r.l&&r.l.ra(),r.aa&&(r.T=Date.now()-e.F,r.j.info("Handshake RTT: "+r.T+"ms")),(n=r).na=tW(n,n.L?n.ba:null,n.W),e.L){eY(n.h,e);var a=n.O;a&&(e.H=a),e.D&&(eB(e),eV(e)),n.g=e}else tF(n);r.i.length>0&&tx(r)}else"stop"!=o[0]&&"close"!=o[0]||tK(r,7)}else 3==r.I&&("stop"==o[0]||"close"==o[0]?"stop"==o[0]?tK(r,7):tL(r):"noop"!=o[0]&&r.l&&r.l.qa(o),r.A=0)}}}eb(4)}catch(e){}}eD.prototype.ba=function(e){e=e.target;let t=this.O;t&&3==tk(e)?t.j():this.Y(e)},eD.prototype.Y=function(e){try{if(e==this.g)e:{let l=tk(this.g),h=this.g.ya(),u=this.g.ca();if(!(l<3)&&(3!=l||this.g&&(this.h.h||this.g.la()||tN(this.g)))){this.K||4!=l||7==h||(8==h||u<=0?eb(3):eb(2)),eB(this);var t=this.g.ca();this.X=t;var r=function(e){if(!eU(e))return e.g.la();let t=tN(e.g);if(""===t)return"";let r="",n=t.length,i=4==tk(e.g);if(!e.h.i){if("undefined"==typeof TextDecoder)return ej(e),ez(e),"";e.h.i=new a.TextDecoder}for(let s=0;s<n;s++)e.h.h=!0,r+=e.h.i.decode(t[s],{stream:!(i&&s==n-1)});return t.length=0,e.h.g+=r,e.C=0,e.h.g}(this);if(this.o=200==t,function(e,t,r,n,i,s,a){e.info(function(){return"XMLHTTP RESP ("+n+") [ attempt "+i+"]: "+t+"\n"+r+"\n"+s+" "+a})}(this.i,this.v,this.B,this.l,this.S,l,t),this.o){if(this.U&&!this.L){t:{if(this.g){var n,i=this.g;if((n=i.g?i.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(n)){var s=n;break t}}s=null}if(e=s)eC(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,eq(this,e);else{this.o=!1,this.m=3,e_(12),ej(this),ez(this);break e}}if(this.R){let t;for(e=!0;!this.K&&this.C<r.length;)if((t=function(e,t){var r=e.C,n=t.indexOf("\n",r);return -1==n?eP:isNaN(r=Number(t.substring(r,n)))?eO:(n+=1)+r>t.length?eP:(t=t.slice(n,n+r),e.C=n+r,t)}(this,r))==eP){4==l&&(this.m=4,e_(14),e=!1),eC(this.i,this.l,null,"[Incomplete Response]");break}else if(t==eO){this.m=4,e_(15),eC(this.i,this.l,r,"[Invalid Chunk]"),e=!1;break}else eC(this.i,this.l,t,null),eq(this,t);if(eU(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=l||0!=r.length||this.h.h||(this.m=1,e_(16),e=!1),this.o=this.o&&e,e){if(r.length>0&&!this.W){this.W=!0;var o=this.j;o.g==this&&o.aa&&!o.P&&(o.j.info("Great, no buffering proxy detected. Bytes received: "+r.length),tz(o),o.P=!0,e_(11))}}else eC(this.i,this.l,r,"[Invalid Chunked Response]"),ej(this),ez(this)}else eC(this.i,this.l,r,null),eq(this,r);4==l&&ej(this),this.o&&!this.K&&(4==l?t$(this.j,this):(this.o=!1,eV(this)))}else(function(e){let t={};e=(e.g&&tk(e)>=2&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let n=0;n<e.length;n++){if(O(e[n]))continue;var r=function(e){var t=1;e=e.split(":");let r=[];for(;t>0&&e.length;)r.push(e.shift()),t--;return e.length&&r.push(e.join(":")),r}(e[n]);let i=r[0];if("string"!=typeof(r=r[1]))continue;r=r.trim();let s=t[i]||[];t[i]=s,s.push(r)}!function(e,t){for(let r in e)t.call(void 0,e[r],r,e)}(t,function(e){return e.join(", ")})})(this.g),400==t&&r.indexOf("Unknown SID")>0?(this.m=3,e_(12)):(this.m=0,e_(13)),ej(this),ez(this)}}}catch(e){}finally{}},eD.prototype.cancel=function(){this.K=!0,ej(this)},eD.prototype.aa=function(){this.D=null;let e=Date.now();e-this.T>=0?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.B),2!=this.M&&(eb(),e_(17)),ej(this),this.m=2,ez(this)):eF(this,this.T-e)};var e$=class{constructor(e,t){this.g=e,this.map=t}};function eH(e){this.l=e||10,e=a.PerformanceNavigationTiming?(e=a.performance.getEntriesByType("navigation")).length>0&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function eK(e){return!!e.h||!!e.g&&e.g.size>=e.j}function eG(e){return e.h?1:e.g?e.g.size:0}function eW(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function eQ(e,t){e.g?e.g.add(t):e.h=t}function eY(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function eX(e){if(null!=e.h)return e.i.concat(e.h.G);if(null!=e.g&&0!==e.g.size){let t=e.i;for(let r of e.g.values())t=t.concat(r.G);return t}return E(e.i)}eH.prototype.cancel=function(){if(this.i=eX(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let e of this.g.values())e.cancel();this.g.clear()}};var eJ=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eZ(e){let t;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,e instanceof eZ?(this.l=e.l,e1(this,e.j),this.o=e.o,this.g=e.g,e2(this,e.u),this.h=e.h,e4(this,tu(e.i)),this.m=e.m):e&&(t=String(e).match(eJ))?(this.l=!1,e1(this,t[1]||"",!0),this.o=e9(t[2]||""),this.g=e9(t[3]||"",!0),e2(this,t[4]),this.h=e9(t[5]||"",!0),e4(this,t[6]||"",!0),this.m=e9(t[7]||"")):(this.l=!1,this.i=new ti(null,this.l))}function e0(e){return new eZ(e)}function e1(e,t,r){e.j=r?e9(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function e2(e,t){if(t){if(isNaN(t=Number(t))||t<0)throw Error("Bad port number "+t);e.u=t}else e.u=null}function e4(e,t,r){var n,i;t instanceof ti?(e.i=t,n=e.i,(i=e.l)&&!n.j&&(ts(n),n.i=null,n.g.forEach(function(e,t){let r=t.toLowerCase();t!=r&&(ta(this,t),th(this,r,e))},n)),n.j=i):(r||(t=e3(t,tr)),e.i=new ti(t,e.l))}function e5(e,t,r){e.i.set(t,r)}function e6(e){return e5(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function e9(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function e3(e,t,r){return"string"==typeof e?(e=encodeURI(e).replace(t,e8),r&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function e8(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}eZ.prototype.toString=function(){let e=[];var t=this.j;t&&e.push(e3(t,e7,!0),":");var r=this.g;return(r||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(e3(t,e7,!0),"@"),e.push(eR(r).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(r=this.u)&&e.push(":",String(r))),(r=this.h)&&(this.g&&"/"!=r.charAt(0)&&e.push("/"),e.push(e3(r,"/"==r.charAt(0)?tt:te,!0))),(r=this.i.toString())&&e.push("?",r),(r=this.m)&&e.push("#",e3(r,tn)),e.join("")},eZ.prototype.resolve=function(e){let t=e0(this),r=!!e.j;r?e1(t,e.j):r=!!e.o,r?t.o=e.o:r=!!e.g,r?t.g=e.g:r=null!=e.u;var n=e.h;if(r)e2(t,e.u);else if(r=!!e.h){if("/"!=n.charAt(0)){if(this.g&&!this.h)n="/"+n;else{var i=t.h.lastIndexOf("/");-1!=i&&(n=t.h.slice(0,i+1)+n)}}if(".."==(i=n)||"."==i)n="";else if(-1!=i.indexOf("./")||-1!=i.indexOf("/.")){n=0==i.lastIndexOf("/",0),i=i.split("/");let e=[];for(let t=0;t<i.length;){let r=i[t++];"."==r?n&&t==i.length&&e.push(""):".."==r?((e.length>1||1==e.length&&""!=e[0])&&e.pop(),n&&t==i.length&&e.push("")):(e.push(r),n=!0)}n=e.join("/")}else n=i}return r?t.h=n:r=""!==e.i.toString(),r?e4(t,tu(e.i)):r=!!e.m,r&&(t.m=e.m),t};var e7=/[#\/\?@]/g,te=/[#\?:]/g,tt=/[#\?]/g,tr=/[#\?@]/g,tn=/#/g;function ti(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function ts(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(let r=0;r<e.length;r++){let n=e[r].indexOf("="),i,s=null;n>=0?(i=e[r].substring(0,n),s=e[r].substring(n+1)):i=e[r],t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,function(t,r){e.add(decodeURIComponent(t.replace(/\+/g," ")),r)}))}function ta(e,t){ts(e),t=tc(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function to(e,t){return ts(e),t=tc(e,t),e.g.has(t)}function tl(e,t){ts(e);let r=[];if("string"==typeof t)to(e,t)&&(r=r.concat(e.g.get(tc(e,t))));else for(e=Array.from(e.g.values()),t=0;t<e.length;t++)r=r.concat(e[t]);return r}function th(e,t,r){ta(e,t),r.length>0&&(e.i=null,e.g.set(tc(e,t),E(r)),e.h+=r.length)}function tu(e){let t=new ti;return t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),t}function tc(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function td(e,t,r,n,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),n(r)}catch(e){}}function tf(){this.g=new eu}function tp(e){this.i=e.Sb||null,this.h=e.ab||!1}function tm(e,t){et.call(this),this.H=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function tg(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}function ty(e){e.readyState=4,e.l=null,e.j=null,e.B=null,tv(e)}function tv(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function tw(e){let t="";return F(e,function(e,r){t+=r+":"+e+"\r\n"}),t}function tb(e,t,r){e:{for(n in r){var n=!1;break e}n=!0}n||(r=tw(r),"string"==typeof e?null!=r&&eR(r):e5(e,t,r))}function tE(e){et.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}(t=ti.prototype).add=function(e,t){ts(this),this.i=null,e=tc(this,e);let r=this.g.get(e);return r||this.g.set(e,r=[]),r.push(t),this.h+=1,this},t.forEach=function(e,t){ts(this),this.g.forEach(function(r,n){r.forEach(function(r){e.call(t,r,n,this)},this)},this)},t.set=function(e,t){return ts(this),this.i=null,to(this,e=tc(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},t.get=function(e,t){return e&&(e=tl(this,e)).length>0?String(e[0]):t},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";let e=[],t=Array.from(this.g.keys());for(let n=0;n<t.length;n++){var r=t[n];let i=eR(r);r=tl(this,r);for(let t=0;t<r.length;t++){let n=i;""!==r[t]&&(n+="="+eR(r[t])),e.push(n)}}return this.i=e.join("&")},c(tp,ec),tp.prototype.g=function(){return new tm(this.i,this.h)},c(tm,et),(t=tm.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=e,this.D=t,this.readyState=1,tv(this)},t.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;let t={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(t.body=e),(this.H||a).fetch(new Request(this.D,t)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,ty(this)),this.readyState=0},t.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,tv(this)),this.g&&(this.readyState=3,tv(this),this.g))){if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(void 0!==a.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;tg(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))}},t.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.B.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ty(this):tv(this),3==this.readyState&&tg(this)}},t.Oa=function(e){this.g&&(this.response=this.responseText=e,ty(this))},t.Na=function(e){this.g&&(this.response=e,ty(this))},t.ga=function(){this.g&&ty(this)},t.setRequestHeader=function(e,t){this.A.append(e,t)},t.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";let e=[],t=this.h.entries();for(var r=t.next();!r.done;)e.push((r=r.value)[0]+": "+r[1]),r=t.next();return e.join("\r\n")},Object.defineProperty(tm.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),c(tE,et);var t_=/^https?$/i,tT=["POST","PUT"];function tI(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.o=5,tS(e),tA(e)}function tS(e){e.A||(e.A=!0,er(e,"complete"),er(e,"error"))}function tC(e){if(e.h&&void 0!==s){if(e.v&&4==tk(e))setTimeout(e.Ca.bind(e),0);else if(er(e,"readystatechange"),4==tk(e)){e.h=!1;try{let s=e.ca();switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t,r,n=!0;break;default:n=!1}if(!(t=n)){if(r=0===s){let t=String(e.D).match(eJ)[1]||null;!t&&a.self&&a.self.location&&(t=a.self.location.protocol.slice(0,-1)),r=!t_.test(t?t.toLowerCase():"")}t=r}if(t)er(e,"complete"),er(e,"success");else{e.o=6;try{var i=tk(e)>2?e.g.statusText:""}catch(e){i=""}e.l=i+" ["+e.ca()+"]",tS(e)}}finally{tA(e)}}}}function tA(e,t){if(e.g){e.m&&(clearTimeout(e.m),e.m=null);let r=e.g;e.g=null,t||er(e,"ready");try{r.onreadystatechange=null}catch(e){}}}function tk(e){return e.g?e.g.readyState:0}function tN(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.F){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tR(e,t,r){return r&&r.internalChannelParams&&r.internalChannelParams[e]||t}function tD(e){this.za=0,this.i=[],this.j=new eS,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=tR("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=tR("baseRetryDelayMs",5e3,e),this.Za=tR("retryDelaySeedMs",1e4,e),this.Ta=tR("forwardChannelMaxRetries",2,e),this.va=tR("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new eH(e&&e.concurrentRequestLimit),this.Ba=new tf,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function tL(e){if(tP(e),3==e.I){var t=e.V++,r=e0(e.J);if(e5(r,"SID",e.M),e5(r,"RID",t),e5(r,"TYPE","terminate"),tU(e,r),(t=new eD(e,e.j,t)).M=2,t.A=e6(e0(r)),r=!1,a.navigator&&a.navigator.sendBeacon)try{r=a.navigator.sendBeacon(t.A.toString(),"")}catch(e){}!r&&a.Image&&((new Image).src=t.A,r=!0),r||(t.g=tQ(t.j,null),t.g.ea(t.A)),t.F=Date.now(),eV(t)}tG(e)}function tO(e){e.g&&(tz(e),e.g.cancel(),e.g=null)}function tP(e){tO(e),e.v&&(a.clearTimeout(e.v),e.v=null),tq(e),e.h.cancel(),e.m&&("number"==typeof e.m&&a.clearTimeout(e.m),e.m=null)}function tx(e){if(!eK(e.h)&&!e.m){e.m=!0;var t=e.Ea;S||k(),C||(S(),C=!0),A.add(t,e),e.D=0}}function tM(e,t){var r;r=t?t.l:e.V++;let n=e0(e.J);e5(n,"SID",e.M),e5(n,"RID",r),e5(n,"AID",e.K),tU(e,n),e.u&&e.o&&tb(n,e.u,e.o),r=new eD(e,e.j,r,e.D+1),null===e.u&&(r.J=e.o),t&&(e.i=t.G.concat(e.i)),t=tV(e,r,1e3),r.H=Math.round(.5*e.va)+Math.round(.5*e.va*Math.random()),eQ(e.h,r),ex(r,n,t)}function tU(e,t){e.H&&F(e.H,function(e,r){e5(t,r,e)}),e.l&&F({},function(e,r){e5(t,r,e)})}function tV(e,t,r){r=Math.min(e.i.length,r);let n=e.l?h(e.l.Ka,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){let e=["count="+r];-1==t?r>0?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let l=!0;for(let h=0;h<r;h++){var s=i[h].g;let r=i[h].map;if((s-=t)<0)t=Math.max(0,i[h].g-100),l=!1;else try{s="req"+s+"_";try{var a=r instanceof Map?r:Object.entries(r);for(let[t,r]of a){let n=r;o(r)&&(n=el(r)),e.push(s+t+"="+encodeURIComponent(n))}}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}catch(e){n&&n(r)}}if(l){a=e.join("&");break e}}a=void 0}return e=e.i.splice(0,r),t.G=e,a}function tF(e){if(!e.g&&!e.v){e.Y=1;var t=e.Da;S||k(),C||(S(),C=!0),A.add(t,e),e.A=0}}function tB(e){return!e.g&&!e.v&&!(e.A>=3)&&(e.Y++,e.v=eI(h(e.Da,e),tH(e,e.A)),e.A++,!0)}function tz(e){null!=e.B&&(a.clearTimeout(e.B),e.B=null)}function tj(e){e.g=new eD(e,e.j,"rpc",e.Y),null===e.u&&(e.g.J=e.o),e.g.P=0;var t=e0(e.na);e5(t,"RID","rpc"),e5(t,"SID",e.M),e5(t,"AID",e.K),e5(t,"CI",e.F?"0":"1"),!e.F&&e.ia&&e5(t,"TO",e.ia),e5(t,"TYPE","xmlhttp"),tU(e,t),e.u&&e.o&&tb(t,e.u,e.o),e.O&&(e.g.H=e.O);var r=e.g;e=e.ba,r.M=1,r.A=e6(e0(t)),r.u=null,r.R=!0,eM(r,e)}function tq(e){null!=e.C&&(a.clearTimeout(e.C),e.C=null)}function t$(e,t){var r=null;if(e.g==t){tq(e),tz(e),e.g=null;var n=2}else{if(!eW(e.h,t))return;r=t.G,eY(e.h,t),n=1}if(0!=e.I){if(t.o){if(1==n){r=t.u?t.u.length:0,t=Date.now()-t.F;var i,s=e.D;er(n=ev(),new eT(n,r)),tx(e)}else tF(e)}else if(3==(s=t.m)||0==s&&t.X>0||!(1==n&&(i=t,!(eG(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=i.G.concat(e.i),!0):1!=e.I&&2!=e.I&&!(e.D>=(e.Sa?0:e.Ta))&&(e.m=eI(h(e.Ea,e,i),tH(e,e.D)),e.D++,!0)))||2==n&&tB(e)))switch(r&&r.length>0&&((t=e.h).i=t.i.concat(r)),s){case 1:tK(e,5);break;case 4:tK(e,10);break;case 3:tK(e,6);break;default:tK(e,2)}}}function tH(e,t){let r=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(r*=2),r*t}function tK(e,t){if(e.j.info("Error code "+t),2==t){var r=h(e.bb,e),n=e.Ua;let t=!n;n=new eZ(n||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||e1(n,"https"),e6(n),t?function(e,t){let r=new eS;if(a.Image){let n=new Image;n.onload=u(td,r,"TestLoadImage: loaded",!0,t,n),n.onerror=u(td,r,"TestLoadImage: error",!1,t,n),n.onabort=u(td,r,"TestLoadImage: abort",!1,t,n),n.ontimeout=u(td,r,"TestLoadImage: timeout",!1,t,n),a.setTimeout(function(){n.ontimeout&&n.ontimeout()},1e4),n.src=e}else t(!1)}(n.toString(),r):function(e,t){let r=new eS,n=new AbortController,i=setTimeout(()=>{n.abort(),td(r,"TestPingServer: timeout",!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(i),e.ok?td(r,"TestPingServer: ok",!0,t):td(r,"TestPingServer: server error",!1,t)}).catch(()=>{clearTimeout(i),td(r,"TestPingServer: error",!1,t)})}(n.toString(),r)}else e_(2);e.I=0,e.l&&e.l.pa(t),tG(e),tP(e)}function tG(e){if(e.I=0,e.ja=[],e.l){let t=eX(e.h);(0!=t.length||0!=e.i.length)&&(_(e.ja,t),_(e.ja,e.i),e.h.i.length=0,E(e.i),e.i.length=0),e.l.oa()}}function tW(e,t,r){var n=r instanceof eZ?e0(r):new eZ(r);if(""!=n.g)t&&(n.g=t+"."+n.g),e2(n,n.u);else{var i=a.location;n=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;let e=new eZ(null);n&&e1(e,n),t&&(e.g=t),i&&e2(e,i),r&&(e.h=r),n=e}return r=e.G,t=e.wa,r&&t&&e5(n,r,t),e5(n,"VER",e.ka),tU(e,n),n}function tQ(e,t,r){if(t&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.");return(t=new tE(e.Aa&&!e.ma?new tp({ab:r}):e.ma)).Fa(e.L),t}function tY(){}function tX(){}function tJ(e,t){et.call(this),this.g=new tD(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.sa&&(e?e["X-WebChannel-Client-Profile"]=t.sa:e={"X-WebChannel-Client-Profile":t.sa}),this.g.U=e,(e=t&&t.Qb)&&!O(e)&&(this.g.u=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.G=t,null!==(e=this.h)&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new t1(this)}function tZ(e){ep.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(let r in t){e=r;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function t0(){em.call(this),this.status=1}function t1(e){this.g=e}(t=tE.prototype).Fa=function(e){this.H=e},t.ea=function(t,r,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);r=r?r.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():e.g(),this.g.onreadystatechange=b(h(this.Ca,this));try{this.B=!0,this.g.open(r,String(t),!0),this.B=!1}catch(e){tI(this,e);return}if(t=n||"",n=new Map(this.headers),i){if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if("function"==typeof i.keys&&"function"==typeof i.get)for(let e of i.keys())n.set(e,i.get(e));else throw Error("Unknown input type for opt_headers: "+String(i))}for(let[e,o]of(i=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),s=a.FormData&&t instanceof a.FormData,!(Array.prototype.indexOf.call(tT,r,void 0)>=0)||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(e,o);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(e){tI(this,e)}},t.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,er(this,"complete"),er(this,"abort"),tA(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),tA(this,!0)),tE.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?tC(this):this.Xa())},t.Xa=function(){tC(this)},t.isActive=function(){return!!this.g},t.ca=function(){try{return tk(this)>2?this.g.status:-1}catch(e){return -1}},t.la=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},t.La=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),eh(t)}},t.ya=function(){return this.o},t.Ha=function(){return"string"==typeof this.l?this.l:String(this.l)},(t=tD.prototype).ka=8,t.I=1,t.connect=function(e,t,r,n){e_(0),this.W=e,this.H=t||{},r&&void 0!==n&&(this.H.OSID=r,this.H.OAID=n),this.F=this.X,this.J=tW(this,null,this.W),tx(this)},t.Ea=function(e){if(this.m){if(this.m=null,1==this.I){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;let i=new eD(this,this.j,e),s=this.o;if(this.U&&(s?j(s=B(s),this.U):s=this.U),null!==this.u||this.R||(i.J=s,s=null),this.S)e:{for(var t=0,r=0;r<this.i.length;r++){t:{var n=this.i[r];if("__data__"in n.map&&"string"==typeof(n=n.map.__data__)){n=n.length;break t}n=void 0}if(void 0===n)break;if((t+=n)>4096){t=r;break e}if(4096===t||r===this.i.length-1){t=r+1;break e}}t=1e3}else t=1e3;t=tV(this,i,t),e5(r=e0(this.J),"RID",e),e5(r,"CVER",22),this.G&&e5(r,"X-HTTP-Session-Id",this.G),tU(this,r),s&&(this.R?t="headers="+eR(tw(s))+"&"+t:this.u&&tb(r,this.u,s)),eQ(this.h,i),this.Ra&&e5(r,"TYPE","init"),this.S?(e5(r,"$req",t),e5(r,"SID","null"),i.U=!0,ex(i,r,null)):ex(i,r,t),this.I=2}}else 3==this.I&&(e?tM(this,e):0==this.i.length||eK(this.h)||tM(this))}},t.Da=function(){if(this.v=null,tj(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var e=4*this.T;this.j.info("BP detection timer enabled: "+e),this.B=eI(h(this.Wa,this),e)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,e_(10),tO(this),tj(this))},t.Va=function(){null!=this.C&&(this.C=null,tO(this),tB(this),e_(19))},t.bb=function(e){e?(this.j.info("Successfully pinged google.com"),e_(2)):(this.j.info("Failed to ping google.com"),e_(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},(t=tY.prototype).ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){},tX.prototype.g=function(e,t){return new tJ(e,t)},c(tJ,et),tJ.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},tJ.prototype.close=function(){tL(this.g)},tJ.prototype.o=function(e){var t=this.g;if("string"==typeof e){var r={};r.__data__=e,e=r}else this.v&&((r={}).__data__=el(e),e=r);t.i.push(new e$(t.Ya++,e)),3==t.I&&tx(t)},tJ.prototype.N=function(){this.g.l=null,delete this.j,tL(this.g),delete this.g,tJ.Z.N.call(this)},c(tZ,ep),c(t0,em),c(t1,tY),t1.prototype.ra=function(){er(this.g,"a")},t1.prototype.qa=function(e){er(this.g,new tZ(e))},t1.prototype.pa=function(e){er(this.g,new t0)},t1.prototype.oa=function(){er(this.g,"b")},tX.prototype.createWebChannel=tX.prototype.g,tJ.prototype.send=tJ.prototype.o,tJ.prototype.open=tJ.prototype.m,tJ.prototype.close=tJ.prototype.close,w=sc.createWebChannelTransport=function(){return new tX},v=sc.getStatEventTarget=function(){return ev()},y=sc.Event=eg,g=sc.Stat={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},eA.NO_ERROR=0,eA.TIMEOUT=8,eA.HTTP_ERROR=6,m=sc.ErrorCode=eA,ek.COMPLETE="complete",p=sc.EventType=ek,ed.EventType=ef,ef.OPEN="a",ef.CLOSE="b",ef.ERROR="c",ef.MESSAGE="d",et.prototype.listen=et.prototype.J,f=sc.WebChannel=ed,sc.FetchXmlHttpFactory=tp,tE.prototype.listenOnce=tE.prototype.K,tE.prototype.getLastError=tE.prototype.Ha,tE.prototype.getLastErrorCode=tE.prototype.ya,tE.prototype.getStatus=tE.prototype.ca,tE.prototype.getResponseJson=tE.prototype.La,tE.prototype.getResponseText=tE.prototype.la,tE.prototype.send=tE.prototype.ea,tE.prototype.setWithCredentials=tE.prototype.Fa,d=sc.XhrIo=tE}).apply(void 0!==su?su:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var e3=R("6qd2L");b=function(e){for(var t,r=e.length,n=r%3,i=[],s=0,a=r-n;s<a;s+=16383)i.push(function(e,t,r){for(var n,i=[],s=t;s<r;s+=3)i.push(sd[(n=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]))>>18&63]+sd[n>>12&63]+sd[n>>6&63]+sd[63&n]);return i.join("")}(e,s,s+16383>a?a:s+16383));return 1===n?i.push(sd[(t=e[r-1])>>2]+sd[t<<4&63]+"=="):2===n&&i.push(sd[(t=(e[r-2]<<8)+e[r-1])>>10]+sd[t>>4&63]+sd[t<<2&63]+"="),i.join("")};for(var sd=[],sf=[],sp="undefined"!=typeof Uint8Array?Uint8Array:Array,sm="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",sg=0,sy=sm.length;sg<sy;++sg)sd[sg]=sm[sg],sf[sm.charCodeAt(sg)]=sg;sf["-".charCodeAt(0)]=62,sf["_".charCodeAt(0)]=63,E=function(e,t,r,n,i){var s,a,o=8*i-n-1,l=(1<<o)-1,h=l>>1,u=-7,c=r?i-1:0,d=r?-1:1,f=e[t+c];for(c+=d,s=f&(1<<-u)-1,f>>=-u,u+=o;u>0;s=256*s+e[t+c],c+=d,u-=8);for(a=s&(1<<-u)-1,s>>=-u,u+=n;u>0;a=256*a+e[t+c],c+=d,u-=8);if(0===s)s=1-h;else{if(s===l)return a?NaN:1/0*(f?-1:1);a+=Math.pow(2,n),s-=h}return(f?-1:1)*a*Math.pow(2,s-n)},_=function(e,t,r,n,i,s){var a,o,l,h=8*s-i-1,u=(1<<h)-1,c=u>>1,d=23===i?5960464477539062e-23:0,f=n?0:s-1,p=n?1:-1,m=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(o=isNaN(t)?1:0,a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+c>=1?t+=d/l:t+=d*Math.pow(2,1-c),t*l>=2&&(a++,l/=2),a+c>=u?(o=0,a=u):a+c>=1?(o=(t*l-1)*Math.pow(2,i),a+=c):(o=t*Math.pow(2,c-1)*Math.pow(2,i),a=0));i>=8;e[r+f]=255&o,f+=p,o/=256,i-=8);for(a=a<<i|o,h+=i;h>0;e[r+f]=255&a,f+=p,a/=256,h-=8);e[r+f-p]|=128*m};var sv="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function sw(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,sb.prototype),t}function sb(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return sT(e)}return sE(e,t,r)}function sE(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!sb.isEncoding(t))throw TypeError("Unknown encoding: "+t);var r=0|sA(e,t),n=sw(r),i=n.write(e,t);return i!==r&&(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(sj(e,Uint8Array)){var t=new Uint8Array(e);return sS(t.buffer,t.byteOffset,t.byteLength)}return sI(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(sj(e,ArrayBuffer)||e&&sj(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(sj(e,SharedArrayBuffer)||e&&sj(e.buffer,SharedArrayBuffer)))return sS(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');var n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return sb.from(n,t,r);var i=function(e){if(sb.isBuffer(e)){var t,r=0|sC(e.length),n=sw(r);return 0===n.length||e.copy(n,0,0,r),n}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?sw(0):sI(e):"Buffer"===e.type&&Array.isArray(e.data)?sI(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return sb.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function s_(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function sT(e){return s_(e),sw(e<0?0:0|sC(e))}function sI(e){for(var t=e.length<0?0:0|sC(e.length),r=sw(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function sS(e,t,r){var n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),sb.prototype),n}function sC(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function sA(e,t){if(sb.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||sj(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);var r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(var i=!1;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return sF(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return sB(e).length;default:if(i)return n?-1:sF(e).length;t=(""+t).toLowerCase(),i=!0}}function sk(e,t,r){var n,i,s=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",s=t;s<r;++s)i+=sq[e[s]];return i}(this,t,r);case"utf8":case"utf-8":return sL(this,t,r);case"ascii":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":return n=t,i=r,0===n&&i===this.length?b(this):b(this.slice(n,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){for(var n=e.slice(t,r),i="",s=0;s<n.length-1;s+=2)i+=String.fromCharCode(n[s]+256*n[s+1]);return i}(this,t,r);default:if(s)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),s=!0}}function sN(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function sR(e,t,r,n,i){var s;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(s=r=+r)!=s&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof t&&(t=sb.from(t,n)),sb.isBuffer(t))return 0===t.length?-1:sD(e,t,r,n,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):sD(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function sD(e,t,r,n,i){var s,a=1,o=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;a=2,o/=2,l/=2,r/=2}function h(e,t){return 1===a?e[t]:e.readUInt16BE(t*a)}if(i){var u=-1;for(s=r;s<o;s++)if(h(e,s)===h(t,-1===u?0:s-u)){if(-1===u&&(u=s),s-u+1===l)return u*a}else -1!==u&&(s-=s-u),u=-1}else for(r+l>o&&(r=o-l),s=r;s>=0;s--){for(var c=!0,d=0;d<l;d++)if(h(e,s+d)!==h(t,d)){c=!1;break}if(c)return s}return -1}function sL(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var s,a,o,l,h=e[i],u=null,c=h>239?4:h>223?3:h>191?2:1;if(i+c<=r)switch(c){case 1:h<128&&(u=h);break;case 2:(192&(s=e[i+1]))==128&&(l=(31&h)<<6|63&s)>127&&(u=l);break;case 3:s=e[i+1],a=e[i+2],(192&s)==128&&(192&a)==128&&(l=(15&h)<<12|(63&s)<<6|63&a)>2047&&(l<55296||l>57343)&&(u=l);break;case 4:s=e[i+1],a=e[i+2],o=e[i+3],(192&s)==128&&(192&a)==128&&(192&o)==128&&(l=(15&h)<<18|(63&s)<<12|(63&a)<<6|63&o)>65535&&l<1114112&&(u=l)}null===u?(u=65533,c=1):u>65535&&(u-=65536,n.push(u>>>10&1023|55296),u=56320|1023&u),n.push(u),i+=c}return function(e){var t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);for(var r="",n=0;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function sO(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function sP(e,t,r,n,i,s){if(!sb.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<s)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function sx(e,t,r,n,i,s){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function sM(e,t,r,n,i){return t=+t,r>>>=0,i||sx(e,t,r,4,34028234663852886e22,-34028234663852886e22),_(e,t,r,n,23,4),r+4}function sU(e,t,r,n,i){return t=+t,r>>>=0,i||sx(e,t,r,8,17976931348623157e292,-17976931348623157e292),_(e,t,r,n,52,8),r+8}sb.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),sb.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(sb.prototype,"parent",{enumerable:!0,get:function(){if(sb.isBuffer(this))return this.buffer}}),Object.defineProperty(sb.prototype,"offset",{enumerable:!0,get:function(){if(sb.isBuffer(this))return this.byteOffset}}),sb.poolSize=8192,sb.from=function(e,t,r){return sE(e,t,r)},Object.setPrototypeOf(sb.prototype,Uint8Array.prototype),Object.setPrototypeOf(sb,Uint8Array),sb.alloc=function(e,t,r){return(s_(e),e<=0)?sw(e):void 0!==t?"string"==typeof r?sw(e).fill(t,r):sw(e).fill(t):sw(e)},sb.allocUnsafe=function(e){return sT(e)},sb.allocUnsafeSlow=function(e){return sT(e)},sb.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==sb.prototype},sb.compare=function(e,t){if(sj(e,Uint8Array)&&(e=sb.from(e,e.offset,e.byteLength)),sj(t,Uint8Array)&&(t=sb.from(t,t.offset,t.byteLength)),!sb.isBuffer(e)||!sb.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,i=0,s=Math.min(r,n);i<s;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},sb.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},sb.concat=function(e,t){if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return sb.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;var r,n=sb.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var s=e[r];if(sj(s,Uint8Array))i+s.length>n.length?sb.from(s).copy(n,i):Uint8Array.prototype.set.call(n,s,i);else if(sb.isBuffer(s))s.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=s.length}return n},sb.byteLength=sA,sb.prototype._isBuffer=!0,sb.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)sN(this,t,t+1);return this},sb.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)sN(this,t,t+3),sN(this,t+1,t+2);return this},sb.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)sN(this,t,t+7),sN(this,t+1,t+6),sN(this,t+2,t+5),sN(this,t+3,t+4);return this},sb.prototype.toString=function(){var e=this.length;return 0===e?"":0==arguments.length?sL(this,0,e):sk.apply(this,arguments)},sb.prototype.toLocaleString=sb.prototype.toString,sb.prototype.equals=function(e){if(!sb.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===sb.compare(this,e)},sb.prototype.inspect=function(){var e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},sv&&(sb.prototype[sv]=sb.prototype.inspect),sb.prototype.compare=function(e,t,r,n,i){if(sj(e,Uint8Array)&&(e=sb.from(e,e.offset,e.byteLength)),!sb.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;for(var s=i-n,a=r-t,o=Math.min(s,a),l=this.slice(n,i),h=e.slice(t,r),u=0;u<o;++u)if(l[u]!==h[u]){s=l[u],a=h[u];break}return s<a?-1:a<s?1:0},sb.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},sb.prototype.indexOf=function(e,t,r){return sR(this,e,t,r,!0)},sb.prototype.lastIndexOf=function(e,t,r){return sR(this,e,t,r,!1)},sb.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var i,s,a,o,l,h,u,c,d=this.length-t;if((void 0===r||r>d)&&(r=d),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var f=!1;;)switch(n){case"hex":return function(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var s=t.length;n>s/2&&(n=s/2);for(var a=0;a<n;++a){var o=parseInt(t.substr(2*a,2),16);if(o!=o)break;e[r+a]=o}return a}(this,e,t,r);case"utf8":case"utf-8":return i=t,s=r,sz(sF(e,this.length-i),this,i,s);case"ascii":case"latin1":case"binary":return a=t,o=r,sz(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,a,o);case"base64":return l=t,h=r,sz(sB(e),this,l,h);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,c=r,sz(function(e,t){for(var r,n,i=[],s=0;s<e.length&&!((t-=2)<0);++s)n=(r=e.charCodeAt(s))>>8,i.push(r%256),i.push(n);return i}(e,this.length-u),this,u,c);default:if(f)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),f=!0}},sb.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},sb.prototype.slice=function(e,t){var r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,sb.prototype),n},sb.prototype.readUintLE=sb.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||sO(e,t,this.length);for(var n=this[e],i=1,s=0;++s<t&&(i*=256);)n+=this[e+s]*i;return n},sb.prototype.readUintBE=sb.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||sO(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},sb.prototype.readUint8=sb.prototype.readUInt8=function(e,t){return e>>>=0,t||sO(e,1,this.length),this[e]},sb.prototype.readUint16LE=sb.prototype.readUInt16LE=function(e,t){return e>>>=0,t||sO(e,2,this.length),this[e]|this[e+1]<<8},sb.prototype.readUint16BE=sb.prototype.readUInt16BE=function(e,t){return e>>>=0,t||sO(e,2,this.length),this[e]<<8|this[e+1]},sb.prototype.readUint32LE=sb.prototype.readUInt32LE=function(e,t){return e>>>=0,t||sO(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},sb.prototype.readUint32BE=sb.prototype.readUInt32BE=function(e,t){return e>>>=0,t||sO(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},sb.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||sO(e,t,this.length);for(var n=this[e],i=1,s=0;++s<t&&(i*=256);)n+=this[e+s]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},sb.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||sO(e,t,this.length);for(var n=t,i=1,s=this[e+--n];n>0&&(i*=256);)s+=this[e+--n]*i;return s>=(i*=128)&&(s-=Math.pow(2,8*t)),s},sb.prototype.readInt8=function(e,t){return(e>>>=0,t||sO(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},sb.prototype.readInt16LE=function(e,t){e>>>=0,t||sO(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},sb.prototype.readInt16BE=function(e,t){e>>>=0,t||sO(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},sb.prototype.readInt32LE=function(e,t){return e>>>=0,t||sO(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},sb.prototype.readInt32BE=function(e,t){return e>>>=0,t||sO(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},sb.prototype.readFloatLE=function(e,t){return e>>>=0,t||sO(e,4,this.length),E(this,e,!0,23,4)},sb.prototype.readFloatBE=function(e,t){return e>>>=0,t||sO(e,4,this.length),E(this,e,!1,23,4)},sb.prototype.readDoubleLE=function(e,t){return e>>>=0,t||sO(e,8,this.length),E(this,e,!0,52,8)},sb.prototype.readDoubleBE=function(e,t){return e>>>=0,t||sO(e,8,this.length),E(this,e,!1,52,8)},sb.prototype.writeUintLE=sb.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var i=Math.pow(2,8*r)-1;sP(this,e,t,r,i,0)}var s=1,a=0;for(this[t]=255&e;++a<r&&(s*=256);)this[t+a]=e/s&255;return t+r},sb.prototype.writeUintBE=sb.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){var i=Math.pow(2,8*r)-1;sP(this,e,t,r,i,0)}var s=r-1,a=1;for(this[t+s]=255&e;--s>=0&&(a*=256);)this[t+s]=e/a&255;return t+r},sb.prototype.writeUint8=sb.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||sP(this,e,t,1,255,0),this[t]=255&e,t+1},sb.prototype.writeUint16LE=sb.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||sP(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},sb.prototype.writeUint16BE=sb.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||sP(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},sb.prototype.writeUint32LE=sb.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||sP(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},sb.prototype.writeUint32BE=sb.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||sP(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},sb.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);sP(this,e,t,r,i-1,-i)}var s=0,a=1,o=0;for(this[t]=255&e;++s<r&&(a*=256);)e<0&&0===o&&0!==this[t+s-1]&&(o=1),this[t+s]=(e/a>>0)-o&255;return t+r},sb.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);sP(this,e,t,r,i-1,-i)}var s=r-1,a=1,o=0;for(this[t+s]=255&e;--s>=0&&(a*=256);)e<0&&0===o&&0!==this[t+s+1]&&(o=1),this[t+s]=(e/a>>0)-o&255;return t+r},sb.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||sP(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},sb.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||sP(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},sb.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||sP(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},sb.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||sP(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},sb.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||sP(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},sb.prototype.writeFloatLE=function(e,t,r){return sM(this,e,t,!0,r)},sb.prototype.writeFloatBE=function(e,t,r){return sM(this,e,t,!1,r)},sb.prototype.writeDoubleLE=function(e,t,r){return sU(this,e,t,!0,r)},sb.prototype.writeDoubleBE=function(e,t,r){return sU(this,e,t,!1,r)},sb.prototype.copy=function(e,t,r,n){if(!sb.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},sb.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!sb.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){var i,s=e.charCodeAt(0);("utf8"===n&&s<128||"latin1"===n)&&(e=s)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{var a=sb.isBuffer(e)?e:sb.from(e,n),o=a.length;if(0===o)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=a[i%o]}return this};var sV=/[^+/0-9A-Za-z-_]/g;function sF(e,t){t=t||1/0;for(var r,n=e.length,i=null,s=[],a=0;a<n;++a){if((r=e.charCodeAt(a))>55295&&r<57344){if(!i){if(r>56319||a+1===n){(t-=3)>-1&&s.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&s.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&s.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;s.push(r)}else if(r<2048){if((t-=2)<0)break;s.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;s.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;s.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return s}function sB(e){return function(e){var t,r,n=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}(e),i=n[0],s=n[1],a=new sp((i+s)*3/4-s),o=0,l=s>0?i-4:i;for(r=0;r<l;r+=4)t=sf[e.charCodeAt(r)]<<18|sf[e.charCodeAt(r+1)]<<12|sf[e.charCodeAt(r+2)]<<6|sf[e.charCodeAt(r+3)],a[o++]=t>>16&255,a[o++]=t>>8&255,a[o++]=255&t;return 2===s&&(t=sf[e.charCodeAt(r)]<<2|sf[e.charCodeAt(r+1)]>>4,a[o++]=255&t),1===s&&(t=sf[e.charCodeAt(r)]<<10|sf[e.charCodeAt(r+1)]<<4|sf[e.charCodeAt(r+2)]>>2,a[o++]=t>>8&255,a[o++]=255&t),a}(function(e){if((e=(e=e.split("=")[0]).trim().replace(sV,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function sz(e,t,r,n){for(var i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}function sj(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}var sq=function(){for(var e="0123456789abcdef",t=Array(256),r=0;r<16;++r)for(var n=16*r,i=0;i<16;++i)t[n+i]=e[r]+e[i];return t}();let s$="@firebase/firestore",sH="4.9.3";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sK{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}sK.UNAUTHENTICATED=new sK(null),sK.GOOGLE_CREDENTIALS=new sK("google-credentials-uid"),sK.FIRST_PARTY=new sK("first-party-uid"),sK.MOCK_USER=new sK("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sG="12.7.0",sW=new tB("@firebase/firestore");function sQ(){return sW.logLevel}function sY(e,...t){if(sW.logLevel<=h.DEBUG){let r=t.map(sZ);sW.debug(`Firestore (${sG}): ${e}`,...r)}}function sX(e,...t){if(sW.logLevel<=h.ERROR){let r=t.map(sZ);sW.error(`Firestore (${sG}): ${e}`,...r)}}function sJ(e,...t){if(sW.logLevel<=h.WARN){let r=t.map(sZ);sW.warn(`Firestore (${sG}): ${e}`,...r)}}function sZ(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(e,t,r){let n="Unexpected state";"string"==typeof t?n=t:r=t,s1(e,n,r)}function s1(e,t,r){let n=`FIRESTORE (${sG}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==r)try{n+=" CONTEXT: "+JSON.stringify(r)}catch(e){n+=" CONTEXT: "+r}throw sX(n),Error(n)}function s2(e,t,r,n){let i="Unexpected state";"string"==typeof r?i=r:n=r,e||s1(t,i,n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s4={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class s5 extends tb{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s6{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s9{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class s3{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(sK.UNAUTHENTICATED))}shutdown(){}}class s8{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class s7{constructor(e){this.t=e,this.currentUser=sK.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){s2(void 0===this.o,42304);let r=this.i,n=e=>this.i!==r?(r=this.i,t(e)):Promise.resolve(),i=new s6;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new s6,e.enqueueRetryable(()=>n(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await n(this.currentUser)})},a=e=>{sY("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(sY("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new s6)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(sY("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(s2("string"==typeof t.accessToken,31837,{l:t}),new s9(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){let e=this.auth&&this.auth.getUid();return s2(null===e||"string"==typeof e,2055,{h:e}),new sK(e)}}class ae{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=sK.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);let e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class at{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new ae(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(sK.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ar{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class an{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,rr(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){s2(void 0===this.o,3512);let r=e=>{null!=e.error&&sY("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let r=e.token!==this.m;return this.m=e.token,sY("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>r(t))};let n=e=>{sY("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>n(e)),setTimeout(()=>{if(!this.appCheck){let e=this.V.getImmediate({optional:!0});e?n(e):sY("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ar(this.p));let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(s2("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new ar(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{static newId(){let e=62*Math.floor(256/62),t="";for(;t.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(r);else for(let t=0;t<e;t++)r[t]=Math.floor(256*Math.random());return r}(40);for(let n=0;n<r.length;++n)t.length<20&&r[n]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(r[n]%62))}return t}}function as(e,t){return e<t?-1:e>t?1:0}function aa(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=e.charAt(n),i=t.charAt(n);if(r!==i)return ao(r)===ao(i)?as(r,i):ao(r)?1:-1}return as(e.length,t.length)}function ao(e){let t=e.charCodeAt(0);return t>=55296&&t<=57343}function al(e,t,r){return e.length===t.length&&e.every((e,n)=>r(e,t[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ah="__name__";class au{constructor(e,t,r){void 0===t?t=0:t>e.length&&s0(637,{offset:t,range:e.length}),void 0===r?r=e.length-t:r>e.length-t&&s0(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return 0===au.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof au?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let r=au.compareSegments(e.get(n),t.get(n));if(0!==r)return r}return as(e.length,t.length)}static compareSegments(e,t){let r=au.isNumericId(e),n=au.isNumericId(t);return r&&!n?-1:!r&&n?1:r&&n?au.extractNumericId(e).compare(au.extractNumericId(t)):aa(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return u.fromString(e.substring(4,e.length-2))}}class ac extends au{construct(e,t,r){return new ac(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){let t=[];for(let r of e){if(r.indexOf("//")>=0)throw new s5(s4.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(e=>e.length>0))}return new ac(t)}static emptyPath(){return new ac([])}}let ad=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class af extends au{construct(e,t,r){return new af(e,t,r)}static isValidIdentifier(e){return ad.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),af.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===ah}static keyField(){return new af([ah])}static fromServerFormat(e){let t=[],r="",n=0,i=()=>{if(0===r.length)throw new s5(s4.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""},s=!1;for(;n<e.length;){let t=e[n];if("\\"===t){if(n+1===e.length)throw new s5(s4.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[n+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new s5(s4.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=t,n+=2}else"`"===t?s=!s:"."!==t||s?r+=t:i(),n++}if(i(),s)throw new s5(s4.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new af(t)}static emptyPath(){return new af([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){this.path=e}static fromPath(e){return new ap(ac.fromString(e))}static fromName(e){return new ap(ac.fromString(e).popFirst(5))}static empty(){return new ap(ac.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ac.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ac.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ap(new ac(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(e,t,r){if(!r)throw new s5(s4.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ag(e){if(!ap.isDocumentKey(e))throw new s5(s4.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ay(e){if(ap.isDocumentKey(e))throw new s5(s4.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function av(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function aw(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let r=(t=e).constructor?t.constructor.name:null;return r?`a custom ${r} object`:"an object"}}return"function"==typeof e?"a function":s0(12329,{type:typeof e})}function ab(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new s5(s4.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=aw(e);throw new s5(s4.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(e,t){let r={typeString:e};return t&&(r.value=t),r}function a_(e,t){let r;if(!av(e))throw new s5(s4.INVALID_ARGUMENT,"JSON must be an object");for(let n in t)if(t[n]){let i=t[n].typeString,s="value"in t[n]?{value:t[n].value}:void 0;if(!(n in e)){r=`JSON missing required field: '${n}'`;break}let a=e[n];if(i&&typeof a!==i){r=`JSON field '${n}' must be a ${i}.`;break}if(void 0!==s&&a!==s.value){r=`Expected '${n}' field to equal '${s.value}'`;break}}if(r)throw new s5(s4.INVALID_ARGUMENT,r);return!0}class aT{static now(){return aT.fromMillis(Date.now())}static fromDate(e){return aT.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new aT(t,Math.floor((e-1e3*t)*1e6))}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new s5(s4.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new s5(s4.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?as(this.nanoseconds,e.nanoseconds):as(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:aT._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(a_(e,aT._jsonSchema))return new aT(e.seconds,e.nanoseconds)}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}aT._jsonSchemaVersion="firestore/timestamp/1.0",aT._jsonSchema={type:aE("string",aT._jsonSchemaVersion),seconds:aE("number"),nanoseconds:aE("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{static fromTimestamp(e){return new aI(e)}static min(){return new aI(new aT(0,0))}static max(){return new aI(new aT(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}class aS{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new aS(aI.min(),ap.empty(),-1)}static max(){return new aS(aI.max(),ap.empty(),-1)}}class aC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aA(e){if(e.code!==s4.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;sY("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&s0(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ak((r,n)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(r,n)},this.catchCallback=e=>{this.wrapFailure(t,e).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof ak?t:ak.resolve(t)}catch(e){return ak.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):ak.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):ak.reject(t)}static resolve(e){return new ak((t,r)=>{t(e)})}static reject(e){return new ak((t,r)=>{r(e)})}static waitFor(e){return new ak((t,r)=>{let n=0,i=0,s=!1;e.forEach(e=>{++n,e.next(()=>{++i,s&&i===n&&t()},e=>r(e))}),s=!0,i===n&&t()})}static or(e){let t=ak.resolve(!1);for(let r of e)t=t.next(e=>e?ak.resolve(e):r());return t}static forEach(e,t){let r=[];return e.forEach((e,n)=>{r.push(t.call(this,e,n))}),this.waitFor(r)}static mapArray(e,t){return new ak((r,n)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&r(s)},e=>n(e))}})}static doWhile(e,t){return new ak((r,n)=>{let i=()=>{!0===e()?t().next(()=>{i()},n):r()};i()})}}function aN(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ae(e),this.ue=e=>t.writeSequenceNumber(e))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ue&&this.ue(e),e}}function aD(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aL(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function aO(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}function aP(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}aR.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{constructor(e,t){this.comparator=e,this.root=t||aU.EMPTY}insert(e,t){return new ax(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,aU.BLACK,null,null))}remove(e){return new ax(this.comparator,this.root.remove(e,this.comparator).copy(null,null,aU.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let r=this.comparator(e,t.key);if(0===r)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){let n=this.comparator(e,r.key);if(0===n)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){let e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new aM(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new aM(this.root,e,this.comparator,!1)}getReverseIterator(){return new aM(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new aM(this.root,e,this.comparator,!0)}}class aM{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&n&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class aU{constructor(e,t,r,n,i){this.key=e,this.value=t,this.color=null!=r?r:aU.RED,this.left=null!=n?n:aU.EMPTY,this.right=null!=i?i:aU.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,i){return new aU(null!=e?e:this.key,null!=t?t:this.value,null!=r?r:this.color,null!=n?n:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this,i=r(e,n.key);return(n=i<0?n.copy(null,null,null,n.left.insert(e,t,r),null):0===i?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r))).fixUp()}removeMin(){if(this.left.isEmpty())return aU.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let r,n=this;if(0>t(e,n.key))n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),0===t(e,n.key)){if(n.right.isEmpty())return aU.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,aU.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,aU.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw s0(43730,{key:this.key,value:this.value});if(this.right.isRed())throw s0(14113,{key:this.key,value:this.value});let e=this.left.check();if(e!==this.right.check())throw s0(27949);return e+(this.isRed()?0:1)}}aU.EMPTY=null,aU.RED=!0,aU.BLACK=!1,aU.EMPTY=new class{constructor(){this.size=0}get key(){throw s0(57766)}get value(){throw s0(16141)}get color(){throw s0(16727)}get left(){throw s0(29726)}get right(){throw s0(36894)}copy(e,t,r,n,i){return this}insert(e,t,r){return new aU(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(e){this.comparator=e,this.data=new ax(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){let r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){let n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new aF(this.data.getIterator())}getIteratorFrom(e){return new aF(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof aV)||this.size!==e.size)return!1;let t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(0!==this.comparator(e,n))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new aV(this.comparator);return t.data=e,t}}class aF{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aB{constructor(e){this.fields=e,e.sort(af.comparator)}static empty(){return new aB([])}unionWith(e){let t=new aV(af.comparator);for(let e of this.fields)t=t.add(e);for(let r of e)t=t.add(r);return new aB(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return al(this.fields,e.fields,(e,t)=>e.isEqual(t))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class az extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aj{constructor(e){this.binaryString=e}static fromBase64String(e){return new aj(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new az("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new aj(function(e){let t="";for(let r=0;r<e.length;++r)t+=String.fromCharCode(e[r]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return as(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}aj.EMPTY_BYTE_STRING=new aj("");let aq=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function a$(e){if(s2(!!e,39018),"string"==typeof e){let t=0,r=aq.exec(e);if(s2(!!r,46558,{timestamp:e}),r[1]){let e=r[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:aH(e.seconds),nanos:aH(e.nanos)}}function aH(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function aK(e){return"string"==typeof e?aj.fromBase64String(e):aj.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aG="server_timestamp",aW="__type__",aQ="__previous_value__",aY="__local_write_time__";function aX(e){return(e?.mapValue?.fields||{})[aW]?.stringValue===aG}function aJ(e){let t=e.mapValue.fields[aQ];return aX(t)?aJ(t):t}function aZ(e){let t=a$(e.mapValue.fields[aY].timestampValue);return new aT(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,t,r,n,i,s,a,o,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l,this.isUsingEmulator=h}}let a1="(default)";class a2{constructor(e,t){this.projectId=e,this.database=t||a1}static empty(){return new a2("","")}get isDefaultDatabase(){return this.database===a1}isEqual(e){return e instanceof a2&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let a4="__type__",a5="__max__",a6={mapValue:{fields:{__type__:{stringValue:a5}}}},a9="__vector__",a3="value";function a8(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?aX(e)?4:of(e)?9007199254740991:oc(e)?10:11:s0(28295,{value:e})}function a7(e,t){if(e===t)return!0;let r=a8(e);if(r!==a8(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return aZ(e).isEqual(aZ(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let r=a$(e.timestampValue),n=a$(t.timestampValue);return r.seconds===n.seconds&&r.nanos===n.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return aK(e.bytesValue).isEqual(aK(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return aH(e.geoPointValue.latitude)===aH(t.geoPointValue.latitude)&&aH(e.geoPointValue.longitude)===aH(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return aH(e.integerValue)===aH(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let r=aH(e.doubleValue),n=aH(t.doubleValue);return r===n?aD(r)===aD(n):isNaN(r)&&isNaN(n)}return!1}(e,t);case 9:return al(e.arrayValue.values||[],t.arrayValue.values||[],a7);case 10:case 11:return function(e,t){let r=e.mapValue.fields||{},n=t.mapValue.fields||{};if(aL(r)!==aL(n))return!1;for(let e in r)if(r.hasOwnProperty(e)&&(void 0===n[e]||!a7(r[e],n[e])))return!1;return!0}(e,t);default:return s0(52216,{left:e})}}function oe(e,t){return void 0!==(e.values||[]).find(e=>a7(e,t))}function ot(e,t){if(e===t)return 0;let r=a8(e),n=a8(t);if(r!==n)return as(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return as(e.booleanValue,t.booleanValue);case 2:return function(e,t){let r=aH(e.integerValue||e.doubleValue),n=aH(t.integerValue||t.doubleValue);return r<n?-1:r>n?1:r===n?0:isNaN(r)?isNaN(n)?0:-1:1}(e,t);case 3:return or(e.timestampValue,t.timestampValue);case 4:return or(aZ(e),aZ(t));case 5:return aa(e.stringValue,t.stringValue);case 6:return function(e,t){let r=aK(e),n=aK(t);return r.compareTo(n)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let r=e.split("/"),n=t.split("/");for(let e=0;e<r.length&&e<n.length;e++){let t=as(r[e],n[e]);if(0!==t)return t}return as(r.length,n.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let r=as(aH(e.latitude),aH(t.latitude));return 0!==r?r:as(aH(e.longitude),aH(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return on(e.arrayValue,t.arrayValue);case 10:return function(e,t){let r=e.fields||{},n=t.fields||{},i=r[a3]?.arrayValue,s=n[a3]?.arrayValue,a=as(i?.values?.length||0,s?.values?.length||0);return 0!==a?a:on(i,s)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===a6.mapValue&&t===a6.mapValue)return 0;if(e===a6.mapValue)return 1;if(t===a6.mapValue)return -1;let r=e.fields||{},n=Object.keys(r),i=t.fields||{},s=Object.keys(i);n.sort(),s.sort();for(let e=0;e<n.length&&e<s.length;++e){let t=aa(n[e],s[e]);if(0!==t)return t;let a=ot(r[n[e]],i[s[e]]);if(0!==a)return a}return as(n.length,s.length)}(e.mapValue,t.mapValue);default:throw s0(23264,{he:r})}}function or(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return as(e,t);let r=a$(e),n=a$(t),i=as(r.seconds,n.seconds);return 0!==i?i:as(r.nanos,n.nanos)}function on(e,t){let r=e.values||[],n=t.values||[];for(let e=0;e<r.length&&e<n.length;++e){let t=ot(r[e],n[e]);if(t)return t}return as(r.length,n.length)}function oi(e){var t,r;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=a$(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?aK(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,ap.fromName(t).toString()):"geoPointValue"in e?(r=e.geoPointValue,`geo(${r.latitude},${r.longitude})`):"arrayValue"in e?function(e){let t="[",r=!0;for(let n of e.values||[])r?r=!1:t+=",",t+=oi(n);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),r="{",n=!0;for(let i of t)n?n=!1:r+=",",r+=`${i}:${oi(e.fields[i])}`;return r+"}"}(e.mapValue):s0(61005,{value:e})}function os(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function oa(e){return!!e&&"integerValue"in e}function oo(e){return!!e&&"arrayValue"in e}function ol(e){return!!e&&"nullValue"in e}function oh(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function ou(e){return!!e&&"mapValue"in e}function oc(e){return(e?.mapValue?.fields||{})[a4]?.stringValue===a9}function od(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:{...e.timestampValue}};if(e.mapValue){let t={mapValue:{fields:{}}};return aO(e.mapValue.fields,(e,r)=>t.mapValue.fields[e]=od(r)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=od(e.arrayValue.values[r]);return t}return{...e}}function of(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===a5}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(e){this.value=e}static empty(){return new op({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(!ou(t=(t.mapValue.fields||{})[e.get(r)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=od(t)}setAll(e){let t=af.emptyPath(),r={},n=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,r,n),r={},n=[],t=i.popLast()}e?r[i.lastSegment()]=od(e):n.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,r,n)}delete(e){let t=this.field(e.popLast());ou(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return a7(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];ou(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){for(let n of(aO(t,(t,r)=>e[t]=r),r))delete e[n]}clone(){return new op(od(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,t,r,n,i,s,a){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new om(e,0,aI.min(),aI.min(),aI.min(),op.empty(),0)}static newFoundDocument(e,t,r,n){return new om(e,1,t,aI.min(),r,n,0)}static newNoDocument(e,t){return new om(e,2,t,aI.min(),aI.min(),op.empty(),0)}static newUnknownDocument(e,t){return new om(e,3,t,aI.min(),aI.min(),op.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(aI.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=op.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=op.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=aI.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof om&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new om(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e,t){this.position=e,this.inclusive=t}}function oy(e,t,r){let n=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(n=s.field.isKeyField()?ap.comparator(ap.fromName(a.referenceValue),r.key):ot(a,r.data.field(s.field)),"desc"===s.dir&&(n*=-1),0!==n)break}return n}function ov(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let r=0;r<e.position.length;r++)if(!a7(e.position[r],t.position[r]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{}class oE extends ob{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,r):new oS(e,t,r):"array-contains"===t?new oN(e,r):"in"===t?new oR(e,r):"not-in"===t?new oD(e,r):"array-contains-any"===t?new oL(e,r):new oE(e,t,r)}static createKeyFieldInFilter(e,t,r){return"in"===t?new oC(e,r):new oA(e,r)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(ot(t,this.value)):null!==t&&a8(this.value)===a8(t)&&this.matchesComparison(ot(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return s0(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class o_ extends ob{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new o_(e,t)}matches(e){return oT(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function oT(e){return"and"===e.op}function oI(e){for(let t of e.filters)if(t instanceof o_)return!1;return!0}class oS extends oE{constructor(e,t,r){super(e,t,r),this.key=ap.fromName(r.referenceValue)}matches(e){let t=ap.comparator(e.key,this.key);return this.matchesComparison(t)}}class oC extends oE{constructor(e,t){super(e,"in",t),this.keys=ok("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class oA extends oE{constructor(e,t){super(e,"not-in",t),this.keys=ok("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ok(e,t){return(t.arrayValue?.values||[]).map(e=>ap.fromName(e.referenceValue))}class oN extends oE{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return oo(t)&&oe(t.arrayValue,this.value)}}class oR extends oE{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&oe(this.value.arrayValue,t)}}class oD extends oE{constructor(e,t){super(e,"not-in",t)}matches(e){if(oe(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!oe(this.value.arrayValue,t)}}class oL extends oE{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!oo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>oe(this.value.arrayValue,e))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO{constructor(e,t=null,r=[],n=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=i,this.startAt=s,this.endAt=a,this.Te=null}}function oP(e,t=null,r=[],n=[],i=null,s=null,a=null){return new oO(e,t,r,n,i,s,a)}function ox(e){if(null===e.Te){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof oE)return t.field.canonicalString()+t.op.toString()+oi(t.value);if(oI(t)&&oT(t))return t.filters.map(t=>e(t)).join(",");{let r=t.filters.map(t=>e(t)).join(",");return`${t.op}(${r})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>oi(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>oi(e)).join(",")),e.Te=t}return e.Te}function oM(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var r,n;if(r=e.orderBy[i],n=t.orderBy[i],!(r.dir===n.dir&&r.field.isEqual(n.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let r=0;r<e.filters.length;r++)if(!function e(t,r){return t instanceof oE?r instanceof oE&&t.op===r.op&&t.field.isEqual(r.field)&&a7(t.value,r.value):t instanceof o_?r instanceof o_&&t.op===r.op&&t.filters.length===r.filters.length&&t.filters.reduce((t,n,i)=>t&&e(n,r.filters[i]),!0):void s0(19439)}(e.filters[r],t.filters[r]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ov(e.startAt,t.startAt)&&ov(e.endAt,t.endAt)}function oU(e){return ap.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(e,t=null,r=[],n=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function oF(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function oB(e){return null!==e.collectionGroup}function oz(e){if(null===e.Ie){let t;e.Ie=[];let r=new Set;for(let t of e.explicitOrderBy)e.Ie.push(t),r.add(t.field.canonicalString());let n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(t=new aV(af.comparator),e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t).forEach(t=>{r.has(t.canonicalString())||t.isKeyField()||e.Ie.push(new ow(t,n))}),r.has(af.keyField().canonicalString())||e.Ie.push(new ow(af.keyField(),n))}return e.Ie}function oj(e){return e.Ee||(e.Ee=function(e,t){if("F"===e.limitType)return oP(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new ow(e.field,t)});let r=e.endAt?new og(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new og(e.startAt.position,e.startAt.inclusive):null;return oP(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}(e,oz(e))),e.Ee}function oq(e,t){let r=e.filters.concat([t]);return new oV(e.path,e.collectionGroup,e.explicitOrderBy.slice(),r,e.limit,e.limitType,e.startAt,e.endAt)}function o$(e,t,r){return new oV(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,r,e.startAt,e.endAt)}function oH(e,t){return oM(oj(e),oj(t))&&e.limitType===t.limitType}function oK(e){return`${ox(oj(e))}|lt:${e.limitType}`}function oG(e){var t;let r;return`Query(target=${r=(t=oj(e)).path.canonicalString(),null!==t.collectionGroup&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(e=>(function e(t){return t instanceof oE?`${t.field.canonicalString()} ${t.op} ${oi(t.value)}`:t instanceof o_?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(r+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>oi(e)).join(",")),t.endAt&&(r+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>oi(e)).join(",")),`Target(${r})`}; limitType=${e.limitType})`}function oW(e,t){return t.isFoundDocument()&&function(e,t){let r=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(r):ap.isDocumentKey(e.path)?e.path.isEqual(r):e.path.isImmediateParentOf(r)}(e,t)&&function(e,t){for(let r of oz(e))if(!r.field.isKeyField()&&null===t.data.field(r.field))return!1;return!0}(e,t)&&function(e,t){for(let r of e.filters)if(!r.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,r){let n=oy(e,t,r);return e.inclusive?n<=0:n<0}(e.startAt,oz(e),t))&&(!e.endAt||!!function(e,t,r){let n=oy(e,t,r);return e.inclusive?n>=0:n>0}(e.endAt,oz(e),t))}function oQ(e){return(t,r)=>{let n=!1;for(let i of oz(e)){let e=function(e,t,r){let n=e.field.isKeyField()?ap.comparator(t.key,r.key):function(e,t,r){let n=t.data.field(e),i=r.data.field(e);return null!==n&&null!==i?ot(n,i):s0(42886)}(e.field,t,r);switch(e.dir){case"asc":return n;case"desc":return -1*n;default:return s0(19790,{direction:e.dir})}}(i,t,r);if(0!==e)return e;n=n||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oY{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0!==r){for(let[t,n]of r)if(this.equalsFn(t,e))return n}}has(e){return void 0!==this.get(e)}set(e,t){let r=this.mapKeyFn(e),n=this.inner[r];if(void 0===n)return this.inner[r]=[[e,t]],void this.innerSize++;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return void(n[r]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),r=this.inner[t];if(void 0===r)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return 1===r.length?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){aO(this.inner,(t,r)=>{for(let[t,n]of r)e(t,n)})}isEmpty(){return aP(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oX=new ax(ap.comparator),oJ=new ax(ap.comparator);function oZ(...e){let t=oJ;for(let r of e)t=t.insert(r.key,r);return t}function o0(e){let t=oJ;return e.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function o1(){return new oY(e=>e.toString(),(e,t)=>e.isEqual(t))}let o2=new ax(ap.comparator),o4=new aV(ap.comparator);function o5(...e){let t=o4;for(let r of e)t=t.add(r);return t}let o6=new aV(as);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o9(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:aD(t)?"-0":t}}function o3(e){return{integerValue:""+e}}function o8(e,t){return"number"==typeof t&&Number.isInteger(t)&&!aD(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER?o3(t):o9(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o7{constructor(){this._=void 0}}function le(e,t){return e instanceof la?oa(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class lt extends o7{}class lr extends o7{constructor(e){super(),this.elements=e}}function ln(e,t){let r=ll(t);for(let t of e.elements)r.some(e=>a7(e,t))||r.push(t);return{arrayValue:{values:r}}}class li extends o7{constructor(e){super(),this.elements=e}}function ls(e,t){let r=ll(t);for(let t of e.elements)r=r.filter(e=>!a7(e,t));return{arrayValue:{values:r}}}class la extends o7{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function lo(e){return aH(e.integerValue||e.doubleValue)}function ll(e){return oo(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e,t){this.field=e,this.transform=t}}class lu{constructor(e,t){this.version=e,this.transformResults=t}}class lc{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new lc}static exists(e){return new lc(void 0,e)}static updateTime(e){return new lc(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ld(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class lf{}function lp(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new l_(e.key,lc.none()):new ly(e.key,e.data,lc.none());{let r=e.data,n=op.empty(),i=new aV(af.comparator);for(let e of t.fields)if(!i.has(e)){let t=r.field(e);null===t&&e.length>1&&(e=e.popLast(),t=r.field(e)),null===t?n.delete(e):n.set(e,t),i=i.add(e)}return new lv(e.key,n,new aB(i.toArray()),lc.none())}}function lm(e,t,r,n){return e instanceof ly?function(e,t,r,n){if(!ld(e.precondition,t))return r;let i=e.value.clone(),s=lE(e.fieldTransforms,n,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,r,n):e instanceof lv?function(e,t,r,n){if(!ld(e.precondition,t))return r;let i=lE(e.fieldTransforms,n,t),s=t.data;return(s.setAll(lw(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===r)?null:r.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,r,n):ld(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):r}function lg(e,t){var r,n;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(r=e.fieldTransforms,n=t.fieldTransforms,!!(void 0===r&&void 0===n||!(!r||!n)&&al(r,n,(e,t)=>{var r,n;return e.field.isEqual(t.field)&&(r=e.transform,n=t.transform,r instanceof lr&&n instanceof lr||r instanceof li&&n instanceof li?al(r.elements,n.elements,a7):r instanceof la&&n instanceof la?a7(r.Ae,n.Ae):r instanceof lt&&n instanceof lt)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ly extends lf{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class lv extends lf{constructor(e,t,r,n,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function lw(e){let t=new Map;return e.fieldMask.fields.forEach(r=>{if(!r.isEmpty()){let n=e.data.field(r);t.set(r,n)}}),t}function lb(e,t,r){let n=new Map;s2(e.length===r.length,32656,{Re:r.length,Ve:e.length});for(let s=0;s<r.length;s++){var i;let a=e[s],o=a.transform,l=t.data.field(a.field);n.set(a.field,(i=r[s],o instanceof lr?ln(o,l):o instanceof li?ls(o,l):i))}return n}function lE(e,t,r){let n=new Map;for(let i of e){let e=i.transform,s=r.data.field(i.field);n.set(i.field,e instanceof lt?function(e,t){let r={fields:{[aW]:{stringValue:aG},[aY]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&aX(t)&&(t=aJ(t)),t&&(r.fields[aQ]=t),{mapValue:r}}(t,s):e instanceof lr?ln(e,s):e instanceof li?ls(e,s):function(e,t){let r=le(e,t),n=lo(r)+lo(e.Ae);return oa(r)&&oa(e.Ae)?o3(n):o9(e.serializer,n)}(e,s))}return n}class l_ extends lf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lT extends lf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){let r=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var n;n=r[t],i instanceof ly?function(e,t,r){let n=e.value.clone(),i=lb(e.fieldTransforms,t,r.transformResults);n.setAll(i),t.convertToFoundDocument(r.version,n).setHasCommittedMutations()}(i,e,n):i instanceof lv?function(e,t,r){if(!ld(e.precondition,t))return void t.convertToUnknownDocument(r.version);let n=lb(e.fieldTransforms,t,r.transformResults),i=t.data;i.setAll(lw(e)),i.setAll(n),t.convertToFoundDocument(r.version,i).setHasCommittedMutations()}(i,e,n):function(e,t,r){t.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}}}applyToLocalView(e,t){for(let r of this.baseMutations)r.key.isEqual(e.key)&&(t=lm(r,e,t,this.localWriteTime));for(let r of this.mutations)r.key.isEqual(e.key)&&(t=lm(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let r=o1();return this.mutations.forEach(n=>{let i=e.get(n.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=lp(s,a=t.has(n.key)?null:a);null!==o&&r.set(n.key,o),s.isValidDocument()||s.convertToNoDocument(aI.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),o5())}isEqual(e){return this.batchId===e.batchId&&al(this.mutations,e.mutations,(e,t)=>lg(e,t))&&al(this.baseMutations,e.baseMutations,(e,t)=>lg(e,t))}}class lS{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){s2(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let n=o2,i=e.mutations;for(let e=0;e<i.length;e++)n=n.insert(i[e].key,r[e].version);return new lS(e,t,r,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,t){this.count=e,this.unchangedNames=t}}function lk(e){if(void 0===e)return sX("GRPC error has no .code"),s4.UNKNOWN;switch(e){case T.OK:return s4.OK;case T.CANCELLED:return s4.CANCELLED;case T.UNKNOWN:return s4.UNKNOWN;case T.DEADLINE_EXCEEDED:return s4.DEADLINE_EXCEEDED;case T.RESOURCE_EXHAUSTED:return s4.RESOURCE_EXHAUSTED;case T.INTERNAL:return s4.INTERNAL;case T.UNAVAILABLE:return s4.UNAVAILABLE;case T.UNAUTHENTICATED:return s4.UNAUTHENTICATED;case T.INVALID_ARGUMENT:return s4.INVALID_ARGUMENT;case T.NOT_FOUND:return s4.NOT_FOUND;case T.ALREADY_EXISTS:return s4.ALREADY_EXISTS;case T.PERMISSION_DENIED:return s4.PERMISSION_DENIED;case T.FAILED_PRECONDITION:return s4.FAILED_PRECONDITION;case T.ABORTED:return s4.ABORTED;case T.OUT_OF_RANGE:return s4.OUT_OF_RANGE;case T.UNIMPLEMENTED:return s4.UNIMPLEMENTED;case T.DATA_LOSS:return s4.DATA_LOSS;default:return s0(39323,{code:e})}}(I=T||(T={}))[I.OK=0]="OK",I[I.CANCELLED=1]="CANCELLED",I[I.UNKNOWN=2]="UNKNOWN",I[I.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",I[I.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",I[I.NOT_FOUND=5]="NOT_FOUND",I[I.ALREADY_EXISTS=6]="ALREADY_EXISTS",I[I.PERMISSION_DENIED=7]="PERMISSION_DENIED",I[I.UNAUTHENTICATED=16]="UNAUTHENTICATED",I[I.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",I[I.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",I[I.ABORTED=10]="ABORTED",I[I.OUT_OF_RANGE=11]="OUT_OF_RANGE",I[I.UNIMPLEMENTED=12]="UNIMPLEMENTED",I[I.INTERNAL=13]="INTERNAL",I[I.UNAVAILABLE=14]="UNAVAILABLE",I[I.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lN=new u([4294967295,4294967295],0);function lR(e){let t=(new TextEncoder).encode(e),r=new c;return r.update(t),new Uint8Array(r.digest())}function lD(e){let t=new DataView(e.buffer),r=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new u([r,n],0),new u([i,s],0)]}class lL{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new lO(`Invalid padding: ${t}`);if(r<0||e.length>0&&0===this.hashCount)throw new lO(`Invalid hash count: ${r}`);if(0===e.length&&0!==t)throw new lO(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=u.fromNumber(this.ge)}ye(e,t,r){let n=e.add(t.multiply(u.fromNumber(r)));return 1===n.compare(lN)&&(n=new u([n.getBits(0),n.getBits(1)],0)),n.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.ge)return!1;let[t,r]=lD(lR(e));for(let e=0;e<this.hashCount;e++){let n=this.ye(t,r,e);if(!this.we(n))return!1}return!0}static create(e,t,r){let n=new lL(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return r.forEach(e=>n.insert(e)),n}insert(e){if(0===this.ge)return;let[t,r]=lD(lR(e));for(let e=0;e<this.hashCount;e++){let n=this.ye(t,r,e);this.Se(n)}}Se(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}}class lO extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,t,r,n,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){let n=new Map;return n.set(e,lx.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new lP(aI.min(),n,new ax(as),oX,o5())}}class lx{constructor(e,t,r,n,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new lx(r,t,o5(),o5(),o5())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM{constructor(e,t,r,n){this.be=e,this.removedTargetIds=t,this.key=r,this.De=n}}class lU{constructor(e,t){this.targetId=e,this.Ce=t}}class lV{constructor(e,t,r=aj.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class lF{constructor(){this.ve=0,this.Fe=lj(),this.Me=aj.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=o5(),t=o5(),r=o5();return this.Fe.forEach((n,i)=>{switch(i){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:s0(38017,{changeType:i})}}),new lx(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=lj()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,s2(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class lB{constructor(e){this.Ge=e,this.ze=new Map,this.je=oX,this.Je=lz(),this.He=lz(),this.Ye=new ax(as)}Ze(e){for(let t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(let t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{let r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:s0(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((e,r)=>{this.rt(r)&&t(r)})}st(e){let t=e.targetId,r=e.Ce.count,n=this.ot(t);if(n){let i=n.target;if(oU(i)){if(0===r){let e=new ap(i.path);this.et(t,e,om.newNoDocument(e,aI.min()))}else s2(1===r,20013,{expectedCount:r})}else{let n=this._t(t);if(n!==r){let r=this.ut(e),i=r?this.ct(r,e,n):1;0!==i&&(this.it(t),this.Ye=this.Ye.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}ut(e){let t,r;let n=e.Ce.unchangedNames;if(!n||!n.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=n;try{t=aK(i).toUint8Array()}catch(e){if(e instanceof az)return sJ("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{r=new lL(t,s,a)}catch(e){return sJ(e instanceof lO?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===r.ge?null:r}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){let r=this.Ge.getRemoteKeysForTarget(t),n=0;return r.forEach(r=>{let i=this.Ge.ht(),s=`projects/${i.projectId}/databases/${i.database}/documents/${r.path.canonicalString()}`;e.mightContain(s)||(this.et(t,r,null),n++)}),n}Tt(e){let t=new Map;this.ze.forEach((r,n)=>{let i=this.ot(n);if(i){if(r.current&&oU(i.target)){let t=new ap(i.target.path);this.It(t).has(n)||this.Et(n,t)||this.et(n,t,om.newNoDocument(t,e))}r.Be&&(t.set(n,r.ke()),r.qe())}});let r=o5();this.He.forEach((e,t)=>{let n=!0;t.forEachWhile(e=>{let t=this.ot(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(n=!1,!1)}),n&&(r=r.add(e))}),this.je.forEach((t,r)=>r.setReadTime(e));let n=new lP(e,t,this.Ye,this.je,r);return this.je=oX,this.Je=lz(),this.He=lz(),this.Ye=new ax(as),n}Xe(e,t){if(!this.rt(e))return;let r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;let n=this.nt(e);this.Et(e,t)?n.Qe(t,1):n.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){let t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new lF,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new aV(as),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new aV(as),this.Je=this.Je.insert(e,t)),t}rt(e){let t=null!==this.ot(e);return t||sY("WatchChangeAggregator","Detected inactive target",e),t}ot(e){let t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new lF),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function lz(){return new ax(ap.comparator)}function lj(){return new ax(ap.comparator)}let lq={asc:"ASCENDING",desc:"DESCENDING"},l$={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lH={and:"AND",or:"OR"};class lK{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function lG(e,t){return e.useProto3Json||null==t?t:{value:t}}function lW(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function lQ(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function lY(e){return s2(!!e,49232),aI.fromTimestamp(function(e){let t=a$(e);return new aT(t.seconds,t.nanos)}(e))}function lX(e,t){return lJ(e,t).canonicalString()}function lJ(e,t){let r=new ac(["projects",e.projectId,"databases",e.database]).child("documents");return void 0===t?r:r.child(t)}function lZ(e){let t=ac.fromString(e);return s2(l8(t),10190,{key:t.toString()}),t}function l0(e,t){return lX(e.databaseId,t.path)}function l1(e,t){let r=lZ(t);if(r.get(1)!==e.databaseId.projectId)throw new s5(s4.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new s5(s4.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new ap(l5(r))}function l2(e,t){return lX(e.databaseId,t)}function l4(e){return new ac(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function l5(e){return s2(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function l6(e,t,r){return{name:l0(e,t),fields:r.value.mapValue.fields}}function l9(e){return{fieldPath:e.canonicalString()}}function l3(e){return af.fromServerFormat(e.fieldPath)}function l8(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l7{constructor(e,t,r,n,i=aI.min(),s=aI.min(),a=aj.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new l7(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new l7(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new l7(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new l7(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.yt=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(){}Dt(e,t){this.Ct(e,t),t.vt()}Ct(e,t){if("nullValue"in e)this.Ft(t,5);else if("booleanValue"in e)this.Ft(t,10),t.Mt(e.booleanValue?1:0);else if("integerValue"in e)this.Ft(t,15),t.Mt(aH(e.integerValue));else if("doubleValue"in e){let r=aH(e.doubleValue);isNaN(r)?this.Ft(t,13):(this.Ft(t,15),aD(r)?t.Mt(0):t.Mt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Ft(t,20),"string"==typeof r&&(r=a$(r)),t.xt(`${r.seconds||""}`),t.Mt(r.nanos||0)}else if("stringValue"in e)this.Ot(e.stringValue,t),this.Nt(t);else if("bytesValue"in e)this.Ft(t,30),t.Bt(aK(e.bytesValue)),this.Nt(t);else if("referenceValue"in e)this.Lt(e.referenceValue,t);else if("geoPointValue"in e){let r=e.geoPointValue;this.Ft(t,45),t.Mt(r.latitude||0),t.Mt(r.longitude||0)}else"mapValue"in e?of(e)?this.Ft(t,Number.MAX_SAFE_INTEGER):oc(e)?this.kt(e.mapValue,t):(this.qt(e.mapValue,t),this.Nt(t)):"arrayValue"in e?(this.Qt(e.arrayValue,t),this.Nt(t)):s0(19022,{$t:e})}Ot(e,t){this.Ft(t,25),this.Ut(e,t)}Ut(e,t){t.xt(e)}qt(e,t){let r=e.fields||{};for(let e of(this.Ft(t,55),Object.keys(r)))this.Ot(e,t),this.Ct(r[e],t)}kt(e,t){let r=e.fields||{};this.Ft(t,53);let n=r[a3].arrayValue?.values?.length||0;this.Ft(t,15),t.Mt(aH(n)),this.Ot(a3,t),this.Ct(r[a3],t)}Qt(e,t){let r=e.values||[];for(let e of(this.Ft(t,50),r))this.Ct(e,t)}Lt(e,t){this.Ft(t,37),ap.fromName(e).path.forEach(e=>{this.Ft(t,60),this.Ut(e,t)})}Ft(e,t){e.Mt(t)}Nt(e){e.Mt(2)}}ht.Kt=new ht;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(){this.Cn=new hn}addToCollectionParentIndex(e,t){return this.Cn.add(t),ak.resolve()}getCollectionParents(e,t){return ak.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return ak.resolve()}deleteFieldIndex(e,t){return ak.resolve()}deleteAllFieldIndexes(e){return ak.resolve()}createTargetIndexes(e,t){return ak.resolve()}getDocumentsMatchingTarget(e,t){return ak.resolve(null)}getIndexType(e,t){return ak.resolve(0)}getFieldIndexes(e,t){return ak.resolve([])}getNextCollectionGroupToUpdate(e){return ak.resolve(null)}getMinOffset(e,t){return ak.resolve(aS.min())}getMinOffsetFromCollectionGroup(e,t){return ak.resolve(aS.min())}updateCollectionGroup(e,t,r){return ak.resolve()}updateIndexEntries(e,t){return ak.resolve()}}class hn{constructor(){this.index={}}add(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new aV(ac.comparator),i=!n.has(r);return this.index[t]=n.add(r),i}has(e){let t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new aV(ac.comparator)).toArray()}}new Uint8Array(0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class hs{static withCacheSize(e){return new hs(e,hs.DEFAULT_COLLECTION_PERCENTILE,hs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hs.DEFAULT_COLLECTION_PERCENTILE=10,hs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,hs.DEFAULT=new hs(41943040,hs.DEFAULT_COLLECTION_PERCENTILE,hs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),hs.DISABLED=new hs(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ha(0)}static cr(){return new ha(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho="LruGarbageCollector";function hl([e,t],[r,n]){let i=as(e,r);return 0===i?as(t,n):i}class hh{constructor(e){this.Ir=e,this.buffer=new aV(hl),this.Er=0}dr(){return++this.Er}Ar(e){let t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{let e=this.buffer.last();0>hl(t,e)&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class hu{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Vr(e){sY(ho,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){aN(e)?sY(ho,"Ignoring IndexedDB error during garbage collection: ",e):await aA(e)}await this.Vr(3e5)})}}class hc{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return ak.resolve(aR.ce);let r=new hh(t);return this.mr.forEachTarget(e,e=>r.Ar(e.sequenceNumber)).next(()=>this.mr.pr(e,e=>r.Ar(e))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return -1===this.params.cacheSizeCollectionThreshold?(sY("LruGarbageCollector","Garbage collection skipped; disabled"),ak.resolve(hi)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(sY("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),hi):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,n,i,s,a,o,l;let u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(sY("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),n=this.params.maximumSequenceNumbersToCollect):n=t,s=Date.now(),this.nthSequenceNumber(e,n))).next(n=>(r=n,a=Date.now(),this.removeTargets(e,r,t))).next(t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,r))).next(e=>(l=Date.now(),sQ()<=h.DEBUG&&sY("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${s-u}ms
	Determined least recently used ${n} in `+(a-s)+"ms\n"+`	Removed ${i} targets in `+(o-a)+"ms\n"+`	Removed ${e} documents in `+(l-o)+"ms\n"+`Total Duration: ${l-u}ms`),ak.resolve({didRun:!0,sequenceNumbersCollected:n,targetsRemoved:i,documentsRemoved:e})))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this.changes=new oY(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,om.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let r=this.changes.get(t);return void 0!==r?ak.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==r&&lm(r.mutation,e,aB.empty(),aT.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,o5()).next(()=>t))}getLocalViewOfDocuments(e,t,r=o5()){let n=o1();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(e=>{let t=oZ();return e.forEach((e,r)=>{t=t.insert(e,r.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let r=o1();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,o5()))}populateOverlays(e,t,r){let n=[];return r.forEach(e=>{t.has(e)||n.push(e)}),this.documentOverlayCache.getOverlays(e,n).next(e=>{e.forEach((e,r)=>{t.set(e,r)})})}computeViews(e,t,r,n){let i=oX,s=o1(),a=o1();return t.forEach((e,t)=>{let a=r.get(t.key);n.has(t.key)&&(void 0===a||a.mutation instanceof lv)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),lm(a.mutation,t,a.mutation.getFieldMask(),aT.now())):s.set(t.key,aB.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>a.set(e,new hf(t,s.get(e)??null))),a))}recalculateAndSaveOverlays(e,t){let r=o1(),n=new ax((e,t)=>e-t),i=o5();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=r.get(e)||aB.empty();a=i.applyToLocalView(s,a),r.set(e,a);let o=(n.get(i.batchId)||o5()).add(e);n=n.insert(i.batchId,o)})}).next(()=>{let s=[],a=n.getReverseIterator();for(;a.hasNext();){let n=a.getNext(),o=n.key,l=n.value,h=o1();l.forEach(e=>{if(!i.has(e)){let n=lp(t.get(e),r.get(e));null!==n&&h.set(e,n),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,h))}return ak.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,r,n){return ap.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):oB(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(i=>{let s=n-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-i.size):ak.resolve(o1()),a=-1,o=i;return s.next(t=>ak.forEach(t,(t,r)=>(a<r.largestBatchId&&(a=r.largestBatchId),i.get(t)?ak.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,o5())).next(e=>({batchId:a,changes:o0(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ap(t)).next(e=>{let t=oZ();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){let i=t.collectionGroup,s=oZ();return this.indexManager.getCollectionParents(e,i).next(a=>ak.forEach(a,a=>{let o=new oV(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,r,n).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,r,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,n))).next(e=>{i.forEach((t,r)=>{let n=r.getKey();null===e.get(n)&&(e=e.insert(n,om.newInvalidDocument(n)))});let r=oZ();return e.forEach((e,n)=>{let s=i.get(e);void 0!==s&&lm(s.mutation,n,aB.empty(),aT.now()),oW(t,n)&&(r=r.insert(e,n))}),r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return ak.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,{id:t.id,version:t.version,createTime:lY(t.createTime)}),ak.resolve()}getNamedQuery(e,t){return ak.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let r,n=function(e){let t=lZ(e);return 4===t.length?ac.emptyPath():l5(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){s2(1===s,65062);let e=i.from[0];e.allDescendants?a=e.collectionId:n=n.child(e.collectionId)}let o=[];i.where&&(o=function(e){var t;let r=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=l3(e.unaryFilter.field);return oE.create(t,"==",{doubleValue:NaN});case"IS_NULL":let r=l3(e.unaryFilter.field);return oE.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let n=l3(e.unaryFilter.field);return oE.create(n,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=l3(e.unaryFilter.field);return oE.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return s0(61313);default:return s0(60726)}}(t):void 0!==t.fieldFilter?oE.create(l3(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return s0(58110);default:return s0(50506)}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?o_.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return s0(1026)}}(t.compositeFilter.op)):s0(30097,{filter:t})}(e);return r instanceof o_&&oI(t=r)&&oT(t)?r.getFilters():[r]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new ow(l3(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let h=null;i.limit&&(h=null==(r="object"==typeof(t=i.limit)?t.value:t)?null:r);let u=null;i.startAt&&(u=function(e){let t=!!e.before;return new og(e.values||[],t)}(i.startAt));let c=null;return i.endAt&&(c=function(e){let t=!e.before;return new og(e.values||[],t)}(i.endAt)),new oV(n,a,l,o,h,"F",u,c)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?o$(t,t.limit,"L"):t}(t.bundledQuery),readTime:lY(t.readTime)}),ak.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.overlays=new ax(ap.comparator),this.qr=new Map}getOverlay(e,t){return ak.resolve(this.overlays.get(t))}getOverlays(e,t){let r=o1();return ak.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&r.set(t,e)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((r,n)=>{this.St(e,t,n)}),ak.resolve()}removeOverlaysForBatchId(e,t,r){let n=this.qr.get(r);return void 0!==n&&(n.forEach(e=>this.overlays=this.overlays.remove(e)),this.qr.delete(r)),ak.resolve()}getOverlaysForCollection(e,t,r){let n=o1(),i=t.length+1,s=new ap(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>r&&n.set(e.getKey(),e)}return ak.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let i=new ax((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>r){let t=i.get(e.largestBatchId);null===t&&(t=o1(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=o1(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=n)););return ak.resolve(a)}St(e,t,r){let n=this.overlays.get(r.key);if(null!==n){let e=this.qr.get(n.largestBatchId).delete(r.key);this.qr.set(n.largestBatchId,e)}this.overlays=this.overlays.insert(r.key,new lC(t,r));let i=this.qr.get(t);void 0===i&&(i=o5(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(){this.sessionToken=aj.EMPTY_BYTE_STRING}getSessionToken(e){return ak.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,ak.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(){this.Qr=new aV(hw.$r),this.Ur=new aV(hw.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){let r=new hw(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Gr(new hw(e,t))}zr(e,t){e.forEach(e=>this.removeReference(e,t))}jr(e){let t=new ap(new ac([])),r=new hw(t,e),n=new hw(t,e+1),i=[];return this.Ur.forEachInRange([r,n],e=>{this.Gr(e),i.push(e.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){let t=new ap(new ac([])),r=new hw(t,e),n=new hw(t,e+1),i=o5();return this.Ur.forEachInRange([r,n],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new hw(e,0),r=this.Qr.firstAfterOrEqual(t);return null!==r&&e.isEqual(r.key)}}class hw{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ap.comparator(e.key,t.key)||as(e.Yr,t.Yr)}static Kr(e,t){return as(e.Yr,t.Yr)||ap.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new aV(hw.$r)}checkEmpty(e){return ak.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,r,n){let i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new lI(i,t,r,n);for(let t of(this.mutationQueue.push(s),n))this.Zr=this.Zr.add(new hw(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return ak.resolve(s)}lookupMutationBatch(e,t){return ak.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){let r=this.ei(t+1),n=r<0?0:r;return ak.resolve(this.mutationQueue.length>n?this.mutationQueue[n]:null)}getHighestUnacknowledgedBatchId(){return ak.resolve(0===this.mutationQueue.length?-1:this.tr-1)}getAllMutationBatches(e){return ak.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let r=new hw(t,0),n=new hw(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,n],e=>{let t=this.Xr(e.Yr);i.push(t)}),ak.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new aV(as);return t.forEach(e=>{let t=new hw(e,0),n=new hw(e,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([t,n],e=>{r=r.add(e.Yr)})}),ak.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){let r=t.path,n=r.length+1,i=r;ap.isDocumentKey(i)||(i=i.child(""));let s=new hw(new ap(i),0),a=new aV(as);return this.Zr.forEachWhile(e=>{let t=e.key.path;return!!r.isPrefixOf(t)&&(t.length===n&&(a=a.add(e.Yr)),!0)},s),ak.resolve(this.ti(a))}ti(e){let t=[];return e.forEach(e=>{let r=this.Xr(e);null!==r&&t.push(r)}),t}removeMutationBatch(e,t){s2(0===this.ni(t.batchId,"removed"),55003),this.mutationQueue.shift();let r=this.Zr;return ak.forEach(t.mutations,n=>{let i=new hw(n.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){let r=new hw(t,0),n=this.Zr.firstAfterOrEqual(r);return ak.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,ak.resolve()}ni(e,t){return this.ei(e)}ei(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Xr(e){let t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e){this.ri=e,this.docs=new ax(ap.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let r=t.key,n=this.docs.get(r),i=n?n.size:0,s=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let r=this.docs.get(t);return ak.resolve(r?r.document.mutableCopy():om.newInvalidDocument(t))}getEntries(e,t){let r=oX;return t.forEach(e=>{let t=this.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():om.newInvalidDocument(e))}),ak.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let i=oX,s=t.path,a=new ap(s.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let r=e.readTime.compareTo(t.readTime);return 0!==r?r:0!==(r=ap.comparator(e.documentKey,t.documentKey))?r:as(e.largestBatchId,t.largestBatchId)}(new aS(a.readTime,a.key,-1),r)||(n.has(a.key)||oW(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return ak.resolve(i)}getAllFromCollectionGroup(e,t,r,n){s0(9500)}ii(e,t){return ak.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new h_(this)}getSize(e){return ak.resolve(this.size)}}class h_ extends hd{constructor(e){super(),this.Nr=e}applyChanges(e){let t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.Nr.addEntry(e,n)):this.Nr.removeEntry(r)}),ak.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT{constructor(e){this.persistence=e,this.si=new oY(e=>ox(e),oM),this.lastRemoteSnapshotVersion=aI.min(),this.highestTargetId=0,this.oi=0,this._i=new hv,this.targetCount=0,this.ai=ha.ur()}forEachTarget(e,t){return this.si.forEach((e,r)=>t(r)),ak.resolve()}getLastRemoteSnapshotVersion(e){return ak.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ak.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),ak.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),ak.resolve()}Pr(e){this.si.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.ai=new ha(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,ak.resolve()}updateTargetData(e,t){return this.Pr(t),ak.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,ak.resolve()}removeTargets(e,t,r){let n=0,i=[];return this.si.forEach((s,a)=>{a.sequenceNumber<=t&&null===r.get(a.targetId)&&(this.si.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),ak.waitFor(i).next(()=>n)}getTargetCount(e){return ak.resolve(this.targetCount)}getTargetData(e,t){let r=this.si.get(t)||null;return ak.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),ak.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);let n=this.persistence.referenceDelegate,i=[];return n&&t.forEach(t=>{i.push(n.markPotentiallyOrphaned(e,t))}),ak.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),ak.resolve()}getMatchingKeysForTargetId(e,t){let r=this._i.Hr(t);return ak.resolve(r)}containsKey(e,t){return ak.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e,t){this.ui={},this.overlays={},this.ci=new aR(0),this.li=!1,this.li=!0,this.hi=new hy,this.referenceDelegate=e(this),this.Pi=new hT(this),this.indexManager=new hr,this.remoteDocumentCache=new hE(e=>this.referenceDelegate.Ti(e)),this.serializer=new he(t),this.Ii=new hm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new hg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new hb(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){sY("MemoryPersistence","Starting transaction:",e);let n=new hS(this.ci.next());return this.referenceDelegate.Ei(),r(n).next(e=>this.referenceDelegate.di(n).next(()=>e)).toPromise().then(e=>(n.raiseOnCommittedEvent(),e))}Ai(e,t){return ak.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class hS extends aC{constructor(e){super(),this.currentSequenceNumber=e}}class hC{constructor(e){this.persistence=e,this.Ri=new hv,this.Vi=null}static mi(e){return new hC(e)}get fi(){if(this.Vi)return this.Vi;throw s0(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),ak.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),ak.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),ak.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(e=>this.fi.add(e.toString()));let r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.fi.add(e.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ak.forEach(this.fi,r=>{let n=ap.fromPath(r);return this.gi(e,n).next(e=>{e||t.removeEntry(n,aI.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(e=>{e?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return ak.or([()=>ak.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class hA{constructor(e,t){this.persistence=e,this.pi=new oY(e=>(function(e){let t="";for(let r=0;r<e.length;r++)t.length>0&&(t+="\x01\x01"),t=function(e,t){let r=t,n=e.length;for(let t=0;t<n;t++){let n=e.charAt(t);switch(n){case"\x00":r+="\x01\x10";break;case"\x01":r+="\x01\x11";break;default:r+=n}}return r}(e.get(r),t);return t+"\x01\x01"})(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=new hc(this,t)}static mi(e,t){return new hA(e,t)}Ei(){}di(e){return ak.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){let t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}wr(e){let t=0;return this.pr(e,e=>{t++}).next(()=>t)}pr(e,t){return ak.forEach(this.pi,(r,n)=>this.br(e,r,n).next(e=>e?ak.resolve():t(n)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0,n=this.persistence.getRemoteDocumentCache(),i=n.newChangeBuffer();return n.ii(e,n=>this.br(e,n,t).next(e=>{e||(r++,i.removeEntry(n,aI.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),ak.resolve()}removeTarget(e,t){let r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),ak.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),ak.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),ak.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=function e(t){switch(a8(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:let r=aJ(t);return r?16+e(r):16;case 5:return 2*t.stringValue.length;case 6:return aK(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(t.arrayValue.values||[]).reduce((t,r)=>t+e(r),0);case 10:case 11:var n;let i;return n=t.mapValue,i=0,aO(n.fields,(t,r)=>{i+=t.length+e(r)}),i;default:throw s0(13486,{value:t})}}(e.data.value)),t}br(e,t,r){return ak.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{let e=this.pi.get(t);return ak.resolve(void 0!==e&&e>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=n}static As(e,t){let r=o5(),n=o5();for(let e of t.docChanges)switch(e.type){case 0:r=r.add(e.doc.key);break;case 1:n=n.add(e.doc.key)}return new hk(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=!function(){let e=tl()?.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(A.process)}catch(e){return!1}}()&&navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")?8:function(e){let t=e.match(/Android ([\d.]+)/i);return Number(t?t[1].split(".").slice(0,2).join("."):"-1")}(tw())>0?6:4}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,n){let i={result:null};return this.ys(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.ws(e,t,n,r).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let r=new hN;return this.Ss(e,t,r).next(n=>{if(i.result=n,this.Vs)return this.bs(e,t,r,n.size)})}).next(()=>i.result)}bs(e,t,r,n){return r.documentReadCount<this.fs?(sQ()<=h.DEBUG&&sY("QueryEngine","SDK will not create cache indexes for query:",oG(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),ak.resolve()):(sQ()<=h.DEBUG&&sY("QueryEngine","Query:",oG(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.gs*n?(sQ()<=h.DEBUG&&sY("QueryEngine","The SDK decides to create cache indexes for query:",oG(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,oj(t))):ak.resolve())}ys(e,t){if(oF(t))return ak.resolve(null);let r=oj(t);return this.indexManager.getIndexType(e,r).next(n=>0===n?null:(null!==t.limit&&1===n&&(r=oj(t=o$(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,r).next(n=>{let i=o5(...n);return this.ps.getDocuments(e,i).next(n=>this.indexManager.getMinOffset(e,r).next(r=>{let s=this.Ds(t,n);return this.Cs(t,s,i,r.readTime)?this.ys(e,o$(t,null,"F")):this.vs(e,s,t,r)}))})))}ws(e,t,r,n){return oF(t)||n.isEqual(aI.min())?ak.resolve(null):this.ps.getDocuments(e,r).next(i=>{let s=this.Ds(t,i);return this.Cs(t,s,r,n)?ak.resolve(null):(sQ()<=h.DEBUG&&sY("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),oG(t)),this.vs(e,s,t,function(e,t){let r=e.toTimestamp().seconds,n=e.toTimestamp().nanoseconds+1;return new aS(aI.fromTimestamp(1e9===n?new aT(r+1,0):new aT(r,n)),ap.empty(),-1)}(n,0)).next(e=>e))})}Ds(e,t){let r=new aV(oQ(e));return t.forEach((t,n)=>{oW(e,n)&&(r=r.add(n))}),r}Cs(e,t,r,n){if(null===e.limit)return!1;if(r.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(n)>0)}Ss(e,t,r){return sQ()<=h.DEBUG&&sY("QueryEngine","Using full collection scan to execute query:",oG(t)),this.ps.getDocumentsMatchingQuery(e,t,aS.min(),r)}vs(e,t,r,n){return this.ps.getDocumentsMatchingQuery(e,r,n).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hD="LocalStore";class hL{constructor(e,t,r,n){this.persistence=e,this.Fs=t,this.serializer=n,this.Ms=new ax(as),this.xs=new oY(e=>ox(e),oM),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hp(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}async function hO(e,t){return await e.persistence.runTransaction("Handle user change","readonly",r=>{let n;return e.mutationQueue.getAllMutationBatches(r).next(i=>(n=i,e.Bs(t),e.mutationQueue.getAllMutationBatches(r))).next(t=>{let i=[],s=[],a=o5();for(let e of n)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(r,a).next(e=>({Ls:e,removedBatchIds:i,addedBatchIds:s}))})})}function hP(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}async function hx(e,t,r){let n=e.Ms.get(t);try{r||await e.persistence.runTransaction("Release target",r?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,n))}catch(e){if(!aN(e))throw e;sY(hD,`Failed to update sequence numbers for target ${t}: ${e}`)}e.Ms=e.Ms.remove(t),e.xs.delete(n.target)}function hM(e,t,r){let n=aI.min(),i=o5();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,r){let n=e.xs.get(r);return void 0!==n?ak.resolve(e.Ms.get(n)):e.Pi.getTargetData(t,r)})(e,s,oj(t)).next(t=>{if(t)return n=t.lastLimboFreeSnapshotVersion,e.Pi.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.Fs.getDocumentsMatchingQuery(s,t,r?n:aI.min(),r?i:o5())).next(r=>{var n;let s;return n=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.Os.get(n)||aI.min(),r.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.Os.set(n,s),{documents:r,Qs:i}}))}class hU{constructor(){this.activeTargetIds=o6}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}}class hV{constructor(){this.Mo=new hU,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new hU,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hF{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hB="ConnectivityMonitor";class hz{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){for(let e of(sY(hB,"Network connectivity changed: AVAILABLE"),this.qo))e(0)}ko(){for(let e of(sY(hB,"Network connectivity changed: UNAVAILABLE"),this.qo))e(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hj=null;function hq(){return null===hj?hj=268435456+Math.round(2147483648*Math.random()):hj++,"0x"+hj.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h$="RestConnection",hH={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class hK{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${n}`,this.Wo=this.databaseId.database===a1?`project_id=${r}`:`project_id=${r}&database_id=${n}`}Go(e,t,r,n,i){let s=hq(),a=this.zo(e,t.toUriEncodedString());sY(h$,`Sending RPC '${e}' ${s}:`,a,r);let o={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(o,n,i);let{host:l}=new URL(a),h=tp(l);return this.Jo(e,a,o,r,h).then(t=>(sY(h$,`Received RPC '${e}' ${s}: `,t),t),t=>{throw sJ(h$,`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",r),t})}Ho(e,t,r,n,i,s){return this.Go(e,t,r,n,i)}jo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+sG,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,r)=>e[r]=t),r&&r.headers.forEach((t,r)=>e[r]=t)}zo(e,t){let r=hH[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hG{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hW="WebChannelConnection";class hQ extends hK{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,n,i){let s=hq();return new Promise((i,a)=>{let o=new d;o.setWithCredentials(!0),o.listenOnce(p.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case m.NO_ERROR:let t=o.getResponseJson();sY(hW,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case m.TIMEOUT:sY(hW,`RPC '${e}' ${s} timed out`),a(new s5(s4.DEADLINE_EXCEEDED,"Request time out"));break;case m.HTTP_ERROR:let r=o.getStatus();if(sY(hW,`RPC '${e}' ${s} failed with status:`,r,"response text:",o.getResponseText()),r>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=e?.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(s4).indexOf(t)>=0?t:s4.UNKNOWN}(t.status);a(new s5(e,t.message))}else a(new s5(s4.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new s5(s4.UNAVAILABLE,"Connection failed."));break;default:s0(9055,{l_:e,streamId:s,h_:o.getLastErrorCode(),P_:o.getLastError()})}}finally{sY(hW,`RPC '${e}' ${s} completed.`)}});let l=JSON.stringify(n);sY(hW,`RPC '${e}' ${s} sending request:`,n),o.send(t,"POST",l,r,15)})}T_(e,t,r){let n=hq(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=w(),a=v(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.useFetchStreams=!0),this.jo(o.initMessageHeaders,t,r),o.encodeInitMessageHeaders=!0;let h=i.join("");sY(hW,`Creating RPC '${e}' stream ${n}: ${h}`,o);let u=s.createWebChannel(h,o);this.I_(u);let c=!1,d=!1,p=new hG({Yo:t=>{d?sY(hW,`Not sending because RPC '${e}' stream ${n} is closed:`,t):(c||(sY(hW,`Opening RPC '${e}' stream ${n} transport.`),u.open(),c=!0),sY(hW,`RPC '${e}' stream ${n} sending:`,t),u.send(t))},Zo:()=>u.close()}),m=(e,t,r)=>{e.listen(t,e=>{try{r(e)}catch(e){setTimeout(()=>{throw e},0)}})};return m(u,f.EventType.OPEN,()=>{d||(sY(hW,`RPC '${e}' stream ${n} transport opened.`),p.o_())}),m(u,f.EventType.CLOSE,()=>{d||(d=!0,sY(hW,`RPC '${e}' stream ${n} transport closed`),p.a_(),this.E_(u))}),m(u,f.EventType.ERROR,t=>{d||(d=!0,sJ(hW,`RPC '${e}' stream ${n} transport errored. Name:`,t.name,"Message:",t.message),p.a_(new s5(s4.UNAVAILABLE,"The operation could not be completed")))}),m(u,f.EventType.MESSAGE,t=>{if(!d){let r=t.data[0];s2(!!r,16349);let i=r?.error||r[0]?.error;if(i){sY(hW,`RPC '${e}' stream ${n} received error:`,i);let t=i.status,r=function(e){let t=T[e];if(void 0!==t)return lk(t)}(t),s=i.message;void 0===r&&(r=s4.INTERNAL,s="Unknown error status: "+t+" with message "+i.message),d=!0,p.a_(new s5(r,s)),u.close()}else sY(hW,`RPC '${e}' stream ${n} received:`,r),p.u_(r)}}),m(a,y.STAT_EVENT,t=>{t.stat===g.PROXY?sY(hW,`RPC '${e}' stream ${n} detected buffering proxy`):t.stat===g.NOPROXY&&sY(hW,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{p.__()},0),p}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function hY(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hX(e){return new lK(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hJ{constructor(e,t,r=1e3,n=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=n,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();let t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),n=Math.max(0,t-r);n>0&&sY("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,n,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hZ="PersistentStream";class h0{constructor(e,t,r,n,i,s,a,o){this.Mi=e,this.S_=r,this.b_=n,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new hJ(e,t)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,4!==e?this.M_.reset():t&&t.code===s4.RESOURCE_EXHAUSTED?(sX(t.toString()),sX("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===s4.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;let e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,r])=>{this.D_===t&&this.G_(e,r)},t=>{e(()=>{let e=new s5(s4.UNKNOWN,"Fetching auth token failed: "+t.message);return this.z_(e)})})}G_(e,t){let r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(e=>{r(()=>this.z_(e))}),this.stream.onMessage(e=>{r(()=>1==++this.F_?this.J_(e):this.onNext(e))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return sY(hZ,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(sY(hZ,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class h1 extends h0{constructor(e,t,r,n,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();let t=function(e,t){let r;if("targetChange"in t){var n,i;t.targetChange;let s="NO_CHANGE"===(n=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===n?1:"REMOVE"===n?2:"CURRENT"===n?3:"RESET"===n?4:s0(39313,{state:n}),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(s2(void 0===i||"string"==typeof i,58123),aj.fromBase64String(i||"")):(s2(void 0===i||i instanceof sb||i instanceof Uint8Array,16193),aj.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;r=new lV(s,a,o,l&&new s5(void 0===l.code?s4.UNKNOWN:lk(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let n=t.documentChange;n.document,n.document.name,n.document.updateTime;let i=l1(e,n.document.name),s=lY(n.document.updateTime),a=n.document.createTime?lY(n.document.createTime):aI.min(),o=new op({mapValue:{fields:n.document.fields}}),l=om.newFoundDocument(i,s,a,o);r=new lM(n.targetIds||[],n.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let n=t.documentDelete;n.document;let i=l1(e,n.document),s=n.readTime?lY(n.readTime):aI.min(),a=om.newNoDocument(i,s);r=new lM([],n.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let n=t.documentRemove;n.document;let i=l1(e,n.document);r=new lM([],n.removedTargetIds||[],i,null)}else{if(!("filter"in t))return s0(11601,{Rt:t});{t.filter;let e=t.filter;e.targetId;let{count:n=0,unchangedNames:i}=e,s=new lA(n,i);r=new lU(e.targetId,s)}}return r}(this.serializer,e),r=function(e){if(!("targetChange"in e))return aI.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?aI.min():t.readTime?lY(t.readTime):aI.min()}(e);return this.listener.H_(t,r)}Y_(e){let t={};t.database=l4(this.serializer),t.addTarget=function(e,t){let r;let n=t.target;if((r=oU(n)?{documents:{documents:[l2(e,n.path)]}}:{query:function(e,t){var r,n;let i;let s={structuredQuery:{}},a=t.path;null!==t.collectionGroup?(i=a,s.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=a.popLast(),s.structuredQuery.from=[{collectionId:a.lastSegment()}]),s.parent=l2(e,i);let o=function(e){if(0!==e.length)return function e(t){return t instanceof oE?function(e){if("=="===e.op){if(oh(e.value))return{unaryFilter:{field:l9(e.field),op:"IS_NAN"}};if(ol(e.value))return{unaryFilter:{field:l9(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(oh(e.value))return{unaryFilter:{field:l9(e.field),op:"IS_NOT_NAN"}};if(ol(e.value))return{unaryFilter:{field:l9(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:l9(e.field),op:l$[e.op],value:e.value}}}(t):t instanceof o_?function(t){let r=t.getFilters().map(t=>e(t));return 1===r.length?r[0]:{compositeFilter:{op:lH[t.op],filters:r}}}(t):s0(54877,{filter:t})}(o_.create(e,"and"))}(t.filters);o&&(s.structuredQuery.where=o);let l=function(e){if(0!==e.length)return e.map(e=>({field:l9(e.field),direction:lq[e.dir]}))}(t.orderBy);l&&(s.structuredQuery.orderBy=l);let h=lG(e,t.limit);return null!==h&&(s.structuredQuery.limit=h),t.startAt&&(s.structuredQuery.startAt={before:(r=t.startAt).inclusive,values:r.position}),t.endAt&&(s.structuredQuery.endAt={before:!(n=t.endAt).inclusive,values:n.position}),{ft:s,parent:i}}(e,n).ft}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){r.resumeToken=lQ(e,t.resumeToken);let n=lG(e,t.expectedCount);null!==n&&(r.expectedCount=n)}else if(t.snapshotVersion.compareTo(aI.min())>0){r.readTime=lW(e,t.snapshotVersion.toTimestamp());let n=lG(e,t.expectedCount);null!==n&&(r.expectedCount=n)}return r}(this.serializer,e);let r=function(e,t){let r=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return s0(28987,{purpose:e})}}(t.purpose);return null==r?null:{"goog-listen-tags":r}}(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){let t={};t.database=l4(this.serializer),t.removeTarget=e,this.q_(t)}}class h2 extends h0{constructor(e,t,r,n,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,s),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return s2(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,s2(!e.writeResults||0===e.writeResults.length,55816),this.listener.ta()}onNext(e){var t,r;s2(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();let n=(t=e.writeResults,r=e.commitTime,t&&t.length>0?(s2(void 0!==r,14353),t.map(e=>{let t;return(t=e.updateTime?lY(e.updateTime):lY(r)).isEqual(aI.min())&&(t=lY(r)),new lu(t,e.transformResults||[])})):[]),i=lY(e.commitTime);return this.listener.na(i,n)}ra(){let e={};e.database=l4(this.serializer),this.q_(e)}ea(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var r;let n;if(t instanceof ly)n={update:l6(e,t.key,t.value)};else if(t instanceof l_)n={delete:l0(e,t.key)};else if(t instanceof lv)n={update:l6(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof lT))return s0(16599,{Vt:t.type});n={verify:l0(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let r=t.transform;if(r instanceof lt)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof lr)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof li)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof la)return{fieldPath:t.field.canonicalString(),increment:r.Ae};throw s0(20930,{transform:t.transform})})(0,e))),t.precondition.isNone||(n.currentDocument=void 0!==(r=t.precondition).updateTime?{updateTime:lW(e,r.updateTime.toTimestamp())}:void 0!==r.exists?{exists:r.exists}:s0(27497)),n})(this.serializer,e))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h4{}class h5 extends h4{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.ia=!1}sa(){if(this.ia)throw new s5(s4.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,n){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Go(e,lJ(t,r),n,i,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===s4.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new s5(s4.UNKNOWN,e.toString())})}Ho(e,t,r,n,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Ho(e,lJ(t,r),n,s,a,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===s4.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new s5(s4.UNKNOWN,e.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class h6{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,"Online"===e&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(sX(t),this.aa=!1):sY("OnlineStateTracker",t)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h9="RemoteStore";class h3{constructor(e,t,r,n,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(e=>{r.enqueueAndForget(async()=>{ua(this)&&(sY(h9,"Restarting streams for network reachability change."),await async function(e){e.Ea.add(4),await h7(e),e.Ra.set("Unknown"),e.Ea.delete(4),await h8(e)}(this))})}),this.Ra=new h6(r,n)}}async function h8(e){if(ua(e))for(let t of e.da)await t(!0)}async function h7(e){for(let t of e.da)await t(!1)}function ue(e,t){e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),us(e)?ui(e):u_(e).O_()&&ur(e,t))}function ut(e,t){let r=u_(e);e.Ia.delete(t),r.O_()&&un(e,t),0===e.Ia.size&&(r.O_()?r.L_():ua(e)&&e.Ra.set("Unknown"))}function ur(e,t){if(e.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(aI.min())>0){let r=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(r)}u_(e).Y_(t)}function un(e,t){e.Va.Ue(t),u_(e).Z_(t)}function ui(e){e.Va=new lB({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),At:t=>e.Ia.get(t)||null,ht:()=>e.datastore.serializer.databaseId}),u_(e).start(),e.Ra.ua()}function us(e){return ua(e)&&!u_(e).x_()&&e.Ia.size>0}function ua(e){return 0===e.Ea.size}async function uo(e){e.Ra.set("Online")}async function ul(e){e.Ia.forEach((t,r)=>{ur(e,t)})}async function uh(e,t){e.Va=void 0,us(e)?(e.Ra.ha(t),ui(e)):e.Ra.set("Unknown")}async function uu(e,t,r){if(e.Ra.set("Online"),t instanceof lV&&2===t.state&&t.cause)try{await async function(e,t){let r=t.cause;for(let n of t.targetIds)e.Ia.has(n)&&(await e.remoteSyncer.rejectListen(n,r),e.Ia.delete(n),e.Va.removeTarget(n))}(e,t)}catch(r){sY(h9,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await uc(e,r)}else if(t instanceof lM?e.Va.Ze(t):t instanceof lU?e.Va.st(t):e.Va.tt(t),!r.isEqual(aI.min()))try{let t=await hP(e.localStore);r.compareTo(t)>=0&&await function(e,t){let r=e.Va.Tt(t);return r.targetChanges.forEach((r,n)=>{if(r.resumeToken.approximateByteSize()>0){let i=e.Ia.get(n);i&&e.Ia.set(n,i.withResumeToken(r.resumeToken,t))}}),r.targetMismatches.forEach((t,r)=>{let n=e.Ia.get(t);if(!n)return;e.Ia.set(t,n.withResumeToken(aj.EMPTY_BYTE_STRING,n.snapshotVersion)),un(e,t);let i=new l7(n.target,t,r,n.sequenceNumber);ur(e,i)}),e.remoteSyncer.applyRemoteEvent(r)}(e,r)}catch(t){sY(h9,"Failed to raise snapshot:",t),await uc(e,t)}}async function uc(e,t,r){if(!aN(t))throw t;e.Ea.add(1),await h7(e),e.Ra.set("Offline"),r||(r=()=>hP(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{sY(h9,"Retrying IndexedDB access"),await r(),e.Ea.delete(1),await h8(e)})}function ud(e,t){return t().catch(r=>uc(e,r,t))}async function uf(e){let t=uT(e),r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:-1;for(;ua(e)&&e.Ta.length<10;)try{let n=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}(e.localStore,r);if(null===n){0===e.Ta.length&&t.L_();break}r=n.batchId,function(e,t){e.Ta.push(t);let r=uT(e);r.O_()&&r.X_&&r.ea(t.mutations)}(e,n)}catch(t){await uc(e,t)}up(e)&&um(e)}function up(e){return ua(e)&&!uT(e).x_()&&e.Ta.length>0}function um(e){uT(e).start()}async function ug(e){uT(e).ra()}async function uy(e){let t=uT(e);for(let r of e.Ta)t.ea(r.mutations)}async function uv(e,t,r){let n=e.Ta.shift(),i=lS.from(n,t,r);await ud(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await uf(e)}async function uw(e,t){t&&uT(e).X_&&await async function(e,t){var r;if(function(e){switch(e){case s4.OK:return s0(64938);case s4.CANCELLED:case s4.UNKNOWN:case s4.DEADLINE_EXCEEDED:case s4.RESOURCE_EXHAUSTED:case s4.INTERNAL:case s4.UNAVAILABLE:case s4.UNAUTHENTICATED:return!1;case s4.INVALID_ARGUMENT:case s4.NOT_FOUND:case s4.ALREADY_EXISTS:case s4.PERMISSION_DENIED:case s4.FAILED_PRECONDITION:case s4.ABORTED:case s4.OUT_OF_RANGE:case s4.UNIMPLEMENTED:case s4.DATA_LOSS:return!0;default:return s0(15467,{code:e})}}(r=t.code)&&r!==s4.ABORTED){let r=e.Ta.shift();uT(e).B_(),await ud(e,()=>e.remoteSyncer.rejectFailedWrite(r.batchId,t)),await uf(e)}}(e,t),up(e)&&um(e)}async function ub(e,t){e.asyncQueue.verifyOperationInProgress(),sY(h9,"RemoteStore received new credentials");let r=ua(e);e.Ea.add(3),await h7(e),r&&e.Ra.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await h8(e)}async function uE(e,t){t?(e.Ea.delete(2),await h8(e)):t||(e.Ea.add(2),await h7(e),e.Ra.set("Unknown"))}function u_(e){var t,r,n;return e.ma||(e.ma=(t=e.datastore,r=e.asyncQueue,n={Xo:uo.bind(null,e),t_:ul.bind(null,e),r_:uh.bind(null,e),H_:uu.bind(null,e)},t.sa(),new h1(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.da.push(async t=>{t?(e.ma.B_(),us(e)?ui(e):e.Ra.set("Unknown")):(await e.ma.stop(),e.Va=void 0)})),e.ma}function uT(e){var t,r,n;return e.fa||(e.fa=(t=e.datastore,r=e.asyncQueue,n={Xo:()=>Promise.resolve(),t_:ug.bind(null,e),r_:uw.bind(null,e),ta:uy.bind(null,e),na:uv.bind(null,e)},t.sa(),new h2(r,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,n)),e.da.push(async t=>{t?(e.fa.B_(),await uf(e)):(await e.fa.stop(),e.Ta.length>0&&(sY(h9,`Stopping write stream with ${e.Ta.length} pending writes`),e.Ta=[]))})),e.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e,t,r,n,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=i,this.deferred=new s6,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,i){let s=new uI(e,t,Date.now()+r,n,i);return s.start(r),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new s5(s4.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uS(e,t){if(sX("AsyncQueue",`${t}: ${e}`),aN(e))return new s5(s4.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{static emptySet(e){return new uC(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ap.comparator(t.key,r.key):(e,t)=>ap.comparator(e.key,t.key),this.keyedMap=oZ(),this.sortedSet=new ax(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof uC)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,n=r.getNext().key;if(!e.isEqual(n))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let r=new uC;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(){this.ga=new ax(ap.comparator)}track(e){let t=e.doc.key,r=this.ga.get(t);r?0!==e.type&&3===r.type?this.ga=this.ga.insert(t,e):3===e.type&&1!==r.type?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):2===e.type&&2===r.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):2===e.type&&0===r.type?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):1===e.type&&0===r.type?this.ga=this.ga.remove(t):1===e.type&&2===r.type?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):0===e.type&&1===r.type?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):s0(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){let e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class uk{constructor(e,t,r,n,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new uk(e,t,uC.emptySet(t),s,r,n,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&oH(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==r[e].type||!t[e].doc.isEqual(r[e].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class uR{constructor(){this.queries=uD(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(e,t){let r=e.queries;e.queries=uD(),r.forEach((e,r)=>{for(let e of r.Sa)e.onError(t)})}(this,new s5(s4.ABORTED,"Firestore shutting down"))}}function uD(){return new oY(e=>oK(e),oH)}async function uL(e,t){let r=3,n=t.query,i=e.queries.get(n);i?!i.ba()&&t.Da()&&(r=2):(i=new uN,r=t.Da()?0:1);try{switch(r){case 0:i.wa=await e.onListen(n,!0);break;case 1:i.wa=await e.onListen(n,!1);break;case 2:await e.onFirstRemoteStoreListen(n)}}catch(r){let e=uS(r,`Initialization of query '${oG(t.query)}' failed`);return void t.onError(e)}e.queries.set(n,i),i.Sa.push(t),t.va(e.onlineState),i.wa&&t.Fa(i.wa)&&uM(e)}async function uO(e,t){let r=t.query,n=3,i=e.queries.get(r);if(i){let e=i.Sa.indexOf(t);e>=0&&(i.Sa.splice(e,1),0===i.Sa.length?n=t.Da()?0:1:!i.ba()&&t.Da()&&(n=2))}switch(n){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function uP(e,t){let r=!1;for(let n of t){let t=n.query,i=e.queries.get(t);if(i){for(let e of i.Sa)e.Fa(n)&&(r=!0);i.wa=n}}r&&uM(e)}function ux(e,t,r){let n=e.queries.get(t);if(n)for(let e of n.Sa)e.onError(r);e.queries.delete(t)}function uM(e){e.Ca.forEach(e=>{e.next()})}(C=S||(S={})).Ma="default",C.Cache="cache";class uU{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){let t=[];for(let r of e.docChanges)3!==r.type&&t.push(r);e=new uk(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){return!(e.fromCache&&this.Da())||(!this.options.qa||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Ba(e){if(e.docChanges.length>0)return!0;let t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}ka(e){e=uk.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==S.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(e){this.key=e}}class uF{constructor(e){this.key=e}}class uB{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=o5(),this.mutatedKeys=o5(),this.eu=oQ(e),this.tu=new uC(this.eu)}get nu(){return this.Ya}ru(e,t){let r=t?t.iu:new uA,n=t?t.tu:this.tu,i=t?t.mutatedKeys:this.mutatedKeys,s=n,a=!1,o="F"===this.query.limitType&&n.size===this.query.limit?n.last():null,l="L"===this.query.limitType&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((e,t)=>{let h=n.get(e),u=oW(this.query,t)?t:null,c=!!h&&this.mutatedKeys.has(h.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations),f=!1;h&&u?h.data.isEqual(u.data)?c!==d&&(r.track({type:3,doc:u}),f=!0):this.su(h,u)||(r.track({type:2,doc:u}),f=!0,(o&&this.eu(u,o)>0||l&&0>this.eu(u,l))&&(a=!0)):!h&&u?(r.track({type:0,doc:u}),f=!0):h&&!u&&(r.track({type:1,doc:h}),f=!0,(o||l)&&(a=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),r.track({type:1,doc:e})}return{tu:s,iu:r,Cs:a,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,n){let i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;let s=e.iu.ya();s.sort((e,t)=>(function(e,t){let r=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return s0(20277,{Rt:e})}};return r(e)-r(t)})(e.type,t.type)||this.eu(e.doc,t.doc)),this.ou(r),n=n??!1;let a=t&&!n?this._u():[],o=0===this.Xa.size&&this.current&&!n?1:0,l=o!==this.Za;return(this.Za=o,0!==s.length||l)?{snapshot:new uk(this.query,e.tu,i,s,e.mutatedKeys,0===o,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({tu:this.tu,iu:new uA,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(e=>this.Ya=this.Ya.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ya=this.Ya.delete(e)),this.current=e.current)}_u(){if(!this.current)return[];let e=this.Xa;this.Xa=o5(),this.tu.forEach(e=>{this.uu(e.key)&&(this.Xa=this.Xa.add(e.key))});let t=[];return e.forEach(e=>{this.Xa.has(e)||t.push(new uF(e))}),this.Xa.forEach(r=>{e.has(r)||t.push(new uV(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=o5();let t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return uk.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Za,this.hasCachedResults)}}let uz="SyncEngine";class uj{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class uq{constructor(e){this.key=e,this.hu=!1}}class u${constructor(e,t,r,n,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Pu={},this.Tu=new oY(e=>oK(e),oH),this.Iu=new Map,this.Eu=new Set,this.du=new ax(ap.comparator),this.Au=new Map,this.Ru=new hv,this.Vu={},this.mu=new Map,this.fu=ha.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function uH(e,t,r=!0){let n;let i=cr(e),s=i.Tu.get(t);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),n=s.view.lu()):n=await uG(i,t,r,!0),n}async function uK(e,t){let r=cr(e);await uG(r,t,!0,!1)}async function uG(e,t,r,n){var i,s;let a;let o=await (i=e.localStore,s=oj(t),i.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return i.Pi.getTargetData(e,s).next(r=>r?(t=r,ak.resolve(t)):i.Pi.allocateTargetId(e).next(r=>(t=new l7(s,r,"TargetPurposeListen",e.currentSequenceNumber),i.Pi.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=i.Ms.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(i.Ms=i.Ms.insert(e.targetId,e),i.xs.set(s,e.targetId)),e})),l=o.targetId,h=e.sharedClientState.addLocalQueryTarget(l,r);return n&&(a=await uW(e,t,l,"current"===h,o.resumeToken)),e.isPrimaryClient&&r&&ue(e.remoteStore,o),a}async function uW(e,t,r,n,i){e.pu=(t,r,n)=>(async function(e,t,r,n){let i=t.view.ru(r);i.Cs&&(i=await hM(e.localStore,t.query,!1).then(({documents:e})=>t.view.ru(e,i)));let s=n&&n.targetChanges.get(t.targetId),a=n&&null!=n.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return u3(e,t.targetId,o.au),o.snapshot})(e,t,r,n);let s=await hM(e.localStore,t,!0),a=new uB(t,s.Qs),o=a.ru(s.documents),l=lx.createSynthesizedTargetChangeForCurrentChange(r,n&&"Offline"!==e.onlineState,i),h=a.applyChanges(o,e.isPrimaryClient,l);u3(e,r,h.au);let u=new uj(t,r,a);return e.Tu.set(t,u),e.Iu.has(r)?e.Iu.get(r).push(t):e.Iu.set(r,[t]),h.snapshot}async function uQ(e,t,r){let n=e.Tu.get(t),i=e.Iu.get(n.targetId);if(i.length>1)return e.Iu.set(n.targetId,i.filter(e=>!oH(e,t))),void e.Tu.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await hx(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),r&&ut(e.remoteStore,n.targetId),u6(e,n.targetId)}).catch(aA)):(u6(e,n.targetId),await hx(e.localStore,n.targetId,!0))}async function uY(e,t){let r=e.Tu.get(t),n=e.Iu.get(r.targetId);e.isPrimaryClient&&1===n.length&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ut(e.remoteStore,r.targetId))}async function uX(e,t,r){var n;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=u1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=u2.bind(null,e),e);try{let e;let s=await function(e,t){let r,n;let i=aT.now(),s=t.reduce((e,t)=>e.add(t.key),o5());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=oX,l=o5();return e.Ns.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(n=>{r=n;let s=[];for(let e of t){let t=function(e,t){let r=null;for(let n of e.fieldTransforms){let e=t.data.field(n.field),i=le(n.transform,e||null);null!=i&&(null===r&&(r=op.empty()),r.set(n.field,i))}return r||null}(e,r.get(e.key).overlayedDocument);null!=t&&s.push(new lv(e.key,t,function e(t){let r=[];return aO(t.fields,(t,n)=>{let i=new af([t]);if(ou(n)){let t=e(n.mapValue).fields;if(0===t.length)r.push(i);else for(let e of t)r.push(i.child(e))}else r.push(i)}),new aB(r)}(t.value.mapValue),lc.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{n=t;let i=t.applyToLocalDocumentSet(r,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:n.batchId,changes:o0(r)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),n=s.batchId,(e=i.Vu[i.currentUser.toKey()])||(e=new ax(as)),e=e.insert(n,r),i.Vu[i.currentUser.toKey()]=e,await u7(i,s.changes),await uf(i.remoteStore)}catch(t){let e=uS(t,"Failed to persist write");r.reject(e)}}async function uJ(e,t){try{let r=await function(e,t){let r=t.snapshotVersion,n=e.Ms;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e.Ns.newChangeBuffer({trackRemovals:!0});n=e.Ms;let h=[];t.targetChanges.forEach((s,a)=>{var o;let l=n.get(a);if(!l)return;h.push(e.Pi.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.Pi.addMatchingKeys(i,s.addedDocuments,a)));let u=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?u=u.withResumeToken(aj.EMPTY_BYTE_STRING,aI.min()).withLastLimboFreeSnapshotVersion(aI.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),n=n.insert(a,u),o=u,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&h.push(e.Pi.updateTargetData(i,u))});let u=oX,c=o5();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&h.push(e.persistence.referenceDelegate.updateLimboDocument(i,r))}),h.push((s=t.documentUpdates,a=o5(),o=o5(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=oX;return s.forEach((r,n)=>{let i=e.get(r);n.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(r)),n.isNoDocument()&&n.version.isEqual(aI.min())?(l.removeEntry(r,n.readTime),t=t.insert(r,n)):!i.isValidDocument()||n.version.compareTo(i.version)>0||0===n.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(n),t=t.insert(r,n)):sY(hD,"Ignoring outdated watch update for ",r,". Current version:",i.version," Watch version:",n.version)}),{ks:t,qs:o}})).next(e=>{u=e.ks,c=e.qs})),!r.isEqual(aI.min())){let t=e.Pi.getLastRemoteSnapshotVersion(i).next(t=>e.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));h.push(t)}return ak.waitFor(h).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(t=>(e.Ms=n,t))}(e.localStore,t);t.targetChanges.forEach((t,r)=>{let n=e.Au.get(r);n&&(s2(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?n.hu=!0:t.modifiedDocuments.size>0?s2(n.hu,14607):t.removedDocuments.size>0&&(s2(n.hu,42227),n.hu=!1))}),await u7(e,r,t)}catch(e){await aA(e)}}function uZ(e,t,r){var n;if(e.isPrimaryClient&&0===r||!e.isPrimaryClient&&1===r){let r;let i=[];e.Tu.forEach((e,r)=>{let n=r.view.va(t);n.snapshot&&i.push(n.snapshot)}),(n=e.eventManager).onlineState=t,r=!1,n.queries.forEach((e,n)=>{for(let e of n.Sa)e.va(t)&&(r=!0)}),r&&uM(n),i.length&&e.Pu.H_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function u0(e,t,r){e.sharedClientState.updateQueryState(t,"rejected",r);let n=e.Au.get(t),i=n&&n.key;if(i){let r=new ax(ap.comparator);r=r.insert(i,om.newNoDocument(i,aI.min()));let n=o5().add(i),s=new lP(aI.min(),new Map,new ax(as),r,n);await uJ(e,s),e.du=e.du.remove(i),e.Au.delete(t),u8(e)}else await hx(e.localStore,t,!1).then(()=>u6(e,t,r)).catch(aA)}async function u1(e,t){var r;let n=t.batch.batchId;try{let i=await (r=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let n=t.batch.keys(),i=r.Ns.newChangeBuffer({trackRemovals:!0});return(function(e,t,r,n){let i=r.batch,s=i.keys(),a=ak.resolve();return s.forEach(e=>{a=a.next(()=>n.getEntry(t,e)).next(t=>{let s=r.docVersions.get(e);s2(null!==s,48541),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,r),t.isValidDocument()&&(t.setReadTime(r.commitVersion),n.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(r,e,t,i).next(()=>i.apply(e)).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t.batch.batchId)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=o5();for(let r=0;r<e.mutationResults.length;++r)e.mutationResults[r].transformResults.length>0&&(t=t.add(e.batch.mutations[r].key));return t}(t))).next(()=>r.localDocuments.getDocuments(e,n))});u5(e,n,null),u4(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await u7(e,i)}catch(e){await aA(e)}}async function u2(e,t,r){var n;try{let i=await (n=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(s2(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))});u5(e,t,r),u4(e,t),e.sharedClientState.updateMutationState(t,"rejected",r),await u7(e,i)}catch(e){await aA(e)}}function u4(e,t){(e.mu.get(t)||[]).forEach(e=>{e.resolve()}),e.mu.delete(t)}function u5(e,t,r){let n=e.Vu[e.currentUser.toKey()];if(n){let i=n.get(t);i&&(r?i.reject(r):i.resolve(),n=n.remove(t)),e.Vu[e.currentUser.toKey()]=n}}function u6(e,t,r=null){for(let n of(e.sharedClientState.removeLocalQueryTarget(t),e.Iu.get(t)))e.Tu.delete(n),r&&e.Pu.yu(n,r);e.Iu.delete(t),e.isPrimaryClient&&e.Ru.jr(t).forEach(t=>{e.Ru.containsKey(t)||u9(e,t)})}function u9(e,t){e.Eu.delete(t.path.canonicalString());let r=e.du.get(t);null!==r&&(ut(e.remoteStore,r),e.du=e.du.remove(t),e.Au.delete(r),u8(e))}function u3(e,t,r){for(let n of r)n instanceof uV?(e.Ru.addReference(n.key,t),function(e,t){let r=t.key,n=r.path.canonicalString();e.du.get(r)||e.Eu.has(n)||(sY(uz,"New document in limbo: "+r),e.Eu.add(n),u8(e))}(e,n)):n instanceof uF?(sY(uz,"Document no longer in limbo: "+n.key),e.Ru.removeReference(n.key,t),e.Ru.containsKey(n.key)||u9(e,n.key)):s0(19791,{wu:n})}function u8(e){for(;e.Eu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){let t=e.Eu.values().next().value;e.Eu.delete(t);let r=new ap(ac.fromString(t)),n=e.fu.next();e.Au.set(n,new uq(r)),e.du=e.du.insert(r,n),ue(e.remoteStore,new l7(oj(new oV(r.path)),n,"TargetPurposeLimboResolution",aR.ce))}}async function u7(e,t,r){let n=[],i=[],s=[];e.Tu.isEmpty()||(e.Tu.forEach((a,o)=>{s.push(e.pu(o,t,r).then(t=>{if((t||r)&&e.isPrimaryClient){let n=t?!t.fromCache:r?.targetChanges.get(o.targetId)?.current;e.sharedClientState.updateQueryState(o.targetId,n?"current":"not-current")}if(t){n.push(t);let e=hk.As(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.Pu.H_(n),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",r=>ak.forEach(t,t=>ak.forEach(t.Es,n=>e.persistence.referenceDelegate.addReference(r,t.targetId,n)).next(()=>ak.forEach(t.ds,n=>e.persistence.referenceDelegate.removeReference(r,t.targetId,n)))))}catch(e){if(!aN(e))throw e;sY(hD,"Failed to update sequence numbers: "+e)}for(let r of t){let t=r.targetId;if(!r.fromCache){let r=e.Ms.get(t),n=r.snapshotVersion,i=r.withLastLimboFreeSnapshotVersion(n);e.Ms=e.Ms.insert(t,i)}}}(e.localStore,i))}async function ce(e,t){if(!e.currentUser.isEqual(t)){sY(uz,"User change. New user:",t.toKey());let r=await hO(e.localStore,t);e.currentUser=t,e.mu.forEach(e=>{e.forEach(e=>{e.reject(new s5(s4.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.mu.clear(),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await u7(e,r.Ls)}}function ct(e,t){let r=e.Au.get(t);if(r&&r.hu)return o5().add(r.key);{let r=o5(),n=e.Iu.get(t);if(!n)return r;for(let t of n){let n=e.Tu.get(t);r=r.unionWith(n.view.nu)}return r}}function cr(e){return e.remoteStore.remoteSyncer.applyRemoteEvent=uJ.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ct.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=u0.bind(null,e),e.Pu.H_=uP.bind(null,e.eventManager),e.Pu.yu=ux.bind(null,e.eventManager),e}class cn{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=hX(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){var t;return t=this.persistence,new hL(t,new hR,e.initialUser,this.serializer)}Cu(e){return new hI(hC.mi,this.serializer)}Du(e){return new hV}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}cn.provider={build:()=>new cn};class ci extends cn{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){return s2(this.persistence.referenceDelegate instanceof hA,46915),new hu(this.persistence.referenceDelegate.garbageCollector,e.asyncQueue,t)}Cu(e){let t=void 0!==this.cacheSizeBytes?hs.withCacheSize(this.cacheSizeBytes):hs.DEFAULT;return new hI(e=>hA.mi(e,t),this.serializer)}}class cs{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>uZ(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ce.bind(null,this.syncEngine),await uE(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new uR}createDatastore(e){let t=hX(e.databaseInfo.databaseId),r=new hQ(e.databaseInfo);return new h5(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){var t;return t=this.localStore,new h3(t,this.datastore,e.asyncQueue,e=>uZ(this.syncEngine,e,0),hz.v()?new hz:new hF)}createSyncEngine(e,t){return function(e,t,r,n,i,s,a){let o=new u$(e,t,r,n,i,s);return a&&(o.gu=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await async function(e){sY(h9,"RemoteStore shutting down."),e.Ea.add(5),await h7(e),e.Aa.shutdown(),e.Ra.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}cs.provider={build:()=>new cs};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):sX("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co="FirestoreClient";class cl{constructor(e,t,r,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=sK.UNAUTHENTICATED,this.clientId=ai.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async e=>{sY(co,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(r,e=>(sY(co,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();let e=new s6;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(r){let t=uS(r,"Failed to shutdown persistence");e.reject(t)}}),e.promise}}async function ch(e,t){e.asyncQueue.verifyOperationInProgress(),sY(co,"Initializing OfflineComponentProvider");let r=e.configuration;await t.initialize(r);let n=r.initialUser;e.setCredentialChangeListener(async e=>{n.isEqual(e)||(await hO(t.localStore,e),n=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function cu(e,t){e.asyncQueue.verifyOperationInProgress();let r=await cc(e);sY(co,"Initializing OnlineComponentProvider"),await t.initialize(r,e.configuration),e.setCredentialChangeListener(e=>ub(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,r)=>ub(t.remoteStore,r)),e._onlineComponents=t}async function cc(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){sY(co,"Using user provided OfflineComponentProvider");try{await ch(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===s4.FAILED_PRECONDITION||t.code===s4.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;sJ("Error using user provided cache. Falling back to memory cache: "+t),await ch(e,new cn)}}else sY(co,"Using default OfflineComponentProvider"),await ch(e,new ci(void 0))}return e._offlineComponents}async function cd(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(sY(co,"Using user provided OnlineComponentProvider"),await cu(e,e._uninitializedComponentsProvider._online)):(sY(co,"Using default OnlineComponentProvider"),await cu(e,new cs))),e._onlineComponents}async function cf(e){let t=await cd(e),r=t.eventManager;return r.onListen=uH.bind(null,t.syncEngine),r.onUnlisten=uQ.bind(null,t.syncEngine),r.onFirstRemoteStoreListen=uK.bind(null,t.syncEngine),r.onLastRemoteStoreUnlisten=uY.bind(null,t.syncEngine),r}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cp(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cm=new Map,cg="firestore.googleapis.com";class cy{constructor(e){if(void 0===e.host){if(void 0!==e.ssl)throw new s5(s4.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cg,this.ssl=!0}else this.host=e.host,this.ssl=e.ssl??!0;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new s5(s4.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,r,n){if(!0===t&&!0===n)throw new s5(s4.INVALID_ARGUMENT,`${e} and ${r} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cp(e.experimentalLongPollingOptions??{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new s5(s4.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new s5(s4.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new s5(s4.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,r;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,t.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cv{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new cy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new s5(s4.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new s5(s4.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new cy(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new s3;switch(e.type){case"firstParty":return new at(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new s5(s4.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=cm.get(e);t&&(sY("ComponentProvider","Removing Datastore"),cm.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new cw(this.firestore,e,this._query)}}class cb{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cE(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new cb(this.firestore,e,this._key)}toJSON(){return{type:cb._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(a_(t,cb._jsonSchema))return new cb(e,r||null,new ap(ac.fromString(t.referencePath)))}}cb._jsonSchemaVersion="firestore/documentReference/1.0",cb._jsonSchema={type:aE("string",cb._jsonSchemaVersion),referencePath:aE("string")};class cE extends cw{constructor(e,t,r){super(e,t,new oV(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new cb(this.firestore,null,new ap(e))}withConverter(e){return new cE(this.firestore,e,this._path)}}function c_(e,t,...r){if(e=tR(e),am("collection","path",t),e instanceof cv){let n=ac.fromString(t,...r);return ay(n),new cE(e,null,n)}{if(!(e instanceof cb||e instanceof cE))throw new s5(s4.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(ac.fromString(t,...r));return ay(n),new cE(e.firestore,null,n)}}function cT(e,t,...r){if(e=tR(e),1==arguments.length&&(t=ai.newId()),am("doc","path",t),e instanceof cv){let n=ac.fromString(t,...r);return ag(n),new cb(e,null,new ap(n))}{if(!(e instanceof cb||e instanceof cE))throw new s5(s4.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(ac.fromString(t,...r));return ag(n),new cb(e.firestore,e instanceof cE?e.converter:null,new ap(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cI="AsyncQueue";class cS{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new hJ(this,"async_queue_retry"),this._c=()=>{let e=hY();e&&sY(cI,"Visibility state changed to "+e.visibilityState),this.M_.w_()},this.ac=e;let t=hY();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;let t=hY();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});let t=new s6;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(0!==this.Xu.length){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!aN(e))throw e;sY(cI,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){let t=this.ac.then(()=>(this.rc=!0,e().catch(e=>{throw this.nc=e,this.rc=!1,sX("INTERNAL UNHANDLED ERROR: ",cC(e)),e}).then(e=>(this.rc=!1,e))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);let n=uI.createAndSchedule(this,e,t,r,e=>this.hc(e));return this.tc.push(n),n}uc(){this.nc&&s0(47125,{Pc:cC(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(let t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{for(let t of(this.tc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.tc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){let t=this.tc.indexOf(e);this.tc.splice(t,1)}}function cC(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}class cA extends cv{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new cS,this._persistenceKey=n?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){let e=this._firestoreClient.terminate();this._queue=new cS(e),this._firestoreClient=void 0,await e}}}function ck(e){if(e._terminated)throw new s5(s4.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t;let r=e._freezeSettings(),n=(t=e._databaseId,new a0(t,e._app?.options.appId||"",e._persistenceKey,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,cp(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator));e._componentsProvider||r.localCache?._offlineComponentProvider&&r.localCache?._onlineComponentProvider&&(e._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),e._firestoreClient=new cl(e._authCredentials,e._appCheckCredentials,e._queue,n,e._componentsProvider&&function(e){let t=e?._online.build();return{_offline:e?._offline.build(t),_online:t}}(e._componentsProvider))}(e),e._firestoreClient}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cN(aj.fromBase64String(e))}catch(e){throw new s5(s4.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new cN(aj.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:cN._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(a_(e,cN._jsonSchema))return cN.fromBase64String(e.bytes)}}cN._jsonSchemaVersion="firestore/bytes/1.0",cN._jsonSchema={type:aE("string",cN._jsonSchemaVersion),bytes:aE("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new s5(s4.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new af(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new s5(s4.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new s5(s4.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return as(this._lat,e._lat)||as(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:cL._jsonSchemaVersion}}static fromJSON(e){if(a_(e,cL._jsonSchema))return new cL(e.latitude,e.longitude)}}cL._jsonSchemaVersion="firestore/geoPoint/1.0",cL._jsonSchema={type:aE("string",cL._jsonSchemaVersion),latitude:aE("number"),longitude:aE("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(e[r]!==t[r])return!1;return!0}(this._values,e._values)}toJSON(){return{type:cO._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(a_(e,cO._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new cO(e.vectorValues);throw new s5(s4.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}cO._jsonSchemaVersion="firestore/vectorValue/1.0",cO._jsonSchema={type:aE("string",cO._jsonSchemaVersion),vectorValues:aE("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cP=/^__.*__$/;class cx{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return null!==this.fieldMask?new lv(e,this.data,this.fieldMask,t,this.fieldTransforms):new ly(e,this.data,t,this.fieldTransforms)}}class cM{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new lv(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function cU(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw s0(40011,{Ac:e})}}class cV{constructor(e,t,r,n,i,s){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,void 0===i&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new cV({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){let t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){let t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return cJ(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(0===e.length)throw this.Sc("Document fields must not be empty");if(cU(this.Ac)&&cP.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class cF{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||hX(e)}Cc(e,t,r,n=!1){return new cV({Ac:e,methodName:t,Dc:r,path:af.emptyPath(),fc:!1,bc:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cB(e){let t=e._freezeSettings(),r=hX(e._databaseId);return new cF(e._databaseId,!!t.ignoreUndefinedProperties,r)}function cz(e,t,r,n,i,s={}){let a,o;let l=e.Cc(s.merge||s.mergeFields?2:0,t,r,i);cW("Data must be an object, but it was:",l,n);let h=cK(n,l);if(s.merge)a=new aB(l.fieldMask),o=l.fieldTransforms;else if(s.mergeFields){let e=[];for(let n of s.mergeFields){let i=cQ(t,n,r);if(!l.contains(i))throw new s5(s4.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);cZ(e,i)||e.push(i)}a=new aB(e),o=l.fieldTransforms.filter(e=>a.covers(e.field))}else a=null,o=l.fieldTransforms;return new cx(new op(h),a,o)}class cj extends cD{_toFieldTransform(e){if(2!==e.Ac)throw 1===e.Ac?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cj}}class cq extends cD{_toFieldTransform(e){return new lh(e.path,new lt)}isEqual(e){return e instanceof cq}}class c$ extends cD{constructor(e,t){super(e),this.Fc=t}_toFieldTransform(e){let t=new la(e.serializer,o8(e.serializer,this.Fc));return new lh(e.path,t)}isEqual(e){return e instanceof c$&&this.Fc===e.Fc}}function cH(e,t){if(cG(e=tR(e)))return cW("Unsupported field value:",t,e),cK(e,t);if(e instanceof cD)return function(e,t){if(!cU(t.Ac))throw t.Sc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Sc(`${e._methodName}() is not currently supported inside arrays`);let r=e._toFieldTransform(t);r&&t.fieldTransforms.push(r)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.fc&&4!==t.Ac)throw t.Sc("Nested arrays are not supported");return function(e,t){let r=[],n=0;for(let i of e){let e=cH(i,t.wc(n));null==e&&(e={nullValue:"NULL_VALUE"}),r.push(e),n++}return{arrayValue:{values:r}}}(e,t)}return function(e,t){if(null===(e=tR(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return o8(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let r=aT.fromDate(e);return{timestampValue:lW(t.serializer,r)}}if(e instanceof aT){let r=new aT(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:lW(t.serializer,r)}}if(e instanceof cL)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof cN)return{bytesValue:lQ(t.serializer,e._byteString)};if(e instanceof cb){let r=t.databaseId,n=e.firestore._databaseId;if(!n.isEqual(r))throw t.Sc(`Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:lX(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof cO)return{mapValue:{fields:{[a4]:{stringValue:a9},[a3]:{arrayValue:{values:e.toArray().map(e=>{if("number"!=typeof e)throw t.Sc("VectorValues must only contain numeric values.");return o9(t.serializer,e)})}}}}};throw t.Sc(`Unsupported field value: ${aw(e)}`)}(e,t)}function cK(e,t){let r={};return aP(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):aO(e,(e,n)=>{let i=cH(n,t.mc(e));null!=i&&(r[e]=i)}),{mapValue:{fields:r}}}function cG(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof aT||e instanceof cL||e instanceof cN||e instanceof cb||e instanceof cD||e instanceof cO)}function cW(e,t,r){if(!cG(r)||!av(r)){let n=aw(r);throw"an object"===n?t.Sc(e+" a custom object"):t.Sc(e+" "+n)}}function cQ(e,t,r){if((t=tR(t))instanceof cR)return t._internalPath;if("string"==typeof t)return cX(e,t);throw cJ("Field path arguments must be of type string or ",e,!1,void 0,r)}let cY=RegExp("[~\\*/\\[\\]]");function cX(e,t,r){if(t.search(cY)>=0)throw cJ(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new cR(...t.split("."))._internalPath}catch(n){throw cJ(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function cJ(e,t,r,n,i){let s=n&&!n.isEmpty(),a=void 0!==i,o=`Function ${t}() called with invalid data`;r&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${n}`),a&&(l+=` in document ${i}`),l+=")"),new s5(s4.INVALID_ARGUMENT,o+e+l)}function cZ(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,t,r,n,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new cb(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new c1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(c2("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class c1 extends c0{data(){return super.data()}}function c2(e,t){return"string"==typeof t?cX(e,t):t instanceof cR?t._internalPath:t._delegate._internalPath}class c4{}class c5 extends c4{}function c6(e,t,...r){let n=[];for(let i of(t instanceof c4&&n.push(t),function(e){let t=e.filter(e=>e instanceof c3).length,r=e.filter(e=>e instanceof c9).length;if(t>1||t>0&&r>0)throw new s5(s4.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n=n.concat(r)),n))e=i._apply(e);return e}class c9 extends c5{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new c9(e,t,r)}_apply(e){let t=this._parse(e);return dt(e._query,t),new cw(e.firestore,e.converter,oq(e._query,t))}_parse(e){let t=cB(e.firestore);return function(e,t,r,n,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new s5(s4.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){de(a,s);let t=[];for(let r of a)t.push(c7(n,e,r));o={arrayValue:{values:t}}}else o=c7(n,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||de(a,s),o=function(e,t,r,n=!1){return cH(r,e.Cc(n?4:3,t))}(r,t,a,"in"===s||"not-in"===s);return oE.create(i,s,o)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class c3 extends c4{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new c3(e,t)}_parse(e){let t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:o_.create(t,this._getOperator())}_apply(e){let t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let r=e;for(let e of t.getFlattenedFilters())dt(r,e),r=oq(r,e)}(e._query,t),new cw(e.firestore,e.converter,oq(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class c8 extends c5{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new c8(e,t)}_apply(e){let t=function(e,t,r){if(null!==e.startAt)throw new s5(s4.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new s5(s4.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ow(t,r)}(e._query,this._field,this._direction);return new cw(e.firestore,e.converter,function(e,t){let r=e.explicitOrderBy.concat([t]);return new oV(e.path,e.collectionGroup,r,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function c7(e,t,r){if("string"==typeof(r=tR(r))){if(""===r)throw new s5(s4.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!oB(t)&&-1!==r.indexOf("/"))throw new s5(s4.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);let n=t.path.child(ac.fromString(r));if(!ap.isDocumentKey(n))throw new s5(s4.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return os(e,new ap(n))}if(r instanceof cb)return os(e,r._key);throw new s5(s4.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${aw(r)}.`)}function de(e,t){if(!Array.isArray(e)||0===e.length)throw new s5(s4.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function dt(e,t){let r=function(e,t){for(let r of e)for(let e of r.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==r)throw r===t.op?new s5(s4.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new s5(s4.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${r.toString()}' filters.`)}class dr{convertValue(e,t="none"){switch(a8(e)){case 0:return null;case 1:return e.booleanValue;case 2:return aH(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(aK(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw s0(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){let r={};return aO(e,(e,n)=>{r[e]=this.convertValue(n,t)}),r}convertVectorValue(e){return new cO(e.fields?.[a3].arrayValue?.values?.map(e=>aH(e.doubleValue)))}convertGeoPoint(e){return new cL(aH(e.latitude),aH(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let r=aJ(e);return null==r?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(aZ(e));default:return null}}convertTimestamp(e){let t=a$(e);return new aT(t.seconds,t.nanos)}convertDocumentKey(e,t){let r=ac.fromString(e);s2(l8(r),9688,{name:e});let n=new a2(r.get(1),r.get(3)),i=new ap(r.popFirst(5));return n.isEqual(t)||sX(`Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(e,t,r){return e?r&&(r.merge||r.mergeFields)?e.toFirestore(t,r):e.toFirestore(t):t}class di{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ds extends c0{constructor(e,t,r,n,i,s){super(e,t,r,n,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){let t=new da(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){let r=this._document.data.field(c2("DocumentSnapshot.get",e));if(null!==r)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new s5(s4.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e=this._document,t={};return t.type=ds._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()&&(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED")),t}}ds._jsonSchemaVersion="firestore/documentSnapshot/1.0",ds._jsonSchema={type:aE("string",ds._jsonSchemaVersion),bundleSource:aE("string","DocumentSnapshot"),bundleName:aE("string"),bundle:aE("string")};class da extends ds{data(e={}){return super.data(e)}}class dl{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new di(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new da(this._firestore,this._userDataWriter,r.key,r,new di(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){let t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new s5(s4.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(r=>{let n=new da(e._firestore,e._userDataWriter,r.doc.key,r.doc,new di(e._snapshot.mutatedKeys.has(r.doc.key),e._snapshot.fromCache),e.query.converter);return r.doc,{type:"added",doc:n,oldIndex:-1,newIndex:t++}})}{let r=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let n=new da(e._firestore,e._userDataWriter,t.doc.key,t.doc,new di(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=r.indexOf(t.doc.key),r=r.delete(t.doc.key)),1!==t.type&&(s=(r=r.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return s0(61501,{type:e})}}(t.type),doc:n,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new s5(s4.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");let e={};e.type=dl._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ai.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;let t=[],r=[],n=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),r.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),n.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(e){e=ab(e,cb);let t=ab(e.firestore,cA);return(function(e,t,r={}){let n=new s6;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new ca({next:o=>{s.Nu(),t.enqueueAndForget(()=>uO(e,a));let l=o.docs.has(r);!l&&o.fromCache?i.reject(new s5(s4.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&o.fromCache&&n&&"server"===n.source?i.reject(new s5(s4.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:e=>i.reject(e)}),a=new uU(new oV(r.path),s,{includeMetadataChanges:!0,qa:!0});return uL(e,a)})(await cf(e),e.asyncQueue,t,r,n)),n.promise})(ck(t),e._key).then(r=>(function(e,t,r){let n=r.docs.get(t._key),i=new du(e);return new ds(e,i,t._key,n,new di(r.hasPendingWrites,r.fromCache),t.converter)})(t,e,r))}dl._jsonSchemaVersion="firestore/querySnapshot/1.0",dl._jsonSchema={type:aE("string",dl._jsonSchemaVersion),bundleSource:aE("string","QuerySnapshot"),bundleName:aE("string"),bundle:aE("string")};class du extends dr{constructor(e){super(),this.firestore=e}convertBytes(e){return new cN(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new cb(this.firestore,null,t)}}function dc(e){e=ab(e,cw);let t=ab(e.firestore,cA),r=ck(t),n=new du(t);return(/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new s5(s4.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query),(function(e,t,r={}){let n=new s6;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,r,n,i){let s=new ca({next:r=>{s.Nu(),t.enqueueAndForget(()=>uO(e,a)),r.fromCache&&"server"===n.source?i.reject(new s5(s4.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(r)},error:e=>i.reject(e)}),a=new uU(r,s,{includeMetadataChanges:!0,qa:!0});return uL(e,a)})(await cf(e),e.asyncQueue,t,r,n)),n.promise})(r,e._query).then(r=>new dl(t,n,e,r)))}function dd(e,t,r){e=ab(e,cb);let n=ab(e.firestore,cA),i=dn(e.converter,t,r);return dm(n,[cz(cB(n),"setDoc",e._key,i,null!==e.converter,r).toMutation(e._key,lc.none())])}function df(e,t,r,...n){e=ab(e,cb);let i=ab(e.firestore,cA),s=cB(i);return dm(i,[("string"==typeof(t=tR(t))||t instanceof cR?function(e,t,r,n,i,s){let a=e.Cc(1,t,r),o=[cQ(t,n,r)],l=[i];if(s.length%2!=0)throw new s5(s4.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(cQ(t,s[e])),l.push(s[e+1]);let h=[],u=op.empty();for(let e=o.length-1;e>=0;--e)if(!cZ(h,o[e])){let t=o[e],r=l[e];r=tR(r);let n=a.yc(t);if(r instanceof cj)h.push(t);else{let e=cH(r,n);null!=e&&(h.push(t),u.set(t,e))}}return new cM(u,new aB(h),a.fieldTransforms)}(s,"updateDoc",e._key,t,r,n):function(e,t,r,n){let i=e.Cc(1,t,r);cW("Data must be an object, but it was:",i,n);let s=[],a=op.empty();return aO(n,(e,n)=>{let o=cX(t,e,r);n=tR(n);let l=i.yc(o);if(n instanceof cj)s.push(o);else{let e=cH(n,l);null!=e&&(s.push(o),a.set(o,e))}}),new cM(a,new aB(s),i.fieldTransforms)}(s,"updateDoc",e._key,t)).toMutation(e._key,lc.exists(!0))])}function dp(e){return dm(ab(e.firestore,cA),[new l_(e._key,lc.none())])}function dm(e,t){return function(e,t){let r=new s6;return e.asyncQueue.enqueueAndForget(async()=>uX(await cd(e).then(e=>e.syncEngine),t,r)),r.promise}(ck(e),t)}function dg(){return new cq("serverTimestamp")}new WeakMap,function(e=!0){sG=rs,re(new tD("firestore",(t,{instanceIdentifier:r,options:n})=>{let i=t.getProvider("app").getImmediate(),s=new cA(new s7(t.getProvider("auth-internal")),new an(i,t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new s5(s4.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new a2(e.options.projectId,t)}(i,r),i);return n={useFetchStreams:e,...n},s._setSettings(n),s},"PUBLIC").setMultipleInstances(!0)),rl(s$,sH,void 0),rl(s$,sH,"esm2020")}();let dy=ra({apiKey:"AIzaSyAjy-l_Dvni2_lTQfZveje9_CSTKB93yD4",authDomain:"barcode-fridge-inventory.firebaseapp.com",projectId:"barcode-fridge-inventory",storageBucket:"barcode-fridge-inventory.firebasestorage.app",messagingSenderId:"131520306288",appId:"1:131520306288:web:ef5e27452ef3793de8e8b5",measurementId:"G-7FFVDF1ECB"}),dv=function(e=ro()){let t=rt(e,"auth");if(t.isInitialized())return t.getImmediate();let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){let r=rt(e,"auth");if(r.isInitialized()){let e=r.getImmediate();if(tT(r.getOptions(),t??{}))return e;rT(e,"already-initialized")}return r.initialize({options:t})}(e,{popupRedirectResolver:i9,persistence:[iT,is,ia]}),n=td("authTokenSyncURL");if(n&&"boolean"==typeof isSecureContext&&isSecureContext){let e=new URL(n,location.origin);if(location.origin===e.origin){let t=so(e.toString());tR(r).beforeAuthStateChanged(t,()=>t(r.currentUser)),tR(r).onIdTokenChanged(e=>t(e),void 0,void 0)}}let i=th("auth");return i&&function(e,t,r){let n=tR(e);rk(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");let i=nL(t),{host:s,port:a}=function(e){let t=nL(e),r=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!r)return{host:"",port:null};let n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){let e=i[1];return{host:e,port:nO(n.substr(e.length+1))}}{let[e,t]=n.split(":");return{host:e,port:nO(t)}}}(t),o=null===a?"":`:${a}`,l={url:`${i}//${s}${o}/`},h=Object.freeze({host:s,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:!1})});if(!n._canInitEmulator){rk(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),rk(tT(l,n.config.emulator)&&tT(h,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=l,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,tp(s)?(tm(`${i}//${s}${o}`),tv("Auth",!0)):function(){function e(){let e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}()}(r,`http://${i}`),r}(dy),dw=function(e,t){let r=rt("object"==typeof e?e:ro(),"firestore").getImmediate({identifier:"string"==typeof e?e:a1});if(!r._initialized){let e=tu("firestore");e&&function(e,t,r,n={}){e=ab(e,cv);let i=tp(t),s=e._getSettings(),a={...s,emulatorOptions:e._getEmulatorOptions()},o=`${t}:${r}`;i&&(tm(`https://${o}`),tv("Firestore",!0)),s.host!==cg&&s.host!==o&&sJ("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let l={...s,host:o,ssl:i,emulatorOptions:n};if(!tT(l,a)&&(e._setSettings(l),n.mockUserToken)){let t,r;if("string"==typeof n.mockUserToken)t=n.mockUserToken,r=sK.MOCK_USER;else{t=/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e,t){if(e.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r=t||"demo-project",n=e.iat||0,i=e.sub||e.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s={iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...e};return[tn(JSON.stringify({alg:"none",type:"JWT"})),tn(JSON.stringify(s)),""].join(".")}(n.mockUserToken,e._app?.options.projectId);let i=n.mockUserToken.sub||n.mockUserToken.user_id;if(!i)throw new s5(s4.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");r=new sK(i)}e._authCredentials=new s8(new s9(t,r))}}(r,...e)}return r}(dy),db=new Promise(e=>{r=e});a=async e=>{if(e)console.log("User authenticated:",e.uid);else try{await n6(dv),console.log("Signed in anonymously")}catch(e){console.error("Anonymous sign-in failed:",e)}r(e)},tR(dv).onAuthStateChanged(a,void 0,void 0);let dE=()=>db;async function d_(){return await dE(),{app:dy,auth:dv,db:dw}}let dT=async e=>{let t=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(r)).map(e=>e.toString(16).padStart(2,"0")).join("")},dI="barcode-scanner/currentFridge",dS=()=>localStorage.getItem(dI),dC=e=>{e?localStorage.setItem(dI,e):localStorage.removeItem(dI)},dA=async e=>{let t=cT(dw,"fridges",e.toLowerCase());return(await dh(t)).exists()},dk=async(e,t,r=null)=>{let n=e.toLowerCase().trim();if(await dA(n))throw Error("Fridge code already exists");let i={name:t||n,createdAt:dg(),hasPassword:!!r,passwordHash:r?await dT(r):null};return await dd(cT(dw,"fridges",n),i),dC(n),{code:n,...i}},dN=async(e,t=null)=>{let r=e.toLowerCase().trim(),n=cT(dw,"fridges",r),i=await dh(n);if(!i.exists())throw Error("Fridge not found");let s=i.data();if(s.hasPassword){if(!t)throw Error("Password required");if(await dT(t)!==s.passwordHash)throw Error("Incorrect password")}return dC(r),{code:r,...s}},dR=async()=>{let e=dS();if(!e)throw Error("No fridge selected");let t=c6(c_(dw,"fridges",e,"items"),function(e,t="asc"){let r=c2("orderBy",e);return c8._create(r,t)}("addedAt","desc")),r=await dc(t),n=[];return r.forEach(e=>{n.push({id:e.id,...e.data()})}),n},dD=async(e,t={})=>{let r=dS();if(!r)throw Error("No fridge selected");let n=c_(dw,"fridges",r,"items"),i=c6(n,function(e,t,r){let n=c2("where",e);return c9._create(n,"==",r)}("barcode",0,e)),s=await dc(i);if(!s.empty){let e=s.docs[0];await df(e.ref,{quantity:new c$("increment",1),updatedAt:dg()});let t=e.data();return{id:e.id,...t,quantity:t.quantity+1}}let a={barcode:e,productName:t.name||"Unknown Product",productImageUrl:t.imageUrl||null,quantity:1,addedAt:dg(),updatedAt:dg(),expiryDate:t.expiryDate||null,notes:t.notes||""};return{id:(await function(e,t){let r=ab(e.firestore,cA),n=cT(e),i=dn(e.converter,t);return dm(r,[cz(cB(e.firestore),"addDoc",n._key,i,null!==e.converter,{}).toMutation(n._key,lc.exists(!1))]).then(()=>n)}(n,a)).id,...a}},dL=async(e,t)=>{let r=dS();if(!r)throw Error("No fridge selected");let n=cT(dw,"fridges",r,"items",e);return t<=0?(await dp(n),null):(await df(n,{quantity:t,updatedAt:dg()}),{id:e,quantity:t})},dO=async e=>{let t=dS();if(!t)throw Error("No fridge selected");let r=cT(dw,"fridges",t,"items",e);await dp(r)},dP=async e=>{let t=await dh(cT(dw,"products",e));return t.exists()?{id:t.id,...t.data()}:null},dx=async(e,t)=>{let r={barcode:e,name:t.name,description:t.description||"",imageUrl:t.imageUrl||null,category:t.category||"uncategorized",createdAt:dg(),updatedAt:dg()};return await dd(cT(dw,"products",e),r),r};!async function(){let e,t;let r="No barcode detected",n=document.querySelector("a-tab-group"),i=document.getElementById("cameraPanel"),s=document.querySelector("capture-photo"),a=document.getElementById("cameraResults"),o=document.getElementById("fileResults"),l=document.getElementById("scanInstructions"),h=document.getElementById("scanBtn"),u=document.getElementById("dropzone"),c=document.querySelector("resize-observer"),d=document.getElementById("scanFrame"),f=document.getElementById("globalActions"),p=document.getElementById("historyBtn"),m=document.getElementById("historyDialog"),g=document.getElementById("historyList"),y=document.getElementById("deleteHistoryBtn"),v=document.getElementById("settingsBtn"),w=document.getElementById("settingsDialog"),b=document.forms["settings-form"],E=document.getElementById("supportedFormats"),_=!0,T=document.getElementById("fridgeBtn"),I=document.getElementById("fridgeBtnText"),S=document.getElementById("fridgeDialog"),C=document.getElementById("fridgeSetup"),A=document.getElementById("fridgeConnected"),k=document.getElementById("currentFridgeCode"),N=document.getElementById("fridgeItemsList"),D=document.getElementById("emptyFridgeMessage"),L=document.getElementById("productDialog"),O=document.getElementById("productForm"),P=document.getElementById("productBarcode"),x=document.getElementById("productName"),M=document.getElementById("productQuantity");try{await d_()}catch(e){console.error("Firebase initialization failed:",e)}if(Z(dS()),T?.addEventListener("click",()=>{dS()?et():ee(),S?.showModal()}),S?.addEventListener("click",e=>{e.target===e.currentTarget&&S.close()}),document.querySelectorAll(".fridge-tab").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".fridge-tab").forEach(e=>e.classList.remove("active")),document.querySelectorAll(".fridge-tab-content").forEach(e=>e.classList.remove("active")),e.classList.add("active"),document.getElementById(e.dataset.tab+"Tab")?.classList.add("active")})}),document.getElementById("joinFridgeForm")?.addEventListener("submit",async e=>{e.preventDefault();let t=document.getElementById("joinCode")?.value?.trim().toLowerCase(),r=document.getElementById("joinPassword")?.value||null;if(t)try{let e=await dN(t,r);e.success?(dC(t),Z(t),et(),eJ("Koblet til kjøleskap: "+t,"success")):eJ(e.error||"Kunne ikke koble til","danger")}catch(e){eJ("Feil: "+e.message,"danger")}}),document.getElementById("createFridgeForm")?.addEventListener("submit",async e=>{e.preventDefault();let t=document.getElementById("createCode")?.value?.trim().toLowerCase(),r=document.getElementById("createPassword")?.value||null;if(t)try{let e=await dk(t,r);e.success?(dC(t),Z(t),et(),eJ("Kjøleskap opprettet: "+t,"success")):eJ(e.error||"Kunne ikke opprette","danger")}catch(e){eJ("Feil: "+e.message,"danger")}}),document.getElementById("leaveFridgeBtn")?.addEventListener("click",()=>{dC(null),Z(null),ee(),eJ("Frakoblet kjøleskap","info")}),O?.addEventListener("submit",async e=>{e.preventDefault(),await ei()}),document.getElementById("skipProductBtn")?.addEventListener("click",()=>{L?.close()}),L?.addEventListener("click",e=>{e.target===e.currentTarget&&L.close()}),!("BarcodeDetector"in window))try{await R("3c8ZQ")}catch(e){return f.hidden=!0,n.style.display="none",eJ("BarcodeDetector API is not supported by your browser.","danger")}ef()||document.querySelectorAll("web-share").forEach(e=>{e.hidden=!0,e.disabled=!0});let{value:U=[]}=await eW();q(U),s.addEventListener("capture-photo:video-play",e=>{d.hidden=!1,W(e.detail.video),t=e.detail.video||s.shadowRoot?.querySelector("video"),J();let r=s.getTrackSettings(),n=s.getTrackCapabilities(),i=document.getElementById("zoomLevel");if(r?.zoom&&n?.zoom){let e=document.getElementById("zoomControls"),t=n?.zoom?.min||0,a=n?.zoom?.max||10,o=r?.zoom||1;e.hidden=!1,i.textContent=o,e.addEventListener("click",e=>{let r=e.target.closest('[data-action="zoom-in"]'),n=e.target.closest('[data-action="zoom-out"]');r&&o<a&&(o+=.5),n&&o>t&&(o-=.5),i.textContent=o,s.zoom=o})}},{once:!0}),s.addEventListener("capture-photo:error",e=>{let t=e.detail.error;if("NotFoundError"===t.name)return;let r="NotAllowedError"===t.name?"Permission to use webcam was denied or video Autoplay is disabled. Reload the page to give appropriate permissions to webcam.":t.message;i.innerHTML=`<div class="alert alert-danger" role="alert" style="margin: 0;">${r}</div>`},{once:!0}),eV.defineCustomElement(),u.accept="image/jpg,image/jpeg,image/png,image/apng,image/gif,image/webp,image/avif";let V=()=>(t||(t=s.shadowRoot?.querySelector("video")),t),F=await window.BarcodeDetector.getSupportedFormats(),B=new window.BarcodeDetector({formats:F}),{value:z={}}=await eK();Object.entries(z).forEach(([e,t])=>{let r=b.querySelector(`[name="${e}"]`);r&&(r.checked=t)}),Array.isArray(F)&&F.length>0&&(E.textContent=`Supported formats: ${F.join(", ")}`);let j=(()=>{let e=new(window.AudioContext||window.webkitAudioContext||window.audioContext);if(e)return async(t,r,n,i,s)=>{let{value:a}=await eK();if(!a?.beep)return;let o=e.createOscillator(),l=e.createGain();o.connect(l),l.connect(e.destination),n&&(l.gain.value=n),r&&(o.frequency.value=r),i&&(o.type=i),"function"==typeof s&&(o.onended=s),o.start(e.currentTime),o.stop(e.currentTime+(t||500)/1e3)}})();function q(e){g.innerHTML="",Array.isArray(e)&&e.length?(y.style.display="block",e.forEach(e=>{let t;let r=document.createElement("li");r.setAttribute("data-value",e);try{new URL(e),(t=document.createElement("a")).href=e,t.setAttribute("target","_blank"),t.setAttribute("rel","noreferrer noopener")}catch(e){t=document.createElement("span")}t.textContent=e,t.setAttribute("title",e);let n=document.createElement("div");n.className="history-modal__actions";let i=document.createElement("custom-clipboard-copy");i.title="Copy to clipboard",i.setAttribute("only-icon",""),i.setAttribute("value",e),n.appendChild(i);let s=document.createElement("button");s.type="button",s.className="history-modal__delete-action",s.title="Remove from history",s.setAttribute("data-action","delete"),s.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
          </svg>
        `,n.appendChild(s),r.appendChild(t),r.appendChild(n),g.appendChild(r)})):(g.innerHTML="<li class=>There are no saved items in history.</li>",y.style.display="none")}async function $(e){let{value:t}=await eK();if(!e||!t?.addToHistory)return;let{value:r=[],error:n}=await eW();if(!n&&!r.find(t=>t===e)){let t=[...r,e],{error:n}=await eQ(t);n||q(t)}}async function H(e){if(!e)return;let{value:t=[],error:r}=await eW();if(!r){let r=t.filter(t=>t!==e),{error:n}=await eQ(r);n||q(r)}}async function K(){let{error:e}=await eQ([]);e||q([])}async function G(e=100){let{value:t}=await eK();if("function"==typeof window.navigator.vibrate&&t?.vibrate)try{window.navigator.vibrate(e)}catch{}}function W(e){if(!e)return;let t=e.getBoundingClientRect();d.style.cssText=`width: ${t.width}px; height: ${t.height}px`}function Q(e){e?.querySelector(".results__item")?.remove()}async function Y(e,t){let n;if(!e||!t){console.error("createResult: missing value or resultDialog");return}Q(t);try{let{value:t}=await eK();new URL(e),(n=document.createElement("a")).href=e,t?.openWebPageSameTab||(n.setAttribute("target","_blank"),n.setAttribute("rel","noreferrer noopener")),t?.openWebPage&&n.click()}catch(e){n=document.createElement("span")}n.className="results__item",n.classList.toggle("results__item--no-barcode",e===r),n.textContent=e,t.insertBefore(n,t.querySelector(".results__actions"));let i=t.querySelector("custom-clipboard-copy"),s=t.querySelector("web-share"),a=e!==r;i&&(i.disabled=!a,i.hidden=!a),s&&ef()&&(s.disabled=!a,s.hidden=!a,a?s.setAttribute("share-text",e):s.removeAttribute("share-text")),t.show()}function X(e){return new Promise((t,r)=>{B.detect(e).then(e=>{Array.isArray(e)&&e.length>0?t(e[0]):r({message:"Could not detect barcode from provided source."})}).catch(e=>{r(e)})})}async function J(){l.hidden=!1;try{let t={},r=V();if(!r){console.error("Video element not found in scan()"),_&&(e=window.requestAnimationFrame(()=>J()));return}if(r.readyState<2){_&&(e=window.requestAnimationFrame(()=>J()));return}if(!(t=await X(r))||!t.rawValue)throw Error("No rawValue in detected barcode");console.log("✓ Barcode detected:",t.rawValue),window.cancelAnimationFrame(e),Q(a),Y(t.rawValue,a),$(t.rawValue),en(t.rawValue),l.hidden=!0,h.hidden=!1,d.hidden=!0,j(200,860,.03,"square"),G();return}catch(e){}_&&(e=window.requestAnimationFrame(()=>J()))}function Z(e){I&&(I.textContent=e||"Kjøleskap"),T&&T.classList.toggle("connected",!!e)}function ee(){C&&(C.style.display="block"),A&&(A.style.display="none")}async function et(){let e=dS();if(!e){ee();return}C&&(C.style.display="none"),A&&(A.style.display="block"),k&&(k.textContent=e),await er()}async function er(){let e=dS();if(e&&N)try{let t=await dR(e);if(N.innerHTML="",!t||0===t.length){D&&(D.style.display="block");return}D&&(D.style.display="none"),t.forEach(e=>{let t=document.createElement("li");t.className="fridge-item",t.innerHTML=`
          <span class="fridge-item-name">${e.productName||e.barcode}</span>
          <div class="fridge-item-controls">
            <button type="button" class="qty-btn" data-action="decrease" data-id="${e.id}">\u{2212}</button>
            <span class="fridge-item-qty">${e.quantity}</span>
            <button type="button" class="qty-btn" data-action="increase" data-id="${e.id}">+</button>
            <button type="button" class="remove-btn" data-action="remove" data-id="${e.id}">\u{1F5D1}</button>
          </div>
        `,N.appendChild(t)}),N.querySelectorAll(".qty-btn").forEach(r=>{r.addEventListener("click",async()=>{let n=r.dataset.id,i=r.dataset.action,s=t.find(e=>e.id===n);if(!s)return;let a="increase"===i?s.quantity+1:s.quantity-1;a<1?confirm("Fjerne varen fra kjøleskapet?")&&await dO(e,n):await dL(e,n,a),await er()})}),N.querySelectorAll(".remove-btn").forEach(t=>{t.addEventListener("click",async()=>{confirm("Fjerne varen fra kjøleskapet?")&&(await dO(e,t.dataset.id),await er())})})}catch(e){console.error("Error loading fridge items:",e),eJ("Kunne ikke laste innhold","danger")}}async function en(e){let t=dS();if(!t)return;let r=await dP(e);if(r)try{await dD(t,e,r.name,1),eJ(`${r.name} lagt til i kj\xf8leskapet`,"success")}catch(e){eJ("Kunne ikke legge til: "+e.message,"danger")}else L&&P&&x&&M&&(P.value=e,x.value="",M.value="1",L.showModal(),x.focus())}async function ei(){let e=P?.value,t=x?.value?.trim(),r=parseInt(M?.value)||1,n=dS();if(e&&t&&n)try{await dx(e,t),await dD(n,e,t,r),L?.close(),eJ(`${t} lagt til i kj\xf8leskapet`,"success")}catch(e){eJ("Feil: "+e.message,"danger")}}h.addEventListener("click",()=>{h.hidden=!0,d.hidden=!1,Q(a),a.close(),J()}),n.addEventListener("a-tab-show",eZ(e=>{let t=e.detail.tabId;if("cameraTab"===t){_=!0;let e=document.querySelector("capture-photo");!e||e.loading||a.querySelector(".results__item")||J(),null!=e&&"function"==typeof e.startVideoStream&&e.startVideoStream()}"fileTab"===t&&(_=!1,null!=s&&"function"==typeof s.stopVideoStream&&s.stopVideoStream())},250)),u.addEventListener("files-dropzone-drop",e=>{!function(e){if(!e)return;let t=new Image,n=new FileReader;n.onload=n=>{let i=n.target.result;t.onload=async()=>{try{let e=await X(t);Q(o),Y(e.rawValue,o),$(e.rawValue),en(e.rawValue),j(200,860,.03,"square"),G()}catch(e){Q(o),Y(r,o)}},t.src=i,u.replaceChildren();let s=document.createElement("div");s.className="dropzone-preview";let a=document.createElement("div");a.className="dropzone-preview__image-wrapper";let l=document.createElement("div");l.className="dropzone-preview__file-name",l.textContent=e.name,a.appendChild(t),s.appendChild(a),s.appendChild(l),u.prepend(s)},n.readAsDataURL(e)}(e.detail.acceptedFiles[0])}),c.addEventListener("resize-observer:resize",()=>{W(s.shadowRoot.querySelector("video"))}),v.addEventListener("click",()=>{w.showModal()}),p.addEventListener("click",()=>{m.showModal()}),m.addEventListener("click",e=>{e.target===e.currentTarget&&m.close()}),w.addEventListener("click",e=>{e.target===e.currentTarget&&w.close()}),b.addEventListener("change",e=>{let t={};e.currentTarget.querySelectorAll('input[type="checkbox"]').forEach(e=>t[e.name]=e.checked),eG(t)}),g.addEventListener("click",e=>{let t=e.target;t.closest('[data-action="delete"]')&&window.confirm("Delete item from history?")&&H(t.closest("li").dataset.value)}),y.addEventListener("click",()=>{window.confirm("Are you sure you want to empty history?")&&K()})}()}();
//# sourceMappingURL=scanner.6b50e2fd.js.map
