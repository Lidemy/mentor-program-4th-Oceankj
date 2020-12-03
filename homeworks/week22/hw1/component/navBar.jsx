/* eslint-disable import/no-unresolved */
import styled from 'styled-components';
import { Link, useHistory, useLocation } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../context';
import { setAuthToken } from '../util';

export const NavBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px auto;
  max-width: 1000px;
  position: fixed;
  top: 0px;
  right: 0px;
  left: 0px;
  background-color: white;
  border-bottom: 1px solid black;
`;

export const Nav = styled(Link)`
  & + & {
    margin-left: 10px;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  padding: 5px;
`;

export const Title = styled.p`
  display: inline-flex;
  font-size: 30px;
  vertical-align: middle;
  margin: 0px 27px 0px 0px;
`;

export default function App() {
  const { user, setUser } = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();

  const handleLogOut = () => {
    setAuthToken('');
    setUser(null);
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
          <Nav to="/new_post">
            <Button>新增文章</Button>
          </Nav>
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
