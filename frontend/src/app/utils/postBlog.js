 
 async function postBlog(blogData) {
    try {
      const response = await fetch("http://localhost:3001/article/createBlog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify(blogData),
      });
      if(response.ok){
        const data = await response.json()
        return console.log("BLOG BAŞARIYLA KAYDEDİLDİ.", data)
      }else {
        console.log("Hata Kodu:", response.status);
        console.log("Hata Mesajı:", response.statusText);
      }
    } catch (err) {
      console.log("Client Error", err);
    }
  }

export default postBlog