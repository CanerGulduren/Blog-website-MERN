"use client"
import React from 'react'
import { useDispatch } from 'react-redux'
import {
  addImgInput,
  addTextInput
} from "@/app/features/blogSlice";

function AddContent({contentType}) {
const dispatch = useDispatch()

const handleAddContent = () => {
  if (contentType === 'Image') {
    dispatch(addImgInput());
  } else if (contentType === 'Text') {
    dispatch(addTextInput());
  }
};
  return (
    <button type="button" onClick={handleAddContent}>
        Add {contentType}
    </button>
  )
}

export default AddContent