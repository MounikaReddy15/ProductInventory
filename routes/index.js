// this index.js is the entry point to all the routes
const express = require('express');

//express.Router helps in seperating routers and controllers
const router = express.Router();

// to access controller
const homeController = require('../controllers/home_controller');

// routers directing to controllers
router.get('/', homeController.home);
router.use('/products', require('./products'));

router.use('/api', require('./api'));

module.exports = router;