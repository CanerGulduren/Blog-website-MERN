import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  desc: "",
  author: "",
  tag: "",
  category: "",
  content: [],
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
    addImgInput: (state, action) => {
      state.content.push({input: "img", data: {path: "", alt: ""}});
    },
    addTextInput: (state, action) => {
      state.content.push({input: "text", data: {title: "", article: ""}});
    },
  },
});

export const {
  updateBlogData,
  resetBlogData,
  addImgInput,
  addTextInput,
  updateContent,
} = blogSlice.actions;

export const selectBlogData = (state) => state.blog;

export default blogSlice.reducer;
