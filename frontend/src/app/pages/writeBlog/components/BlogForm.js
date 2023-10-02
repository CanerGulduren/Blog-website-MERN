"use client";
import React from "react";
import InputElem from "./InputElem";
import style from "@/app/style/component/blogForm.module.css";
import ContentElements from "./ContentElements";
import capitalizeFirstLetter from "@/app/utils/capitalizeFirstLetter";

import { useDispatch, useSelector } from "react-redux";
import { selectBlogData, updateBlogData } from "@/app/features/blogSlice";
import AddContent from "./AddContent";
import postBlog from "@/app/utils/postBlog";

const inputElements = ["title", "desc", "author", "tag", "date", "category"];
const emptyContentData = {
  text: {
    input: "text",
    data: { title: "", article: "" },
  },
  image: {
    input: "img",
    data: { path: "", alt: "" },
  },
};

function BlogForm() {
  const blogData = useSelector(selectBlogData);
  const dispatch = useDispatch();

  const handleInputChange = (element) => {
    const { name, value } = element.target;
    dispatch(updateBlogData({ ...blogData, [name]: value }));
  };



  const findImageFiles = () => {
    const formData = new FormData();
    const imageFiles = imageFiles.filter(
      (content) => content.input === "img"
    );
    imageFiles.forEach((img, index) => {
      formData.append(`image-${index}`, img.data.path);
    });
    return formData;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageFiles = findImageFiles();
    const imagePaths = await postBlog(imageFiles)
  };

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h2>Blog Gönderisi Oluştur</h2>
        {inputElements.map((input, index) => {
          const capitalizeTitle = capitalizeFirstLetter(input);
          const dateInput = input === "date"
          return (
            <InputElem
              key={`input-${index}`}
              title={capitalizeTitle}
              name={input}
              type= {dateInput ? "date": "text"}
              update={(e) => {
                handleInputChange(e);
              }}
              value={blogData[input]}
            />
          );
        })}

        <div>
        <AddContent />
        <input type="file" name="path" multiple />
        </div>

        <ContentElements />
        
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default BlogForm;
