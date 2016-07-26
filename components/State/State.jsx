import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  onSaveState,
  onLoadState,
} from './stateActions';

class State extends Component {
  constructor(props) {
    super(props);
    this.onLoadState = this.onLoadState.bind(this);
  }

  onLoadState() {
    const state = JSON.parse(this._state.value);
    this.props.onLoadState(state);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onSaveState}>Save</button>
        <textarea ref={(cmp) => this._state = cmp} />
        <button onClick={this.onLoadState}>Load</button>
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
    onSaveState: () => {
      dispatch(onSaveState());
    },
    onLoadState: (json) => {
      dispatch(onLoadState(json));
    },
  }
}

export default connect(undefined, mapDispatchToProps)(State);
