import getAllBlogs from "@/app/utils/getAllBlogs";
import getBlog from "@/app/utils/getBlog";
import React from "react";
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const blogsData = getAllBlogs();
  const allBlogs = await blogsData;
  return allBlogs.map((blogs) => ({
    blogId: blogs.id,
  }));
}

export async function generateMetadata({ params }) {
  const id = params.blogId;
  const blogData = getBlog(id);
  const blog = await blogData;

  return {
    title: blog.mData,
  };
}

async function Blog({ params }) {

  const blog = await getBlog(params.blogId);

  if(!blog.title) return notFound()

  return (
    <>
      <h2>{blog.title}</h2>
      <p>{blog.author}</p>
      <p>{blog.content}</p>
    </>
  );
}

export default Blog;
