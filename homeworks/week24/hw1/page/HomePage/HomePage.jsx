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
import { Post } from '../../components/post';
import { getPosts } from '../../redux/reducers/postsReducer';

function HomePage() {
  const isLoadingList = useSelector(store => store.posts.isLoadingList);
  const totalOfPage = useSelector(store => store.posts.totalOfPage);
  const posts = useSelector(store => store.posts.post);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [listOfArticle, setListOfArticle] = useState([]);

  useEffect(() => {
    dispatch(getPosts());
    if (posts) {
      const limitPerPage = 10;
      let ItemToPush = (currentPage - 1) * 10;
      const limit = ItemToPush + limitPerPage;
      const list = [];
      while (ItemToPush < limit && posts[ItemToPush]) {
        list.push(posts[ItemToPush]);
        ItemToPush += 1;
      }
      setListOfArticle(list);
    }
  }, [currentPage, posts, dispatch]);

  const handleChangePage = (page) => {
    setCurrentPage(page.target.innerText);
  };

  return (
    <PostsContain>
      {isLoadingList && <Loading>loading</Loading>}
      {listOfArticle
        && listOfArticle.map(post => (
          <div key={post.id}>
            <Post post={post} page="home" />
            <PostHr />
          </div>
        ))}
      <PageBar>
        {totalOfPage
          && totalOfPage.map(page => (
            <Page key={page} onClick={handleChangePage}>{page}</Page>
          ))}
      </PageBar>
    </PostsContain>
  );
}

export default HomePage;
