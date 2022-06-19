//Dependencies
const express = require('express');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');

//Express app
const app = express();

//Set port
const PORT = process.env.PORT || 3001;

//Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

//API routes
app.get('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, "./db/db.json"), 'utf8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    });
});

//HTML route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

// Notes route
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.listen(PORT, () => console.log(`The server is now listening on PORT ${PORT}`));