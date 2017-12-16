const Chat = require("./chat.model")
exports.create = ((req , res , next) => {
    const chat = new Chat(req.body)
    chat.save((err , chat) => {
        if(err){
            return next(err)
        }
        res.json(chat)
    })
})

exports.getAll = ((req , res , next) => {
    
    Chat.find((err , chat) => {
        if(err){
            return next(err)
        }
        res.json(chat)
    })
})

exports.getChat = ((req , res , next) => {
    
    Chat.find( {room : req.params.room},(err , chat) => {
        if(err){
            return next(err)
        }
        res.json(chat)
    })
})

exports.deleteChat= ((req , res , next) => {
    Chat.findByIdAndRemove( {_id : req.params.post},(err , chat) => {
        if(err){
            return next(err)
        }
        console.log(chat)
        res.json(chat)
    })
})