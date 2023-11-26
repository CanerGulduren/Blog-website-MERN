import uploadImages from "../post/uploadImages";

const getImagePaths = async (imageFiles) => {
  const formData = new FormData();
  for (let i = 0; i < imageFiles.length; i++) {
    formData.append("images", imageFiles[i]);
  }
  const imagePaths = await uploadImages(formData);
  return imagePaths
};

export default getImagePaths;
