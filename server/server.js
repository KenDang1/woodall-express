/**
 * This Code is running on Jeff's computer
 */


// load express
const express = require('express');

// express is a function
const app = express();



// a shortcut to setup endpoints for
// GET /index.html
// GET /anotherone...
app.use(express.static('server/public'));


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

// GET /comments endpoint
app.get('/comments', (req, res) => {
    console.log('in GET /comments');
    
    res.send([
        {
            author:     'Ken',
            message:    'New Space Jams sux, 1996 ftw'
        }
    ])

});

// listen on port 5000
const port = 5000;
app.listen(port, () => {
    console.log('I\'m listening 👂');
    
});


console.log('in server js 🧠');
