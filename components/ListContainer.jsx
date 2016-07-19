import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import {
  onCreateList, beginRenameList, saveRenameList, endRenameList,
  toggleListView,
  onDropList,
  reorderLists,
  addListToView,
  removeListFromView,
} from '../actions/index';
import {
  onSaveState,
} from '../actions/state';
import {
  onCreateTodo,
} from '../actions/todos';
import List from './List';

class ListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hiddenLists = Object.keys(this.props.lists.items).map((id) => {
      id = Number(id);
      if (this.props.lists.listOrder.indexOf(id) === -1) {
        return (
          <span key={id}>
            <a onClick={this.props.onShowList.bind(this, id)}>{this.props.lists.items[id].name}</a>
            {' '}
          </span>
        );
      }
    });
    const lists = this.props.lists.listOrder.map((id, index) => {
      return <List
        key={id}
        index={index}
        list={this.props.lists.items[id]}
        onBeginRenameList={this.props.onBeginRenameList}
        onDoneRenameList={this.props.onDoneRenameList}
        onSaveRenameList={this.props.onSaveRenameList}
        onToggleListView={this.props.onToggleListView}
        onHideList={this.props.onHideList}
        onCreateTodo={this.props.onCreateTodo}
        onDropList={this.props.onDropList}
        todos={this.props.todos}
        listTodos={this.props.listTodos}
      />;
    });
    return (
      <div>
        <button onClick={this.props.onCreateList} className="create-list-btn">Create list</button>
        <button onClick={this.props.onSaveState}>Save</button>
        <div>
          {hiddenLists}
        </div>
        {lists}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  console.log(JSON.stringify(state));
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
    onToggleListVisibility: (listId) => {
      dispatch(toggleListVisibility(listId));
    },
    onShowList: (listId) => {
      dispatch(addListToView(listId));
    },
    onHideList: (listId) => {
      dispatch(removeListFromView(listId));
    },
    onCreateTodo: (listId) => {
      dispatch(onCreateTodo(listId));
    },
    onDropList: (listIndex, hoverIndex) => {
      dispatch(reorderLists(listIndex, hoverIndex));
    },
    onSaveState: () => {
      dispatch(onSaveState());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragDropContext(HTML5Backend)(ListContainer));
