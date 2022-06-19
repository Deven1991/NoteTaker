// Dependencies
const express = require('express');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');

// Express app
const app = express();

// Set port
const PORT = process.env.PORT ||  3001;

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));