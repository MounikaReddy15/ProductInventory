const express = require('express');
const router = express.Router();
const productsApi = require('../../../controllers/api/v1/products_api');

// routers directing to api controllers
router.get('/', productsApi.index);
router.post('/create', productsApi.create);
router.delete('/:id',  productsApi.destroy);
router.put('/:id/update_quantity',  productsApi.update);

module.exports = router;