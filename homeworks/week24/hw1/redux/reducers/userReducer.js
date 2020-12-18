/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import {
  logIn as logInAPI,
  register as registerAPI,
  getMe as getMeAPI,
  createPost as createPostAPI,
  updatePost as updatePostAPI,
  deletePost as deletePostAPI,
} from '../WebAPI';
import { setAuthToken } from '../../util';

export const userReducer = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    userId: null,
    errorMessage: 'error',
    status: null,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setUser: (state, action) => {
      state.userId = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const logIn = (username, password) => (dispatch) => {
  dispatch(setIsLoading(true));
  logInAPI(username, password).then((data) => {
    dispatch(setErrorMessage(''));
    data.ok === 0
      ? dispatch(setErrorMessage(data.message))
      : setAuthToken(data.token);
    dispatch(setIsLoading(false));
    return data;
  });
};

export const getMe = token => (dispatch) => {
  getMeAPI(token)
    .then((res) => {
      res.ok === 1 && dispatch(setUser(res.data.id));
      return res;
    })
    .then((res) => {
      if (res.ok !== 1) {
        setAuthToken(null);
        dispatch(setErrorMessage(res.toString()));
      }
      return res;
    });
};

export const register = (nickName, userName, password) => (dispatch) => {
  dispatch(setIsLoading(true));
  dispatch(setStatus(''));
  registerAPI(nickName, userName, password)
    .then((data) => {
      data.ok === 0 && dispatch(setErrorMessage(data.message));
      return data;
    })
    .then((data) => {
      if (data.ok !== 0) {
        setAuthToken(data.token);
        dispatch(setStatus('ok'));
      }
    });
  dispatch(setIsLoading(false));
};

export const createPost = (title, body, token) => (dispatch) => {
  dispatch(setIsLoading(true));
  dispatch(setStatus(''));
  createPostAPI(title, body, token)
    .then((res) => {
      res.title && dispatch(setStatus('ok'));
      return res;
    })
    .then(res => dispatch(setErrorMessage(res.message)));
  dispatch(setIsLoading(false));
};

export const updatePost = (token, id, title, body) => (dispatch) => {
  dispatch(setIsLoading(true));
  dispatch(setStatus(''));
  updatePostAPI(token, id, title, body)
    .then((res) => {
      res.title && dispatch(setStatus('ok'));
      return res;
    })
    .then(res => dispatch(setErrorMessage(res.message)));
  dispatch(setIsLoading(false));
};

export const deletePost = (token, id) => (dispatch) => {
  dispatch(setIsLoading(true));
  dispatch(setStatus(''));
  deletePostAPI(token, id).then(dispatch(setStatus('ok')));
  dispatch(setIsLoading(false));
};

export const {
  setIsLoading,
  setUser,
  setErrorMessage,
  setStatus,
} = userReducer.actions;
export const selectUser = state => state.user;
export default userReducer.reducer;
