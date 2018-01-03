import React, { Component } from 'react';

import Board from './Board';
import EndGame from './EndGame';

import cards from '../config/cards';
import generateCouples from '../utils/generateCouples';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      tempCard: null,
      score: 0,
      isOver: false,
      message: '',
    };
  }

  hiding = () => {
    const { cards } = this.state;
    const updatedCards = [...cards];
    updatedCards.forEach(item => (item.isFlipped = false));
    this.setState(prevState => ({
      ...prevState,
      cards: updatedCards,
      message: '',
    }));
  };

  showing = () => {
    const updatedCards = generateCouples(cards);
    // updatedCards.forEach(item => (item.isFlipped = true));
    this.setState(prevState => ({
      ...prevState,
      cards: updatedCards,
      score: 0,
      message: 'У тебя есть 5 секунд, чтобы запомнить карты',
    }));
  };

  flipOne = card => {
    const { cards } = this.state;
    const updatedCards = [...cards];
    updatedCards.forEach(item => {
      if (item.id === card.id) {
        item.isFlipped = true;
      }
    });
    this.setState(prevState => ({ ...prevState, cards: updatedCards }));
  };

  flipPair = (cardA, cardB) => {
    const { cards } = this.state;
    const updatedCards = [...cards];
    updatedCards.forEach(item => {
      if (item.id === cardA.id || item.id === cardB.id) {
        item.isFlipped = false;
      }
    });
    this.setState(prevState => ({ ...prevState, cards: updatedCards }));
  };

  matchPair = (cardA, cardB) => {
    const { cards } = this.state;

    const updatedCards = [...cards];
    updatedCards.forEach(item => {
      if (item.id === cardA.id || item.id === cardB.id) {
        item.isMatch = true;
      }
    });
    this.setState(prevState => ({ ...prevState, cards: updatedCards }));
  };

  increaseScore = () => {
    const { score, cards } = this.state;
    let total = score;
    const count = cards.filter(item => !item.isMatch).length;
    total += count / 2 * 42;
    this.setState(prevState => ({ ...prevState, score: total }));
  };

  decreaseScore = () => {
    const { score, cards } = this.state;
    let total = score;
    const count = cards.filter(item => item.isMatch).length;
    total -= count / 2 * 42;
    this.setState(prevState => ({ ...prevState, score: total }));
  };

  compare = card => {
    const { tempCard, cards } = this.state;
    this.flipOne(card);

    if (tempCard) {
      if (tempCard.value === card.value) {
        this.matchPair(tempCard, card);
        this.increaseScore();

        const remain = cards.filter(item => !item.isFlipped).length;
        if (remain === 0) {
          this.setState(prevState => ({
            ...prevState,
            message: 'Ты сделал это !',
          }));
          setTimeout(() => this.gameOver(), 2000);
        }
      } else {
        setTimeout(() => {
          this.decreaseScore();
          this.flipPair(tempCard, card);
        }, 1000);
      }
      this.setState(prevState => ({ ...prevState, tempCard: null }));
    } else {
      this.setState(prevState => ({ ...prevState, tempCard: card }));
    }
  };

  gameOver = () => {
    this.setState(prevState => ({ ...prevState, isOver: true }));
  };

  resetGame = () => {
    clearTimeout();
    this.showing();
    setTimeout(() => this.hiding(), 5000);
  };

  retryGame = () => {
    this.setState(prevState => ({
      ...prevState,
      isOver: false,
    }));
  };

  render() {
    const { cards, score, message, isOver } = this.state;

    return !isOver ? (
      <Board
        cards={cards}
        score={score}
        message={message}
        resetGame={this.resetGame}
        comparator={this.compare}
      />
    ) : (
      <EndGame score={score} retry={this.retryGame} />
    );
  }
}

export default Game;
