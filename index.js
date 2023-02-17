const express = require('express')
const app= express();
const port = 8000;

//telling index.js to use these routes
app.use('/',require('./routes'))

app.listen(port, function(err){
    if(err){
        console.log('Error: ',err);
        console.log(`Error in running server: ${err} `);
    }
    console.log(`Server started on port: ${port}`);
        
})