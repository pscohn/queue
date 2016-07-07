import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  onCreateList, beginRenameList, saveRenameList, endRenameList,
  toggleListView,
} from '../actions/index';
import {
  onCreateTodo, beginEditTodo, saveEditTodo, endEditTodo,
  completeTodo,
  uncompleteTodo,
} from '../actions/todos';
import List from './List';

class ListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const lists = this.props.lists.listOrder.map((id) => {
      return <List
        key={id}
        list={this.props.lists.items[id]}
        onBeginRenameList={this.props.onBeginRenameList}
        onDoneRenameList={this.props.onDoneRenameList}
        onSaveRenameList={this.props.onSaveRenameList}
        onToggleListView={this.props.onToggleListView}
        onBeginEditTodo={this.props.onBeginEditTodo}
        onDoneEditTodo={this.props.onDoneEditTodo}
        onSaveEditTodo={this.props.onSaveEditTodo}
        onCreateTodo={this.props.onCreateTodo}
        onCompleteTodo={this.props.onCompleteTodo}
        onUncompleteTodo={this.props.onUncompleteTodo}
        todos={this.props.todos}
        listTodos={this.props.listTodos}
      />;
    });
    return (
      <div>
        <button onClick={this.props.onCreateList} className="create-list-btn">Create list</button>
        {lists}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  const { lists, todos, listTodos } = state;
  return {
    lists,
    todos,
    listTodos,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateList: () => {
      dispatch(onCreateList());
    },
    onBeginRenameList: (listId) => {
      dispatch(beginRenameList(listId));
    },
    onSaveRenameList: (listId, name) => {
      dispatch(saveRenameList(listId, name));
    },
    onDoneRenameList: (listId) => {
      dispatch(endRenameList(listId));
    },
    onToggleListView: (listId) => {
      dispatch(toggleListView(listId));
    },
    onCreateTodo: (listId) => {
      dispatch(onCreateTodo(listId));
    },
    onBeginEditTodo: (todoId) => {
      dispatch(beginEditTodo(todoId));
    },
    onSaveEditTodo: (todoId, todoContent) => {
      dispatch(saveEditTodo(todoId, todoContent));
    },
    onDoneEditTodo: (todoId) => {
      dispatch(endEditTodo(todoId));
    },
    onCompleteTodo: (todoId) => {
      dispatch(completeTodo(todoId));
    },
    onUncompleteTodo: (todoId) => {
      dispatch(uncompleteTodo(todoId));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
