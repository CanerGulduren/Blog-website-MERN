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
    addText: (state) => {
      state.content.push({input: "text", data: { title: "", article: "" }});
    },
  },
});

export const {
  updateBlogData,
  resetBlogData,
  addText
} = blogSlice.actions;

export const selectBlogData = (state) => state.blog;

export default blogSlice.reducer;
