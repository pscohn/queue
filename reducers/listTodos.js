import { combineReducers } from 'redux';
import * as constants from '../constants/index';

let id;

function lists(state = {}, action) {
  switch (action.type) {
    case constants.CREATE_LIST_TODOS:
      return {
        ...state,
        [action.payload.listId]: [],
      }
    case constants.MOVE_TODO_TO_LIST:
      const { listId, todoId } = action.payload;
      return {
        ...state,
        [listId]: [...state[listId], todoId],
      }
    default:
      return state;
  }
}

const listReducer = combineReducers({
  lists
});

export default listReducer;
