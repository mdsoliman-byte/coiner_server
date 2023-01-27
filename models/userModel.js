const mongoose = require("mongoose")


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
const userModel = mongoose.model("User", userModelSchima)
module.exports = userModel