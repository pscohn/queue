import React, { Component, PropTypes as T } from 'react';

export default class List extends Component {
  static propTypes = {
    list: T.object.isRequired,
  }

  render() {
    return (
      <div>
        {this.props.list.name}
      </div>
    );
  }
}
