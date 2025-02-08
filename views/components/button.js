module.exports.renderButton = (text, postUrl, getUrl, target = 'this', swap = 'innerHTML') => {
    let attributes;

    if (postUrl) {
        attributes = `hx-post="${postUrl}"`;
    } else {
        attributes = `hx-get="${getUrl}"`;
    }

    return `
        <button
            class="i-button"
            ${attributes}
            hx-swap="${swap}"
            hx-target="${target}">
            ${text}
        </button>
    
        <style>
            button.i-button {
                padding: 0.5rem 1rem;
                border: none;
                border-radius: 0.25rem;
                background-color: mediumpurple;
                color: white;
                cursor: pointer;
                transition: background-color 0.2s;
            }
            
            button.i-button:hover {
                background-color: rebeccapurple;
            }
        </style>
    `;
}

