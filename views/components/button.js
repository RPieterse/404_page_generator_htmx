module.exports.renderButton = (props) => {
    let attributes;

    if (props.preview) {
        attributes = `
            style="background-color: var(--primary-color); border-color: var(--primary-color);"
        `
    } else {
        if (props.postUrl) {
            attributes = `
            hx-post="${props.postUrl} 
        `;
        } else {
            attributes = `
            hx-get="${props.getUrl}"
        `;
        }

        if (props.swap){
            attributes += ` hx-swap="${props.swap}"`;
        }
        if (props.target) {
            attributes += ` hx-target="${props.target}"`;
        }
    }

    return `
        <button
            class="i-button ${props.secondary ? 'secondary' : 'primary'}"
            ${attributes}">
            ${props.text}
            <img height="15px" width="15px" class="htmx-indicator" src="/assets/images/gifs/spinner.gif">
        </button>
    
        <style>
            button.i-button {
                padding: 0.5rem 1rem;
                border-radius: 0.25rem;
                cursor: pointer;
                transition: background-color 0.2s;
                display: flex;
                gap: 0.5rem;
                justify-content: center;
                align-items: center;
            }
            
            button.i-button.primary {
                 border: 1px solid mediumpurple;
                 background-color: mediumpurple;
                color: white;
            }
            
            button.i-button.secondary {
                border: 1px solid mediumpurple;
                background-color: transparent;
                color: mediumpurple;
            }
            
            button.i-button.primary:hover {
                background-color: rebeccapurple;
                border: 1px solid rebeccapurple;
            }
            
             button.i-button.secondary:hover {
                background-color: mediumpurple;
                color: white;
            }
                    
            .htmx-indicator{
                display:none;
            }
            
            .htmx-request .htmx-indicator{
                opacity: 1;
                display:inline;
            }          
        </style>
    `;
}

