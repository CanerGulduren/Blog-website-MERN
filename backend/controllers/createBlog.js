const BlogModel = require("../models/blogs");

const createBlog = async (req, res) => {
  try {
    const { title, author, content } = req.body;
    const newData = new BlogModel({ title, author, content });
    const savedData = await newData.save();
    res.json(savedData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createBlog };
