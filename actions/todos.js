import * as constants from '../constants/index';
import thunk from 'redux-thunk';
import { action } from './index';

export function onCreateTodo(listId) {
  return (dispatch, getState) => {
    const { lastUsedId } = getState().todos;
    const newId = lastUsedId + 1;
    dispatch(updateTodoId(newId));
    dispatch(createTodo(newId));
    dispatch(moveTodoToList(listId, newId));
  }
}

export function createTodo(id) {
  return action(constants.CREATE_TODO, { id });
}

export function updateTodoId(id) {
  return action(constants.UPDATE_TODO_ID, { id });
}

export function moveTodoToList(listId, todoId) {
  return action(constants.MOVE_TODO_TO_LIST, { listId, todoId });
}

export function beginEditTodo(todoId) {
  return action(constants.BEGIN_EDIT_TODO, {
    todoId,
  });
}

export function saveEditTodo(todoId, todoContent) {
  return action(constants.SAVE_EDIT_TODO, {
    todoId,
    todoContent,
  });
}

export function endEditTodo(todoId) {
  return action(constants.END_EDIT_TODO, {
    todoId,
  });
}

export function toggleTodo(todoId) {
  return action(constants.TOGGLE_TODO, {
    todoId,
  });
}
