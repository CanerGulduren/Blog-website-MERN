import axios from "axios";

async function getBlog(userId) {
  const response = await axios.get(`${process.env.SERVER_NAME}/article/${userId}`);
  if (response.status !== 200) return undefined

  return response.data;
}

export default getBlog;
