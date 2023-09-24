const fs = require('fs');
const path = require('path');
const {createBlogFromData} = require("./helpers/createBlogFromData.js")


async function createBlog(req, res) {
  try {
    const blogData = req.body;
    const newBlog = createBlogFromData(blogData);
    const savedBlog = await newBlog.save();

    const images = blogData.content.filter(item => item.input === 'img');
    const imagePaths = [];

    for (const image of images) {
      const imageFile = image.data.path;
      const altText = image.data.alt;
      const imageFileName = altText + '.jpg'; 

      const targetPath = path.join(__dirname, "../images" ,imageFileName);

      imagePaths.push({path: targetPath, alt: altText});
    }

    savedBlog.images = imagePaths;

    await savedBlog.save()

    res.json(savedBlog);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { createBlog };
