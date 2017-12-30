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
      message: 'У тебя есть 5 секунд, чтобы запомнить карты',
    };
  }

  componentDidMount() {
    const { cards } = this.state;
    const updatedCards = [...cards];
    updatedCards.forEach(item => (item.isFlipped = false));

    setTimeout(() => {
      this.setState(prevState => ({
        ...prevState,
        cards: updatedCards,
        message: '',
      }));
    }, 5000);
  }

  isOverHandler = () => {
    this.setState(prevState => ({ ...prevState, isOver: !prevState.isOver }));
  };

  //---------------------- reset cards combination
  onReset = () => {
    const newCards = generateCouples(cards);
    this.setState(prevState => ({
      ...prevState,
      cards: newCards,
    }));
  };

  //---------------------------- flipping card
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

  // ------------------------- increase game score
  increaseScore = () => {
    const { score, cards } = this.state;
    let total = score;
    const count = cards.filter(item => !item.isFlipped).length;
    total += count / 2 * 42;
    this.setState(prevState => ({ ...prevState, score: total }));
  };

  // -------------------------- increase game score
  decreaseScore = () => {
    const { score, cards } = this.state;
    let total = score;
    const count = cards.filter(item => item.isFlipped).length;
    total -= count / 2 * 42;
    this.setState(prevState => ({ ...prevState, score: total }));
  };

  // --------------------------- comparing two cards
  onCompare = card => {
    const { tempCard, cards } = this.state;
    this.flipCard(card, true);
    if (tempCard) {
      if (tempCard.value === card.value) {
        this.increaseScore();

        const remaining = cards.filter(item => !item.isFlipped).length;
        if (remaining === 0) {
          this.setState(prevState => ({
            ...prevState,
            message: 'Ты сделал это !',
          }));
          setTimeout(() => {
            this.setState(prevState => ({ ...prevState, isOver: true }));
          }, 2000);
        }
      } else {
        setTimeout(() => {
          this.decreaseScore();
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
    const { score, cards, isOver, message } = this.state;

    return isOver ? (
      <OverMenu onReset={this.isOverHandler} score={score} />
    ) : (
      <div className="board">
        <div className="board-info">
          <button className="btn-reset" onClick={this.onReset}>
            Начать заново
          </button>
          <span>{message}</span>
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
