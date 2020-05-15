const express = require('express');

//express.Router helps in seperating routers and controllers
const router = express.Router();

// routers directing to controllers
router.use('/products', require('./products'));

module.exports = router;