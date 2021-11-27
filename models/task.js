const mongoose = require('mongoose');
// defining the schema for the task database
const taskSchema = new mongoose.Schema({
    title: {// field name
        type: String,// type of data to be stored
        required: true // is it an compulsory field
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    deadline: {
        type: Date
    },
    status: {
        type: Boolean,
        required: true
    }
});
// creating a Model from the defined schema
const Task = mongoose.model('Task', taskSchema);
// export the Model
module.exports = Task;