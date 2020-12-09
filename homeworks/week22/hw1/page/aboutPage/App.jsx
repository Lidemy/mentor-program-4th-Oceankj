/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import React from 'react';

const ArticleWrapper = styled.div`
  display: block;
  margin: 70px auto;
  max-width: 1000px;
`;

const ArticleTitle = styled.p`
  font-size: 25px;
`;

const ArticleContent = styled.p`
  word-break: break-all;
  white-space: break-spaces;
`;

function App() {
  return (
    <ArticleWrapper>
      <div>
        <ArticleTitle>關於我</ArticleTitle>
      </div>
      <ArticleContent>嗨嗨嗨嗨嗨嗨你好啊</ArticleContent>
    </ArticleWrapper>
  );
}

export default App;
