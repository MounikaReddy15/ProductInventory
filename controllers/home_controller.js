const Product = require('../models/product');
// using async await
module.exports.home = async function(req,res) {

try {

 let products =  await Product.find({})
 // for sorting products
 .sort('-quantity')   
        return res.render('home', {
          title: "ProductInn",
          products: products,
          
      });  
} catch(err) {
console.log("error", err);
}
}