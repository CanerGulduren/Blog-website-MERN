const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
  list: {
    type: String,
    required: false,
  },
});

const BlogModel = mongoose.model('blogs', blogSchema);

module.exports = BlogModel;