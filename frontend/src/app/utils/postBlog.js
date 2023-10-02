
async function postBlog(imageFiles, content) {
  try {
    const response = await fetch("http://localhost:3001/article/uploadImages", {
      method: "POST",
      body: imageFiles,
    });
    return response;
  } catch (err) {
    console.log("CLİENT ERRRORRR", err);
  }
}

export default postBlog;
