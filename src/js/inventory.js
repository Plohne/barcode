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
      <p class="item-name">${escapeHtml(item.productName || item.barcode)}</p>
      <div class="item-controls">
        <button type="button" class="qty-btn" data-action="decrease">−</button>
        <input type="number" class="item-qty-input" value="${item.quantity}" min="0" max="99" data-action="set-qty">
        <button type="button" class="qty-btn" data-action="increase">+</button>
        <button type="button" class="remove-btn" data-action="remove" title="Fjern">🗑</button>
      </div>
    `;
    inventoryList.appendChild(li);
  });

  // Add event listeners for buttons
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

  // Add event listeners for quantity input
  inventoryList.querySelectorAll('.item-qty-input').forEach(input => {
    input.addEventListener('change', async (e) => {
      const itemEl = input.closest('.inventory-item');
      const itemId = itemEl.dataset.id;
      const newQty = parseInt(input.value) || 0;
      
      if (newQty <= 0) {
        if (confirm('Fjerne fra kjøleskapet?')) {
          await removeFromFridge(itemId);
          await loadItems();
        } else {
          // Reset to 1 if user cancels
          input.value = 1;
        }
      } else {
        await updateFridgeItemQuantity(itemId, newQty);
        await loadItems();
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
