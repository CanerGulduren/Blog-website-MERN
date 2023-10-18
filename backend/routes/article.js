const express = require("express");
const router = express.Router();
const { createBlog } = require("../controllers/createBlog");
const { getBlogByID } = require("../controllers/getBlogByID");
const { getImageByID } = require("../controllers/getImageByID");
const { getAllBlogs } = require("../controllers/getAllBlogs");
const { deleteBlog } = require("../controllers/deleteBlog");
const { getBlogTitles } = require("../controllers/getBlogTitles");
const { uploadImages } = require("../controllers/uploadImages");

router.get("/", getAllBlogs);

router.get("/:id", getBlogByID);

router.get("/getImage/:id", getImageByID)

router.get("/titles", getBlogTitles);

router.post("/createBlog", createBlog);

router.post("/uploadImages", uploadImages)

router.delete("/:id", deleteBlog);

module.exports = router;
