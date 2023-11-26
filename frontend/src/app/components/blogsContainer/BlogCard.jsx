"use client"
import React from "react";
import ImageContent from "../blog/ImageContent";

const BlogCard = ({ blogData, cardStyle, titleStyle, titleSize }) => {
  
  const blogDate = new Date(blogData.date)

  const coverImg = {
    path: blogData.coverImg,
    alt: blogData.title
  }

  return (
    <div className={`${cardStyle}`}>
      <ImageContent data={coverImg} />
      <div className={`flex flex-col ${titleStyle}`}>
        <h2 className={`font-bold ${titleSize}`}>{blogData.title}</h2>
        <div>
          <p className={"text-sm font-semibold"}>{blogData.author}</p>
          <p className={"text-sm"}>{`${blogDate.getDate()}-${blogDate.getMonth() + 1}-${blogDate.getFullYear()}`}</p>
        </div>
          <p className={"italic text-gray-900"}>{blogData.desc}</p>
      </div>
    </div>
  );
};

export default BlogCard;
