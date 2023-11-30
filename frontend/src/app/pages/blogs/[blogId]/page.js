import getAllBlogs from "@/app/utils/blog/get/getAllBlogs";
import getBlog from "@/app/utils/blog/get/getBlog";
import React from "react";
import { notFound } from "next/navigation";
import ImageContent from "@/app/components/blog/ImageContent";
import TextContent from "@/app/components/blog/TextContent";
import BlogPage from "@/app/components/blogsContainer/BlogPage"

const inputType = {
  img: ImageContent,
  text: TextContent,
};

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
    <div className={"md:w-blogW grid gap-y-8 p-2 mx-auto"}>
      <BlogPage blogData={blog} />
      {blog.content.map((element, index) => {
        const Content = inputType[element.input];
        return <Content data={element.data} key={index} />;
      })}
    </div>
  );
}

export default Blog;
