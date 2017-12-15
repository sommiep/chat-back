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

exports.getCate = ((req , res , next) => {
    //const {category} = req.body
    Post.find( {category : req.params.category},(err , post) => {
        if(err){
            return next(err)
        }
        res.json(post)
    })
})

exports.getTopic = ((req , res , next) => {
    Post.find( {topic : req.params.topic},(err , post) => {
        if(err){
            return next(err)
        }
        res.json(post)
    })
})