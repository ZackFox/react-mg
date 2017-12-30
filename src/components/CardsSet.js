import React, { Component } from 'react';
import CardItem from './CardItem';

class CardsSet extends Component {
  componentDidMount() {
    this.props.showCards();
  }

  render() {
    const { cards, comparator } = this.props;
    return (
      <div className="cards-set">
        {cards.map(card => (
          <CardItem key={card.id} card={card} compareHandler={comparator} />
        ))}
      </div>
    );
  }
}

export default CardsSet;
