import React, { Component } from 'react';
import CardsSet from './CardsSet';
import OverMenu from './OverMenu';

import cards from '../config/cards';
import generateCouples from '../utils/generateCouples';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: generateCouples(cards),
      score: 0,
      cardA: '',
      cardB: '',
      isOver: false,
    };
  }

  componentDidMount() {
    // console.log(this.state.cards);
  }

  isOverHandler = () => {
    this.setState(prevState => ({ ...prevState, isOver: !prevState.isOver }));
  };

  onReset = () => {
    this.setState({ ...this.state, cards: generateCouples(cards) });
  };

  flipCard = card => {
    const { cards } = this.state;
    const updatedCards = Object.assign([], cards);
    updatedCards.map(item => {
      if (item.id === card.id) {
        item.isFlipped = true;
      }
    });
    this.setState({ ...this.state, cards: updatedCards });
  };

  onCompare = card => {
    this.flipCard(card);
  };

  render() {
    const { score, cards } = this.state;

    return this.state.isOver ? (
      <OverMenu onReset={this.isOverHandler} />
    ) : (
      <div className="board">
        <div className="board-info">
          <button className="btn-reset" onClick={this.onReset}>
            Начать заново
          </button>
          <span className="score">
            Очки: <span>{score}</span>
          </span>
        </div>

        <CardsSet cards={cards} cardComparator={this.onCompare} />
      </div>
    );
  }
}

export default Board;
