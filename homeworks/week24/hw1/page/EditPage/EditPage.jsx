/* eslint-disable import/named */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Loading,
  PostsContain,
  PostHr,
  PageBar,
  Page,
} from '../../component/components';
import { Post } from '../../component/post';
import {
  getCertainUserPost,
  selectPost,
} from '../../redux/reducers/postsReducer';
import { getMe, selectUser } from '../../redux/reducers/userReducer';
import { getAuthToken } from '../../util';

function EditPage() {
  const postsStore = useSelector(selectPost);
  const userStore = useSelector(selectUser);
  const { isLoadingList } = postsStore;
  const { totalOfPage } = postsStore;
  const posts = postsStore.post;
  const { userId } = userStore;
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [listOfArticle, setListOfArticle] = useState([]);
  const authToken = getAuthToken();

  useEffect(() => {
    dispatch(getMe(authToken));
  }, [dispatch, authToken]);

  useEffect(() => {
    if (userId) {
      dispatch(getCertainUserPost(userId));
    }
  }, [dispatch, userId]);

  useEffect(() => {
    const limitPerPage = 10;
    let ItemToPush = (currentPage - 1) * 10;
    const limit = ItemToPush + limitPerPage;
    const list = [];
    if (posts) {
      while (ItemToPush < limit && posts[ItemToPush]) {
        list.push(posts[ItemToPush]);
        ItemToPush += 1;
      }
      setListOfArticle(list);
    }
  }, [currentPage, posts]);

  const handleChangePage = (page) => {
    setCurrentPage(page.target.innerText);
  };

  return (
    <PostsContain>
      {isLoadingList && <Loading>loading</Loading>}
      {listOfArticle.length !== 0 ? (
        listOfArticle.map(post => (
          <div key={post.id}>
            <Post post={post} page="edit" />
            <PostHr />
          </div>
        ))
      ) : (
        <h1>還沒有文章喔！</h1>
      )}
      <PageBar>
        {totalOfPage.length !== 0
          && totalOfPage.map(page => (
            <Page key={page} onClick={handleChangePage}>{page}</Page>
          ))}
      </PageBar>
    </PostsContain>
  );
}

export default EditPage;
