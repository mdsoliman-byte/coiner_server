const mongoose = require("mongoose")
const bcrypt = require("bcrypt")


const userModelSchima = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,

    },
    gmail: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,

    },
}, { versionKey: false })
// user bcrypt packeg for password hash 
userModelSchima.pre("save", async function (next) {
    const salt = await bcrypt.genSaltSync(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const userModel = mongoose.model("User", userModelSchima)
module.exports = userModel