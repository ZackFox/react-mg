import React, { Component } from 'react';

import StartMenu from './startMenu/StartMenu';
import Board from './board/Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCards: [],
      cardA: {},
      cardB: {},
      message: '',
      isStart: false,
    };
  }

  onStart = () => {
    this.setState(() => ({ isStart: !this.setState.isStart }));
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
