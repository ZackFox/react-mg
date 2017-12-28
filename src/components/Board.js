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
      tempCard: null,
      score: 0,
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
    const newCards = generateCouples(cards);
    this.setState(prevState => ({
      ...prevState,
      cards: newCards,
    }));
  };

  flipCard = (card, bool) => {
    const { cards } = this.state;
    const updatedCards = [...cards];
    updatedCards.map(item => {
      if (item.id === card.id) {
        item.isFlipped = bool;
      }
    });
    this.setState(prevState => ({ ...prevState, cards: updatedCards }));
  };

  increaseScore = () => {
    const { score, cards } = this.state;
  };

  onCompare = card => {
    const { tempCard, cards } = this.state;
    this.flipCard(card, true);
    if (tempCard) {
      if (tempCard.value === card.value) {
        //код исчезновения карты
      } else {
        setTimeout(() => {
          this.flipCard(tempCard, false);
          this.flipCard(card, false);
        }, 1000);
      }
      this.setState(prevState => ({ ...prevState, tempCard: null }));
    } else {
      this.setState(prevState => ({ ...prevState, tempCard: card }));
    }
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
