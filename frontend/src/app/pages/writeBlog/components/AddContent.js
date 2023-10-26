"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addText, addImage } from "@/app/features/blogSlice";

const contentTypes = ["text", "image"];

const content = {
  text: {
    title: "Paragraf",
    addNewElement: addText(),
  },
  image: {
    title: "Resim",
    addNewElement: addImage()
  }
}

function AddContent() {
  const dispatch = useDispatch();
  const [image_ID, setImage_ID] = useState(0)

  const handleAddContent = (element) => {
    const newContent = content[element].addNewElement
    const imageContent = element === "image"
    if(imageContent){
      const addNewImage = dispatch(addImage(image_ID))
      setImage_ID(prevImg_ID => prevImg_ID + 1)
      return addNewImage
    }
    dispatch(newContent);
  }

  return (
    <div className={"flex align-center"}>
      {contentTypes.map((element, index) => {
        return (
          <button
            key={`btn-${index}`}
            type="button"
            onClick={() => {
              handleAddContent(element)
            }}
            className={"mx-2 border border-slate-950 rounded px-5 py-2 bg-neutral-100"}
          >
            + {content[element].title} Ekle
          </button>
        );
      })}
    </div>
  );
}

export default AddContent;
