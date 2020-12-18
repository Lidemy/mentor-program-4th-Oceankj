/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  ArticleWrapper,
  ArticleTitle,
  ArticleContent,
} from '../../component/components';

function AboutPage() {
  return (
    <ArticleWrapper>
      <div>
        <ArticleTitle>關於我</ArticleTitle>
      </div>
      <ArticleContent>嗨嗨嗨嗨嗨嗨你好啊</ArticleContent>
    </ArticleWrapper>
  );
}

export default AboutPage;
