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
    return <div className="card">card</div>;
  }
}

export default CardItem;
