/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthToken } from '../../util';
import {
  logIn,
  setErrorMessage,
  selectUser,
} from '../../redux/reducers/userReducer';
import {
  Loading,
  ErrorMessage,
  LogInContent,
  LogInTitle,
  FormContent,
  Form,
  LogInButton,
} from '../../component/components';

function LogInPage() {
  const userStore = useSelector(selectUser);
  const { isLoading } = userStore;
  const { errorMessage } = userStore;
  const dispatch = useDispatch();
  const history = useHistory();

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const authToken = getAuthToken();

  useEffect(() => {
    dispatch(setErrorMessage('此為作業用，密碼皆為Lidemy'));
  }, [dispatch]);

  useEffect(() => {
    authToken && history.push('/');
  }, [authToken, history]);

  const handleSumit = (e) => {
    e.preventDefault();
    dispatch(logIn(userName, password));
    setUserName('');
    setPassword('');
  };

  return (
    <LogInContent>
      {isLoading && <Loading>loading</Loading>}
      <LogInTitle>登入頁面</LogInTitle>
      <FormContent>
        <Form onSubmit={handleSumit}>
          <div>
            <p>username : </p>
            <input
              type="text"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <p>password : </p>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <LogInButton>登入</LogInButton>
          <ErrorMessage errorMessage={errorMessage}>
            {errorMessage}
          </ErrorMessage>
        </Form>
      </FormContent>
    </LogInContent>
  );
}

export default LogInPage;
