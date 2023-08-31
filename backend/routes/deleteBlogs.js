const express = require("express")
const router = express.Router()
const {deleteBlog} = require("../controllers/deleteBlog")

router.delete("/:id", deleteBlog)

module.exports = router