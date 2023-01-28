const express = require("express");
const router = express.Router()
const { createUser, loginUser, getAllUser, getAUser, deleteAuser, updateUser } = require("../controller/userController")


router.post("/createUser", createUser)
router.get("/loginUser", loginUser)
router.get("/getAllUser", getAllUser)
router.get("/getAUser/:id", getAUser)
router.delete("/deleteAuser/:id", deleteAuser)
router.put("/updateUser/:id", updateUser)


module.exports = router;