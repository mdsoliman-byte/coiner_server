const userModel = require("../models/userModel");
const asyncHandler = require('express-async-handler')
exports.createUser = asyncHandler(async (req, res) => {
    console.log(req.body)
    // find user from req body 
    const gmail = req.body.gmail;
    // find user from database 
    const findUser = await userModel.findOne({ gmail: gmail });
    if (!findUser) {
        // create new user 
        const newUser = await userModel.create(req.body)
        res.status(200).json(newUser)
    } else {
        throw new Error("User Allready Exists")
    }


})

