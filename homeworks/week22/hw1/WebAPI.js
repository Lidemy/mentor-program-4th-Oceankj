import { getAuthToken } from './util';

const BASE_URL = 'https://student-json-api.lidemy.me';

export const getPost = page => fetch(
  `${BASE_URL}/posts?_sort=createdAt&_order=desc&_page=${page}&_limit=10`,
).then(res => res.json());

export const getTotalPage = () => fetch(`${BASE_URL}/posts`).then(res => res.json());

export const getSinglePost = id => fetch(`${BASE_URL}/posts?id=${id}`).then(res => res.json());

export const logIn = (username, password) => fetch(`${BASE_URL}/login`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    username,
    password,
  }),
}).then(res => res.json());

export const register = (nickname, username, password) => fetch(`${BASE_URL}/register`, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    nickname,
    username,
    password,
  }),
}).then(res => res.json());

export const getMe = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(res => res.json());
};

export const creatPost = (title, body) => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      authorization: `Bearer ${token}`,
      'content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      body,
    }),
  }).then(res => res.json());
};
