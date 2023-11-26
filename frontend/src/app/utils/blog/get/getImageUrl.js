import axios from "axios";

const getImageURL = async (imageName) => {
  try {
    const APIurl = `http://localhost:3001/article/getImage/${imageName}`;
    const response = await axios.get(APIurl);

    if (response.status === 200) {
      return response.request.responseURL;
    } else {
      throw new Error("Resim alınamadı.");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getImageURL;
