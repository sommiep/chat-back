const express = require("express")
const router = express.Router()
const chat = require("./chat.controller")

router.post("/", chat.create )

router.get("/", chat.getAll )

router.get("/:room" , chat.getChat )

router.get("/delete/:post" , chat.deleteChat )

module.exports = router;