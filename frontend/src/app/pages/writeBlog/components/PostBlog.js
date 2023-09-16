"use client"
import React from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { resetBlogData, selectBlogData } from '@/app/features/blogSlice';


function PostBlog() {
  const dispatch = useDispatch();
  const blogData = useSelector(selectBlogData);

  const saveBlogData = async () => {
    try {
      const response = await axios.post('http://localhost:3001/article', blogData, {
        headers: {
          "Content-Type": "application/json", 
        },
      });
      console.log('Blog verileri başarıyla kaydedildi:', response.data);
      dispatch(resetBlogData())
    } catch (error) {
      console.error('Blog verileri kaydedilirken bir hata oluştu:', error);
    }
  };
  return (
    <button onClick={saveBlogData}>Blog Oluştur</button>
  )
}

export default PostBlog