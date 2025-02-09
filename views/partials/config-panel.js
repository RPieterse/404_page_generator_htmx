const {renderCard} = require('../components/card');
const {renderActionRow} = require('./action-row');
const {renderButton} = require('../components/button');

module.exports.renderConfigPanel = (props) => {

    return `
    ${renderCard({
            title: 'Randomize Config',
            content: [
                renderActionRow({
                    title: 'Colors',
                    button: {
                        text: 'Generate',
                        target: 'style#colors',
                        getUrl: '/gen/colors',
                        swap: 'outerHTML',
                    }
                }),
                renderActionRow({
                    title: 'Text',
                    button: {
                        text: 'Generate',
                        target: '#text',
                        getUrl: '/gen/text',
                        params: `{
                            "heading": "${props.heading}",
                        }`
                    }
                }),
                renderActionRow({
                    title: 'Image',
                    button: {
                        text: 'Generate',
                        target: '#image',
                        getUrl: '/gen/image',
                    }
                }),
                renderButton({
                    text: 'Randomize',
                    getUrl: '/gen/randomize',
                    swap: 'afterend',
                }),
                renderButton({
                    text: 'Generate HTML',
                    getUrl: '/gen/html',
                    swap: 'beforeend',
                    target: 'body',
                    secondary: true
                }),
            ]
        }
    )}`;
};