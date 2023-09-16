import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { updateBlogData, selectBlogData } from "@/app/features/blogSlice";

function InputElem({InputTitle, InputName, InputType = "text"}) {

    const dispatch = useDispatch();
    const blogData = useSelector(selectBlogData);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateBlogData({ [name]: value }));
      };

  return (
    <div>
    <label>{InputTitle}:</label>
    <input
      type= {InputType}
      name= {InputName}
      value={blogData.InputName}
      onChange={handleInputChange}
    />
  </div>
  )
}

export default InputElem