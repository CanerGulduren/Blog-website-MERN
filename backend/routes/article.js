const express = require("express");
const router = express.Router();
const { createBlog } = require("../controllers/createBlog");
const { getBlogByID } = require("../controllers/getBlogByID");
const { getImageByID } = require("../controllers/getImageByID");
const { getBlogs } = require("../controllers/getBlogs");
const { deleteBlog } = require("../controllers/deleteBlog");
const { uploadImages } = require("../controllers/uploadImages");


router.get("/", getBlogs);

router.get("/:id", getBlogByID);

router.get("/getImage/:id", getImageByID)

router.post("/createBlog", createBlog);

router.post("/uploadImages", uploadImages)

router.delete("/:id", deleteBlog);

module.exports = router;
