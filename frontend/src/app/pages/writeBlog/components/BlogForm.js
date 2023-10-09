"use client";
import React, { useState, useEffect } from "react";
import InputElem from "./InputElem";
import style from "@/app/style/component/blogForm.module.css";
import capitalizeFirstLetter from "@/app/utils/capitalizeFirstLetter";
import { useDispatch, useSelector } from "react-redux";
import {
  pushImagePaths,
  selectBlogData,
  updateBlogData,
} from "@/app/features/blogSlice";
import AddContent from "./AddContent";
import uploadImages from "@/app/utils/uploadImages";
import Inputs from "./Inputs";
import postBlog from "@/app/utils/postBlog";

function BlogForm() {
  const blogData = useSelector(selectBlogData);
  const dispatch = useDispatch();
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePaths, setImagePaths] = useState(null);
  const [imagePathsUpdated, setImagePathsUpdated] = useState(false);

  const handleContentChange = (element, index) => {
    const { name, value } = element.target;
    const content = blogData.content;

    const updatedInput = { ...content[index].data, [name]: value };
    const updatedContent = [...content];
    updatedContent[index] = { ...updatedContent[index], data: updatedInput };
    dispatch(updateBlogData({ content: updatedContent }));
  };

  const handleImageChange = (input) => {
    const file = input.target.files[0];
    setImageFiles([...imageFiles, file]);
  };

  const getImagePaths = async () => {
    const formData = new FormData();
    for (let i = 0; i < imageFiles.length; i++) {
      formData.append("images", imageFiles[i]);
    }
    const newImagePaths = await uploadImages(formData);
    return newImagePaths;
  };

  const handleSubmit = async (form) => {
    form.preventDefault();
    const paths = await getImagePaths(); 
    setImagePaths(paths); 
  };

  const postNewBlog = async () => {
    await postBlog(blogData)
  }

  useEffect(() => {
    if (imagePaths !== null) {
      dispatch(pushImagePaths(imagePaths));
      setImagePathsUpdated(true);
    }
    if (imagePathsUpdated) {
      console.log(blogData);
      postNewBlog()
    }
  }, [imagePaths, imagePathsUpdated]);


  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h2>Blog Gönderisi Oluştur</h2>

        <Inputs />

        <AddContent />

        <div>
          {blogData.content.map((element, index) => {
            const type = element.input;
            const data = element.data;
            const capitalizeName = capitalizeFirstLetter(type);

            return (
              <div key={`content-${index}`}>
                <h3>{capitalizeName} Content</h3>

                {Object.keys(data).map((dataElem, dataIndex) => {
                  const imageInput = dataElem === "path";
                  const skipImgID = dataElem === "imgID";

                  if (skipImgID) {
                    return;
                  }

                  return (
                    <InputElem
                      key={`content-data-${dataIndex}`}
                      name={dataElem}
                      title={`Change ${dataElem}`}
                      value={imageInput ? "" : data[dataElem]}
                      type={imageInput ? "file" : "text"}
                      update={(e) => {
                        imageInput
                          ? handleImageChange(e)
                          : handleContentChange(e, index);
                      }}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default BlogForm;
