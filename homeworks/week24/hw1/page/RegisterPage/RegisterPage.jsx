/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  RegisterContent,
  Loading,
  LogInTitle,
  RegisterFormContent,
  Form,
  Subtitle,
  RegisterInput,
  LogInButton,
  ErrorMessage,
} from '../../component/components';
import {
  register,
  selectUser,
  setStatus,
  setErrorMessage,
} from '../../redux/reducers/userReducer';
import { getAuthToken } from '../../util';

function RegistertPage() {
  const [nickName, setNickName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const history = useHistory();
  const userStore = useSelector(selectUser);
  const registerStatus = userStore.status;
  const { errorMessage } = userStore;
  const { isLoading } = userStore;
  const token = getAuthToken();
  const dispatch = useDispatch();

  useEffect(() => {
    token && history.push('/');
    registerStatus === 'ok' && history.push('/');
    dispatch(setStatus(''));
    dispatch(setErrorMessage(''));
  }, [token, registerStatus, history, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setErrorMessage(''));
    if (password !== checkPassword) {
      return dispatch(setErrorMessage('plaese confirm your password'));
    }
    dispatch(register(nickName, userName, password));
  };

  return (
    <RegisterContent>
      {isLoading && <Loading>loading</Loading>}
      <LogInTitle>註冊頁面</LogInTitle>
      <RegisterFormContent>
        <Form onSubmit={handleSubmit}>
          <div>
            <div>
              <Subtitle>nick name : </Subtitle>
              <RegisterInput
                type="text"
                value={nickName}
                onChange={(e) => {
                  setNickName(e.target.value);
                }}
              />
            </div>
            <div>
              <Subtitle>user name : </Subtitle>
              <RegisterInput
                type="text"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div>
              <Subtitle>password : </Subtitle>
              <RegisterInput
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <Subtitle>comfirm your password : </Subtitle>
              <RegisterInput
                type="password"
                value={checkPassword}
                onChange={(e) => {
                  setCheckPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <LogInButton>註冊</LogInButton>
          <ErrorMessage errorMessage={errorMessage}>
            {errorMessage}
          </ErrorMessage>
        </Form>
      </RegisterFormContent>
    </RegisterContent>
  );
}

export default RegistertPage;
