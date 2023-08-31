const express = require("express")
const router = express.Router()
const {getAllBlogs} = require("../controllers/getAllBlogs")

router.get("/", getAllBlogs)

module.exports = router