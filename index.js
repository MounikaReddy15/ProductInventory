// web framework helps in structuring our code
const express = require('express');

//  to run express funct
const app= express(); 

// server running on port
const port = 3000;

//require express layout
//for dynamic scripts and styles
const expressLayouts = require('express-ejs-layouts');

// database
const db= require('./config/mongoose');

//express.url encoded is called before every controller
app.use(express.urlencoded());


//folder for static files
app.use(express.static('./assets'));

//define the layouts before the routes
//we need to tell the server to use them
app.use(expressLayouts);

//extract style and script from the subpages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);


// to tell use ejs as view engine
// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


//we need to tell the app to use the exported router
app.use('/', require('./routes'));

//to make the app listen
app.listen(port, function(err){
    if(err) {

         console.log(`Error in running the server: ${err}`);
    }
        console.log(`Server is running on port: ${port}`);
});
