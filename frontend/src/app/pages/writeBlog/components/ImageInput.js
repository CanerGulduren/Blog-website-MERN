"use client"
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBlogData, selectBlogData } from '@/app/features/blogSlice';

function ImageInput() {
  const dispatch = useDispatch();
  const blogData = useSelector(selectBlogData);

  const handleAddImage = () => {
    const newImages = [...blogData.content.img, { url: '', alt: '' }];
    dispatch(updateBlogData({ content: { ...blogData.content, img: newImages } }));
  };

  const handleImageChange = (e, index) => {
    const { name, value } = e.target;
    const updatedImages = [...blogData.content.img];
    updatedImages[index] = {
      ...updatedImages[index], [name]: value
    }
    dispatch(updateBlogData({ content: { ...blogData.content, img: updatedImages } }));
  };

  return (
    <div>
      <button type="button" onClick={handleAddImage}>
        Resim Ekle
      </button>
      {blogData.content.img.map((img, index) => (
        <div key={index}>
          <input
            type="text"
            name="url"
            placeholder="Resim URL"
            value={img.url || ""}
            onChange={(e) => handleImageChange(e, index)}
          />
          <input
            type="text"
            name="alt"
            placeholder="Resim Açıklama"
            value={img.alt || ""}
            onChange={(e) => handleImageChange(e, index)}
          />
        </div>
      ))}
    </div>
  );
}

export default ImageInput;
