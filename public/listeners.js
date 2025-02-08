document.body.addEventListener('htmx:configRequest', function(evt) {
    const currentValues = {};
    const heading = document.querySelector('#text h1');
    const colors = document.querySelector('#colors');
    const image = document.querySelector('#image img');

    currentValues['heading'] = heading ? heading.dataset.headerTitle : '';
    currentValues['colors'] = colors ? colors.dataset.primaryColor : '';
    currentValues['image'] = image ? image.dataset.imageSrc : '';

    evt.detail.parameters = {
        currentValues,
        ...evt.detail.parameters
    }
});