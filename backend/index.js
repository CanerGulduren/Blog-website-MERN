const express = require("express")
const app = express()
const mongoose = require("mongoose")


mongoose.connect(`${process.env.MONGODB_PASSWORD}`)

app.listen(3001, () => {
	console.log("SERVER STARTED")
})
