module.exports.renderColorStyleTag = (props) => {

    return `
        <style id="colors" data-primary-color="${props.primaryColor}">
            :root {
                --primary-color: ${props.primaryColor};
                --secondary-color: ${props.secondaryColor};
                --background-color: ${props.backgroundColor};
            }
        </style>`;
};
