
async function getAllBlogs(category, limit) {
  const res = await fetch(`http://localhost:3001/article?category=${category}&limit=${limit}`);
  if (!res.ok) return undefined

  return res.json();
}

export default getAllBlogs;