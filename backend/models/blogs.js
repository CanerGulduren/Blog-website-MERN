const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    required: false,
  },
  content: [
    {
      input: String,
      data: {
        path: String,
        alt: String,
        title: String,
        article: String,
      },
    }
  ],
});

const BlogModel = mongoose.model("blogs", blogSchema);

module.exports = BlogModel;
