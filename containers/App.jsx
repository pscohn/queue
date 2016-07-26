import React, { Component } from 'react';
import ListContainer from '../components/List/ListContainer';
import State from '../Components/State/State'

export default class App extends Component {
  render() {
    return (
      <div>
        <ListContainer />
        <State />
      </div>
    );
  }
}
