(function() {
    // Create credit container
    const creditContainer = document.createElement('div');
    creditContainer.className = 'credit-container';
    
    // Create the credit link
    const creditLink = document.createElement('a');
    creditLink.href = 'https://iframeweb.com?utm_source=tool_credit';
    creditLink.target = '_blank'; // Opens in a new tab
    creditLink.rel = 'noopener noreferrer'; // Security for new tab
    
    // Create the credit text
    const creditText = document.createElement('span');
    creditText.textContent = '⚡ by ';
    
    // Create the logo image
    const logo = document.createElement('img');
    logo.src = 'https://iframeweb.com/images/logo-dark.svg'; 
    logo.alt = 'Tool Logo';
    
    // Set fallback for logo
    logo.onerror = function() {
      this.src = 'https://iframeweb.com/images/logo-dark.svg';
      this.alt = 'Fallback Logo';
    };
    
    // Append text and image to link
    creditLink.appendChild(creditText);
    creditLink.appendChild(logo);
    
    // Append link to container
    creditContainer.appendChild(creditLink);
    
    // Append container to the body
    document.body.appendChild(creditContainer);
    
    // Apply styles to credit container
    const style = document.createElement('style');
    style.textContent = `
    .credit-container {
        position: fixed;
        left: 10px;
        bottom: 10px;
        /* transform-origin: left bottom; */
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: flex;
        align-items: center;
        font-size: 12px;
        background-color: #303030;
        opacity: 0.9;
        color: var(--base-2, #d9d9d9);
    }
      .credit-container a {
        color: var(--base-2, #d9d9d9);
        text-decoration: none; 
        display: flex;
        align-items: center;
      }

      .credit-container img {
        height: 14px; 
        margin-left: 5px;
      }
      .credit-container span {
        font-weight: bold;
      }
    `;
    
    document.head.appendChild(style);
})();
