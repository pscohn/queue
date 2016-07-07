import React, { Component, PropTypes as T } from 'react';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.onSaveEditTodo = this.onSaveEditTodo.bind(this);
    this.onBeginEditTodo = this.props.onBeginEditTodo.bind(this, this.props.todo.id);
    this.onDoneEditTodo = this.props.onDoneEditTodo.bind(this, this.props.todo.id);
    this.onCompleteTodo = this.props.onCompleteTodo.bind(this, this.props.todo.id);
    this.onUncompleteTodo = this.props.onUncompleteTodo.bind(this, this.props.todo.id);
  }

  static propTypes = {
    onBeginEditTodo: T.func.isRequired,
    onSaveEditTodo: T.func.isRequired,
    onDoneEditTodo: T.func.isRequired,
    onCompleteTodo: T.func.isRequired,
    onUncompleteTodo: T.func.isRequired,
  }

  onSaveEditTodo() {
    this.props.onSaveEditTodo(this.props.todo.id, this._todoContent.value);
  }

  render() {
    if (this.props.todo.isEditing === true) {
      return (
        <div className="todo editing">
          <input type="text" ref={(cmp) => this._todoContent = cmp} onChange={this.onSaveEditTodo} value={this.props.todo.content} />
          <button onClick={this.onDoneEditTodo}>Done</button>
        </div>
      );
    }

    let toggleButton;
    if (this.props.todo.isComplete === true) {
      toggleButton = <button onClick={this.onUncompleteTodo}>Uncomplete</button>;
    } else {
      toggleButton = <button onClick={this.onCompleteTodo}>Complete</button>;
    }
    return (
      <div className="todo">
        <span onClick={this.onBeginEditTodo}>{this.props.todo.content}</span>
        {toggleButton}
      </div>
    );
  }
}
