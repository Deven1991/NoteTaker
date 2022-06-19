// Dependencies
const express = require('express');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');

// Express app
const app = express();

// Set port
const PORT = process.env.PORT ||  3001;
