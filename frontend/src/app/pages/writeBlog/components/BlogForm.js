"use client";
import React from "react";
import PostBlog from "./PostBlog";
import InputElem from "./InputElem";
import NewInputContent from "./NewInputContent";
import AddContent from "./AddContent";
import style from "@/app/style/component/blogForm.module.css";

import { useDispatch, useSelector } from "react-redux";
import {
  selectBlogData,
  updateBlogData,
  resetBlogData,
} from "@/app/features/blogSlice";

function BlogForm() {
  const blogData = useSelector(selectBlogData);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateBlogData({ ...blogData, [name]: value }));
  };

  return (
    <div>
      <h2>Blog Gönderisi Oluştur</h2>
      <InputElem
        title={"Başlık"}
        name={"title"}
        update={(e) => {
          handleInputChange(e);
        }}
        value={blogData.title}
      />

      <InputElem
        title={"Açıklama"}
        name={"desc"}
        update={(e) => {
          handleInputChange(e);
        }}
        value={blogData.desc}
      />

      <InputElem
        title={"Yazar"}
        name={"author"}
        update={(e) => {
          handleInputChange(e);
        }}
        value={blogData.author}
      />

      <InputElem
        title={"Etiket"}
        name={"tag"}
        update={(e) => {
          handleInputChange(e);
        }}
        value={blogData.tag}
      />

      <InputElem
        title={"Tarih"}
        name={"date"}
        type={"date"}
        update={(e) => {
          handleInputChange(e);
        }}
        value={blogData.date}
      />

      <InputElem
        title={"Kategori"}
        name={"category"}
        update={(e) => {
          handleInputChange(e);
        }}
        value={blogData.category}
      />

      <AddContent contentType={"Text"} />
      <AddContent contentType={"Image"} />

      <NewInputContent />

      <PostBlog />
    </div>
  );
}

export default BlogForm;
