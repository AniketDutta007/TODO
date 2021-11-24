const express = require('express'); // importing the express module
const router = express.Router();

const homeController = require('../controllers/home_controllers');
router.get('/', homeController.home);

module.exports = router;