module.exports.renderSecondaryButton = (text, postUrl, getUrl, target = 'this', swap = 'innerHTML') => {
    let attributes;

    if (postUrl) {
        attributes = `hx-post="${postUrl}"`;
    } else {
        attributes = `hx-get="${getUrl}"`;
    }

    return `
        <button
            class="i-button secondary"
            ${attributes}
            hx-swap="${swap}"
            hx-target="${target}">
            ${text}
        </button>
    
        <style>
            button.i-button.secondary {
                padding: 0.5rem 1rem;
                border: 1px solid mediumpurple;
                border-radius: 0.25rem;
                background-color: transparent;
                color: mediumpurple;
                cursor: pointer;
                transition: background-color 0.2s;
            }
            
            button.i-button.secondary:hover {
                background-color: mediumpurple;
                color: white;
            }
        </style>
    `;
}

