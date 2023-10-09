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
    addImage: (state, action) => {
      const id = action.payload
      state.content.push({input: "img", data: { imgID: id, path: "", alt: "" }});
    },
    pushImagePaths: (state, action) => {
      const imagePaths = action.payload
      const updatedContent = state.content.map((element) => {
        if (element.input === "img") {
          const imgId = element.data.imgID; 
          const updatedData = {
            path: imagePaths[imgId], 
            alt: element.data.alt,
            imgID: element.data.imgID, 
          };
          return {
            input: "img",
            data: updatedData,
          };
        } else {
          return element;
        }
      });
      const updatedState = {
        ...state,
        content: updatedContent,
      };

      return updatedState  
    }
  },
});

export const {
  updateBlogData,
  resetBlogData,
  addText,
  addImage,
  pushImagePaths
} = blogSlice.actions;

export const selectBlogData = (state) => state.blog;

export default blogSlice.reducer;
