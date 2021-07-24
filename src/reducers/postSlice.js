import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((_, index) => action.payload !== index);
    },
    editPost: (state, action) => {
      const { editValue, index } = action.payload;
      state.posts[index].value = editValue;
    },
  },
});

export const { addPost, deletePost, editPost } = postsSlice.actions;

export default postsSlice.reducer;
