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
                background-color: #000 !important; /* Ensure the background is black */
                color: #FFD700 !important; /* Ensure text color is gold */
                filter: grayscale(0%) !important; /* 0% grayscale for background */
            }
            
            ${selector} div {
                background-color: #000 !important; /* Black background */
                color: #FFD700 !important; /* Gold text color */
                border-color: #FFD700 !important; /* Yellow border color */
                filter: grayscale(0%) !important; /* 0% grayscale for div backgrounds */
            }

            ${selector} div * {
                filter: grayscale(30%) !important; /* 30% grayscale for other elements */
                color: #FFD700 !important; /* Gold text color */
                border-color: #FFD700 !important; /* Yellow border color */
            }

            /* Specific styling for buttons */
            ${selector} button, 
            ${selector} input[type="button"], 
            ${selector} input[type="submit"], 
            ${selector} .button {
                background-color: #000 !important; /* Black button background */
                color: #000 !important; /* Black text color */
                border-color: #FFD700 !important; /* Yellow border color */
                filter: grayscale(30%) !important; /* 30% grayscale for buttons */
            }

            ${selector} button:hover, 
            ${selector} input[type="button"]:hover, 
            ${selector} input[type="submit"]:hover, 
            ${selector} .button:hover {
                background-color: #000 !important; /* Black background on hover */
                color: #FFD700 !important; /* Yellow text color on hover */
                border-color: #FFD700 !important; /* Yellow border color on hover */
                filter: grayscale(30%) !important; /* Maintain 30% grayscale on hover */
            }

            /* Shadow, border, and other classes */
            ${selector} .shadow-sm {
                box-shadow: none !important; /* Remove shadow effect */
            }

            ${selector} .border {
                border-color: #FFD700 !important; /* Ensure border color is yellow */
            }

            ${selector} .rounded, ${selector} .rounded-pill {
                border-radius: 15px !important; /* Consistent border radius */
            }

            ${selector} .bg-warning {
                background-color: #FFD700 !important; /* Yellow background for warning */
                color: #000 !important; /* Black text for contrast */
                filter: grayscale(0%) !important; /* 0% grayscale for background */
            }

            ${selector} .bg-light {
                background-color: #000 !important; /* Black background */
                color: #FFD700 !important; /* Yellow text */
                filter: grayscale(0%) !important; /* 0% grayscale for background */
            }

            ${selector} .text-dark {
                color: #FFD700 !important; /* Yellow text color */
            }

            ${selector} .fw-light {
                font-weight: 300 !important; /* Light font weight */
            }

            ${selector} .fw-lighter {
                font-weight: 200 !important; /* Lighter font weight */
            }

            ${selector} .d-flex {
                display: flex !important; /* Ensure flex display */
            }

            ${selector} .justify-content-between {
                justify-content: space-between !important; /* Space elements between */
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
                box-shadow: initial !important;
                border-radius: initial !important;
                font-weight: initial !important;
                display: initial !important;
                justify-content: initial !important;
            }
        `;
    });

    style.innerHTML = css;
    document.head.appendChild(style);
});
