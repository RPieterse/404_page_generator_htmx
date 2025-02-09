module.exports.renderHeading = (props) => {

    return `
        <h1 ${!props.preview ? `data-header-title="${props.title}"` : ''}>${props.title}</h1>
    `
}