import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onCreateList, beginRenameList, saveRenameList, endRenameList } from '../actions/index';
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
      />;
    });
    return (
      <div>
        <button onClick={this.props.onCreateList}>Create list</button>
        {lists}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  const { lists, listOrder } = state;
  return {
    lists,
    listOrder,
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
