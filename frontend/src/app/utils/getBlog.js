
async function getBlog(userId) {
  const res = await fetch(`http://localhost:3001/article/${userId}`);
  if (!res.ok) return undefined

  return res.json();
}

export default getBlog;
