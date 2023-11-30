"use client";
import React from "react";
import getAllBlogs from "@/app/utils/blog/get/getAllBlogs";
import BlogCard from "./BlogCard";
import {useQuery} from "@tanstack/react-query"

const BlogContainer = ({ filterQuery, style }) => {
  
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['blogs'],
    queryFn: () => getAllBlogs(filterQuery),
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  console.log(data)

  return (
    <div className={`${style}`}>
      {data &&
        data.map((element, index) => {
          return (
            <BlogCard
              blogData={element}
              key={index}
              cardStyle={"w-96"}
              titleStyle={"gap-2"}
              titleSize={"text-xl"}
            />
          );
        })}
    </div>
  );
};

export default BlogContainer;
