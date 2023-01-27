const mongoose = require("mongoose")


const userModel = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        unique: true
    },
    lastname: {
        type: String,
        required: true,

    },
    emile: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,

    },
})

module.exports = userModel