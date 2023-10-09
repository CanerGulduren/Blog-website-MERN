import React from "react";
import capitalizeFirstLetter from "@/app/utils/capitalizeFirstLetter";
import InputElem from "./InputElem";
import { useDispatch, useSelector } from "react-redux";
import { selectBlogData, updateBlogData } from "@/app/features/blogSlice";

const inputElements = ["title", "desc", "author", "tag", "date", "category"];

function Inputs() {
  const blogData = useSelector(selectBlogData);
  const dispatch = useDispatch();

  const handleInputChange = (element) => {
    const { name, value } = element.target;
    dispatch(updateBlogData({ ...blogData, [name]: value }));
  };

  return (
    <div>
      {inputElements.map((input, index) => {
        const capitalizeTitle = capitalizeFirstLetter(input);
        const dateInput = input === "date";
        return (
          <InputElem
            key={`input-${index}`}
            title={capitalizeTitle}
            name={input}
            type={dateInput ? "date" : "text"}
            update={(e) => {
              handleInputChange(e);
            }}
            value={blogData[input]}
          />
        );
      })}
    </div>
  );
}

export default Inputs;
