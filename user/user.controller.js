const User = require("./user.model")
exports.create = ((req , res , next) => {
    const user = new User(req.body)
    user.save((err , user) => {
        if(err){
            return next(err)
        }
        res.json(user)
    })
})

exports.getAll = ((req , res , next) => {
    
    User.find((err , users) => {
        if(err){
            return next(err)
        }
        res.json(users)
    })
})

exports.get = ((req , res , next) => {
    
    User.find( {lastName : req.params.lastname},(err , user) => {
        if(err){
            return next(err)
        }
        res.json(user)
    })
})

exports.check= ((req , res , next) => {
    const {username, password} = req.body
    User.find( {userName : username, password: password},(err , users) => {
        if(err){
            return next(err)
        }
        console.log(users)
        res.json(users)
    })
})

exports.checkUser= ((req , res , next) => {
    const {username} = req.body
    User.find( {userName : username},(err , users) => {
        if(err){
            return next(err)
        }
        console.log(users)
        res.json(users)
    })
})

exports.update= ((req , res , next) => {
    const user = new User(req.body)
    console.log(req.params._id)
    User.findByIdAndUpdate( {_id : user._id}, user, (err , users) => {
        if(err){
            return next(err)
        }
        res.json(users)
    })
})