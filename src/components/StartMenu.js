import React, { Component } from 'react';

class StartMenu extends Component {
  clickHandler = () => {
    this.props.startGame();
  };

  render() {
    return (
      <div className="menu">
        <div className="logo start-img" />
        <h1>MEMORY GAME</h1>
        <button className="btn" onClick={this.clickHandler} data-tid="button">
          Начать игру
        </button>
      </div>
    );
  }
}

export default StartMenu;
