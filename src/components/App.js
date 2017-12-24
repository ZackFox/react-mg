import React, { Component } from 'react';

import StartMenu from './StartMenu';
import Board from './Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isStart: false };
  }

  onStart = () => {
    this.setState({ ...this.state, isStart: !this.setState.isStart });
    console.log('run !');
  };

  render() {
    return !this.state.isStart ? (
      <StartMenu startGame={this.onStart} />
    ) : (
      <Board />
    );
  }
}

export default App;
