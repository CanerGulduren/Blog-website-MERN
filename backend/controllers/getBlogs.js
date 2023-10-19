const mongoose = require("mongoose");
const BlogModel = require("../models/blogs");

const getBlogs = async (req, res) => {
  let query = BlogModel.find({})

  try {
    if (req.query.category) {
      query = query.where('category').equals(req.query.category);
    }
    if (req.query.limit) {
      query = query.sort({ date: -1 }).limit(parseInt(req.query.limit));
    }

    const blogs = await query.exec();

    res.json(blogs);
    
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getBlogs };
