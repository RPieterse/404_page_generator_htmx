const {renderConfigPanel} = require('./partials/config-panel');
const {renderColorStyleTag} = require('./components/color-style');

module.exports.renderIndex = (props) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <title>${props.title}</title>
    <script src="htmx.js" defer></script>
    ${renderColorStyleTag(props.colors)}
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
        }
        
        body h1 {
            color: var(--primary-color);
        }
        
        body h3 {
            color: var(--secondary-color);
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
    
    <script src="listeners.js" defer></script>
</head>
<body>

<div class="i-config-panel">
    ${renderConfigPanel(props)}
</div>

${props.layout}

</body>
</html>
`;