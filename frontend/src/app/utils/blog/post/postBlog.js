import axios from "axios";

async function postBlog(blogData) {
  try {
    const response = await axios.post(
      "http://localhost:3001/article/createBlog",
      blogData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      console.log("BLOG BAŞARIYLA KAYDEDİLDİ.", response.data);
    } else {
      console.log("Hata Kodu:", response.status);
      console.log("Hata Mesajı:", response.statusText);
    }
  } catch (err) {
    console.log("Client Error", err);
  }
}

export default postBlog;
