// src/js/scanner.js - Simplified scanner for fridge app
import '@georapbox/resize-observer-element/dist/resize-observer-defined.js';
import '@georapbox/capture-photo-element/dist/capture-photo-defined.js';
import { getSettings, setSettings } from './services/storage.js';

// Firebase / Fridge imports
import { initializeFirebase } from './services/firebase-config.js';
import { 
  getCurrentFridgeCode,
  addToFridge
} from './services/fridge-service.js';
import { getProductByBarcode, createProduct, updateProduct } from './services/product-service.js';

// Simple toast function
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  
  setTimeout(() => toast.remove(), 3000);
}

(async function () {
  // Check if logged in
  const currentFridgeCode = getCurrentFridgeCode();
  if (!currentFridgeCode) {
    window.location.href = 'index.html';
    return;
  }

  const capturePhotoEl = document.querySelector('capture-photo');
  const cameraResultsEl = document.getElementById('cameraResults');
  const scanInstructionsEl = document.getElementById('scanInstructions');
  const scanBtn = document.getElementById('scanBtn');
  const scanFrameEl = document.getElementById('scanFrame');
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsDialog = document.getElementById('settingsDialog');
  const settingsForm = document.forms['settings-form'];
  const productDialog = document.getElementById('productDialog');
  const productForm = document.getElementById('productForm');
  const productBarcodeInput = document.getElementById('productBarcode');
  const productNameInput = document.getElementById('productName');
  const productQuantityInput = document.getElementById('productQuantity');

  let shouldRepeatScan = true;
  let rafId;
  let capturePhotoVideoEl = null;

  // Initialize Firebase
  try {
    await initializeFirebase();
    console.log('Firebase ready');
  } catch (err) {
    console.error('Firebase init error:', err);
  }

  // Load BarcodeDetector
  if (!('BarcodeDetector' in window)) {
    try {
      await import('barcode-detector');
      console.log('Using BarcodeDetector polyfill.');
    } catch (err) {
      return showToast('Strekkodeskanning støttes ikke i denne nettleseren.', 'danger');
    }
  }

  const formats = await window.BarcodeDetector.getSupportedFormats();
  const barcodeDetector = new window.BarcodeDetector({ formats });

  // Load settings
  const { value: settings = { beep: true, vibrate: true } } = await getSettings();
  Object.entries(settings).forEach(([key, value]) => {
    const input = settingsForm?.querySelector(`[name="${key}"]`);
    if (input) input.checked = value;
  });

  // Video element getter
  const getVideoElement = () => {
    if (!capturePhotoVideoEl) {
      capturePhotoVideoEl = capturePhotoEl?.shadowRoot?.querySelector('video');
    }
    return capturePhotoVideoEl;
  };

  // AudioContext (lazy init to handle mobile gesture requirement)
  let audioCtx = null;
  const getAudioContext = () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    // Resume if suspended (mobile browsers)
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  };

  // Beep function
  const beep = async (duration = 200, frequency = 860, volume = 0.03) => {
    const { value: settings } = await getSettings();
    // Default to true if settings not set
    if (settings?.beep === false) return;

    try {
      const ctx = getAudioContext();
      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);
      gainNode.gain.value = volume;
      oscillator.frequency.value = frequency;
      oscillator.type = 'square';
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime + (duration / 1000));
    } catch (err) {
      console.log('Beep failed:', err);
    }
  };

  // Vibrate function
  async function vibrate(duration = 100) {
    const { value: settings } = await getSettings();
    // Default to true if settings not set
    if (settings?.vibrate === false) return;
    
    if (typeof navigator.vibrate !== 'function') return;
    try { 
      navigator.vibrate(duration); 
    } catch (err) {
      console.log('Vibrate failed:', err);
    }
  }

  // Resize scan frame
  function resizeScanFrame(videoEl) {
    if (!videoEl || !scanFrameEl) return;
    const rect = videoEl.getBoundingClientRect();
    scanFrameEl.style.cssText = `width: ${Math.min(rect.width * 0.8, 280)}px; height: ${Math.min(rect.height * 0.5, 200)}px`;
  }

  // Detect barcode
  function detectBarcode(source) {
    return new Promise((resolve, reject) => {
      barcodeDetector.detect(source).then(results => {
        if (Array.isArray(results) && results.length > 0) {
          resolve(results[0]);
        } else {
          reject({ message: 'No barcode detected' });
        }
      }).catch(reject);
    });
  }

  // Main scan loop
  async function scan() {
    if (scanInstructionsEl) scanInstructionsEl.hidden = false;

    try {
      const videoEl = getVideoElement();
      if (!videoEl || videoEl.readyState < 2) {
        if (shouldRepeatScan) {
          rafId = window.requestAnimationFrame(() => scan());
        }
        return;
      }

      const barcode = await detectBarcode(videoEl);
      if (!barcode?.rawValue) throw new Error('No barcode value');

      console.log('✓ Barcode detected:', barcode.rawValue);

      window.cancelAnimationFrame(rafId);
      if (scanInstructionsEl) scanInstructionsEl.hidden = true;
      if (scanBtn) scanBtn.hidden = false;
      if (scanFrameEl) scanFrameEl.hidden = true;

      beep(200, 860, 0.03);
      vibrate();

      // Handle the barcode - add to fridge
      await handleBarcodeDetected(barcode.rawValue);
      return;
    } catch {}

    if (shouldRepeatScan) {
      rafId = window.requestAnimationFrame(() => scan());
    }
  }

  // Handle barcode detection - always show dialog, pre-fill if product exists
  async function handleBarcodeDetected(barcode) {
    // Check if product exists
    const product = await getProductByBarcode(barcode);
    // Always show dialog, pre-fill name if product exists
    showProductDialog(barcode, product?.name || '');
  }

  // Show product dialog with optional pre-filled name
  function showProductDialog(barcode, existingName = '') {
    if (!productDialog) return;
    productBarcodeInput.value = barcode;
    productNameInput.value = existingName;
    productQuantityInput.value = '1';
    productDialog.showModal();
    
    if (existingName) {
      // If name is pre-filled, focus on quantity instead
      productQuantityInput.focus();
      productQuantityInput.select();
    } else {
      productNameInput.focus();
    }
  }

  // Handle product form submit
  async function handleAddProduct() {
    const barcode = productBarcodeInput?.value;
    const name = productNameInput?.value?.trim();
    const quantity = parseInt(productQuantityInput?.value) || 1;

    if (!barcode || !name) return;

    try {
      // Check if product exists to see if we need to update
      const existingProduct = await getProductByBarcode(barcode);
      
      if (existingProduct) {
        // Product exists - update name if changed
        if (existingProduct.name !== name) {
          await updateProduct(barcode, { name });
        }
      } else {
        // Create new product
        await createProduct(barcode, name);
      }
      
      // Add to fridge with quantity
      await addToFridge(barcode, { name }, quantity);
      productDialog?.close();
      showToast(`${name} lagt til!`, 'success');
    } catch (err) {
      showToast('Feil: ' + err.message, 'danger');
    }
  }

  // Event: Video starts playing
  capturePhotoEl?.addEventListener('capture-photo:video-play', evt => {
    scanFrameEl.hidden = false;
    capturePhotoVideoEl = evt.detail.video || capturePhotoEl.shadowRoot?.querySelector('video');
    resizeScanFrame(capturePhotoVideoEl);
    scan();

    // Setup zoom if available
    const trackSettings = capturePhotoEl.getTrackSettings();
    const trackCapabilities = capturePhotoEl.getTrackCapabilities();
    const zoomLevelEl = document.getElementById('zoomLevel');
    const zoomControls = document.getElementById('zoomControls');

    if (trackSettings?.zoom && trackCapabilities?.zoom) {
      const minZoom = trackCapabilities.zoom.min || 1;
      const maxZoom = trackCapabilities.zoom.max || 10;
      let currentZoom = trackSettings.zoom || 1;

      if (zoomControls) zoomControls.hidden = false;
      if (zoomLevelEl) zoomLevelEl.textContent = currentZoom;

      zoomControls?.addEventListener('click', evt => {
        const action = evt.target.closest('button')?.dataset.action;
        if (action === 'zoom-in' && currentZoom < maxZoom) currentZoom += 0.5;
        if (action === 'zoom-out' && currentZoom > minZoom) currentZoom -= 0.5;
        if (zoomLevelEl) zoomLevelEl.textContent = currentZoom;
        capturePhotoEl.zoom = currentZoom;
      });
    }
  });

  // Event: Scan button click
  scanBtn?.addEventListener('click', () => {
    scanBtn.hidden = true;
    scanFrameEl.hidden = false;
    cameraResultsEl?.close();
    shouldRepeatScan = true;
    scan();
  });

  // Event: Settings
  settingsBtn?.addEventListener('click', () => settingsDialog?.showModal());
  
  settingsDialog?.addEventListener('click', evt => {
    if (evt.target === evt.currentTarget) settingsDialog.close();
  });

  settingsForm?.addEventListener('change', evt => {
    const settings = {};
    settingsForm.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      settings[cb.name] = cb.checked;
    });
    setSettings(settings);
  });

  // Event: Product form
  productForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    await handleAddProduct();
  });

  document.getElementById('skipProductBtn')?.addEventListener('click', () => {
    productDialog?.close();
  });

  productDialog?.addEventListener('click', evt => {
    if (evt.target === evt.currentTarget) productDialog.close();
  });

}());
