const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { connectDatabase } = require("./controllers/connectDatabase");
const showBlogs = require("./routes/showBlogs");
const createBlogs = require("./routes/createBlogs");
const deleteBlogs = require("./routes/deleteBlogs");

app.use(bodyParser.json());

connectDatabase();

app.use("/blogs", showBlogs);

app.use("/post", createBlogs);

app.use("/delete", deleteBlogs);

app.listen(3001, () => {
  console.log("SERVER STARTED");
});
