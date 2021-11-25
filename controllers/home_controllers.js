const db = require('../config/mongoose');
const Task = require('../models/task');

let toasts = new Array();

module.exports.home = function(req, res) {
    Task.find({}, function (err, tasks){// selecting or fetching all the existing contacts
        if(err){
            console.log('Error in fetching contacts!');
            return;
        }
        return res.render('home',{
            tasks_list: tasks
        });
    });
};
module.exports.createTask = function(req, res) {
    Task.create({// creating a new task
        title: req.body.title,
        description: req.body.description,
        category: req.body.category==='Choose a category'?'':req.body.category,
        deadline: req.body.deadline,
        status: false
    }, function(err,newTask){// callback function for error handling
        if(err){
            console.log('Error in creating Task.');
            return;
        }
        console.log('New Task : ', newTask);
        return res.redirect('back');
    });
};
module.exports.completeTask = function(req, res) {
    Task.findOneAndUpdate({_id: req.body._id}, {status: req.body.status}, function(err, updatedTask){
        if(err){
            console.log(`Error in updating : ${err}.`);
            return;
        }
        console.log('Updated Task : ',updatedTask);
        return res.redirect('back');
    });
};
module.exports.deleteTasks = function(req, res) {
    Task.deleteMany({_id: {$in: req.body._id}}, function(err, deletedTasks){
        if(err){
            console.log(`Error in deleting : ${err}.`);
            return;
        }
        console.log('Deleted Task : ',deletedTasks);
        return res.redirect('/');
    });
};