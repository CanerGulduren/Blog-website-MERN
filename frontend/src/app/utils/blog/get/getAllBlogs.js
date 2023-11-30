import axios from "axios";

async function getAllBlogs(filter) {
  try {
    const res = await axios.get(`http://localhost:3001/article/`, {
      params: {
        filter: filter,
      },
    });

    if (res.status !== 200) return undefined;
    
    return res.data;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return undefined;
  }
}


export default getAllBlogs;
