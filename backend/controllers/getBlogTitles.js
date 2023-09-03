const mongoose = require("mongoose");
const BlogModel = require("../models/blogs");

const getBlogTitles = async (req, res) => {
  try {
    const result = await BlogModel.find({}, "title, desc");
    res.json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getBlogTitles };
