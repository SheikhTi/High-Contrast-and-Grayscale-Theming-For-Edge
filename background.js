function updateIcon(isActive) {
    const iconPath = isActive ? 'icon-active.png' : 'icon-inactive.png';
    chrome.action.setIcon({
      path: {
        "16": iconPath,
        "48": iconPath,
        "128": iconPath
      }
    });
  }
  
  chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({
      includedElements: ['body', 'html'],
      excludedElements: ['button', 'input[type="button"]', 'input[type="submit"]'],
      isActive: false
    });
  
    updateIcon(false); // Set the initial icon to inactive
  });
  
  // Listen to changes in storage to update the icon
  chrome.storage.onChanged.addListener((changes) => {
    if (changes.isActive) {
      updateIcon(changes.isActive.newValue);
    }
  });
  
