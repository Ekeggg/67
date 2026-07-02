const SELECTORS = {
  'amazon': [
    '.basisPrice',
    '.dealBadge',
    '.basisPriceLegalMessage',
    '.savingPriceOverride',
  ],
  // Add more sites here e.g:
  // 'shopee.sg': ['.selector-one', '.selector-two'],
};

function strip() {
  const site = Object.keys(SELECTORS).find(s => location.hostname.includes(s));
  if (!site) return;

  SELECTORS[site].forEach(selector => {
    document.querySelectorAll(selector).forEach(el => el.remove());
  });
}

strip();

new MutationObserver(strip).observe(document.body, { childList: true, subtree: true });