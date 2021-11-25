const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
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

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;