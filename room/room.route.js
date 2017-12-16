const express = require("express")
const router = express.Router()
const room = require("./room.controller")

router.post("/", room.create )

router.get("/", room.getAll )

module.exports = router;