/* eslint-disable import/no-unresolved */
import { combineReducers } from 'redux';
import todos from './todos';
import filter from './filter';

export default combineReducers({
  todoState: todos,
  filterState: filter,
  // 可以加入其他 reducer
});
