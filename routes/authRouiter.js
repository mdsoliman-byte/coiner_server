const express = require("express");
const router = express.Router()
const { createUser, loginUser, getAllUser,getAUser,deleteAuser } = require("../controller/userController")


router.post("/createUser", createUser)
router.get("/loginUser", loginUser)
router.get("/getAllUser", getAllUser)
router.get("/getAUser/:id", getAUser)
router.delete("/deleteAuser/:id", deleteAuser)


module.exports = router;