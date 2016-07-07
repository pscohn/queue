import { combineReducers } from 'redux';
import * as constants from '../constants/index';

let id;

function getDefaultTodo(newId) {
  return {
    id: newId,
    content: 'Untitled Todo',
    isEditing: false,
    isComplete: false,
  }
};

function lastUsedId(state = 0, action) {
  switch (action.type) {
    case constants.UPDATE_TODO_ID:
      return action.payload.id;
    default:
      return state;
  }
}

function items(state = {}, action) {
  switch (action.type) {
    case constants.CREATE_TODO:
      const newId = action.payload.id;
      return {
        ...state,
        [newId]: getDefaultTodo(newId),
      }
    case constants.BEGIN_EDIT_TODO:
      id = action.payload.todoId;
      return {
        ...state,
        [id]: {
          ...state[id],
          isEditing: true,
        }
      };
    case constants.SAVE_EDIT_TODO:
      id = action.payload.todoId;
      return {
        ...state,
        [id]: {
          ...state[id],
          content: action.payload.todoContent,
        },
      };
    case constants.END_EDIT_TODO:
      id = action.payload.todoId;
      return {
        ...state,
        [id]: {
          ...state[id],
          isEditing: false,
        },
      };
    case constants.COMPLETE_TODO:
      id = action.payload.todoId;
      return {
        ...state,
        [id]: {
          ...state[id],
          isComplete: true,
        },
      };
    case constants.UNCOMPLETE_TODO:
      id = action.payload.todoId;
      return {
        ...state,
        [id]: {
          ...state[id],
          isComplete: false,
        },
      };
    default:
      return state;
  }
}

const listReducer = combineReducers({
  lastUsedId,
//  listOrder,
  items,
});

export default listReducer;
