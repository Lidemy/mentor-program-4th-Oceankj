/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable default-case */
import {
  ButtonsWrapper,
  TodoWrapper,
  Todocontant,
  FunctionWrapper,
  EditWrapper,
} from './Style.js';

export function ClearAll({ handleClearAll }) {
  return (
    <ButtonsWrapper>
      <input type="button" value="clear all" onClick={handleClearAll} />
    </ButtonsWrapper>
  );
}

export function InputArea({ inputText, handleInput, handleAdd }) {
  return (
    <div>
      <input
        type="text"
        placeholder="creat todo"
        value={inputText}
        onChange={handleInput}
      />
      <input type="submit" onClick={handleAdd} value="Add Todo" />
    </div>
  );
}

export function Filter({ handleFilter }) {
  return (
    <ButtonsWrapper>
      <input type="button" value="all" onClick={handleFilter} />
      <input type="button" value="isDone" onClick={handleFilter} />
      <input type="button" value="unDo" onClick={handleFilter} />
    </ButtonsWrapper>
  );
}

export function Todos({
  todos,
  handleDelete,
  handleIsDone,
  filter,
  handleEditArea,
  handleUpdate,
}) {
  const filterOut = (filterType, isDone) => {
    switch (filterType) {
      case 'all':
        return true;
      case 'isDone':
        if (isDone) {
          return true;
        }
        return false;
      case 'unDo':
        if (isDone) {
          return false;
        }
        return true;
    }
    return '';
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
                    handleEditArea(e, todo.id);
                  }}
                />
                <input
                  type="button"
                  value="update"
                  onClick={(e) => {
                    handleUpdate(e, todo.id);
                  }}
                />
              </EditWrapper>
              <input
                type="button"
                value={todo.isDone ? 'set unDo' : 'set isDone'}
                onClick={() => {
                  handleIsDone(todo.id);
                }}
              />
              <input
                type="button"
                value="delete"
                onClick={() => {
                  handleDelete(todo.id);
                }}
              />
            </FunctionWrapper>
          </TodoWrapper>
        ))}
    </div>
  );
}
