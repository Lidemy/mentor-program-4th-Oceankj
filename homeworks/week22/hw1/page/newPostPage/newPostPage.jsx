/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { creatPost } from '../../WebAPI';

const NewWrapper = styled.div`
  display: block;
  margin: 70px auto;
  max-width: 1000px;
`;

const ArticleTitle = styled.p`
  font-size: 20px;
`;

const ArticleInputTitle = styled.input`
  width: 292px;
  height: 24px;
`;

const ArticleContent = styled.textarea`
  margin-top: 15px;
  resize: none;
`;

const Submit = styled.button`
  display: block;
  margin: 30px 0px 0px auto;
  padding: 5px 45px;
`;

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    creatPost(title, content, history)
      .then(() => history.push('/'))
      .catch(err => console.log(err));
  };

  return (
    <NewWrapper>
      <div>
        <form onSubmit={handleSubmit}>
          <ArticleTitle>新增文章</ArticleTitle>
          <ArticleInputTitle
            type="text"
            placeholder="輸入標題"
            value={title}
            onChange={handleTitleChange}
          />
          <ArticleContent
            cols="110"
            rows="20"
            placeholder="輸入內容"
            value={content}
            onChange={handleContentChange}
          />
          <Submit>送出</Submit>
        </form>
      </div>
    </NewWrapper>
  );
}
export default App;
