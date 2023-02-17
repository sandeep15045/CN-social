const passport = require('passport');
const LocalStrategy =require('passport-local').Strategy;

const User=require('../models/user');
//authentication using passport a
passport.use(new LocalStrategy({
    usernameField:'email',
    },
    function(email,password,done){
        //find user and establish identity
        User.findOne({email:email},function(err,user){
            if(err){
                console.log('error in finding user');
                return done(err);
            }
            if(!user|| user.passport!=password){
                console.log('Invalid username/password');
                return done(null,false);
            }
            return done(null,user);
        });
    }
));
//serialize user to decide which key to be kept in cookie
passport.serializeUser(function(user,done){
    done(null,user.id);
});
//deserialze user from the key in cookies
passport.deserializeUser(function(user,done){
    User.findById(id, function(err,user){
        if(err){
            console.log('error in finding user-->passport')
            return done(err);
        }
        return done(null,user);
    });
});

module.exports=passport;