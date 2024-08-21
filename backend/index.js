// Modules and Globals
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Express Settings
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Controllers & Routes

// Root Route - Home Page
app.get('/', (req, res) => {
    res.send('Welcome to the REST-Rant API Home Page');
});

// Places Routes
app.get('/places', (req, res) => {
    // Logic for listing all places
    res.send('List of all places');
});

app.post('/places', (req, res) => {
    // Logic for creating a new place
    res.send('New place created');
});

app.get('/places/:placeId', (req, res) => {
    // Logic for getting details of a particular place
    res.send(`Details about place with id ${req.params.placeId}`);
});

app.put('/places/:placeId', (req, res) => {
    // Logic for updating a particular place
    res.send(`Place with id ${req.params.placeId} updated`);
});

app.delete('/places/:placeId', (req, res) => {
    // Logic for deleting a particular place
    res.send(`Place with id ${req.params.placeId} deleted`);
});

app.post('/places/:placeId/comments', (req, res) => {
    // Logic for creating a comment about a particular place
    res.send(`Comment added to place with id ${req.params.placeId}`);
});

app.delete('/places/:placeId/comments/:commentId', (req, res) => {
    // Logic for deleting a comment from a particular place
    res.send(`Comment with id ${req.params.commentId} deleted from place with id ${req.params.placeId}`);
});

// Users Routes
app.get('/users', (req, res) => {
    // Logic for listing all users
    res.send('List of all users');
});

app.post('/users', (req, res) => {
    // Logic for creating a new user (sign-up)
    res.send('New user created');
});

// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`);
});
