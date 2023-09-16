"use client";
import React from "react";
import TextInput from "./TextInput";
import ImageInput from "./ImageInput";
import PostBlog from "./PostBlog";
import InputElem from "./InputElem";

function BlogForm() {
  return (
    <div>
      <h2>Blog Gönderisi Oluştur</h2>

      <InputElem InputTitle={"Başlık"} InputName={"title"} />

      <InputElem InputTitle={"Açıklama"} InputName={"desc"} />

      <InputElem InputTitle={"Yazar"} InputName={"author"} />

      <InputElem InputTitle={"Etiket"} InputName={"tag"} />

      <InputElem InputTitle={"Tarih"} InputName={"date"} InputType={"date"} />

      <InputElem InputTitle={"Kategori"} InputName={"category"} />

      <TextInput />

      <ImageInput />

      <PostBlog />

    </div>
  );
}

export default BlogForm;
