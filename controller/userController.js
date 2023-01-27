const userModel = require("../models/userModel");
exports.createUser = async (req, res) => {
    console.log(req.body)
    // find user from req body 
    const gmail = req.body.gmail;
    // find user from database 
    const findUser = await userModel.findOne({ gmail: gmail });
    if (!findUser) {
        // create new user 
        const newUser =await userModel.create(req.body)
        res.status(200).json(newUser)
    } else {
        res.status(401).json({
            message: "User Allready Existed",
            success: false
        })
    }


}

