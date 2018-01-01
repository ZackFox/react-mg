import React, { Component } from 'react';

class CardItem extends Component {
  clickHandler = () => {
    const { card, compareHandler } = this.props;
    if (card.isFlipped || card.isMatch) {
      return false;
    }
    compareHandler(card);
  };

  render() {
    const { card } = this.props;
    return (
      <div
        className={`card ${card.isFlipped ? 'flipped' : ''}`}
        onClick={this.clickHandler}
        data-tid={`Card${card.isFlipped ? '-flipped' : ''}`}
      >
        <div
          className={`card-front card-${card.value}`}
          data-card={card.value}
        />
        <div className="card-back" />
      </div>
    );
  }
}

export default CardItem;
