const {renderButton} = require('../components/button');
module.exports.renderActionRow = (title, { text, target, getUrl, postUrl, swap }) => `
    <div class="i-row">
        <p>${title}</p>
        ${renderButton(text, postUrl, getUrl, target, swap)}
    </div>
    
    <style>
        .i-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1rem;
            width: 100%;
        }
    
        .i-row p {
            margin: 0;
            color: #171717;
        }
    </style>
`;