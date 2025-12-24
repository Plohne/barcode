import '@georapbox/a-tab-group/dist/a-tab-group.js';
import '@georapbox/web-share-element/dist/web-share-defined.js';
import '@georapbox/files-dropzone-element/dist/files-dropzone-defined.js';
import { isWebShareSupported } from '@georapbox/web-share-element/dist/is-web-share-supported.js';
import '@georapbox/resize-observer-element/dist/resize-observer-defined.js';
import { CapturePhoto } from '@georapbox/capture-photo-element/dist/capture-photo.js';
import { getHistory, setHistory, getSettings, setSettings } from './services/storage.js';
import { toastAlert } from './toast-alert.js';
import { debounce } from './utils/debounce.js';
import './custom-clipboard-copy.js';

// Firebase / Fridge imports
import { initializeFirebase } from './services/firebase-config.js';
import { 
  getCurrentFridgeCode, 
  setCurrentFridgeCode,
  joinFridge, 
  createFridge, 
  addToFridge, 
  getFridgeItems,
  updateFridgeItemQuantity,
  removeFromFridge
} from './services/fridge-service.js';
import { getProductByBarcode, createProduct } from './services/product-service.js';

(async function () {
  const NO_BARCODE_DETECTED = 'No barcode detected';
  const ACCEPTED_MIME_TYPES = ['image/jpg', 'image/jpeg', 'image/png', 'image/apng', 'image/gif', 'image/webp', 'image/avif'];
  const tabGroupEl = document.querySelector('a-tab-group');
  const cameraPanel = document.getElementById('cameraPanel');
  const capturePhotoEl = document.querySelector('capture-photo');
  const cameraResultsEl = document.getElementById('cameraResults');
  const fileResultsEl = document.getElementById('fileResults');
  const scanInstructionsEl = document.getElementById('scanInstructions');
  const scanBtn = document.getElementById('scanBtn');
  const dropzoneEl = document.getElementById('dropzone');
  const resizeObserverEl = document.querySelector('resize-observer');
  const scanFrameEl = document.getElementById('scanFrame');
  const globalActionsEl = document.getElementById('globalActions');
  const historyBtn = document.getElementById('historyBtn');
  const historyDialog = document.getElementById('historyDialog');
  const historyList = document.getElementById('historyList');
  const deleteHistoryBtn = document.getElementById('deleteHistoryBtn');
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsDialog = document.getElementById('settingsDialog');
  const settingsForm = document.forms['settings-form'];
  const supportedFormatsEl = document.getElementById('supportedFormats');
  let shouldRepeatScan = true;
  let rafId;

  // Fridge UI elements
  const fridgeBtn = document.getElementById('fridgeBtn');
  const fridgeBtnText = document.getElementById('fridgeBtnText');
  const fridgeDialog = document.getElementById('fridgeDialog');
  const fridgeSetup = document.getElementById('fridgeSetup');
  const fridgeConnected = document.getElementById('fridgeConnected');
  const currentFridgeCodeEl = document.getElementById('currentFridgeCode');
  const fridgeItemsList = document.getElementById('fridgeItemsList');
  const emptyFridgeMessage = document.getElementById('emptyFridgeMessage');
  const productDialog = document.getElementById('productDialog');
  const productForm = document.getElementById('productForm');
  const productBarcodeInput = document.getElementById('productBarcode');
  const productNameInput = document.getElementById('productName');
  const productQuantityInput = document.getElementById('productQuantity');

  // Initialize Firebase
  try {
    await initializeFirebase();
    log('Firebase initialized successfully');
  } catch (err) {
    console.error('Firebase initialization failed:', err);
  }

  // Initialize fridge UI
  initFridgeUI();

  if (!('BarcodeDetector' in window)) {
    try {
      await import('barcode-detector');
      log('Using BarcodeDetector polyfill.');
    } catch (err) {
      globalActionsEl.hidden = true;
      tabGroupEl.style.display = 'none';
      return toastAlert('BarcodeDetector API is not supported by your browser.', 'danger');
    }
  } else {
    log('Using the native BarcodeDetector API.');
  }

  if (!isWebShareSupported()) {
    document.querySelectorAll('web-share').forEach(el => {
      el.hidden = true;
      el.disabled = true;
    });
  }

  const { value: history = [] } = await getHistory();

  renderHistoryList(history);

  capturePhotoEl.addEventListener('capture-photo:video-play', evt => {
    scanFrameEl.hidden = false;
    resizeScanFrame(evt.detail.video);
    
    // Ensure we have the video element reference
    capturePhotoVideoEl = evt.detail.video || capturePhotoEl.shadowRoot?.querySelector('video');
    log('Video element initialized:', !!capturePhotoVideoEl);
    
    scan();

    const trackSettings = capturePhotoEl.getTrackSettings();
    const trackCapabilities = capturePhotoEl.getTrackCapabilities();
    const zoomLevelEl = document.getElementById('zoomLevel');

    if (trackSettings?.zoom && trackCapabilities?.zoom) {
      const zoomControls = document.getElementById('zoomControls');
      const minZoom = trackCapabilities?.zoom?.min || 0;
      const maxZoom = trackCapabilities?.zoom?.max || 10;
      let currentZoom = trackSettings?.zoom || 1;

      zoomControls.hidden = false;
      zoomLevelEl.textContent = currentZoom;

      zoomControls.addEventListener('click', evt => {
        const zoomInBtn = evt.target.closest('[data-action="zoom-in"]');
        const zoomOutBtn = evt.target.closest('[data-action="zoom-out"]');

        if (zoomInBtn && currentZoom < maxZoom) {
          currentZoom += 0.5;
        }

        if (zoomOutBtn && currentZoom > minZoom) {
          currentZoom -= 0.5;
        }

        zoomLevelEl.textContent = currentZoom;

        capturePhotoEl.zoom = currentZoom;
      });
    }
  }, {
    once: true
  });

  capturePhotoEl.addEventListener('capture-photo:error', evt => {
    const error = evt.detail.error;

    if (error.name === 'NotFoundError') {
      // If the browser cannot find all media tracks with the specified types that meet the constraints given.
      return;
    }

    const errorMessage = error.name === 'NotAllowedError'
      ? 'Permission to use webcam was denied or video Autoplay is disabled. Reload the page to give appropriate permissions to webcam.'
      : error.message;

    cameraPanel.innerHTML = /* html */`<div class="alert alert-danger" role="alert" style="margin: 0;">${errorMessage}</div>`;
  }, {
    once: true
  });

  CapturePhoto.defineCustomElement();

  dropzoneEl.accept = ACCEPTED_MIME_TYPES.join(',');

  // Wait for custom element to be fully initialized before accessing shadow DOM
  let capturePhotoVideoEl;
  
  // Try to get video element, with fallback for timing issues
  const getVideoElement = () => {
    if (!capturePhotoVideoEl) {
      capturePhotoVideoEl = capturePhotoEl.shadowRoot?.querySelector('video');
    }
    return capturePhotoVideoEl;
  };

  const formats = await window.BarcodeDetector.getSupportedFormats();
  const barcodeDetector = new window.BarcodeDetector({ formats });
  const { value: settings = {} } = await getSettings();

  Object.entries(settings).forEach(([key, value]) => {
    const settingInput = settingsForm.querySelector(`[name="${key}"]`);
    if (settingInput) {
      settingInput.checked = value;
    }
  });

  if (Array.isArray(formats) && formats.length > 0) {
    supportedFormatsEl.textContent = `Supported formats: ${formats.join(', ')}`;
  }

  const beep = (() => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext || window.audioContext);

    if (!audioCtx) {
      return;
    }

    return async (duration, frequency, volume, type, callback) => {
      const { value: settings } = await getSettings();

      if (!settings?.beep) {
        return;
      }

      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);

      if (volume) {
        gainNode.gain.value = volume;
      }

      if (frequency) {
        oscillator.frequency.value = frequency;
      }

      if (type) {
        oscillator.type = type;
      }

      if (typeof callback === 'function') {
        oscillator.onended = callback;
      }

      oscillator.start(audioCtx.currentTime);
      oscillator.stop(audioCtx.currentTime + ((duration || 500) / 1000));
    };
  })();

  function renderHistoryList(data) {
    historyList.innerHTML = '';

    if (!Array.isArray(data) || !data.length) {
      historyList.innerHTML = '<li class=>There are no saved items in history.</li>';
      deleteHistoryBtn.style.display = 'none';
    } else {
      deleteHistoryBtn.style.display = 'block';

      data.forEach(item => {
        const li = document.createElement('li');
        li.setAttribute('data-value', item);

        let historyItem;

        try {
          new URL(item);
          historyItem = document.createElement('a');
          historyItem.href = item;
          historyItem.setAttribute('target', '_blank');
          historyItem.setAttribute('rel', 'noreferrer noopener');
        } catch (err) {
          historyItem = document.createElement('span');
        }

        historyItem.textContent = item;
        historyItem.setAttribute('title', item);

        const actionsEl = document.createElement('div');
        actionsEl.className = 'history-modal__actions';

        const copyBtn = document.createElement('custom-clipboard-copy');
        copyBtn.title = 'Copy to clipboard';
        copyBtn.setAttribute('only-icon', '');
        copyBtn.setAttribute('value', item);
        actionsEl.appendChild(copyBtn);

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'history-modal__delete-action';
        removeBtn.title = 'Remove from history';
        removeBtn.setAttribute('data-action', 'delete');
        removeBtn.innerHTML = /* html */`
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
          </svg>
        `;
        actionsEl.appendChild(removeBtn);

        li.appendChild(historyItem);
        li.appendChild(actionsEl);
        historyList.appendChild(li);
      });
    }
  }

  async function addToHistory(item) {
    const { value: settings } = await getSettings();

    if (!item || !settings?.addToHistory) {
      return;
    }

    const { value: history = [], error: getHistoryError } = await getHistory();

    if (!getHistoryError && !history.find(h => h === item)) {
      const data = [...history, item];

      const { error: setHistoryError } = await setHistory(data);

      if (!setHistoryError) {
        renderHistoryList(data);
      }
    }
  }

  async function removeFromHistory(value) {
    if (!value) {
      return;
    }

    const { value: history = [], error: getHistoryError } = await getHistory();

    if (!getHistoryError) {
      const data = history.filter(item => item !== value);

      const { error: setHistoryError } = await setHistory(data);

      if (!setHistoryError) {
        renderHistoryList(data);
      }
    }
  }

  async function emptyHistory() {
    const { error: setHistoryError } = await setHistory([]);

    if (!setHistoryError) {
      renderHistoryList([]);
    }
  }

  async function vibrate(duration = 100) {
    const { value: settings } = await getSettings();

    if (typeof window.navigator.vibrate !== 'function' || !settings?.vibrate) {
      return;
    }

    try {
      window.navigator.vibrate(duration);
    } catch {
      // Fail silently...
    }
  }

  function resizeScanFrame(videoEl) {
    if (!videoEl) {
      return;
    }

    const rect = videoEl.getBoundingClientRect();

    scanFrameEl.style.cssText = `width: ${rect.width}px; height: ${rect.height}px`;
  }

  function emptyResults(resultDialog) {
    resultDialog?.querySelector('.results__item')?.remove();
  }

  async function createResult(value, resultDialog) {
    if (!value || !resultDialog) {
      console.error('createResult: missing value or resultDialog');
      return;
    }

    emptyResults(resultDialog);

    let resultItem;

    try {
      const { value: settings } = await getSettings();

      new URL(value);
      resultItem = document.createElement('a');
      resultItem.href = value;

      if (!settings?.openWebPageSameTab) {
        resultItem.setAttribute('target', '_blank');
        resultItem.setAttribute('rel', 'noreferrer noopener');
      }

      if (settings?.openWebPage) {
        resultItem.click();
      }
    } catch (err) {
      resultItem = document.createElement('span');
    }

    resultItem.className = 'results__item';
    resultItem.classList.toggle('results__item--no-barcode', value === NO_BARCODE_DETECTED);
    resultItem.textContent = value;

    resultDialog.insertBefore(resultItem, resultDialog.querySelector('.results__actions'));

    const clipboarCopyEl = resultDialog.querySelector('custom-clipboard-copy');
    const webShareEl = resultDialog.querySelector('web-share');
    const isValidValue = value !== NO_BARCODE_DETECTED;

    if (clipboarCopyEl) {
      clipboarCopyEl.disabled = !isValidValue;
      clipboarCopyEl.hidden = !isValidValue;
    }

    if (webShareEl && isWebShareSupported()) {
      webShareEl.disabled = !isValidValue;
      webShareEl.hidden = !isValidValue;

      if (isValidValue) {
        webShareEl.setAttribute('share-text', value);
      } else {
        webShareEl.removeAttribute('share-text');
      }
    }

    resultDialog.show();
  }

  function detectBarcode(source) {
    return new Promise((resolve, reject) => {
      barcodeDetector.detect(source).then(results => {
        if (Array.isArray(results) && results.length > 0) {
          resolve(results[0]);
        } else {
          reject({
            message: 'Could not detect barcode from provided source.'
          });
        }
      }).catch(err => {
        reject(err);
      });
    });
  }

  async function scan() {
    scanInstructionsEl.hidden = false;

    try {
      let barcode = {};
      const videoEl = getVideoElement();
      if (!videoEl) {
        console.error('Video element not found in scan()');
        if (shouldRepeatScan) {
          rafId = window.requestAnimationFrame(() => scan());
        }
        return;
      }
      
      // Check if video is actually playing
      if (videoEl.readyState < 2) {
        if (shouldRepeatScan) {
          rafId = window.requestAnimationFrame(() => scan());
        }
        return;
      }
      
      barcode = await detectBarcode(videoEl);
      
      // Ensure barcode has valid data
      if (!barcode || !barcode.rawValue) {
        throw new Error('No rawValue in detected barcode');
      }
      
      // Barcode successfully detected! Log it.
      console.log('✓ Barcode detected:', barcode.rawValue);
      
      window.cancelAnimationFrame(rafId);
      emptyResults(cameraResultsEl);
      createResult(barcode.rawValue, cameraResultsEl);
      addToHistory(barcode.rawValue);
      
      // Handle fridge integration
      handleBarcodeDetected(barcode.rawValue);
      
      scanInstructionsEl.hidden = true;
      scanBtn.hidden = false;
      scanFrameEl.hidden = true;
      beep(200, 860, 0.03, 'square');
      vibrate();
      return;
    } catch (err) {
      // Silently continue scanning (no barcode found yet)
    }

    if (shouldRepeatScan) {
      rafId = window.requestAnimationFrame(() => scan());
    }
  }

  function handleFileSelect(file) {
    if (!file) {
      return;
    }

    const image = new Image();
    const reader = new FileReader();

    reader.onload = evt => {
      const data = evt.target.result;

      image.onload = async () => {
        try {
          const barcode = await detectBarcode(image);
          emptyResults(fileResultsEl);
          createResult(barcode.rawValue, fileResultsEl);
          addToHistory(barcode.rawValue);
          
          // Handle fridge integration
          handleBarcodeDetected(barcode.rawValue);
          
          beep(200, 860, 0.03, 'square');
          vibrate();
        } catch (err) {
          emptyResults(fileResultsEl);
          createResult(NO_BARCODE_DETECTED, fileResultsEl);
        }
      };

      image.src = data;

      dropzoneEl.replaceChildren();

      const preview = document.createElement('div');
      preview.className = 'dropzone-preview';

      const imageWrapper = document.createElement('div');
      imageWrapper.className = 'dropzone-preview__image-wrapper';

      const fileNameWrapper = document.createElement('div');
      fileNameWrapper.className = 'dropzone-preview__file-name';
      fileNameWrapper.textContent = file.name;

      imageWrapper.appendChild(image);
      preview.appendChild(imageWrapper);
      preview.appendChild(fileNameWrapper);
      dropzoneEl.prepend(preview);
    };

    reader.readAsDataURL(file);
  }

  function log(...args) {
    process.env.NODE_ENV === 'development' && console.log(...args);
  }

  scanBtn.addEventListener('click', () => {
    scanBtn.hidden = true;
    scanFrameEl.hidden = false;
    emptyResults(cameraResultsEl);
    cameraResultsEl.close();
    scan();
  });

  tabGroupEl.addEventListener('a-tab-show', debounce(evt => {
    const tabId = evt.detail.tabId;

    if (tabId === 'cameraTab') {
      shouldRepeatScan = true;

      // Get the latest instance of capture-photo element to ensure we don't use the cached one.
      const capturePhotoEl = document.querySelector('capture-photo');

      if (
        capturePhotoEl // Assumes that element exists; it might not be the case if the user is using a browser that does not support the BarcodeDetector API.
        && !capturePhotoEl.loading
        && !cameraResultsEl.querySelector('.results__item')
      ) {
        scan();
      }

      if (capturePhotoEl != null && typeof capturePhotoEl.startVideoStream === 'function') {
        capturePhotoEl.startVideoStream();
      }
    }

    if (tabId === 'fileTab') {
      shouldRepeatScan = false;

      if (capturePhotoEl != null && typeof capturePhotoEl.stopVideoStream === 'function') {
        capturePhotoEl.stopVideoStream();
      }
    }
  }, 250));

  dropzoneEl.addEventListener('files-dropzone-drop', evt => {
    handleFileSelect(evt.detail.acceptedFiles[0]);
  });

  resizeObserverEl.addEventListener('resize-observer:resize', () => {
    resizeScanFrame(capturePhotoEl.shadowRoot.querySelector('video'));
  });

  settingsBtn.addEventListener('click', () => {
    settingsDialog.showModal();
  });

  historyBtn.addEventListener('click', () => {
    historyDialog.showModal();
  });

  historyDialog.addEventListener('click', evt => {
    if (evt.target === evt.currentTarget) {
      historyDialog.close();
    }
  });

  settingsDialog.addEventListener('click', evt => {
    if (evt.target === evt.currentTarget) {
      settingsDialog.close();
    }
  });

  settingsForm.addEventListener('change', evt => {
    const settings = {};
    const checkboxes = evt.currentTarget.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(item => settings[item.name] = item.checked);
    setSettings(settings);
  });

  historyList.addEventListener('click', evt => {
    const target = evt.target;

    if (target.closest('[data-action="delete"]')) {
      if (window.confirm('Delete item from history?')) {
        removeFromHistory(target.closest('li').dataset.value);
      }
    }
  });

  deleteHistoryBtn.addEventListener('click', () => {
    if (window.confirm('Are you sure you want to empty history?')) {
      emptyHistory();
    }
  });

  // ==========================================
  // FRIDGE FUNCTIONALITY
  // ==========================================

  function initFridgeUI() {
    const currentCode = getCurrentFridgeCode();
    updateFridgeButtonState(currentCode);

    // Fridge button click
    fridgeBtn?.addEventListener('click', () => {
      const code = getCurrentFridgeCode();
      if (code) {
        showFridgeContents();
      } else {
        showFridgeSetup();
      }
      fridgeDialog?.showModal();
    });

    // Close dialog on backdrop click
    fridgeDialog?.addEventListener('click', evt => {
      if (evt.target === evt.currentTarget) {
        fridgeDialog.close();
      }
    });

    // Tab switching
    document.querySelectorAll('.fridge-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.fridge-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.fridge-tab-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab + 'Tab')?.classList.add('active');
      });
    });

    // Join fridge form
    document.getElementById('joinFridgeForm')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const code = document.getElementById('joinCode')?.value?.trim().toLowerCase();
      const password = document.getElementById('joinPassword')?.value || null;

      if (!code) return;

      try {
        const result = await joinFridge(code, password);
        if (result.success) {
          setCurrentFridgeCode(code);
          updateFridgeButtonState(code);
          showFridgeContents();
          toastAlert('Koblet til kjøleskap: ' + code, 'success');
        } else {
          toastAlert(result.error || 'Kunne ikke koble til', 'danger');
        }
      } catch (err) {
        toastAlert('Feil: ' + err.message, 'danger');
      }
    });

    // Create fridge form
    document.getElementById('createFridgeForm')?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const code = document.getElementById('createCode')?.value?.trim().toLowerCase();
      const password = document.getElementById('createPassword')?.value || null;

      if (!code) return;

      try {
        const result = await createFridge(code, password);
        if (result.success) {
          setCurrentFridgeCode(code);
          updateFridgeButtonState(code);
          showFridgeContents();
          toastAlert('Kjøleskap opprettet: ' + code, 'success');
        } else {
          toastAlert(result.error || 'Kunne ikke opprette', 'danger');
        }
      } catch (err) {
        toastAlert('Feil: ' + err.message, 'danger');
      }
    });

    // Leave fridge button
    document.getElementById('leaveFridgeBtn')?.addEventListener('click', () => {
      setCurrentFridgeCode(null);
      updateFridgeButtonState(null);
      showFridgeSetup();
      toastAlert('Frakoblet kjøleskap', 'info');
    });

    // Product form submit
    productForm?.addEventListener('submit', async (e) => {
      e.preventDefault();
      await handleAddProduct();
    });

    // Skip product button
    document.getElementById('skipProductBtn')?.addEventListener('click', () => {
      productDialog?.close();
    });

    // Product dialog backdrop click
    productDialog?.addEventListener('click', evt => {
      if (evt.target === evt.currentTarget) {
        productDialog.close();
      }
    });
  }

  function updateFridgeButtonState(code) {
    if (fridgeBtnText) {
      fridgeBtnText.textContent = code ? code : 'Kjøleskap';
    }
    if (fridgeBtn) {
      fridgeBtn.classList.toggle('connected', !!code);
    }
  }

  function showFridgeSetup() {
    if (fridgeSetup) fridgeSetup.style.display = 'block';
    if (fridgeConnected) fridgeConnected.style.display = 'none';
  }

  async function showFridgeContents() {
    const code = getCurrentFridgeCode();
    if (!code) {
      showFridgeSetup();
      return;
    }

    if (fridgeSetup) fridgeSetup.style.display = 'none';
    if (fridgeConnected) fridgeConnected.style.display = 'block';
    if (currentFridgeCodeEl) currentFridgeCodeEl.textContent = code;

    // Load items
    await refreshFridgeItems();
  }

  async function refreshFridgeItems() {
    const code = getCurrentFridgeCode();
    if (!code || !fridgeItemsList) return;

    try {
      const items = await getFridgeItems(code);
      fridgeItemsList.innerHTML = '';

      if (!items || items.length === 0) {
        if (emptyFridgeMessage) emptyFridgeMessage.style.display = 'block';
        return;
      }

      if (emptyFridgeMessage) emptyFridgeMessage.style.display = 'none';

      items.forEach(item => {
        const li = document.createElement('li');
        li.className = 'fridge-item';
        li.innerHTML = `
          <span class="fridge-item-name">${item.productName || item.barcode}</span>
          <div class="fridge-item-controls">
            <button type="button" class="qty-btn" data-action="decrease" data-id="${item.id}">−</button>
            <span class="fridge-item-qty">${item.quantity}</span>
            <button type="button" class="qty-btn" data-action="increase" data-id="${item.id}">+</button>
            <button type="button" class="remove-btn" data-action="remove" data-id="${item.id}">🗑</button>
          </div>
        `;
        fridgeItemsList.appendChild(li);
      });

      // Add event listeners for quantity buttons
      fridgeItemsList.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
          const id = btn.dataset.id;
          const action = btn.dataset.action;
          const item = items.find(i => i.id === id);
          if (!item) return;

          const newQty = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
          if (newQty < 1) {
            if (confirm('Fjerne varen fra kjøleskapet?')) {
              await removeFromFridge(code, id);
            }
          } else {
            await updateFridgeItemQuantity(code, id, newQty);
          }
          await refreshFridgeItems();
        });
      });

      fridgeItemsList.querySelectorAll('.remove-btn').forEach(btn => {
        btn.addEventListener('click', async () => {
          if (confirm('Fjerne varen fra kjøleskapet?')) {
            await removeFromFridge(code, btn.dataset.id);
            await refreshFridgeItems();
          }
        });
      });

    } catch (err) {
      console.error('Error loading fridge items:', err);
      toastAlert('Kunne ikke laste innhold', 'danger');
    }
  }

  // Called when a barcode is detected
  async function handleBarcodeDetected(barcode) {
    const code = getCurrentFridgeCode();
    if (!code) {
      // Not connected to a fridge, just show barcode normally
      return;
    }

    // Check if product exists in our database
    const product = await getProductByBarcode(barcode);

    if (product) {
      // Product exists, add directly to fridge
      try {
        await addToFridge(code, barcode, product.name, 1);
        toastAlert(`${product.name} lagt til i kjøleskapet`, 'success');
      } catch (err) {
        toastAlert('Kunne ikke legge til: ' + err.message, 'danger');
      }
    } else {
      // Product doesn't exist, ask for name
      showProductDialog(barcode);
    }
  }

  function showProductDialog(barcode) {
    if (!productDialog || !productBarcodeInput || !productNameInput || !productQuantityInput) return;
    
    productBarcodeInput.value = barcode;
    productNameInput.value = '';
    productQuantityInput.value = '1';
    productDialog.showModal();
    productNameInput.focus();
  }

  async function handleAddProduct() {
    const barcode = productBarcodeInput?.value;
    const name = productNameInput?.value?.trim();
    const quantity = parseInt(productQuantityInput?.value) || 1;
    const code = getCurrentFridgeCode();

    if (!barcode || !name || !code) return;

    try {
      // Save product to database for future use
      await createProduct(barcode, name);
      
      // Add to fridge
      await addToFridge(code, barcode, name, quantity);
      
      productDialog?.close();
      toastAlert(`${name} lagt til i kjøleskapet`, 'success');
    } catch (err) {
      toastAlert('Feil: ' + err.message, 'danger');
    }
  }
}());
