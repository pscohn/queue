import React, { Component, PropTypes as T } from 'react';
import { connect } from 'react-redux';
import {
  beginEditTodo,
  saveEditTodo,
  endEditTodo,
  toggleTodo,
  onDeleteTodo,
} from '../actions/todos';
import Todo from './Todo';

class TodosContainer extends Component {
  static propTypes = {
    onBeginEditTodo: T.func.isRequired,
    onSaveEditTodo: T.func.isRequired,
    onDoneEditTodo: T.func.isRequired,
    onToggleTodo: T.func.isRequired,
    onDeleteTodo: T.func.isRequired,
  }

  render() {
    const shouldShowComplete = this.props.list.isShowingComplete === true;
    const todos = this.props.listTodos.lists[this.props.list.id].filter((id) => {
      const { isComplete } = this.props.todos.items[id];
      return this.props.list.isShowingComplete ? isComplete === true : isComplete === false;
    }).map((id) => {
      return (
        <Todo
          key={id}
          todo={this.props.todos.items[id]}
          list={this.props.list}
          onBeginEditTodo={this.props.onBeginEditTodo}
          onDoneEditTodo={this.props.onDoneEditTodo}
          onSaveEditTodo={this.props.onSaveEditTodo}
          onToggleTodo={this.props.onToggleTodo}
          onDeleteTodo={this.props.onDeleteTodo}
        />
      )
    });

    return (
      <div>
        {todos}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { lists, todos, listTodos } = state;
  return {
    lists,
    todos,
    listTodos,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBeginEditTodo: (todoId) => {
      dispatch(beginEditTodo(todoId));
    },
    onSaveEditTodo: (todoId, todoContent) => {
      dispatch(saveEditTodo(todoId, todoContent));
    },
    onDoneEditTodo: (todoId) => {
      dispatch(endEditTodo(todoId));
    },
    onToggleTodo: (todoId) => {
      dispatch(toggleTodo(todoId));
    },
    onDeleteTodo: (listId, todoId) => {
      dispatch(onDeleteTodo(listId, todoId));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
