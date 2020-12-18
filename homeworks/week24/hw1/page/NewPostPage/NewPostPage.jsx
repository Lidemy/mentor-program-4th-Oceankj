/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  createPost,
  selectUser,
  setErrorMessage,
  setStatus,
} from '../../redux/reducers/userReducer';
import {
  Loading,
  ErrorMessage,
  NewWrapper,
  ArticleTitle,
  ArticleInputTitle,
  NewArticleContent,
  SubmitContent,
  Submit,
} from '../../component/components';
import { getAuthToken } from '../../util';

function NewPostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const userStore = useSelector(selectUser);
  const { errorMessage } = userStore;
  const { isLoading } = userStore;
  const sendStatus = userStore.status;
  const token = getAuthToken();
  const history = useHistory();
  const dispatch = useDispatch();
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(title, content, token));
  };

  useEffect(() => {
    !token && history.push('/');
    sendStatus === 'ok' && history.push('/');
    dispatch(setStatus(''));
    dispatch(setErrorMessage(''));
  }, [token, sendStatus, history, dispatch]);

  return (
    <NewWrapper>
      {isLoading && <Loading>loading</Loading>}
      <div>
        <form onSubmit={handleSubmit}>
          <ArticleTitle>新增文章</ArticleTitle>
          <ArticleInputTitle
            type="text"
            placeholder="輸入標題"
            value={title}
            onChange={handleTitleChange}
          />
          <NewArticleContent
            cols="110"
            rows="20"
            placeholder="輸入內容"
            value={content}
            onChange={handleContentChange}
          />
          <SubmitContent>
            <Submit>送出</Submit>
          </SubmitContent>
          <ErrorMessage errorMessage={errorMessage}>
            {errorMessage}
          </ErrorMessage>
        </form>
      </div>
    </NewWrapper>
  );
}
export default NewPostPage;
