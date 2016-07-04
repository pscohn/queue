import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createList } from '../actions/index';
import List from './List';

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.onCreateList = this.onCreateList.bind(this);
  }

  onCreateList() {
    this.props.dispatch(createList());
  }

  render() {
    const lists = this.props.lists.listOrder.map((id) => {
      return <List key={id} list={this.props.lists.lists[id]} />;
    });
    return (
      <div>
        <button onClick={this.onCreateList}>Create list</button>
        {lists}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { lists } = state;
  return {
    lists,
  };
}

export default connect(mapStateToProps)(ListContainer);
