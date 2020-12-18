/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  PostContainer,
  PostTitle,
  PostTime,
  PostEditButton,
  EditButtonContainer,
} from './components';

export default function Post({ post, page }) {
  return (
    <>
      <PostContainer to={`/article/${post.id}`}>
        <PostTitle>{post.title}</PostTitle>
        <PostTime>{new Date(post.createdAt).toLocaleString()}</PostTime>
      </PostContainer>
      {page === 'edit' && (
        <EditButtonContainer>
          <PostEditButton to={`/edit_post/${post.id}`}>編輯</PostEditButton>
          <PostEditButton to={`/delete/${post.id}`}>刪除</PostEditButton>
        </EditButtonContainer>
      )}
    </>
  );
}
Post.propTypes = {
  post: PropTypes.object,
  page: PropTypes.string,
};
