const { default: mongoose } = require("mongoose");
const env = require("dotenv")
env.config()
const dbConnenction = () => {
    // database connection 
    try {
        mongoose.set("strictQuery", false);
        const DB_NAME = "coiner_server"
        const URI = `mongodb://localhost:27017/${DB_NAME}`;
        const OPTION = { user: "", pass: "", autoIndex: true };
        mongoose.connect(URI, OPTION, () => {
            console.log(`DB Conection Success Full ! YOur DB Name ${DB_NAME} ! And DB URI ${URI}`)
            
        })
    } catch (error) {
        console.log("db error")
    }
}

module.exports = dbConnenction
