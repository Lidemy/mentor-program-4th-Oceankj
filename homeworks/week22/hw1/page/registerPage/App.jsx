/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context';
import { register, getMe } from '../../WebAPI';
import { setAuthToken } from '../../util';

const RegisterWrapper = styled.div`
  display: block;
  justify-item: space-between;
  margin-top: 100px;
`;

const Subtitle = styled.p`
  display: inline-block;
`;

const Title = styled.p`
  display: block;
  font-size: 30px;
  text-align: center;
`;

const FormWrapper = styled.div`
  display: flex;
  text-align: right;
`;

const Form = styled.form`
  margin: 0px auto;
  min-width: 400px;
`;

const Button = styled.button`
  margin-top: 30px;
`;

const Input = styled.input`
  margin-right: 80px;
  margin-left: 20px;
`;

const ErrorMessage = styled.p`
  color: red;

  ${props => (props.errorMessage ? 'visiblity:visible;' : 'visiblity:hidden;')}
`;

function App() {
  const [nickName, setNickName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();
  const { setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    if (password !== checkPassword) {
      return setErrorMessage('plaese confirm your password');
    }
    register(nickName, userName, password)
      .then((data) => {
        if (data.ok === 0) {
          return setErrorMessage(data.message);
        }
        setAuthToken(data.token);
        getMe().then((response) => {
          if (response.ok !== 1) {
            setAuthToken(null);
            return setErrorMessage(response.toString());
          }
          setUser(response.data);
          history.push('/');
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <RegisterWrapper>
      <Title>註冊頁面</Title>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <div>
            <div>
              <Subtitle>nick name : </Subtitle>
              <Input
                type="text"
                value={nickName}
                onChange={(e) => {
                  setNickName(e.target.value);
                }}
              />
            </div>
            <div>
              <Subtitle>user name : </Subtitle>
              <Input
                type="text"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div>
              <Subtitle>password : </Subtitle>
              <Input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <Subtitle>comfirm your password : </Subtitle>
              <Input
                type="password"
                value={checkPassword}
                onChange={(e) => {
                  setCheckPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <Button>註冊</Button>
          <ErrorMessage errorMessage={errorMessage}>
            {errorMessage}
            {' '}
          </ErrorMessage>
        </Form>
      </FormWrapper>
    </RegisterWrapper>
  );
}

export default App;
