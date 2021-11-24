const express = require('express'); // importing the express module
const app = express(); // firing the express server
const port = 8000; // assinging port

app.use('/', require('./routers/index'));

app.listen(port, function(err){ // callback function to determine server status
    if(err){
        console.log(`Error in running the SERVER : ${err}`);
        return;
    }
    console.log(`Server is up and running on port ${port}`);
});