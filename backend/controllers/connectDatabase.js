const mongoose = require("mongoose")
require("dotenv").config()

const connectDatabase = () => {
	mongoose.connect(`${process.env.MONGODB_PASSWORD}`)
	.then(() => {
		console.log("MongoDB connection successful");
	})
	.catch((err) => {
		console.error("MongoDB connection error:", err);
	});
}

module.exports = {connectDatabase}