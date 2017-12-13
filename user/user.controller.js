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
