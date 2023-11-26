"use client";
import React from "react";
import InputElem from "./InputElem";
import { useDispatch, useSelector } from "react-redux";
import { selectBlogData, updateBlogData } from "@/app/features/blogSlice";
import getImagePaths from "@/app/utils/blog/get/getImagePaths";

const inputElems = [
  { name: "title", inputType: "textArea", title: "Blog başlığı" },
  { name: "desc", inputType: "textArea", title: "Blog açıklaması" },
  { name: "coverImg", inputType: "file", title: "Blog kapak resmi" },
  { name: "author", inputType: "text", title: "Blog yazarı" },
  { name: "date", inputType: "date", title: "Blog tarihi" },
  { name: "category", inputType: "text", title: "Blog kategorisi" },
];

function Inputs({ style }) {
  const blogData = useSelector(selectBlogData);
  const dispatch = useDispatch();

  const handleInputChange = async (element) => {
    const { name, value } = element.target;
    const coverImg = name === "coverImg";
    if (coverImg) {
      const file = element.target.files;
      const imagePath = await getImagePaths(file);
      dispatch(updateBlogData({ coverImg: imagePath[0] }));
    } else {
      dispatch(updateBlogData({ ...blogData, [name]: value }));
    }
  };

  return (
    <div
      className={`flex flex-col gap-y-6 ${style}`}
    >
      {inputElems.map((input, index) => {
        const coverImg = input.name === "coverImg";
        return (
          <InputElem
            key={`input-${index}`}
            title={input.title}
            name={input.name}
            type={input.inputType}
            update={(e) => {
              handleInputChange(e);
            }}
          />
        );
      })}
    </div>
  );
}

export default Inputs;
