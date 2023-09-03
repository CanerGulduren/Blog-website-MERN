import React from "react";

async function getAllBlogs() {
  const res = await fetch(`http://localhost:3001/article`);
  if (!res.ok) return undefined

  return res.json();
}

export default getAllBlogs;