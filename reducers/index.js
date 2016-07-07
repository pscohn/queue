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

const rootReducer = combineReducers({
  lists,
  todos,
  listTodos,
});

export default rootReducer;
