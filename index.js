// importing the express module
const express = require('express');
// firing the express server
const app = express();
// assinging port
const port = 8000;

const path = require('path');

// middleware
app.use(express.urlencoded());

// middleware to link the static files
app.use(express.static('assets'));

// setting up the routers
app.use('/', require('./routers/index'));

// setting up the view engine
app.set('view engine','ejs');
// setting the path to the folder to the views
// __dirname to get the path from where the server is hosted
app.set('views', path.join(__dirname, 'views'));

// Initiating SERVER or setting up the request listener
app.listen(port, function(err){ // callback function to determine server status
    if(err){
        console.log(`Error in running the SERVER : ${err}`);
        return;
    }
    console.log(`Server is up and running on port ${port}`);
});