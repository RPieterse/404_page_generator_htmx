module.exports.renderColorStyleTag = (props) => {

    return `
        <style id="colors" data-primary-color="${props.primaryColor}">
            :root {
                --primary-color: ${props.primaryColor};
                --secondary-color: ${props.secondaryColor};
                --background-color: ${props.backgroundColor};
            }
            
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                height: 100vh;
                background-color: var(--background-color);
            }
            
            body h1 {
                color: var(--primary-color);
            }
            
            body h3 {
                color: var(--secondary-color);
            }
        </style>`;
};
