'use strict';

const express = require('express');
const app = express();

// Use cors middleware to allow requests from different origins
const cors = require('cors');
app.use(cors());

// Use body-parser middleware to parse HTTP JSON body into a usable object
const bodyParser = require('body-parser');
app.use(bodyParser.json());

/* API routes */
// Use the API routes in our route files
// TODO

/* Webpage routes */
// TODO - once UI is setup and we are ready to deploy

// Listen on port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});