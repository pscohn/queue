import React, { Component, PropTypes as T } from 'react';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.onDoneRenameList = this.props.onDoneRenameList.bind(this, this.props.list.id);
    this.onSaveRenameList = this.onSaveRenameList.bind(this);
  }

  static propTypes = {
    list: T.object.isRequired,
    onBeginRenameList: T.func.isRequired,
    onSaveRenameList: T.func.isRequired,
    onDoneRenameList: T.func.isRequired,
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
      <span onClick={() => { this.props.onBeginRenameList(this.props.list.id) }}>
        {this.props.list.name}
      </span>
    );
  }

  render() {
    return (
      <div>
        {this.renderListName()}
      </div>
    );
  }
}
