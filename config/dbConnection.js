const { default: mongoose } = require("mongoose");
const env = require("dotenv")
env.config()
const dbConnenction = () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`, { useNewUrlParser: true });
        console.log("db success")
    } catch (error) {
        console.log("db error")
    }
}

module.exports = dbConnenction
