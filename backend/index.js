const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { connectDatabase } = require("./controllers/connectDatabase");
const article = require("./routes/article")

app.use(bodyParser.json());

connectDatabase();

app.use("/article", article);

app.listen(3001, () => {
  console.log("SERVER STARTED");
});
