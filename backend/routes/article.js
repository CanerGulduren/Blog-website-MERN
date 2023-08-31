const express = require("express")
const router = express.Router()
const {createBlog} = require("../controllers/createBlog")
const { getAllBlogs } = require("../controllers/getAllBlogs")
const { deleteBlog } = require("../controllers/deleteBlog")

router.get("/", getAllBlogs)
router.post("/", createBlog)
router.delete("/:id", deleteBlog)

module.exports = router