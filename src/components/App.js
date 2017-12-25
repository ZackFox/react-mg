import React, { Component } from 'react';

import StartMenu from './StartMenu';
import Board from './Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isStart: false };
  }

  onStart = () => {
    this.setState(prevState => ({
      isStart: !prevState.isStart,
    }));
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
