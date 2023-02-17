const express = require('express')
const app= express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');


app.use(express.static('./assets'));
app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
//telling index.js to use these routes
app.use('/',require('./routes'))
//set up view engine
app.set('view engine','ejs'); 
app.set('views','./views');
//also can provide array for views


app.listen(port, function(err){
    if(err){
        console.log('Error: ',err);
        console.log(`Error in running server: ${err} `);
    }
    console.log(`Server started on port: ${port}`);
        
})