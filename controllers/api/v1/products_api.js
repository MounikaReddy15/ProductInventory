const Product = require('../../../models/product');


// index as in action name
module.exports.index = async function(req,res) {
    let products =  await Product.find({})
   // for sorting posts
   .sort('-quantity')  
    return res.json(200, {
        message: "List of products",
        products: products
    })
}

module.exports.create = function (req, res) {
  let product = new Product(
      {
          name: req.body.name,
          quantity: req.body.quantity
      }
  );

  product.save(function (err) {
      if (err) {
          return next(err);
      }
      // res.send('Product Created successfully')
      return res.json(200, {
        message: "Product Created",
        product: product
    })
  })
};

module.exports.destroy = async function(req,res) {
    // find product if it exits or not to delete
    try {
          let product = await Product.findById(req.params.id); 
            product.remove();
                return res.json(200, {
                    message: "Product deleted"
                  });
              }
          catch(err) {
              console.log('*******', err);
              return res.json(500, {
               message: "Internal Server Error"
          });
}
}




module.exports.update = function (req, res) {
  Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
      if (err) return next(err);
      res.send('Product udpated.');
  });
};

