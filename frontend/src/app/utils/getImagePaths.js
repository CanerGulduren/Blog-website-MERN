async function getImagePaths() {

    const imagePaths = await fetch(
      "http://localhost:3001/article/getImagePaths"
    );

    return imagePaths;

}

export default getImagePaths;
