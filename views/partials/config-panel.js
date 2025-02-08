const {renderCard} = require('../components/card');
const {renderActionRow} = require('./action-row');
const {renderButton} = require('../components/button');
const {renderSecondaryButton} = require('../components/button-secondary');
module.exports.renderConfigPanel = () => `
    ${renderCard(
        'Randomize Config', 
        [
            renderActionRow('Colors', {
                text: 'Generate',
                target: 'style#colors',
                getUrl: '/gen/colors',
                swap: 'outerHTML'
            }),
            renderActionRow('Text', {
                text: 'Generate',
                target: '#text',
                getUrl: '/gen/text',
            }),
            renderActionRow('Image', {
                text: 'Generate',
                target: '#image',
                getUrl: '/gen/image',
            }),
            renderButton('Randomize', '', '/gen/randomize', '', 'afterend'),
            renderSecondaryButton('Download HTML', '', '/gen/html', '', 'afterend'),
        ].join('')
    )}
`