import React, { Component } from 'react';
import CardItem from './CardItem';
import PropTypes from 'prop-types';

class Board extends Component {
  componentDidMount() {
    this.props.resetGame();
  }

  resetHandle = () => {
    const timeOutIndex = setTimeout(() => {}, 0);
    for (let i = 0; i < timeOutIndex; i++) {
      clearTimeout(i);
    }
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
          <div className="score">
            Очки: <span data-tid="Menu-scores">{score}</span>
          </div>
        </div>

        <div className="cards-set" data-tid="Deck">
          {cards.map(card => (
            <CardItem key={card.id} card={card} compareHandler={comparator} />
          ))}
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  cards: PropTypes.arrayOf({}).isRequired,
  score: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
  resetGame: PropTypes.func.isRequired,
  comparator: PropTypes.func.isRequired,
};

export default Board;
