document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get('isActive', ({ isActive }) => {
      const toggleButton = document.getElementById('toggle-active');
      toggleButton.textContent = isActive ? 'Deactivate Theme' : 'Activate Theme';
      toggleButton.style.backgroundColor = isActive ? '#0078d4' : '#f4f4f4';
      toggleButton.style.color = isActive ? 'white' : '#0078d4';
    });
  
    document.getElementById('toggle-active').addEventListener('click', () => {
      chrome.storage.sync.get('isActive', ({ isActive }) => {
        const newState = !isActive;
        chrome.storage.sync.set({ isActive: newState });
        
        const toggleButton = document.getElementById('toggle-active');
        toggleButton.textContent = newState ? 'Deactivate Theme' : 'Activate Theme';
        toggleButton.style.backgroundColor = newState ? '#0078d4' : '#f4f4f4';
        toggleButton.style.color = newState ? 'white' : '#0078d4';
      });
    });
  
    document.getElementById('open-options').addEventListener('click', () => {
      chrome.runtime.openOptionsPage();
    });
  });
  