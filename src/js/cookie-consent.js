/**
 * Cookie Consent Banner
 * GDPR-compliant consent management for analytics
 */

const CONSENT_KEY = 'cookie_consent';
const CONSENT_VERSION = '1'; // Increment if privacy policy changes significantly

/**
 * Check if user has given consent
 */
export function hasConsent() {
  const consent = localStorage.getItem(CONSENT_KEY);
  if (!consent) return null;
  
  try {
    const parsed = JSON.parse(consent);
    // Check if consent version matches
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed.accepted;
  } catch {
    return null;
  }
}

/**
 * Save user consent choice
 */
export function saveConsent(accepted) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify({
    accepted,
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString()
  }));
}

/**
 * Initialize and show cookie consent banner if needed
 */
export function initCookieConsent() {
  const consent = hasConsent();
  
  // If consent already given, don't show banner
  if (consent !== null) {
    return;
  }
  
  // Create and show banner
  const banner = createBanner();
  document.body.appendChild(banner);
  
  // Animate in
  requestAnimationFrame(() => {
    banner.classList.add('visible');
  });
}

/**
 * Create the consent banner element
 */
function createBanner() {
  const banner = document.createElement('div');
  banner.id = 'cookieConsentBanner';
  banner.className = 'cookie-consent-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Cookie consent');
  
  banner.innerHTML = `
    <div class="cookie-consent-content">
      <p>
        Vi bruker Firebase for å lagre kjøleskapsdataene dine og kan bruke analyseverktøy for å forbedre appen.
        <a href="privacy.html" target="_blank">Les vår personvernerklæring</a>
      </p>
      <div class="cookie-consent-buttons">
        <button type="button" id="cookieAccept" class="cookie-btn cookie-btn-accept">
          Godta
        </button>
        <button type="button" id="cookieDecline" class="cookie-btn cookie-btn-decline">
          Bare nødvendige
        </button>
      </div>
    </div>
  `;
  
  // Add event listeners
  banner.querySelector('#cookieAccept').addEventListener('click', () => {
    saveConsent(true);
    hideBanner(banner);
    // Here you could initialize analytics if user accepts
    // initAnalytics();
  });
  
  banner.querySelector('#cookieDecline').addEventListener('click', () => {
    saveConsent(false);
    hideBanner(banner);
  });
  
  return banner;
}

/**
 * Hide and remove the banner
 */
function hideBanner(banner) {
  banner.classList.remove('visible');
  banner.addEventListener('transitionend', () => {
    banner.remove();
  }, { once: true });
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCookieConsent);
} else {
  initCookieConsent();
}
