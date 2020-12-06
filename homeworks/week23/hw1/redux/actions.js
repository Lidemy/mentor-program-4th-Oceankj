import {
  CLEAR_ALL,
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  UPDATE_FILTER,
} from './actionTypes';

export function clearAll() {
  return {
    type: CLEAR_ALL,
  };
}

export function addTodo(content) {
  return {
    type: ADD_TODO,
    payload: {
      content,
    },
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
}

export function updateTodo(target, id, newContent) {
  return {
    type: UPDATE_TODO,
    payload: {
      id,
      target,
      newContent,
    },
  };
}

export function updateFilter(filterType) {
  return {
    type: UPDATE_FILTER,
    payload: filterType,
  };
}
