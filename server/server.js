/**
 * This Code is running on Jeff's computer
 */


// load express
const express = require('express');
const bodyParser = require('body-parser');


// express is a function
// that return an `app` object
const app = express();

// a shortcut to setup endpoints for
// GET /index.html
// GET /anotherone...
app.use(express.static('server/public'));

// don't forget body-parser!!
// https://i.imgur.com/qs0INo4.jpg
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// setup a GET /space-jams endpoint
// endpoint = method + URL
// http://localhost:5000/space-jams
// function have two arguments, request(req) and reponse(res)
app.get('/space-jams', (req, res) => {
    console.log('\'bout to get some space jams 🪐');
    
    // send back a response
    res.send(`
        <h1>Ready to Space Jam? 🪐👾</h1>

        <button>Jam Time</button>
    
    `)
});

let comments = [ 
    {
        author:     'Dang',
        message:    'New Space Jams sux, 1996 ftw'
    }
];

// GET /comments endpoint
// localhost:5000/comments
app.get('/comments', (req, res) => {
    console.log('in GET /comments');
    res.send(comments);
});

// POST /comments endpoint
app.post('/comments', (req, res) => {
    console.log('in POST /comments', req.body);

    //TODO: save the comment to the server
    comments.push(req.body)

    // send back a 👍
    res.sendStatus(201);
});


// listen on port 5000
const port = 5000;
app.listen(port, () => {
    // this function is called when the 
    // server is up and running
    console.log('I\'m listening 👂');
    
});

