const BlogModel = require("../models/blogs");

const createBlog = async (req, res) => {
  try {
    const { title, desc, author, category, tag, date, content } = req.body;
    const newData = new BlogModel({ title, desc, author, category, tag, date, content });
    const savedData = await newData.save();
    res.json(savedData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createBlog };
