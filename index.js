const express = require('express');
const {renderIndex} = require('./views');
const {renderColorStyleTag} = require('./views/components/color-style');
const {renderImage} = require('./views/components/image');
const {renderHeading} = require('./views/components/heading');
const {renderSubheading} = require('./views/components/subheading');
const {renderButton} = require('./views/components/button');
const {renderModal} = require('./views/components/modal');
const colorSchemes = require('./data/colors');
const textSchemes = require('./data/sentences');
const images = require('./data/images');
const colors = require('./data/colors');
const sentences = require('./data/sentences');
const {renderIndexPreview} = require('./views/index-preview');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

function generateRandomLayout() {
    return Math.random() > 0.5 ?
        require('./views/layouts/horizontal-layout.js') :
        require('./views/layouts/vertical-layout.js');
}

function generateRandomColor(primaryColor) {
    const colorSchemes = require('./data/colors.js');
    let randomColor = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];

    while (primaryColor === randomColor.primaryColor) {
        randomColor = colors[Math.floor(Math.random() * colors.length)];
    }

    return randomColor;
}

function generateRandomText(heading) {
    const textSchemes = require('./data/sentences.js');
    let randomText = textSchemes[Math.floor(Math.random() * textSchemes.length)];

    while (heading === randomText.heading) {
        randomText = sentences[Math.floor(Math.random() * sentences.length)];
    }

    return randomText;
}

function generateRandomImage(image) {
    const images = require('./data/images.js');
    let randomImage = images[Math.floor(Math.random() * images.length)];

    while (image === randomImage) {
        randomImage = images[Math.floor(Math.random() * images.length)];
    }

    return randomImage;
}

function getValueOrDefault(key, value, defaultValue) {
    switch (key) {
        case 'primaryColor':
            const colors = require('./data/colors.js');
            return colors.find(color => color.primaryColor === value) || defaultValue;
        case 'heading':
            const sentences = require('./data/sentences.js');
            return sentences.find(sentence => sentence.heading === value) || defaultValue;
        case 'image':
            const images = require('./data/images.js');
            return images.find(img => img === value) || defaultValue;
        case 'layout':
            return value === 'horizontal' ? require('./views/layouts/horizontal-layout.js') : require('./views/layouts/vertical-layout.js');
        default:
            return defaultValue;
    }
}

function escapeHTML(html) {
    return html
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Routes
app.get('/', (req, res) => {
    const currentValues = JSON.parse(req.query.currentValues || '{}');

    const randomLayout = generateRandomLayout(currentValues.layout);
    const randomColor = generateRandomColor(currentValues.primaryColor);
    const randomText = generateRandomText(currentValues.heading);
    const randomImage = generateRandomImage(currentValues.image);

    res.send(renderIndex({
        title: '404 Not Found',
        colors: randomColor,
        layout: randomLayout({
            image: {
                src: randomImage,
                alt: 'Random Image',
            },
            heading: {
                title: randomText.heading,
            },
            subheading: {
                title: randomText.subheading,
            },
            button: {
                text: randomText.backToHomeText,
                preview: true,
            },
        }),
    }));
});

app.get('/gen/colors', (req, res) => {
    const params = JSON.parse(req.query.currentValues || '{}');

    setTimeout(() => {
        res.send(renderColorStyleTag(generateRandomColor(params.primaryColor)));
    }, 200);
});

app.get('/gen/text', (req, res) => {
    const params = JSON.parse(req.query.currentValues || '{}');
    const randomText = generateRandomText(params.heading);

    setTimeout(() => {
        res.send(`
            ${renderHeading({title: randomText.heading})}
            ${renderSubheading({title: randomText.subheading})}
            ${renderButton({
                text: randomText.backToHomeText,
                preview: true,
            })}
        `);
    }, 200);
});

app.get('/gen/image', (req, res) => {
    const params = JSON.parse(req.query.currentValues || '{}');

    setTimeout(() => {
        res.send(renderImage({
            src: generateRandomImage(params.image),
            alt: 'Random Image',
        }));
    }, 200);
});

app.get('/gen/randomize', (req, res) => {
    res.setHeader('HX-Redirect', '/');
    setTimeout(() => {
        res.send();
    }, 200);
});

app.get('/gen/html', (req, res) => {
    const params = JSON.parse(req.query.currentValues || '{}');

    const layout = getValueOrDefault('layout', params.layout, require('./views/layouts/horizontal-layout.js'));
    const sentence = getValueOrDefault('heading', params.heading, textSchemes[0]);
    const image = getValueOrDefault('image', params.image, images[0]);
    const colors = getValueOrDefault('primaryColor', params.primaryColor, colorSchemes[0]);

    const htmlForLayout = renderIndexPreview({
        title: '404 Not Found',
        colors: colors,
        layout: layout({
            preview: true,
            image: {
                src: image,
                alt: 'Random Image',
                preview: true,
            },
            heading: {
                title: sentence.heading,
                preview: true,
            },
            subheading: {
                title: sentence.subheading,
            },
            button: {
                text: sentence.backToHomeText,
                preview: true,
            },
        }),
    })

    setTimeout(() => {
        res.send(renderModal({
            title: 'Generated HTML',
            content: [
                `<div class="generated-html">
                    <code><pre>${escapeHTML(htmlForLayout)}</pre></code>
                </div>`,
            ],
            actions: [
                renderButton({
                    text: 'Copy',
                    onclick: `
                        window.navigator.clipboard.writeText(\`${escapeHTML(htmlForLayout).replace(/`/g, '\\`')}\`)
                        .then(() => {
                            this.innerText = 'Copied!'; 
                            setTimeout(() => this.innerText = 'Copy', 2000);
                        });`,
                }),
                renderButton({
                    text: 'Close',
                    onclick: `this.closest('dialog').remove()`,
                    secondary: true,
                }),
            ]
        }));
    }, 200);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
