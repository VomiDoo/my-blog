import { configureStore } from '@reduxjs/toolkit';
import postSlice from './reducers/postSlice';

export const store = configureStore({
  reducer: {
      posts: postSlice,
  },
})