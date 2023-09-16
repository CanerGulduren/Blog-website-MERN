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
  content: {
    img: [
      {
        url: {
          type: String,
        },
        alt: {
          type: String,
        },
      },
    ],
    text: [
      {
        article: {
          type: String,
        },
        title: {
          type: String,
        },
      },
    ],
    list: [
      {
        item: [String],
        title: {
          type: String,
        },
      },
    ],
  },
});

const BlogModel = mongoose.model("blogs", blogSchema);

module.exports = BlogModel;
