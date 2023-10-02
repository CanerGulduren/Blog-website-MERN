"use client";
import React from "react";
import capitalizeFirstLetter from "@/app/utils/capitalizeFirstLetter";
import { useDispatch, useSelector } from "react-redux";
import { selectBlogData, addText, updateBlogData } from "@/app/features/blogSlice";

const contentTypes = ["text"];

const content = {
  text: {
    addNewElement: addText(),
  },
}

function AddContent() {
  const blogData = useSelector(selectBlogData);
  const dispatch = useDispatch();

  const handleAddContent = (element) => {
    const newContent = content[element].addNewElement
    console.log(newContent)
    dispatch(newContent);
  }

  return (
    <div>
      {contentTypes.map((element, index) => {
        const capitalizeName = capitalizeFirstLetter(element);
        return (
          <button
            key={`btn-${index}`}
            type="button"
            onClick={() => {
              handleAddContent(element)
            }}
          >
            Add {capitalizeName}
          </button>
        );
      })}
    </div>
  );
}

export default AddContent;
