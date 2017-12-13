const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const user = require("./user/user.route")
const post = require("./post/post.route")
const pathDB = "mongodb://admin:1234@ds133776.mlab.com:33776/webdb"

const app = express()

mongoose.Promise = global.Promise;
mongoose.connect(pathDB , { useMongoClient: true }, err => {
    if( err ){
        console.error("ez")
        return 
    }
    console.log("no")
    app.use(bodyParser.json())
    app.get("/", (req, res) => {
        res.json("hi john")
    })

    app.use("/users" , user)
    app.use("/posts" , post)
    
    app.listen(9999 , () => {
        console.log("success")
    })

});