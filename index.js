const express = require("express")
const app = express()
const env = require("dotenv")
const dbConnenction = require("./config/dbConnection")
const bodyParser = require("body-parser")
const authRouter = require("./routes/authRouiter")
env.config()
dbConnenction()
const PORT = process.env.PORT

app.use(bodyParser.json())
app.use("/", (req, res) => {
    res.send("hello im from server ")
})
app.use("api/user", authRouter)






app.listen(PORT, () => {
    console.log(`app is running ${PORT}`)
})