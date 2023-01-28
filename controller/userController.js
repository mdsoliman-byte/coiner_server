const userModel = require("../models/userModel");
const asyncHandler = require('express-async-handler');
const { createToken } = require("../config/jwtToken");
// const { all } = require("../routes/authRouiter");
const createUser = asyncHandler(async (req, res) => {
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
const loginUser = asyncHandler(async (req, res) => {
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

const getAllUser = asyncHandler(async (req, res) => {
    try {
        const allUser = await userModel.find();
        res.status(200).json(allUser)
    } catch (error) {
        throw new Error(error)
    }
})
// get single user by pass url  user id 
const getAUser = asyncHandler(async (req, res) => {
    try {
        const userId = req.params.id;
        const findUser = await userModel.findById(userId);
        res.status(200).json(findUser);
    } catch (error) {
        throw new Error(error)
    }
})
const deleteAuser = asyncHandler(async (req, res) => {
    try {
        const userId = req.params.id;
        const deleteuser = await userModel.findByIdAndDelete(userId);
        res.json({deleteuser})
    } catch (error) {
        throw new Error(error)
    }
})
module.exports = { createUser, loginUser, getAllUser, getAUser, deleteAuser }