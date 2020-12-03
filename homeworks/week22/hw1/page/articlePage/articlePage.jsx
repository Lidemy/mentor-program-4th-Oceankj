/* eslint-disable import/no-unresolved */
import React, { useState, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { getSinglePost } from '../../WebAPI';

const ArticleWrapper = styled.div`
  display: block;
  margin: 70px auto;
  max-width: 1000px;
`;

const ArticleTitle = styled.p`
  font-size: 20px;
`;

const ArticleTime = styled.p``;

const ArticleContent = styled.p`
  word-break: break-all;
  white-space: break-spaces;
`;

function App() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useLayoutEffect(() => {
    getSinglePost(id).then((res) => {
      setData(res);
    });
  }, []);

  return (
    <ArticleWrapper>
      <div>
        <ArticleTitle>{data.length > 0 && data[0].title}</ArticleTitle>
        <ArticleTime>
          {data.length > 0 && new Date(data[0].createdAt).toLocaleString()}
        </ArticleTime>
      </div>
      <ArticleContent>{data.length > 0 && data[0].body}</ArticleContent>
    </ArticleWrapper>
  );
}

export default App;
