import React, { Component } from 'react';

class EndGame extends Component {
  restartHandler = () => {
    this.props.retry();
  };

  render() {
    return (
      <div className="menu">
        <div className="logo over-img" />
        <h1>
          Поздравляем! Ваш итоговый счет: <span>{this.props.score}</span>
        </h1>
        <button
          className="btn"
          onClick={this.restartHandler}
          data-tid="EndGame-retryGame"
        >
          Еще раз
        </button>
      </div>
    );
  }
}

export default EndGame;
