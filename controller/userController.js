const userModel = require("../models/userModel");
const asyncHandler = require('express-async-handler');
const { createToken } = require("../config/jwtToken");
const { all } = require("../routes/authRouiter");
exports.createUser = asyncHandler(async (req, res) => {
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
exports.loginUser = asyncHandler(async (req, res) => {
    // get user login data from input body 
    const { gmail, password } = req.body;
    // check if user exist or not 
    const findUser = await userModel.findOne({ gmail })
    // match hash  password 
    const pass = await findUser.isPasswordMatched(password)
    if (findUser && pass) {
        const user = {
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            gmail: findUser?.gmail,
            mobile: findUser?.mobile,
            // create and  pass user token by usiging user id 
            token: createToken(findUser?._id)
        }
        res.status(200).json(user)

    } else {
        throw new Error("Invalid UserName Or Password ")
    }
})


// Get All User  

exports.getAllUser = asyncHandler(async (req, res) => {
    try {
        const allUser = await userModel.find();
        res.status(200).json(allUser)
    } catch (error) {
        throw new Error(error)
    }
})
