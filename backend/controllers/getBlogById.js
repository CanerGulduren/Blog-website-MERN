const mongoose = require("mongoose");
const BlogModel = require("../models/blogs");

const getBlogByID = async (req, res) => {
  try {
    const blogId = req.params.id;
    const result = await BlogModel.findById(blogId);
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getBlogByID };
