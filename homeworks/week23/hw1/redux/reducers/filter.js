import { UPDATE_FILTER } from '../actionTypes';

const initialState = {
  filter: 'all',
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_FILTER:
      return {
        filter: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}
