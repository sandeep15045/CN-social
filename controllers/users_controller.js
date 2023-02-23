const User=require('../models/user')

module.exports.profile=function(req,res){
    return res.render('user_profile', {
        title: 'User Profile'
    })
}
module.exports.posts=function(req,res){
    return res.send('<h1> Users post controller 2</h1>')
}
//rendered sign in page and signup page
//now go to routes
module.exports.signUp=function(req,res){
    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }

    return res.render('user_sign_up',{
        title:"Social | Sign Up"
    })
}
module.exports.signIn=function(req,res){

    if (req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('user_sign_in',{
        title:"Social | Sign In"
    })
}
//Get the sign up data
module.exports.create=function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('error finding  user in sign up');return}

        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log('error creating user  user in sign up');return}
                return res.redirect('/users/sign-in');
            })              
        }else{
            return res.redirect('back');
        }
    })

    //todo later
}
//Sign in and create session 
module.exports.createSession=function(req,res){
    //todo later
    return res.redirect('/');

}
module.exports.destroySession = function(req, res){
    req.session.destroy(function (err) {
        res.redirect('/'); //Inside a callback… bulletproof!
      });
}