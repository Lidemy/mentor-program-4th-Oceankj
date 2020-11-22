/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-shadow */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Wrapper, Title } from './Style.js';
import {
  ClearAll, Todos, InputArea, Filter,
} from './Template.js';

let id = 3;

function App() {
  const [todos, setTodos] = React.useState([
    {
      id: '1', content: 'isDone', isDone: true, edit: '',
    },
    {
      id: '2', content: 'unDo', isDone: false, edit: '',
    },
  ]);
  const [inputText, setInput] = React.useState('');
  const [filterName, setFilter] = React.useState('all');

  function handleClearAll() {
    setTodos([]);
    id = 1;
  }

  function handleAdd() {
    if (inputText) {
      setTodos([
        {
          id,
          content: inputText,
          isDone: false,
        },
        ...todos,
      ]);

      setInput('');
      id += 1;
    }
  }

  function handleDelete(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function handleEditArea(e, id) {
    setTodos(
      todos.map((todo) => {
        if (id !== todo.id) return todo;
        return {
          ...todo,
          edit: e.target.value,
        };
      }),
    );
  }

  function handleUpdate(e, id) {
    setTodos(
      todos.map((todo) => {
        if (id !== todo.id) return todo;
        return {
          ...todo,
          content: todo.edit,
        };
      }),
    );
  }

  function handleIsDone(id) {
    setTodos(
      todos.map((todo) => {
        if (id !== todo.id) return todo;
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      }),
    );
  }

  function handleFilter(e) {
    setFilter(e.target.value);
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  return (
    <Wrapper>
      <Title>Todo List</Title>
      <InputArea
        inputText={inputText}
        handleInput={handleInput}
        handleAdd={handleAdd}
      />
      <ClearAll handleClearAll={handleClearAll} />
      <Filter handleFilter={handleFilter} />
      <Todos
        filter={filterName}
        todos={todos}
        handleDelete={handleDelete}
        handleIsDone={handleIsDone}
        handleEditArea={handleEditArea}
        handleUpdate={handleUpdate}
      />
    </Wrapper>
  );
}

const TodoLIst = () => (
  <div>
    <App />
  </div>
);

export default TodoLIst;
