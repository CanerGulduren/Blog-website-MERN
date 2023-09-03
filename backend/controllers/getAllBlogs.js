const mongoose = require("mongoose");
const BlogModel = require("../models/blogs");

const getAllBlogs = async (req, res) => {
  try {
    const result = await BlogModel.find({});
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getAllBlogs };
