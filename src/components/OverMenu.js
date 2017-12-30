import React, { Component } from 'react';

class OverMenu extends Component {
  resetHandler = () => {
    this.props.onReset();
  };

  render() {
    return (
      <div className="menu">
        <div className="logo over-img" />
        <h1>
          Поздравляем! Ваш итоговый счет: <span>{this.props.score}</span>
        </h1>
        <button className="btn" onClick={this.resetHandler} data-tid="button">
          Еще раз
        </button>
      </div>
    );
  }
}

export default OverMenu;
