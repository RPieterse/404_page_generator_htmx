const {renderConfigPanel} = require('./partials/config-panel');
const {renderColorStyleTag} = require('./components/color-style');
const {renderImage} = require('./components/image');
module.exports.renderIndex = (title, colors, text, image) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <title>${title}</title>
    <script src="htmx.js" defer></script>

    
        ${renderColorStyleTag(colors)}
    </style>

    <style>
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
            color: var(--primary-color);
        }

        .i-config-panel {
            position: fixed;
            top: 0;
            right: 0;
            border-radius: 8px;
            max-width: 400px;
            width: 100%;
            margin: 12px;
        }
        
        @media only screen and (max-width: 600px) {
            .i-config-panel {
                max-width: 100%;
                left: 0;
                right: 0;
                margin: 0;
                padding: 12px;
                box-sizing: border-box;
            }
        }
    </style>
</head>
<body>

<div class="i-config-panel">
    ${renderConfigPanel()}
</div>

<div id="image">${renderImage(image.src, image.alt)}</div>
<p id="text">${text}</p>

</body>
</html>
`;