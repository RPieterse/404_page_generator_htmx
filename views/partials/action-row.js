const {renderButton} = require('../components/button');

module.exports.renderActionRow = (props) => {

        return `
            <div class="i-row">
                <p>${props.title}</p>
                ${renderButton(props.button)}
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
}