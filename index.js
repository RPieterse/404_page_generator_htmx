const express = require('express');
const {renderIndex} = require('./views');
const {renderColorStyleTag} = require('./views/components/color-style');
const {renderImage} = require('./views/components/image');
const {renderHeading} = require('./views/components/heading');
const {renderSubheading} = require('./views/components/subheading');
const {renderButton} = require('./views/components/button');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    const randomLayout = Math.random() > 0.5 ?
        require('./views/layouts/horizontal-layout.js') :
        require('./views/layouts/vertical-layout.js');

    const colorSchemes = require('./data/colors.js');
    const textSchemes = require('./data/sentences.js');
    const images = require('./data/images.js');

    const randomColor = colorSchemes[Math.floor(Math.random() * colorSchemes.length)];
    const randomText = textSchemes[Math.floor(Math.random() * textSchemes.length)];
    const randomImage = images[Math.floor(Math.random() * images.length)];

    const layoutProps = {
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
    };

    res.send(renderIndex({
        title: 'Home',
        colors: randomColor,
        layout: randomLayout(layoutProps),
    }));
});

app.get('/gen/colors', (req, res) => {
    const colors = require('./data/colors.js');
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    const params = JSON.parse(req.query.currentValues || '{}');

    while (params.primaryColor === randomColor.primaryColor) {
        randomColor = colors[Math.floor(Math.random() * colors.length)];
    }
    setTimeout(() => {
        res.send(renderColorStyleTag(randomColor));
    }, 200);
});

app.get('/gen/text', (req, res) => {
    const sentences = require('./data/sentences.js');
    let randomText = sentences[Math.floor(Math.random() * sentences.length)];

    const params = JSON.parse(req.query.currentValues || '{}');
    while (params.heading === randomText.heading) {
        randomText = sentences[Math.floor(Math.random() * sentences.length)];
    }

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
    const images = require('./data/images.js');
    let randomImage = images[Math.floor(Math.random() * images.length)];

    const params = JSON.parse(req.query.currentValues || '{}');
    while (params.image === randomImage) {
        randomImage = images[Math.floor(Math.random() * images.length)];
    }

    setTimeout(() => {
        res.send(renderImage({
            src: randomImage,
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
    setTimeout(() => {
        res.send();
    }, 200);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
