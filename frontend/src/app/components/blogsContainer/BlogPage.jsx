"use client";
import React from "react";
import ImageContent from "../blog/ImageContent";

const BlogCard = ({ blogData }) => {
  const blogDate = new Date(blogData.date);

  const coverImg = {
    path: blogData.coverImg,
    alt: blogData.title,
  };

  return (
    <div>
      <ImageContent data={coverImg} />
      <div className={`flex flex-col`}>
        <h2 className={`font-bold text-4xl my-4`}>{blogData.title}</h2>
        <div>
          <p className={"text-sm font-semibold"}>{blogData.author}</p>
          <p className={"text-sm"}>
            {`${blogDate.getDate()}-${blogDate.getMonth() + 1}-${blogDate.getFullYear()}`}
          </p>
        </div>
        <p className={"italic text-gray-900"}>{blogData.desc}</p>
      </div>
    </div>
  );
};

export default BlogCard;
