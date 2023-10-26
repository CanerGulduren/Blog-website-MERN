import getAllBlogs from "@/app/utils/getAllBlogs";
import getBlog from "@/app/utils/getBlog";
import React from "react";
import { notFound } from "next/navigation";
import ImageContent from "@/app/components/blog/ImageContent";
import TextContent from "@/app/components/blog/TextContent";

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

  const blogDate = new Date(blog.date)

  const coverImg = {
    path: blog.coverImg,
    alt: blog.title
  }

  if (!blog.title) return notFound();

  return (
    <div className={"md:w-blogW grid gap-y-8 p-2 mx-auto"}>
          <ImageContent data={coverImg} imageStyle={"h-52"} />
      <div className={"flex flex-col gap-4"}>
        <h2 className={"text-3xl md:text-4xl font-bold"}>{blog.title}</h2>
        <div>
          <p className={"text-sm font-semibold"}>{blog.author}</p>
          <p className={"text-sm"}>{`${blogDate.getDate()}-${blogDate.getMonth() + 1}-${blogDate.getFullYear()}`}</p>
        </div>
          <p className={"italic text-gray-900"}>{blog.desc}</p>
      </div>
      {blog.content.map((element, index) => {
        const Content = inputType[element.input];
        return <Content data={element.data} key={index} />;
      })}
    </div>
  );
}

export default Blog;
