import getAllBlogs from "@/app/utils/getAllBlogs";
import getBlog from "@/app/utils/getBlog";
import React from "react";
import { notFound } from "next/navigation";
import ImageContent from "@/app/components/blog/ImageContent";
import TextContent from "@/app/components/blog/TextContent";

const inputType = {
  img: ImageContent,
  text: TextContent
}

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
    title: blog.title,
  };
}

async function Blog({ params }) {
  const blog = await getBlog(params.blogId);

  if (!blog.title) return notFound();

  return (
    <>
      <h2>{blog.title}</h2>
      <p>{blog.author}</p>
      {blog.content.map((element, index) => {
        const Content = inputType[element.input]
        return <Content data={element.data} />
      })}
    </>
  );
}

export default Blog;
