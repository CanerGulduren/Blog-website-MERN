const path = require("path");


const getImageByID = async (req, res) => {

  const imageName = req.params.id;

  const imagePath = path.join(__dirname, "../images", imageName);

  res.sendFile(imagePath);
  
};

module.exports = {getImageByID}