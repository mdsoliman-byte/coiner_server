const jwt = require("jsonwebtoken");
const env = require("dotenv")
env.config()
const createToken = (id) => {
    // create json web token for user by passing  user id  
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "3d" })

}


module.exports = { createToken }