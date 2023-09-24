import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contentInput: [],
};

const contentInputSlice = createSlice({
  name: "contentInput",
  initialState,
  reducers: {
    updateInputArray: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    }
  },
});

export const {
    updateInputArray
} = contentInputSlice.actions;

export const selectBlogData = (state) => state.contentInput;

export default contentInputSlice.reducer;
