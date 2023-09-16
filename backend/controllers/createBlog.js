const {createBlogFromData} = require("./helpers/createBlogFromData.js")

async function createBlog(req, res) {
  try {
    const blogData = req.body;
    const newBlog = createBlogFromData(blogData);
    const savedBlog = await newBlog.save();
    res.json(savedBlog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { createBlog };
