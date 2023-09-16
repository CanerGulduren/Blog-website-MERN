import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  title: "",
  desc: "",
  author: "",
  tag: "",
  category: "",
  content: {
    img: [],
    text: [],
    list:[]
  },
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    updateBlogData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    resetBlogData: (state) => {
      return initialState;
    },
    addImagePath: (state, action) => {
      const { index, path } = action.payload;
      state.content.img[index].path = path;
    },
  },
});

export const { updateBlogData, resetBlogData, addImagePath } = blogSlice.actions;

export const selectBlogData = (state) => state.blog;

export default blogSlice.reducer;
