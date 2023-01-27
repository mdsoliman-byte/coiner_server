const express = require("express");
const router = express.Router()
const { createUser, loginUser, getAllUser } = require("../controller/userController")


router.post("/createUser", createUser)
router.get("/loginUser", loginUser)
router.get("/getAllUser", getAllUser)


module.exports = router;