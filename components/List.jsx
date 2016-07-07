import React, { Component, PropTypes as T } from 'react';
import Todo from './Todo';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.onBeginRenameList = this.props.onBeginRenameList.bind(this, this.props.list.id);
    this.onDoneRenameList = this.props.onDoneRenameList.bind(this, this.props.list.id);
    this.onToggleListView = this.props.onToggleListView.bind(this, this.props.list.id);
    this.onSaveRenameList = this.onSaveRenameList.bind(this);
    this.onCreateTodo = this.props.onCreateTodo.bind(this, this.props.list.id);
  }

  static propTypes = {
    list: T.object.isRequired,
    onBeginRenameList: T.func.isRequired,
    onSaveRenameList: T.func.isRequired,
    onDoneRenameList: T.func.isRequired,
    onCreateTodo: T.func.isRequired,
    onCompleteTodo: T.func.isRequired,
    onUncompleteTodo: T.func.isRequired,
    onToggleListView: T.func.isRequired,
  }

  onSaveRenameList() {
    this.props.onSaveRenameList(this.props.list.id, this._name.value);
  }

  renderListName() {
    if (this.props.list.isRenaming === true) {
      return (
        <span>
          <input type="text" ref={(cmp) => this._name = cmp} onChange={this.onSaveRenameList} value={this.props.list.name} />
          <button onClick={this.onDoneRenameList}>Done</button>
        </span>
      );
    }
    return (
      <span onClick={this.onBeginRenameList}>
        {this.props.list.name}
      </span>
    );
  }

  renderTodos() {
    const shouldShowComplete = this.props.list.isShowingComplete === true;
    const todos = this.props.listTodos.lists[this.props.list.id].filter((id) => {
      const { isComplete } = this.props.todos.items[id];
      return this.props.list.isShowingComplete ? isComplete === true : isComplete === false;
    }).map((id) => {
      return (
        <Todo
          key={id}
          todo={this.props.todos.items[id]}
          onBeginEditTodo={this.props.onBeginEditTodo}
          onDoneEditTodo={this.props.onDoneEditTodo}
          onSaveEditTodo={this.props.onSaveEditTodo}
          onCompleteTodo={this.props.onCompleteTodo}
          onUncompleteTodo={this.props.onUncompleteTodo}
        />
      )
    });
    return todos;
  }

  render() {
    return (
      <div className="list">
        <button onClick={this.onToggleListView}>Show {this.props.list.isShowingComplete ? 'Active' : 'Complete'}</button>
        {this.renderListName()}
        {this.renderTodos()}
        {this.props.list.isShowingComplete ? undefined : <button onClick={this.onCreateTodo}>Add Item</button>}
      </div>
    );
  }
}
