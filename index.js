const express = require('express')
const cookieParser= require('cookie-parser');
const app= express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
//add mongoose
const db = require('./config/mongoose');
// used for session cookie
const session= require('express-session');
const passport= require('passport');
const passportLocal = require('./config/passport-local-strategy');

const MongoStore = require('connect-mongo');
const sassMiddleware =require('node-sass-middleware');
app.use(sassMiddleware({
    src: './assets/scss',
    dest: './assets/css',
    debug: true,
    outputStyle: 'extended',
    prefix: '/css'
}));

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static('./assets'));
app.use(expressLayouts);
//extract styles and script from  subpages to layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
//telling index.js to use these routes

//set up view engine
app.set('view engine','ejs'); 
app.set('views','./views');
//also can provide array for views


app.use(session({
    name: 'socialcookie',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost/social' })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
//// use express router
app.use('/',require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log('Error: ',err);
        console.log(`Error in running server: ${err} `);
    }
    console.log(`Server started on port: ${port}`);
        
})