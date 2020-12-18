/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectUser,
  updatePost,
  deletePost,
  setErrorMessage,
  setStatus,
} from '../../redux/reducers/userReducer';
import { selectPost, getSinglePost } from '../../redux/reducers/postsReducer';
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

function EditSingPostPage() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const userStore = useSelector(selectUser);
  const postStore = useSelector(selectPost);
  const SinglePost = postStore.singlePost[0];
  const { errorMessage } = userStore;
  const { isLoading } = userStore;
  const updateStatus = userStore.status;
  const authToken = getAuthToken();
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
    dispatch(updatePost(authToken, id, title, content));
  };
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deletePost(authToken, id));
  };

  useEffect(() => {
    !authToken && history.push('/');
    updateStatus === 'ok' && history.push('/');
    dispatch(setStatus(''));
    dispatch(setErrorMessage(''));
    dispatch(getSinglePost(id));
  }, [authToken, updateStatus, history, dispatch, id]);

  useEffect(() => {
    if (SinglePost) {
      setTitle(SinglePost.title);
      setContent(SinglePost.body);
    }
  }, [SinglePost]);

  return (
    <NewWrapper>
      {isLoading && <Loading>loading</Loading>}
      <div>
        <form>
          <ArticleTitle>編輯文章</ArticleTitle>
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
            <Submit onClick={handleDelete}>刪除</Submit>
            <Submit onClick={handleSubmit}>送出</Submit>
          </SubmitContent>
          <ErrorMessage errorMessage={errorMessage}>
            {errorMessage}
          </ErrorMessage>
        </form>
      </div>
    </NewWrapper>
  );
}
export default EditSingPostPage;
