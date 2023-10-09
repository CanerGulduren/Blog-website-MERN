const express = require("express");
const router = express.Router();
const { createBlog } = require("../controllers/createBlog");
const { getBlogById } = require("../controllers/getBlogById");
const { getAllBlogs } = require("../controllers/getAllBlogs");
const { deleteBlog } = require("../controllers/deleteBlog");
const { getBlogTitles } = require("../controllers/getBlogTitles");
const { uploadImages } = require("../controllers/uploadImages");

router.get("/", getAllBlogs);

router.get("/:id", getBlogById);

router.get("/titles", getBlogTitles);

router.post("/createBlog", createBlog);

router.post("/uploadImages", uploadImages)

router.delete("/:id", deleteBlog);

module.exports = router;
