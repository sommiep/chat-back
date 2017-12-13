

const express = require("express")
const router = express.Router()
const post = require("./post.controller")

router.post("/", post.create )

router.get("/", post.getAll )

module.exports = router;



