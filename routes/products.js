const express = require('express');


//express.Router helps in seperating routers and controllers
const router = express.Router();

// to access controller
const productsController = require('../controllers/products_controller');

// routers directing to controllers
router.get('/display',productsController.display);
router.post('/create', productsController.create);
router.get('/destroy/:id/', productsController.destroy);
router.put('/update/:id/', productsController.update);

module.exports = router; 