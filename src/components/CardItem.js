import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
          className={`card-front card-${card.value} ${
            card.isMatch ? 'hidden' : ''
          }`}
        />
        <div className="card-back" />
      </div>
    );
  }
}

CardItem.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    isFlipped: PropTypes.bool.isRequired,
    isMatch: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CardItem;
