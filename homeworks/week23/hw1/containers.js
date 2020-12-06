/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  ButtonsWrapper,
  TodoWrapper,
  Todocontant,
  FunctionWrapper,
  EditWrapper,
} from './components';
import { selectTodos, selectFilter } from './redux/selector';
import {
  clearAll,
  addTodo,
  deleteTodo,
  updateTodo,
  updateFilter,
} from './redux/actions';

export function ClearAll() {
  const dispatch = useDispatch();

  return (
    <ButtonsWrapper>
      <input
        type="button"
        value="clear all"
        onClick={() => {
          dispatch(clearAll());
        }}
      />
    </ButtonsWrapper>
  );
}

export function InputArea() {
  const [inputText, setInput] = React.useState('');
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        placeholder="creat todo"
        value={inputText}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <input
        type="submit"
        onClick={() => {
          dispatch(addTodo(inputText));
          setInput('');
        }}
        value="Add Todo"
      />
    </div>
  );
}

export function Filter() {
  const dispatch = useDispatch();
  const handleFilter = (e) => {
    dispatch(updateFilter(e.target.value));
  };
  return (
    <ButtonsWrapper>
      <input type="button" value="all" onClick={handleFilter} />
      <input type="button" value="isDone" onClick={handleFilter} />
      <input type="button" value="unDone" onClick={handleFilter} />
    </ButtonsWrapper>
  );
}

export function Todos() {
  const filter = useSelector(selectFilter);
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const filterOut = (filterType, isDone) => {
    switch (filterType) {
      case 'isDone':
        return isDone;
      case 'unDone':
        return !isDone;
      default:
        return true;
    }
  };
  return (
    <div>
      {todos
        .filter(todo => filterOut(filter, todo.isDone))
        .map(todo => (
          <TodoWrapper key={todo.id}>
            <Todocontant isDone={todo.isDone}>{todo.content}</Todocontant>
            <FunctionWrapper>
              <EditWrapper>
                <input
                  type="text"
                  placeholder="edit your event"
                  value={todo.edit}
                  onChange={(e) => {
                    dispatch(updateTodo('edit', todo.id, e.target.value));
                  }}
                />
                <input
                  type="button"
                  value="update"
                  onClick={() => {
                    dispatch(updateTodo('content', todo.id, todo.edit));
                    dispatch(updateTodo('edit', todo.id, ''));
                  }}
                />
              </EditWrapper>
              <input
                type="button"
                value={todo.isDone ? 'set unDone' : 'set isDone'}
                onClick={() => {
                  dispatch(updateTodo('isDone', todo.id, !todo.isDone));
                }}
              />
              <input
                type="button"
                value="delete"
                onClick={() => {
                  dispatch(deleteTodo(todo.id));
                }}
              />
            </FunctionWrapper>
          </TodoWrapper>
        ))}
    </div>
  );
}
