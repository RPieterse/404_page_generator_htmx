const {renderImage} = require('../components/image');
const {renderHeading} = require('../components/heading');
const {renderSubheading} = require('../components/subheading');
const {renderButton} = require('../components/button');
module.exports = (props) => {

    return `
        <main id="layout" ${!props.preview ? `data-layout-type="vertical"` : ''} hx-swap-oob="true">
            <div id="image">
                ${renderImage(props.image)}
            </div>
            <div id="text">
                ${renderHeading(props.heading)}
                ${renderSubheading(props.subheading)}
                ${renderButton(props.button)}
            </div>
        </main>
        
        <style>
            main {
                display: grid;
                grid-template-columns: 1fr;
                gap: 1rem;
                padding: 1rem;
                max-width: 800px;
                margin: 0 auto;
            }
        </style>
    `
}