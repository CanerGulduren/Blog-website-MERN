const getImageURL = async (imageName) => {
  try {
    const APIurl = `http://localhost:3001/article/getImage/${imageName}`;
    const response = await fetch(APIurl);

    if (response.ok) {
      return response.url;
    } else {
      throw new Error("Resim alınamadı.");
    }
  } catch (error) {
    console.error(error);
    throw error; 
  }
};

export default getImageURL;
