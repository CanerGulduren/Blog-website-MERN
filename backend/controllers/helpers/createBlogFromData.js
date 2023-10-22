const BlogModel = require("../../models/blogs");

const createBlogFromData = (data) => {
  const { title, desc, author, category, tag, date, coverImg, content } = data;
  return new BlogModel({
    title,
    desc,
    author,
    category,
    tag,
    coverImg,
    date,
    content,
  });
};

module.exports = { createBlogFromData };
