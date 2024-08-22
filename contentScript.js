chrome.storage.sync.get(['includedElements', 'excludedElements', 'isActive'], (data) => {
    if (!data.isActive) return;
  
    const included = data.includedElements || ['body', 'html'];
    const excluded = data.excludedElements || [];
  
    const style = document.createElement('style');
    let css = '';
  
    // Apply styles to included elements
    included.forEach(selector => {
      css += `
        ${selector} {
          background-color: #000 !important;
          color: #fff !important;
          border-color: #fff !important;
          filter: grayscale(100%) contrast(100%) !important;
        }
      `;
    });
  
    // Remove styles from excluded elements
    excluded.forEach(selector => {
      css += `
        ${selector} {
          background-color: initial !important;
          color: initial !important;
          border-color: initial !important;
          filter: none !important;
        }
      `;
    });
  
    style.innerHTML = css;
    document.head.appendChild(style);
  });
  