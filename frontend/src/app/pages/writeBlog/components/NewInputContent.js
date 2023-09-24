"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBlogData, selectBlogData } from "@/app/features/blogSlice";
import InputElem from "./InputElem";

function NewInputContent() {
  const blogData = useSelector(selectBlogData);
  const dispatch = useDispatch();
  
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedInput = { ...blogData.content[index].data, [name]: value };
    const updatedContent = [...blogData.content];
    updatedContent[index] = { ...updatedContent[index], data: updatedInput };
  
    dispatch(updateBlogData({ content: updatedContent }));
  };


  return blogData.content.map((element, index) => {
    const contentData = element.data;
    const findInputName = {
      firstInput: Object.keys(contentData)[0],
      secondInput: Object.keys(contentData)[1],
    };

    if (element.input == "img") {
      const path = findInputName.firstInput;
      const alt = findInputName.secondInput;
      return (
        <div key={`${path}_${index}`}>
          <InputElem
            name={path}
            title={"Upload your image"}
            type="file"
            update={(e) => {
              handleChange(e, index)
            }}
            value={contentData.path}
          />
          <InputElem
            name={alt}
            title={"Image description"}
            update={(e) => {
              handleChange(e, index);
            }}
            value={contentData.alt}
          />
        </div>
      );
    } else if (element.input === "text") {
      const title = findInputName.firstInput;
      const article = findInputName.secondInput;
      return (
        <div key={`${title}_${index}`}>
          <InputElem
            name={title}
            title={"Write Title"}
            update={(e) => {
              handleChange(e, index);
            }}
            value={contentData.title}
          />
          <InputElem
            name={article}
            title={"Write article"}
            update={(e) => {
              handleChange(e, index);
            }}
            value={contentData.article}
          />
        </div>
      );
    }
  });
}
export default NewInputContent;
