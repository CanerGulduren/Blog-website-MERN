import React from "react";
import capitalizeFirstLetter from "@/app/utils/capitalizeFirstLetter";
import InputElem from "./InputElem";
import { useDispatch, useSelector } from "react-redux";
import { selectBlogData, updateBlogData } from "@/app/features/blogSlice";
import getImagePaths from "@/app/utils/getImagePaths";

const inputElems = [
  { name: "title", inputType: "text" },
  { name: "desc", inputType: "text" },
  { name: "author", inputType: "text" },
  { name: "tag", inputType: "text" },
  { name: "date", inputType: "date" },
  { name: "category", inputType: "text" },
  { name: "coverImg", inputType: "file" },
];

function Inputs() {
  const blogData = useSelector(selectBlogData);
  const dispatch = useDispatch();

  const handleInputChange = async (element) => {
    const { name, value } = element.target;
    const coverImg = name === "coverImg"
    if(coverImg){
      const file = element.target.files 
      const imagePath = await getImagePaths(file)
      dispatch(updateBlogData({coverImg: imagePath[0]}))
    }else{
      dispatch(updateBlogData({ ...blogData, [name]: value }));
    }
  };

  return (
    <div>
      {inputElems.map((input, index) => {
        const capitalizeTitle = capitalizeFirstLetter(input.name);
        const coverImg = input.name === "coverImg"
        return (
          <InputElem
            key={`input-${index}`}
            title={capitalizeTitle}
            name={input.name}
            type={input.inputType}
            update={(e) => {
              handleInputChange(e);
            }}
            value={coverImg ? "" : blogData[input.name]}
          />
        );
      })}
    </div>
  );
}

export default Inputs;
