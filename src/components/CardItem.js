import React, { Component } from 'react';

class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
  }

  clickHandler = () => {};

  render() {
    const { cards } = this.props;
    return (
      <div className="cards-set">
        {cards.map((item, i) => (
          <div key={i} className={`card card-${item}`} />
        ))}
      </div>
    );
  }
}

export default CardItem;
