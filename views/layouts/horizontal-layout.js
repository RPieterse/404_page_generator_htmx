const {renderImage} = require('../components/image');
const {renderHeading} = require('../components/heading');
const {renderSubheading} = require('../components/subheading');
const {renderButton} = require('../components/button');
module.exports = (props) => {

    return `
        <main id="layout" hx-swap-oob="true">
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
                display: flex;
                flex-direction: row;
                gap: 1rem;
                padding: 1rem;
                max-width: 800px;
                margin: 0 auto;
            }
            
            main #text {
                display: flex;
                flex-direction: column;
                align-self: center;
            }
            
            @media only screen and (max-width: 600px) {
                main {
                    flex-direction: column;
                }
            }
        </style>
    `
}