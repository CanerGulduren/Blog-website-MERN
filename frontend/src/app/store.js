import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '@/app/features/blogSlice';

export const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});