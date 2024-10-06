const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the NEO API Server!');
});

// Define a route to fetch NEO data
app.get('/neos', async (req, res) => {
    try {
        const apiKey = 'fpLbQoL04rch94vzygBk7csbn4y6bIffpljkS9BY'; // Your API key
        const response = await axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${apiKey}`);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from NASA NEO API');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
