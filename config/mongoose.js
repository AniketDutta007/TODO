// importing module
const mongoose = require('mongoose');
// connecting to the data base
mongoose.connect('mongodb://127.0.0.1/tasks_list_db');
// acquire the connection
const db = mongoose.connection;