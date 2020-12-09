/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getPost, getTotalPage } from '../../WebAPI';

const PostsWrapper = styled.div`
  display: block;
  margin: 60px auto;
  max-width: 1000px;
`;

const PostContainer = styled(Link)`
  display: flex;
  padding: 0px 40px;
  align-items: flex-end;
  justify-content: space-between;
  border-radius: 5px;
  cursor: pointer;
  color: #555;
  text-decoration: none;
  :hover {
    background-color: #80808047;
  }
`;

const PostTime = styled.p`
  display: flex;
`;

const PostTitle = styled.p`
  display: flex;
`;

const PostHr = styled.div`
  display: flex;
  margin: auto;
  padding: 0px;
  border-bottom: 1px solid #8080801f;
  width: 918px;
`;

const PageBar = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;

const Page = styled.div`
  margin: 8px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background: #8080808f;
    color: white;
  }
`;

function Post({ post }) {
  return (
    <PostContainer to={`/article/${post.id}`}>
      <PostTitle>{post.title}</PostTitle>
      <PostTime>{new Date(post.createdAt).toLocaleString()}</PostTime>
    </PostContainer>
  );
}

Post.propTypes = {
  post: PropTypes.object,
};

function App() {
  const [posts, setPost] = useState([]);
  const [total, setTotal] = useState([]);

  useEffect(() => {
    getTotalPage().then((data) => {
      const listOfPage = [];
      const page = Math.ceil(data.length / 10);
      for (let i = 1; i <= page; i += 1) {
        listOfPage.push(i);
      }
      setTotal(listOfPage);
    });
    getPost(1).then((res) => {
      console.log(res);
      setPost(res);
    });
  }, []);

  const handleChangePage = (page) => {
    getPost(page).then((res) => {
      console.log(res);
      setPost(res);
    });
  };

  return (
    <PostsWrapper>
      {posts.map(post => (
        <div key={post.id}>
          <Post post={post} />
          <PostHr />
        </div>
      ))}
      <PageBar>
        {total.map(page => (
          <Page
            key={page}
            onClick={(e) => {
              handleChangePage(e.target.innerText);
            }}
          >
            {page}
          </Page>
        ))}
      </PageBar>
    </PostsWrapper>
  );
}

export default App;
