import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '@/app/features/blogSlice';
import contentInputReducer from "@/app/features/contentInputSlice"
import contentInputSlice from './features/contentInputSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    contentInput: contentInputReducer,
  },
});