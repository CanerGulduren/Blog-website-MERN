"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectBlogData } from "@/app/features/blogSlice";
import AddContent from "./AddContent";
import Inputs from "./Inputs";
import postBlog from "@/app/utils/postBlog";
import Contents from "./Contents";

function BlogForm() {
  const blogData = useSelector(selectBlogData);
  const [imagePathUpdated, setImagePathUpdated] = useState(false);
  const [submitStarted, setSubmitStarted] = useState(false);

  const handleSubmit = (form) => {
    form.preventDefault();
    setSubmitStarted(true);
  };

  useEffect(() => {
    if (imagePathUpdated && submitStarted) {
      postNewBlog();
    }
  }, [imagePathUpdated, submitStarted]);

  const postNewBlog = async () => {
    await postBlog(blogData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h2>Blog Gönderisi Oluştur</h2>

        <Inputs />

        <AddContent />

        <Contents
          pathsUpdated={setImagePathUpdated}
          submitStarted={submitStarted}
        />

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default BlogForm;
