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
    const flip = card.isFlipped ? 'flipped' : '';
    const hide = card.isMatch ? 'hidden' : '';

    return (
      <div
        className={`card ${flip}`}
        onClick={this.clickHandler}
        data-tid={`Card${card.isFlipped ? '-flipped' : ''}`}
      >
        <div className={`card-front ${hide} card-${card.value}`} />
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
