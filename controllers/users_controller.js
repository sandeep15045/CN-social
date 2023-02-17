module.exports.profile=function(req,res){
    return res.end('<h1> Users profile controller 1</h1>')
}
module.exports.posts=function(req,res){
    return res.send('<h1> Users post controller 2</h1>')
}
//rendered sign in page and signup page
//now go to routes
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:"Social | Sign Up"
    })
}
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:"Social | Sign In"
    })
}