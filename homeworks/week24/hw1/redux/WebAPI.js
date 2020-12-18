const BASE_URL = 'https://student-json-api.lidemy.me';

export const getPosts = () => fetch(`${BASE_URL}/posts?_sort=createdAt&_order=desc`).then(res => res.json());

export const getCertainUserPost = userId => fetch(`${BASE_URL}/users/${userId}?_embed=posts`).then(res => res.json());

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

export const getMe = token => fetch(`${BASE_URL}/me`, {
  headers: {
    authorization: `Bearer ${token}`,
  },
})
  .then(res => res.json())
  .catch((res) => {
    console.log(res);
  });

export const createPost = (title, body, token) => fetch(`${BASE_URL}/posts`, {
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

export const updatePost = (token, id, title, body) => fetch(`${BASE_URL}/posts/${id}`, {
  method: 'PATCH',
  headers: {
    authorization: `Bearer ${token}`,
    'content-Type': 'application/json',
  },
  body: JSON.stringify({
    title,
    body,
  }),
}).then(res => res.json());

export const deletePost = (token, id) => fetch(`${BASE_URL}/posts/${id}`, {
  method: 'DELETE',
  headers: {
    authorization: `Bearer ${token}`,
    'content-Type': 'application/json',
  },
}).then(res => res.json());
