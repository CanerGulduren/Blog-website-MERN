async function uploadImages(imageFiles) {
  try {
    const response = await fetch("http://localhost:3001/article/uploadImages", {
      method: "POST",
      body: imageFiles,
    });
    if (response.ok) {
      const imagePaths = await response.json();
      return imagePaths.paths;
    } else {
      throw new Error("Sunucu hatası veya geçersiz yanıt.");
    }
  } catch (err) {
    console.error("İstek hatası:", err);
    throw err; 
  }
}

export default uploadImages