const mongoose = require('mongoose');

// schema for mongoose to access the data
const productSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
quantity: {
    type: Number,
    required: true
}
});

// telling mongoose this is a model
const Product = mongoose.model('Product', productSchema);


module.exports = Product;

