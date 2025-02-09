module.exports.renderModal = (props) => {

    return `
        <dialog class="i-modal" open>
            <h2>${props.title}</h2>
           
            <div class="i-dialog-actions">
                ${props.actions.join('')}
            </div>
             <div class="scrollable">
                <div class="i-dialog-content">
                    ${props.content.join('')}
                </div>
            </div>
        </dialog>
        
        <style>
            dialog.i-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 1rem;
                background-color: rgba(255,255,255,0.7);
                backdrop-filter: blur(5px);
            }
            
            .i-modal .scrollable {
                max-height: 80%;
                overflow-y: auto;
            }
                        
            .i-modal h2 {
                margin: 0;
                font-size: 1.5rem;
                color: #171717;
            }
            
            .i-dialog-actions {
                display: flex;
                gap: 1rem;
            }
    `;
};