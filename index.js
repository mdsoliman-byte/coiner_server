const express = require("express")
const app = express()
const env = require("dotenv")
const dbConnenction = require("./config/dbConnection")
const bodyParser = require("body-parser")
const authRouter = require("./routes/authRouiter")
env.config()

const PORT = process.env.PORT
dbConnenction()
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use("/api/user", authRouter)






app.listen(PORT, () => {
    console.log(`app is running ${PORT}`)
})