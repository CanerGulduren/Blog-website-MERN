const mongoose = require("mongoose");

const imagesSchema = new mongoose.Schema({
  images: [
    {
      path: String,
    },
  ],
});

const ImagesModel = mongoose.model("images", imagesSchema);

module.exports = ImagesModel;
