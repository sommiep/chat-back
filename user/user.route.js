

const express = require("express")
const router = express.Router()
const user = require("./user.controller")

router.post("/", user.create )

router.get("/", user.getAll )

module.exports = router;



