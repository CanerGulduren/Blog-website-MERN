const path = require("path");

const getImageByID = async (req, res) => {
  try {
    const imageName = req.params.id;

    console.log(imageName)

    const imagePath = path.join(__dirname, "../images", imageName);

    res.sendFile(imagePath);
    
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getImageByID };
