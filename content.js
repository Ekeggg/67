const SELECTORS = {
  'amazon': [
    '.basisPrice',
    '.dealBadge',
    '.basisPriceLegalMessage',
    '.savingPriceOverride',
  ],
};

function strip() {
  chrome.storage.sync.get('enabled', ({ enabled }) => {
    if (enabled === false) return;
    const site = Object.keys(SELECTORS).find(s => location.hostname.includes(s));
    if (!site) return;
    SELECTORS[site].forEach(selector => {
      document.querySelectorAll(selector).forEach(el => el.remove());
    });
  });
}

strip();
new MutationObserver(strip).observe(document.body, { childList: true, subtree: true });