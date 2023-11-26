"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectBlogData } from "@/app/features/blogSlice";
import AddContent from "./AddContent";
import Inputs from "./Inputs";
import postBlog from "@/app/utils/blog/post/postBlog";
import Contents from "./Contents";
import SubmitButton from "./SubmitButton";

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

        <div className={"p-2 md:flex md:justify-center xl:gap-10 gap-2"}>
          <div
            className={
              "flex md:justify-between items-center fixed bottom-0 left-0 right-0 md:left-0 md:top-0 md:right-0 md:h-20 p-4 bg-zinc-800"
            }
          >
            <AddContent />

            <SubmitButton screenSize={"large"} />
          </div>

          <div className={"h-20 md:hidden"}></div>

          <Inputs style={"p-6 my-10 md:mt-24 md:mx-2 md:self-start bg-neutral-50 border-2 border-neutral-300 shadow-xl rounded-lg"} />
          
          <div className={"md:p-4 md:w-xl md:mx-2 md:mt-24 bg-neutral-50 rounded-lg border-4 border-neutral-300"}>
            <h4 className={"text-2xl underline py-6 my-4 mx-2"}>Blog İçeriği</h4>
            <Contents
              pathsUpdated={setImagePathUpdated}
              submitStarted={submitStarted}
              style={"overflow-auto"}
            />
          </div>
            <SubmitButton screenSize={"small"} />
        </div>

        <div className={"h-52"}></div>
      </form>
    </div>
  );
}

export default BlogForm;
