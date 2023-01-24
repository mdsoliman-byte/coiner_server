const express = require("express")
const app = express()
const env = require("dotenv")
const dbConnenction = require("./config/dbConnection")
env.config()
dbConnenction()
const PORT = process.env.PORT







app.listen(PORT, () => {
    console.log(`app is running ${PORT}`)
})