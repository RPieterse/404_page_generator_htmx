module.exports.renderImage = (props) => {
    return `
        <img class="i-image" ${!props.preview ? `data-image-src="${props.src}"` : ''} src="${props.src}" alt="${props.alt}" />
        
        <style>
            img.i-image {
                height: 30vh;
                width: 100%;
                object-fit: cover;
            }
        </style>
    `;
};