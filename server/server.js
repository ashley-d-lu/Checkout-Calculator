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
const cartRoutes = require('./routes/cart');
const provinceRoutes = require('./routes/province');
app.use('/api', cartRoutes);
app.use('/api', provinceRoutes);

/* Webpage routes */
app.use(express.static(__dirname + "/../client/out"));
// All routes other than above will go to index.html
app.get("*", (req, res) => {
    console.log(req.url);
    // Send index.html
    res.sendFile("client/out/index.html", {
        root: "../"
    });
});

// Listen on port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});