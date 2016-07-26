import { combineReducers } from 'redux';
import * as constants from '../constants';

let id, listId, todoId;

function lists(state = {}, action) {
  switch (action.type) {
    case constants.CREATE_LIST_TODOS:
      return {
        ...state,
        [action.payload.listId]: [],
      }
    case constants.REMOVE_LIST_TODOS:
      const { [String(action.payload.id)]: deletedList, ...rest } = state;
      console.log('list todos', rest)
      return rest;
    case constants.MOVE_TODO_TO_LIST:
      listId = action.payload.listId;
      todoId = action.payload.todoId;
      return {
        ...state,
        [listId]: [...state[listId], todoId],
      }
    case constants.REMOVE_TODO_FROM_LIST:
      listId = action.payload.listId;
      todoId = action.payload.todoId;
      const idx = state[listId].indexOf(todoId);
      const restLists = [
        ...state[listId].slice(0, idx),
        ...state[listId].slice(idx + 1),
      ];
      return {
        ...state,
        [listId]: restLists,
      }
    default:
      return state;
  }
}

const listReducer = combineReducers({
  lists
});

export default listReducer;
