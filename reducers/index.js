import { combineReducers } from 'redux';
import lists from './lists';
import todos from './todos';
import listTodos from './listTodos';

// {
//   lists: {
//     lastUsedId: 3,
//     listOrder: [1, 2, 3],
//     items: {
//       1: {
//         name: 'name',
//         etc,
//       },
//       ...
//     }
//   },
//
//   todos: {
//     lastUsedId: 2,
//     items: {
//       1: {
//         content: 'to do thing',
//       }
//     }
//   }
//
//   listTodos: {
//     lists: {
//       3: [1, 4, 2]
//     }
//   }
// }

export function makeHydratable(reducer, hydrateActionType) {
  return function (state, action) {
    switch (action.type) {
    case hydrateActionType:
      return reducer(action.payload.state, action);
    default:
      return reducer(state, action);
    }
  }
}

const rootReducer = combineReducers({
  lists,
  todos,
  listTodos,
});

export default rootReducer;
