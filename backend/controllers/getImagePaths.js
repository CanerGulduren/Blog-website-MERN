const ImagesModel = require("../models/images");

const getImagePaths = async (req, res) => {
  try {
    const imagePaths = await ImagesModel.findOne().sort({ _id: -1 });
    res.json(imagePaths);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getImagePaths };