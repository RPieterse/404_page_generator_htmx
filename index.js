const express = require('express');
const {renderIndex} = require('./views');
const {renderColorStyleTag} = require('./views/components/color-style');
const {renderImage} = require('./views/components/image');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    const colors = {
        primaryColor: 'red',
        secondaryColor: 'blue',
        backgroundColor: 'black',
    }
    const text = 'Hello, World!';
    const image = {
        src: 'https://source.unsplash.com/random',
        alt: 'Random Image',
    }
    res.send(renderIndex('Generate', colors, text, image));
});

app.get('/gen/colors', (req, res) => {
    const colors = {
        primaryColor: 'green',
        secondaryColor: 'orange',
        backgroundColor: 'blue',
    }
    res.send(renderColorStyleTag(colors));
});

app.get('/gen/text', (req, res) => {
    res.send('Hello, World!');
})

app.get('/gen/image', (req, res) => {
    res.send(renderImage('https://source.unsplash.com/random', 'Random Image'));
})

app.get('/gen/randomize', (req, res) => {
    const colors = {
        primaryColor: 'yellow',
        secondaryColor: 'black',
        backgroundColor: 'white',
    }

    res.send(`
        ${renderColorStyleTag(colors)}
        
        <p id="text" hx-swap-oob="true">Random</p>
        
        <div id="image" hx-swap-oob="true">
            ${renderImage('https://source.unsplash.com/random', 'Random Image')}
        </div>
    `);
});

app.get('/gen/html', (req, res) => {
    const colors = {
        primaryColor: 'purple',
        secondaryColor: 'pink',
        backgroundColor: 'white',
    }
    const text = 'Hello, World!';
    const image = {
        src: 'https://source.unsplash.com/random',
        alt: 'Random Image',
    }
    res.send(renderIndex('Download', colors, text, image));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
