"use client";
import React, { useState } from "react";
import capitalizeFirstLetter from "@/app/utils/capitalizeFirstLetter";
import { useDispatch } from "react-redux";
import { addText, addImage } from "@/app/features/blogSlice";

const contentTypes = ["text", "image"];

const content = {
  text: {
    addNewElement: addText(),
  },
  image: {
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
