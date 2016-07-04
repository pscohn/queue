import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createList } from '../actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.onCreateList = this.onCreateList.bind(this);
  }

  onCreateList() {
    this.props.dispatch(createList());
  }

  render() {
    return (
      <button onClick={this.onCreateList}>Create list</button>
    );
  }
}

function mapStateToProps(state) {
  const { lists } = state;
  return {
    lists,
  };
}

export default connect(mapStateToProps)(App);
