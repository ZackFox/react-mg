import React, { Component } from 'react';

class StartMenu extends Component {
  clickHandler = () => {
    this.props.startGame();
  };

  render() {
    return (
      <div className="start-menu">
        <div className="start-logo" />
        <h1>MEMORY GAME</h1>
        <button
          className="btn-start"
          onClick={this.clickHandler}
          data-tid="button"
        >
          Начать игру
        </button>
      </div>
    );
  }
}

export default StartMenu;
