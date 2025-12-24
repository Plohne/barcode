// src/js/login.js
import { initializeFirebase } from './services/firebase-config.js';
import { findFridgeByPassword, setCurrentFridgeCode } from './services/fridge-service.js';

const loginForm = document.getElementById('loginForm');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const btnText = loginBtn?.querySelector('.btn-text');
const btnSpinner = loginBtn?.querySelector('.btn-spinner');
const loginError = document.getElementById('loginError');

// Check if already logged in
const savedFridge = localStorage.getItem('current_fridge_code');
if (savedFridge) {
  // Already logged in, redirect to inventory
  window.location.href = 'inventory.html';
}

// Initialize Firebase
initializeFirebase().then(() => {
  console.log('Firebase ready for login');
}).catch(err => {
  console.error('Firebase init error:', err);
});

loginForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const password = passwordInput?.value?.trim();
  if (!password) return;

  // Show loading state
  setLoading(true);
  hideError();

  try {
    const result = await findFridgeByPassword(password);
    
    if (result.success && result.fridgeCode) {
      // Save fridge code and redirect
      setCurrentFridgeCode(result.fridgeCode);
      window.location.href = 'inventory.html';
    } else {
      showError(result.error || 'Feil passord. Prøv igjen.');
    }
  } catch (err) {
    console.error('Login error:', err);
    showError('Noe gikk galt. Prøv igjen.');
  } finally {
    setLoading(false);
  }
});

function setLoading(loading) {
  if (loginBtn) loginBtn.disabled = loading;
  if (btnText) btnText.hidden = loading;
  if (btnSpinner) btnSpinner.hidden = !loading;
}

function showError(message) {
  if (loginError) {
    loginError.textContent = message;
    loginError.hidden = false;
  }
}

function hideError() {
  if (loginError) {
    loginError.hidden = true;
  }
}
