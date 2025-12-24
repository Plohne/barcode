const e="cookie_consent";function t(t){localStorage.setItem(e,JSON.stringify({accepted:t,version:"1",timestamp:new Date().toISOString()}))}function n(){if(null!==function(){let t=localStorage.getItem(e);if(!t)return null;try{let e=JSON.parse(t);if("1"!==e.version)return null;return e.accepted}catch{return null}}())return;let n=function(){let e=document.createElement("div");return e.id="cookieConsentBanner",e.className="cookie-consent-banner",e.setAttribute("role","dialog"),e.setAttribute("aria-label","Cookie consent"),e.innerHTML=`
    <div class="cookie-consent-content">
      <p>
        Vi bruker Firebase for \xe5 lagre kj\xf8leskapsdataene dine og kan bruke analyseverkt\xf8y for \xe5 forbedre appen.
        <a href="privacy.html" target="_blank">Les v\xe5r personvernerkl\xe6ring</a>
      </p>
      <div class="cookie-consent-buttons">
        <button type="button" id="cookieAccept" class="cookie-btn cookie-btn-accept">
          Godta
        </button>
        <button type="button" id="cookieDecline" class="cookie-btn cookie-btn-decline">
          Bare n\xf8dvendige
        </button>
      </div>
    </div>
  `,e.querySelector("#cookieAccept").addEventListener("click",()=>{t(!0),o(e)}),e.querySelector("#cookieDecline").addEventListener("click",()=>{t(!1),o(e)}),e}();document.body.appendChild(n),requestAnimationFrame(()=>{n.classList.add("visible")})}function o(e){e.classList.remove("visible"),e.addEventListener("transitionend",()=>{e.remove()},{once:!0})}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",n):n();
//# sourceMappingURL=index.db167226.js.map
