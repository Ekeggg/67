const toggle = document.getElementById('toggle');

chrome.storage.sync.get('enabled', ({ enabled }) => {
  toggle.checked = enabled !== false;
});

toggle.addEventListener('change', () => {
  chrome.storage.sync.set({ enabled: toggle.checked });
});