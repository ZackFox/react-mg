import React, { Component } from 'react';
import CardItem from './CardItem';

class Board extends Component {
  componentDidMount() {
    this.props.resetGame();
  }

  resetHandle = () => {
    this.props.resetGame();
  };

  render() {
    const { cards, score, message, comparator } = this.props;
    return (
      <div className="board">
        <div className="header">
          <div>
            <button
              className="btn-reset"
              onClick={this.resetHandle}
              data-tid="Menu-startGame"
            >
              Начать заново
            </button>
          </div>
          <div className="message">
            <span>{message}</span>
          </div>
          <div className="score" data-tid="Menu-scores">
            Очки: <span>{score}</span>
          </div>
        </div>

        <div className="cards-set">
          {cards.map(card => (
            <CardItem key={card.id} card={card} compareHandler={comparator} />
          ))}
        </div>
      </div>
    );
  }
}

export default Board;
