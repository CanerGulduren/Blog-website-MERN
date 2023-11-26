import axios from "axios";

async function uploadImages(imageFiles) {
  try {
    const formData = new FormData();
    imageFiles.forEach((file) => {
      formData.append("images", file);
    });

    const response = await axios.post(
      "http://localhost:3001/article/uploadImages",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.status === 200) {
      return response.data.paths;
    } else {
      throw new Error("Sunucu hatası veya geçersiz yanıt.");
    }
  } catch (err) {
    console.error("İstek hatası:", err);
    throw err;
  }
}

export default uploadImages;
