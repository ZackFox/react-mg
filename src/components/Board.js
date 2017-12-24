import React, { Component } from 'react';
import CardItem from './CardItem';
import OverMenu from './OverMenu';

import cards from '../utils/cards';
import randomizer from '../utils/randomizer';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: randomizer(cards),
      score: 0,
      isOver: false,
      cardA: {},
      cardB: {},
      message: '',
    };
  }

  componentDidMount() {
    // console.log(this.state.cards);
  }

  isOverHandler = () => {
    this.setState({ ...this.state, isOver: !this.state.isOver });
  };

  onReset = () => {
    this.setState({ ...this.state, cards: randomizer(cards) });
  };

  render() {
    return this.state.isOver ? (
      <OverMenu onReset={this.isOverHandler} />
    ) : (
      <div className="board">
        <div className="board-info">
          <button className="btn-reset" onClick={this.onReset}>
            Начать заново
          </button>
          <span className="score">
            Очки: <span>{this.state.score}</span>
          </span>
        </div>

        <CardItem cards={this.state.cards} />
      </div>
    );
  }
}

export default Board;
