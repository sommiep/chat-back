const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const user = require("./user/user.route")
const room = require("./room/room.route")
const chat = require("./chat/chat.route")
const pathDB = "mongodb://admin:1234@ds141406.mlab.com:41406/chat"

const app = express()

mongoose.Promise = global.Promise;
mongoose.connect(pathDB , { useMongoClient: true }, err => {
    if( err ){
        console.error("ez")
        return 
    }
    console.log("no")
    app.use(bodyParser.json())

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
        });

    app.get("/", (req, res) => {
        res.json("hi john")
    })

    app.use("/users" , user)
    app.use("/rooms" , room)
    app.use("/chats" , chat)
    
    app.listen(9990 , () => {
        console.log("success")
    })

});