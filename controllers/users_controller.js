module.exports.profile=function(req,res){
    return res.end('<h1> Users profile controller 1</h1>')
}
module.exports.posts=function(req,res){
    return res.send('<h1> Users post controller 2</h1>')
}