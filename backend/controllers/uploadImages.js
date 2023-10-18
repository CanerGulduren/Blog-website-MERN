const multer = require("multer");
const path = require("path");

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb("Sadece resim dosyalarına izin verilir.", false);
  }
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../images"));
  },
  filename: function (req, file, cb) {
    const extname = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + extname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: imageFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

const imageUpload = (req, res) => {
  return new Promise((resolve, reject) => {
    upload.array("images")(req, res, (err) => {
      if (err) {
        return reject("Resim Yükleme Hatası");
      }
      resolve();
    });
  });
};

const uploadImages = async (req, res) => {
  try {
    await imageUpload(req, res);
    const imagePaths = req.files.map((file) => file.filename);
    return res.status(200).json({ paths: imagePaths });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = { uploadImages };
