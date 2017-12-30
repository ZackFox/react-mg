import React, { Component } from 'react';

import StartMenu from './StartMenu';
import Game from './Game';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isStart: false };
  }

  onStart = () => {
    this.setState(prevState => ({ ...prevState, isStart: true }));
  };

  render() {
    return !this.state.isStart ? (
      <StartMenu startGame={this.onStart} />
    ) : (
      <Game />
    );
  }
}

export default App;
