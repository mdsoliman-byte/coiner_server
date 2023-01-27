const express = require("express");
const router = express.Router()
const { createUser, loginUser } = require("../controller/userController")


router.post("/createUser", createUser)
router.get("/loginUser", loginUser)


module.exports = router;