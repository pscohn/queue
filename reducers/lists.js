import * as constants from '../constants/index';

const defaultList = {
  name: 'Untitled List',
};

const defaultState = {
  lists: {},
  listOrder: [],
  lastUsedId: 0,
}

export default function listReducer(state = defaultState, action) {
  switch (action.type) {
    case constants.CREATE_LIST:
      const newId = state.lastUsedId + 1;
      const newLists = Object.assign({}, state.lists, {
        [newId]: defaultList,
      });
      return Object.assign({}, state, {
        lists: newLists,
        listOrder: [...state.listOrder, newId],
        lastUsedId: newId,
      });
    default:
      return state;
  }
}
