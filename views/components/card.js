module.exports.renderCard = (title, content) => `
    <div class="i-card">
    <h2>${title}</h2>
    <div class="i-card-content"></div>
        ${content}
    </div>
</div>

<style>
    .i-card {
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 0.25rem;
        box-sizing: border-box;
        box-shadow: 0 0 0.5rem rgba(143, 143, 143, 0.1);
        background-color: rgba(255,255,255,0.7);
        display: flex;
        flex-direction: column;
        gap: 8px;
        backdrop-filter: blur(5px);
        width: 100%;
    }

    .i-card h2 {
        margin: 0 0 .1rem;
        font-size: 1.5rem;
        color: #171717;
    }

    .i-card-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
`;