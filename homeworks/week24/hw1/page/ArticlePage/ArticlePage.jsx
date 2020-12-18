/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  ArticleWrapper,
  ArticleTitle,
  ArticleContent,
  Loading,
} from '../../component/components';
import { getSinglePost } from '../../redux/reducers/postsReducer';

function SingleArticlePage() {
  const { id } = useParams();
  const isLoading = useSelector(store => store.posts.isLoading);
  const SinglePost = useSelector(store => store.posts.singlePost[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSinglePost(id));
  }, [dispatch, id]);

  return (
    <ArticleWrapper>
      {isLoading && <Loading>loading</Loading>}
      <div>
        <ArticleTitle>{SinglePost && SinglePost.title}</ArticleTitle>
        <p>{SinglePost && new Date(SinglePost.createdAt).toLocaleString()}</p>
      </div>
      <ArticleContent>{SinglePost && SinglePost.body}</ArticleContent>
    </ArticleWrapper>
  );
}

export default SingleArticlePage;
