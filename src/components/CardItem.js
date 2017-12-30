import React, { Component } from 'react';

class CardItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
  }

  turnUp = () => {
    this.setState({ isFlipped: true });
  };

  clickHandler = () => {
    if (this.props.card.isMatch) {
      return false;
    }
    this.props.compareHandler(this.props.card);
  };

  render() {
    const { card } = this.props;
    return (
      <div
        className={`card ${card.isFlipped ? 'flipped' : ''}`}
        ref={el => (this.card = el)}
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
