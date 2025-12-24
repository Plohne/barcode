// src/js/inventory.js
import { initializeFirebase } from './services/firebase-config.js';
import { 
  getCurrentFridgeCode, 
  setCurrentFridgeCode,
  getFridgeItems,
  getFridgeInfo,
  updateFridgeItemQuantity,
  removeFromFridge
} from './services/fridge-service.js';

const fridgeNameEl = document.getElementById('fridgeName');
const logoutBtn = document.getElementById('logoutBtn');
const loadingState = document.getElementById('loadingState');
const emptyState = document.getElementById('emptyState');
const inventoryList = document.getElementById('inventoryList');

let currentFridgeCode = null;

// Check if logged in
currentFridgeCode = getCurrentFridgeCode();
if (!currentFridgeCode) {
  // Not logged in, redirect to login
  window.location.href = 'index.html';
}

// Initialize
async function init() {
  try {
    await initializeFirebase();
    console.log('Firebase ready');

    // Get fridge name
    const fridge = await getFridgeInfo(currentFridgeCode);
    if (fridge && fridge.name) {
      fridgeNameEl.textContent = fridge.name;
    } else {
      fridgeNameEl.textContent = currentFridgeCode;
    }

    // Load items
    await loadItems();
  } catch (err) {
    console.error('Init error:', err);
    showError('Kunne ikke laste kjøleskapet');
  }
}

async function loadItems() {
  showLoading();

  try {
    const items = await getFridgeItems(currentFridgeCode);
    
    if (!items || items.length === 0) {
      showEmpty();
      return;
    }

    renderItems(items);
  } catch (err) {
    console.error('Load error:', err);
    showError('Kunne ikke laste innhold');
  }
}

function renderItems(items) {
  hideLoading();
  emptyState.hidden = true;
  inventoryList.hidden = false;
  inventoryList.innerHTML = '';

  items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'inventory-item';
    li.dataset.id = item.id;
    li.innerHTML = `
      <div class="item-info">
        <p class="item-name">${escapeHtml(item.productName || item.barcode)}</p>
        <span class="item-barcode">${item.barcode}</span>
      </div>
      <div class="item-controls">
        <button type="button" class="qty-btn" data-action="decrease">−</button>
        <span class="item-qty">${item.quantity}</span>
        <button type="button" class="qty-btn" data-action="increase">+</button>
        <button type="button" class="remove-btn" data-action="remove" title="Fjern">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
          </svg>
        </button>
      </div>
    `;
    inventoryList.appendChild(li);
  });

  // Add event listeners
  inventoryList.querySelectorAll('.qty-btn, .remove-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const action = btn.dataset.action;
      const itemEl = btn.closest('.inventory-item');
      const itemId = itemEl.dataset.id;
      const item = items.find(i => i.id === itemId);
      
      if (!item) return;

      if (action === 'remove') {
        if (confirm('Fjerne fra kjøleskapet?')) {
          await removeFromFridge(itemId);
          await loadItems();
        }
      } else if (action === 'increase') {
        await updateFridgeItemQuantity(itemId, item.quantity + 1);
        await loadItems();
      } else if (action === 'decrease') {
        if (item.quantity <= 1) {
          if (confirm('Fjerne fra kjøleskapet?')) {
            await removeFromFridge(itemId);
            await loadItems();
          }
        } else {
          await updateFridgeItemQuantity(itemId, item.quantity - 1);
          await loadItems();
        }
      }
    });
  });
}

function showLoading() {
  loadingState.hidden = false;
  emptyState.hidden = true;
  inventoryList.hidden = true;
}

function hideLoading() {
  loadingState.hidden = true;
}

function showEmpty() {
  hideLoading();
  emptyState.hidden = false;
  inventoryList.hidden = true;
}

function showError(message) {
  hideLoading();
  emptyState.hidden = false;
  emptyState.querySelector('p').textContent = message;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Logout
logoutBtn?.addEventListener('click', () => {
  if (confirm('Vil du logge ut?')) {
    setCurrentFridgeCode(null);
    window.location.href = 'index.html';
  }
});

// Initialize
init();
