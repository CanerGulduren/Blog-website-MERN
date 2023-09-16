"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBlogData, selectBlogData } from '@/app/features/blogSlice';

function TextInput() {
  const dispatch = useDispatch();
  const blogData = useSelector(selectBlogData);

  const handleAddText = () => {
    const newTexts = [...blogData.content.text, { title: "", article: "" }];
    dispatch(updateBlogData({ content: { ...blogData.content, text: newTexts } }));
  };

  const handleTextChange = (e, index) => {
    const { name, value } = e.target;
    const updatedTexts = [...blogData.content.text];
    updatedTexts[index] = {
      ...updatedTexts[index],
      [name]: value,
    };
    dispatch(updateBlogData({ content: { ...blogData.content, text: updatedTexts } }));
  };
  

  return (
    <div>
      <button type="button" onClick={handleAddText}>
        Metin Ekle
      </button>
      {blogData.content.text.map((text, index) => (
        <div key={index}>
          <input
            type="text"
            name="title"
            placeholder="Başlık"
            value={text.title || ''}
            onChange={(e) => handleTextChange(e, index)}
          />
          <textarea
            name="article"
            placeholder="Metin"
            value={text.article || ''}
            onChange={(e) => handleTextChange(e, index)}
          ></textarea>
        </div>
      ))}
    </div>
  );
}


export default TextInput;
