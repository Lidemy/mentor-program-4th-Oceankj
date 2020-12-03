/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context';
import { logIn, getMe } from '../../WebAPI';
import { setAuthToken } from '../../util';

const LogInWrapper = styled.div`
  display: block;
  justify-item: space-between;
  margin-top: 100px;
`;

const Title = styled.p`
  display: block;
  font-size: 30px;
  text-align: center;
`;

const Subtitle = styled.p``;

const FormWrapper = styled.div`
  display: flex;
  text-align: center;
`;

const Form = styled.form`
  margin: 0px auto;
  min-width: 400px;
`;

const Button = styled.button`
  margin-top: 30px;
`;

const ErrorMessage = styled.p`
  color: red;
  ${props => (props.errorMessage ? 'visiblity:visible;' : 'visiblity:hidden;')}
`;

function App() {
  const { setUser } = useContext(AuthContext);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(
    '此為測試版本，密碼皆為 Lidemy',
  );
  const history = useHistory();

  const handleSumit = (e) => {
    e.preventDefault();
    logIn(userName, password).then((data) => {
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
    });

    setUserName('');
    setPassword('');
  };

  return (
    <LogInWrapper>
      <Title>登入頁面</Title>
      <FormWrapper>
        <Form onSubmit={handleSumit}>
          <div>
            <Subtitle>username : </Subtitle>
            <input
              type="text"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <Subtitle>password : </Subtitle>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <Button>登入</Button>
          <ErrorMessage errorMessage={errorMessage}>
            {errorMessage}
          </ErrorMessage>
        </Form>
      </FormWrapper>
    </LogInWrapper>
  );
}

export default App;
