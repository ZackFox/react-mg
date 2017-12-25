import React, { Component } from 'react';
import CardItem from './CardItem';

class CardsSet extends Component {
  render() {
    const { cards, cardComparator } = this.props;
    return (
      <div className="cards-set">
        {cards.map(card => (
          <CardItem key={card.id} card={card} compareHandler={cardComparator} />
        ))}
      </div>
    );
  }
}

export default CardsSet;
