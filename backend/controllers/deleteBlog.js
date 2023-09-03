const BlogModel = require("../models/blogs");

const deleteBlog = async (req, res) => {
  try {
    const postId = req.params.id;
    const result = await BlogModel.findByIdAndDelete(postId);

    if (!result) {
      return res.status(404).send("Silinecek blog gönderisi bulunamadı.");
    }

    return res.status(200).send("Blog gönderisi başarıyla silindi");
  } catch (err) {
    return res.status(500).send("Blog gönderisi silinemedi.");
  }
};

module.exports = { deleteBlog };
