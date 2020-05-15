const Product = require('../models/product');


module.exports.display = function(req,res) {


    Product.find({}, function(err, product) {
      if(err) {
          console.log('Error in fetching products from db');
          return;
      }
      //to change title dynamically
    return res.render('_display', 
    {title: 'ProductInn',
    products: product
 
});
});

}
module.exports.create = async function(req,res) {
    try {
       let product = await Product.create({
        name: req.body.name,
        quantity: req.body.quantity

      });

         //  receiving the ajax req
         // for dynamic usage
          if(req.xhr) {
            // we return with json(status codes,message)
            return res.status(200).json({
              data: {
                product: product
              },
              message: "Product Added!"
            });

           }
     
      return res.redirect('back');
     } catch(err) {
         return res.redirect('back');
        } 
}

module.exports.destroy = async function(req,res) {
    // find product if it exits or not, to delete
    try {
          let product = await Product.findById(req.params.id); 
            // removing the product
            product.remove();

             if(req.xhr) {
               return res.status(200).json({
                data: {
                  product_id: req.params.id
                },
                message: "Product removed"
               })
               
              }
                
                return res.redirect('back');
            }
          catch(err) {
           return res.redirect('back');
}
}

      
  
  module.exports.update= async function (req, res) {
    try {
      // find the product by id and updating it
      let product = await Product.findByIdAndUpdate(req.params.id, req.body, function(err) { 
        quantity: req.body.quantity
        return res.redirect('back');
      });
    } catch(err) {
      return res.redirect('back');
}
}



