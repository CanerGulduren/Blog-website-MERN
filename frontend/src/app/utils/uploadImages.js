async function uploadImages(images) {
  await fetch("http://localhost:3001/article/uploadImages", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: images,
  });
}

export default uploadImages;
