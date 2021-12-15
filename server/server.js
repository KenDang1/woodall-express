// load express
const express = require('express');

// express is a function
const app = express();



// a shortcut to setup endpoints for
// GET /index.html
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


// listen on port 5000
const port = 5000;
app.listen(port, () => {
    console.log('I\'m listening 👂');
    
});


console.log('in server js 🧠');
