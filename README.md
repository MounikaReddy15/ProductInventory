1. ProductInn is an ecommerce inventory which houses the information about the products 
   and the quantity that the store owns

2. It runs on localhost:3000 

3. localhost is the address of local machine where things run

4. It uses MongoDB as database

5. nodemon is a package built that monitors our project which is built on node js

6. express is a framework which helps in structuring our code, it aslo installs all the dependencies which are required

7. we are using four types of http requests here,

i)  get: to get the information or to delete

    Lists all products: GET localhost:3000/api/v1/products
    
ii)  post: to add the information

     Adds a new product: POST localhost:3000/api/v1/products/create

     
iii) put: to update the information

     PUT localhost:3000/api/v1/products/5ebe847764797e9c28338ff7/update_quantity

iv) delete: to delete the information

    DELETE localhost:3000/api/v1/products/5ebe846d64797e9c28338ff6





