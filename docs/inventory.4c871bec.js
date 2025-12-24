!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequirea202;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,a.call(i.exports,i,i.exports),i.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequirea202=a),a.register;var i=a("5Gd8p"),o=a("kkiei");let r=document.getElementById("fridgeName"),d=document.getElementById("logoutBtn"),l=document.getElementById("loadingState"),c=document.getElementById("emptyState"),s=document.getElementById("inventoryList"),u=null;async function m(){try{await (0,i.initializeFirebase)(),console.log("Firebase ready");let e=await (0,o.getFridgeInfo)(u);e&&e.name?r.textContent=e.name:r.textContent=u,await f()}catch(e){console.error("Init error:",e),g("Kunne ikke laste kjøleskapet")}}async function f(){l.hidden=!1,c.hidden=!0,s.hidden=!0;try{let e=await (0,o.getFridgeItems)(u);if(!e||0===e.length){h(),c.hidden=!1,s.hidden=!0;return}h(),c.hidden=!0,s.hidden=!1,s.innerHTML="",e.forEach(e=>{let t=document.createElement("li");t.className="inventory-item",t.dataset.id=e.id,t.innerHTML=`
      <div class="item-info">
        <p class="item-name">${function(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}(e.productName||e.barcode)}</p>
        <span class="item-barcode">${e.barcode}</span>
      </div>
      <div class="item-controls">
        <button type="button" class="qty-btn" data-action="decrease">\u{2212}</button>
        <span class="item-qty">${e.quantity}</span>
        <button type="button" class="qty-btn" data-action="increase">+</button>
        <button type="button" class="remove-btn" data-action="remove" title="Fjern">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
        </button>
      </div>
    `,s.appendChild(t)}),s.querySelectorAll(".qty-btn, .remove-btn").forEach(t=>{t.addEventListener("click",async n=>{let a=t.dataset.action,i=t.closest(".inventory-item").dataset.id,r=e.find(e=>e.id===i);r&&("remove"===a?confirm("Fjerne fra kjøleskapet?")&&(await (0,o.removeFromFridge)(i),await f()):"increase"===a?(await (0,o.updateFridgeItemQuantity)(i,r.quantity+1),await f()):"decrease"===a&&(r.quantity<=1?confirm("Fjerne fra kjøleskapet?")&&(await (0,o.removeFromFridge)(i),await f()):(await (0,o.updateFridgeItemQuantity)(i,r.quantity-1),await f())))})})}catch(e){console.error("Load error:",e),g("Kunne ikke laste innhold")}}function h(){l.hidden=!0}function g(e){h(),c.hidden=!1,c.querySelector("p").textContent=e}(u=(0,o.getCurrentFridgeCode)())||(window.location.href="index.html"),d?.addEventListener("click",()=>{confirm("Vil du logge ut?")&&(o.setCurrentFridgeCode(null),window.location.href="index.html")}),m()}();
//# sourceMappingURL=inventory.4c871bec.js.map
