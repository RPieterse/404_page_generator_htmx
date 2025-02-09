const {renderColorStyleTag} = require('./components/color-style');

module.exports.renderIndexPreview = (props) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <title>${props.title}</title>
    ${renderColorStyleTag(props.colors)}
</head>
<body>

${props.layout}

</body>
</html>
`;