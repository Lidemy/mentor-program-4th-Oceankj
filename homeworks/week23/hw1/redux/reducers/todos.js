import {
  CLEAR_ALL, ADD_TODO, DELETE_TODO, UPDATE_TODO,
} from '../actionTypes';

const initialState = {
  todos: [
    {
      id: '1', content: 'isDone', isDone: true, edit: '',
    },
    {
      id: '2', content: 'unDone', isDone: false, edit: '',
    },
  ],
  todoId: 3,
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_ALL:
      return {
        todoId: 1,
        todos: [],
      };
    case ADD_TODO: {
      const text = action.payload;
      return {
        todoId: state.todoId + 1,
        todos: [
          {
            id: state.todoId,
            content: text.content,
            isDone: false,
            edit: '',
          },
          ...state.todos,
        ],
      };
    }
    case DELETE_TODO: {
      const deletedTodos = state.todos.filter(todo => todo.id !== action.payload.id);
      return {
        ...state,
        todos: deletedTodos,
      };
    }
    case UPDATE_TODO: {
      const { target } = action.payload;
      const updatedTodos = state.todos.map((todo) => {
        if (action.payload.id !== todo.id) return todo;
        return {
          ...todo,
          [target]: action.payload.newContent,
        };
      });
      return {
        ...state,
        todos: updatedTodos,
      };
    }
    default:
      return {
        ...state,
      };
  }
}
