const cors = require("cors")
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const article = require("./routes/article")
const { connectDatabase } = require("./controllers/connectDatabase");

app.use(cors())

app.use(bodyParser.json());

connectDatabase();

app.use("/article", article);

app.listen(3001, () => {
  console.log("SERVER STARTED");
});
