const ImagesModel = require("../models/images");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../images"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const uploadImages = async (req, res) => {
  try {
    upload.array("path")(req, res, (err) => {
      if (err) {
        return res.status(400).json({ err: "Resim Yükleme Hatası" });
      }
    });
    const imagePaths = req.files.map((file) => file.path);
    console.log(imagePaths);
    return res.status(200).json(imagePaths);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = { uploadImages };
