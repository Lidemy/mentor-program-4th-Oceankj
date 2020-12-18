/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable import/no-unresolved */
import { createSlice } from '@reduxjs/toolkit';
import {
  getPosts as getPostsAPI,
  getSinglePost as getSinglePostAPI,
  getCertainUserPost as getCertainUserPostAPI,
} from '../WebAPI';

const postsReducer = createSlice({
  name: 'posts',
  initialState: {
    isLoadingList: false,
    totalOfPage: [],
    post: [],
    id: null,
    singlePost: [],
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoadingList = action.payload;
    },
    setPosts: (state, action) => {
      state.post = action.payload;
    },
    setTotalOfPage: (state, action) => {
      state.totalOfPage = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setSinglePost: (state, action) => {
      state.singlePost = action.payload;
    },
  },
});

export const getPosts = () => (dispatch) => {
  dispatch(setIsLoading(true));
  getPostsAPI().then((res) => {
    const listOfPage = [];
    const page = Math.ceil(res.length / 10);
    for (let i = 1; i <= page; i += 1) {
      listOfPage.push(i);
    }
    dispatch(setPosts(res));
    dispatch(setTotalOfPage(listOfPage));
    dispatch(setIsLoading(false));
  });
};

export const getCertainUserPost = userId => (dispatch) => {
  dispatch(setIsLoading(true));
  getCertainUserPostAPI(userId).then((res) => {
    dispatch(setPosts([]));
    const listOfPage = [];
    if (res.posts.length !== 0) {
      const page = Math.ceil(res.posts.length / 10);
      for (let i = 1; i <= page; i += 1) {
        listOfPage.push(i);
      }
      dispatch(setPosts(res.posts));
    }
    dispatch(setTotalOfPage(listOfPage));
    dispatch(setIsLoading(false));
  });
};

export const getSinglePost = id => (dispatch) => {
  dispatch(setIsLoading(true));
  getSinglePostAPI(id).then((res) => {
    dispatch(setSinglePost(res));
    dispatch(setIsLoading(false));
  });
};

export const {
  setIsLoading,
  setPosts,
  setTotalOfPage,
  setSinglePost,
} = postsReducer.actions;
export const selectPost = state => state.posts;
export default postsReducer.reducer;
