import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { score, onReset, message } = this.props;
    return (
      <div className="board-info">
        <div>
          <button
            className="btn-reset"
            onClick={this.onReset}
            data-tid="Menu-startGame"
          >
            Начать заново
          </button>
        </div>

        <div>{message}</div>

        <div className="score" data-tid="Menu-scores">
          Очки: <span>{score}</span>
        </div>
      </div>
    );
  }
}

export default Header;
