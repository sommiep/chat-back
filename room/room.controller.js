const Room = require("./room.model")
exports.create = ((req , res , next) => {
    const room = new Room(req.body)
    room.save((err , room) => {
        if(err){
            return next(err)
        }
        res.json(room)
    })
})

exports.getAll = ((req , res , next) => {
    
    Room.find((err , room) => {
        if(err){
            return next(err)
        }
        res.json(room)
    })
})