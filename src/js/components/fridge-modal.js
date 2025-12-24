// src/js/components/fridge-modal.js
import { 
  createFridge, 
  joinFridge, 
  fridgeExists,
  getCurrentFridgeCode,
  getFridgeInfo,
  leaveFridge
} from '../services/fridge-service.js';
import { toastAlert } from '../toast-alert.js';

export class FridgeModal {
  constructor() {
    this.modal = null;
    this.mode = 'join'; // 'join' or 'create'
    this.onFridgeConnected = null; // Callback when connected
    this.init();
  }
  
  init() {
    this.createModal();
    this.attachEventListeners();
  }
  
  createModal() {
    const modalHTML = `
      <dialog id="fridgeDialog" class="fridge-dialog">
        <div class="fridge-modal-container">
          <div class="fridge-modal-header">
            <h2>🧊 Connect to Fridge</h2>
            <p class="fridge-modal-subtitle">Enter a fridge code to access your shared inventory</p>
          </div>
          
          <div class="fridge-tabs">
            <button type="button" class="fridge-tab active" data-tab="join">Join Fridge</button>
            <button type="button" class="fridge-tab" data-tab="create">Create New</button>
          </div>
          
          <form id="fridgeForm">
            <!-- Join Fridge Form -->
            <div id="joinForm" class="fridge-form-section">
              <div class="form-group">
                <label for="joinFridgeCode">Fridge Code</label>
                <input type="text" id="joinFridgeCode" name="fridgeCode" required 
                       placeholder="e.g., family-fridge" autocomplete="off"
                       pattern="[a-zA-Z0-9-_]+" title="Only letters, numbers, dashes and underscores">
              </div>
              
              <div class="form-group">
                <label for="joinPassword">Password <span class="optional">(if required)</span></label>
                <input type="password" id="joinPassword" name="password" placeholder="Enter password">
              </div>
              
              <button type="submit" class="primary-btn" id="joinBtn">
                Join Fridge
              </button>
            </div>
            
            <!-- Create Fridge Form -->
            <div id="createForm" class="fridge-form-section" hidden>
              <div class="form-group">
                <label for="createFridgeCode">Fridge Code</label>
                <input type="text" id="createFridgeCode" name="newFridgeCode" 
                       placeholder="e.g., my-home-fridge" autocomplete="off"
                       pattern="[a-zA-Z0-9-_]+" title="Only letters, numbers, dashes and underscores">
                <small class="form-hint">Choose a unique code to identify your fridge</small>
              </div>
              
              <div class="form-group">
                <label for="createFridgeName">Fridge Name</label>
                <input type="text" id="createFridgeName" name="fridgeName" 
                       placeholder="e.g., Home Fridge">
              </div>
              
              <div class="form-group">
                <label for="createPassword">Password <span class="optional">(optional)</span></label>
                <input type="password" id="createPassword" name="newPassword" 
                       placeholder="Set a password to protect access">
                <small class="form-hint">Leave empty for open access</small>
              </div>
              
              <button type="submit" class="primary-btn" id="createBtn">
                Create Fridge
              </button>
            </div>
          </form>
          
          <button type="button" id="fridgeCloseBtn" class="close-btn" aria-label="Close">×</button>
        </div>
      </dialog>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    this.modal = document.getElementById('fridgeDialog');
  }
  
  attachEventListeners() {
    // Tab switching
    document.querySelectorAll('.fridge-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const tabName = e.target.dataset.tab;
        this.switchTab(tabName);
      });
    });
    
    // Form submit
    document.getElementById('fridgeForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      await this.handleSubmit();
    });
    
    // Close button
    document.getElementById('fridgeCloseBtn').addEventListener('click', () => {
      // Only allow close if already connected to a fridge
      if (getCurrentFridgeCode()) {
        this.close();
      } else {
        toastAlert('Please connect to a fridge first', 'warning');
      }
    });
    
    // Prevent close on backdrop click if no fridge connected
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal && getCurrentFridgeCode()) {
        this.close();
      }
    });
    
    // Handle Escape key
    this.modal.addEventListener('cancel', (e) => {
      if (!getCurrentFridgeCode()) {
        e.preventDefault();
        toastAlert('Please connect to a fridge first', 'warning');
      }
    });
  }
  
  switchTab(tabName) {
    this.mode = tabName;
    
    // Update tab buttons
    document.querySelectorAll('.fridge-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.tab === tabName);
    });
    
    // Show/hide forms
    document.getElementById('joinForm').hidden = tabName !== 'join';
    document.getElementById('createForm').hidden = tabName !== 'create';
  }
  
  async handleSubmit() {
    const submitBtn = this.mode === 'join' 
      ? document.getElementById('joinBtn')
      : document.getElementById('createBtn');
    
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Connecting...';
    
    try {
      if (this.mode === 'join') {
        await this.handleJoin();
      } else {
        await this.handleCreate();
      }
    } catch (error) {
      toastAlert(error.message, 'danger');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  }
  
  async handleJoin() {
    const code = document.getElementById('joinFridgeCode').value.trim();
    const password = document.getElementById('joinPassword').value;
    
    if (!code) {
      throw new Error('Please enter a fridge code');
    }
    
    await joinFridge(code, password || null);
    
    const fridgeInfo = await getFridgeInfo();
    toastAlert(`Connected to ${fridgeInfo?.name || code}!`, 'success');
    
    this.close();
    
    if (this.onFridgeConnected) {
      this.onFridgeConnected(code);
    }
  }
  
  async handleCreate() {
    const code = document.getElementById('createFridgeCode').value.trim();
    const name = document.getElementById('createFridgeName').value.trim();
    const password = document.getElementById('createPassword').value;
    
    if (!code) {
      throw new Error('Please enter a fridge code');
    }
    
    // Validate code format
    if (!/^[a-zA-Z0-9-_]+$/.test(code)) {
      throw new Error('Fridge code can only contain letters, numbers, dashes and underscores');
    }
    
    if (code.length < 3) {
      throw new Error('Fridge code must be at least 3 characters');
    }
    
    await createFridge(code, name || code, password || null);
    
    toastAlert(`Created fridge "${name || code}"!`, 'success');
    
    this.close();
    
    if (this.onFridgeConnected) {
      this.onFridgeConnected(code);
    }
  }
  
  open(forceOpen = false) {
    // Reset form
    document.getElementById('fridgeForm').reset();
    this.switchTab('join');
    
    // If already connected and not forcing, don't show
    if (!forceOpen && getCurrentFridgeCode()) {
      return;
    }
    
    this.modal.showModal();
  }
  
  close() {
    this.modal.close();
  }
  
  // Check if user needs to connect to a fridge
  needsConnection() {
    return !getCurrentFridgeCode();
  }
}

// Current fridge indicator component
export class FridgeIndicator {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.init();
  }
  
  init() {
    this.render();
  }
  
  async render() {
    if (!this.container) return;
    
    const fridgeCode = getCurrentFridgeCode();
    
    if (!fridgeCode) {
      this.container.innerHTML = `
        <button id="connectFridgeBtn" class="fridge-indicator disconnected">
          🧊 Connect to Fridge
        </button>
      `;
    } else {
      const fridgeInfo = await getFridgeInfo();
      this.container.innerHTML = `
        <div class="fridge-indicator connected">
          <span class="fridge-icon">🧊</span>
          <span class="fridge-name">${fridgeInfo?.name || fridgeCode}</span>
          <button id="switchFridgeBtn" class="switch-fridge-btn" title="Switch fridge">↔️</button>
        </div>
      `;
    }
  }
  
  async refresh() {
    await this.render();
  }
}
