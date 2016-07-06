import { combineReducers } from 'redux';
import * as constants from '../constants/index';

let id;

function getDefaultList(newId) {
  return {
    id: newId,
    name: 'Untitled List',
    isRenaming: false,
  }
};

const defaultState = {
  lists: {},
  listOrder: [],
  lastUsedId: 0,
};

function lastUsedId(state = 0, action) {
  switch (action.type) {
    case constants.UPDATE_LIST_ID:
      return action.payload.id;
    default:
      return state;
  }
}

function listOrder(state = [], action) {
  switch (action.type) {
    case constants.ADD_LIST_TO_VIEW:
      return [...state, action.payload.id];
    default:
      return state;
  }
}

function items(state = {}, action) {
  switch (action.type) {
    case constants.CREATE_LIST:
      const newId = action.payload.id;
      return {
        ...state,
        [newId]: getDefaultList(newId),
      }
    case constants.BEGIN_RENAME_LIST:
      id = action.payload.listId;
      return {
        ...state,
        [id]: {
          ...state[id],
          isRenaming: true,
        }
      };
    case constants.SAVE_RENAME_LIST:
      id = action.payload.listId;
      return {
        ...state,
        [id]: {
          ...state[id],
          name: action.payload.listName,
        },
      };
    case constants.END_RENAME_LIST:
      id = action.payload.listId;
      return {
        ...state,
        [id]: {
          ...state[id],
          isRenaming: false,
        },
      };
    default:
      return state;
  }
}

const listReducer = combineReducers({
  lastUsedId,
  listOrder,
  items,
});

export default listReducer;
