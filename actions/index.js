import * as constants from '../constants/index';
import thunk from 'redux-thunk';

export function action(type, payload) {
  return {
    type,
    payload,
  }
}

export function onCreateList() {
  return (dispatch, getState) => {
    const { lastUsedId } = getState().lists;
    const newId = lastUsedId + 1;
    dispatch(updateListId(newId));
    dispatch(createList(newId));
    dispatch(createListTodos(newId));
    dispatch(addListToView(newId));
  }
}

export function createList(id) {
  return action(constants.CREATE_LIST, { id });
}

export function createListTodos(listId) {
  return action(constants.CREATE_LIST_TODOS, { listId });
}

export function addListToView(id) {
  return action(constants.ADD_LIST_TO_VIEW, { id });
}

export function removeListFromView(id) {
  return action(constants.REMOVE_LIST_FROM_VIEW, { id });
}

export function updateListId(id) {
  return action(constants.UPDATE_LIST_ID, { id });
}

export function beginRenameList(listId) {
  return action(constants.BEGIN_RENAME_LIST, {
    listId,
  });
}

export function saveRenameList(listId, listName) {
  return action(constants.SAVE_RENAME_LIST, {
    listId,
    listName,
  });
}

export function endRenameList(listId) {
  return action(constants.END_RENAME_LIST, {
    listId,
  });
}

export function toggleListView(listId) {
  return action(constants.TOGGLE_LIST_VIEW, {
    listId,
  });
}

export function reorderLists(listIndex, hoverIndex) {
  return action(constants.REORDER_LISTS, {
    listIndex,
    hoverIndex,
  });
}
