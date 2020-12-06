/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Wrapper, Title } from './components';
import {
  ClearAll, Todos, InputArea, Filter,
} from './containers';

function App() {
  return (
    <Wrapper>
      <Title>Todo List</Title>
      <InputArea />
      <ClearAll />
      <Filter />
      <Todos />
    </Wrapper>
  );
}

export default App;
