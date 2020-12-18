/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import { useHistory, useLocation } from 'react-router-dom';
import React, { useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  NavBarWrapper, NavWrapper, Title, Nav, Button,
} from './components';
import { setAuthToken, getAuthToken } from '../util';
import { setUser, selectUser, getMe } from '../redux/reducers/userReducer';

export default function App() {
  const userStore = useSelector(selectUser);
  const user = userStore.userId;
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const authToken = getAuthToken();

  useEffect(() => {
    if (authToken) {
      dispatch(getMe(authToken));
    }
  }, [authToken, dispatch, user]);

  const handleLogOut = () => {
    setAuthToken('');
    dispatch(setUser(null));
    if (location.pathname !== '/') {
      history.push('/');
    }
  };

  return (
    <NavBarWrapper>
      <NavWrapper>
        <Title>部落格</Title>
        <Nav to="/">
          <Button>首頁</Button>
        </Nav>
        <Nav to="/about">
          <Button>關於我</Button>
        </Nav>
        {user && (
          <>
            <Nav to="/new_post">
              <Button>新增文章</Button>
            </Nav>
            <Nav to="/edit">
              <Button>編輯文章</Button>
            </Nav>
          </>
        )}
      </NavWrapper>
      <NavWrapper>
        {!user && (
          <Nav to="/login">
            <Button>登入</Button>
          </Nav>
        )}
        {!user && (
          <Nav to="/registert">
            <Button>註冊</Button>
          </Nav>
        )}
        {user && (
          <div>
            <Button onClick={handleLogOut}>登出</Button>
          </div>
        )}
      </NavWrapper>
    </NavBarWrapper>
  );
}
