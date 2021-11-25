const express = require('express'); // importing the express module
const router = express.Router();

const homeController = require('../controllers/home_controllers');
router.get('/', homeController.home);
router.post('/create-task', homeController.createTask);
router.post('/task-complete', homeController.completeTask);
router.post('/delete-tasks', homeController.deleteTasks);
module.exports = router;