const db = require('../config/mongoose');
// importing the Task Model from models
const Task = require('../models/task');
// home controller
module.exports.home = function(req, res) {
    // fetch data from database
    Task.find({}, function (err, tasks){// selecting or fetching all the existing contacts
        if(err){// if there is an error
            console.log('Error in fetching contacts!');
            return;
        }
        // on success render the  respective template and send the rendered html to client browser
        return res.render('home',{
            tasks_list: tasks
        });
    });
};
// create task controller
module.exports.createTask = function(req, res) {
    // create new entry or object for the database
    Task.create({// creating a new task
        // setting up the data fields
        title: req.body.title,
        description: req.body.description,
        category: req.body.category==='Choose a category'?'':req.body.category,
        deadline: req.body.deadline,
        status: false
    }, function(err,newTask){// callback function for error handling
        if(err){// if there is an error
            console.log('Error in creating Task.');
            return;
        }
        console.log('New Task : ', newTask);
        return res.redirect('back');// redirect
    });
};
// complete task controller
module.exports.completeTask = function(req, res) {
    // find and update object or entry
    Task.findOneAndUpdate({_id: req.body._id}, {status: req.body.status}, function(err, updatedTask){
        if(err){// if there is an error
            console.log(`Error in updating : ${err}.`);
            return;
        }
        console.log('Updated Task : ',updatedTask);
        // return res.redirect('back');
    });
};
// delete task controller
module.exports.deleteTasks = function(req, res) {
    // delete task by _id
    Task.deleteMany({_id: {$in: req.body._id}}, function(err, deletedTasks){
        if(err){// if there is an error
            console.log(`Error in deleting : ${err}.`);
            return;
        }
        console.log('Deleted Task : ',deletedTasks);
        return res.redirect('/');// redirect to the home page or reload 
    });
};