module.exports.renderColorStyleTag = (colors) => `
<style id="colors">
:root {
            --primary-color: ${colors.primaryColor};
            --secondary-color: ${colors.secondaryColor};
            --background-color: ${colors.backgroundColor};
    }
</style>`;
