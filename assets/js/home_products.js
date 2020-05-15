{
    // method to submit form data for new product using AJAX
//    the func which sends the data to the controller action
let createProduct = function() {
    let newProductForm = $('#new-product-form');
    newProductForm.submit(function(e) {
  // e is the event on which preventDefault is called
   e.preventDefault();

   // submission req
   $.ajax({
       type: 'post',
       url: '/products/create',
     //    serialize converts the form data into json, name is key and value is the submission
       data: newProductForm.serialize(),
       success: function(data) {
            let newProduct = newProductDom(data.data.product);
            $('#products-list-container>ul').prepend(newProduct);
            deleteProduct($('.delete-product-button', newProduct));
       }, error: function(error) {
            console.log(error.responseText);
       }
     })   

    });
}

//  method to create a product in DOM
let newProductDom = function(product) {
    return $(`<li id= "product-${product._id}"> 
    <p>
            <small>
                    <a class = "delete-product-button" href="/products/destroy/${product._id}" > X </a>
            </small>
            
            ${product.name}
</p>

 </li> `)
 }
 // method to delete a product from dom
 let deleteProduct = function(deleteLink) {
     $(deleteLink).click(function(e){
         e.preventDefault();
         $.ajax({
            type: 'get',
            url: $(deleteLink).prop('href'),
            success: function(data) {
                $(`#product-${data.data.product_id}`).remove();

            }, error: function(error){
                console.log(error.responseText);
            }
         });
     })
 }  


 createProduct();
}