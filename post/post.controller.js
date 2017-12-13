const Post = require("./post.model")
exports.create = ((req , res , next) => {
    const post = new Post(req.body)
    post.save((err , post) => {
        if(err){
            return next(err)
        }
        res.json(post)
    })
})

exports.getAll = ((req , res , next) => {
    
    Post.find((err , posts) => {
        if(err){
            return next(err)
        }
        res.json(posts)
    })
})