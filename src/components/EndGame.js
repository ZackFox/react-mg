import React from 'react';
import PropTypes from 'prop-types';

const EndGame = ({ score, retry }) => {
  return (
    <div className="menu">
      <div className="logo over-img" />
      <h1 className="greatings">
        Поздравляем! <span>Ваш итоговый счет: {score}</span>
      </h1>
      <button className="btn" onClick={retry} data-tid="EndGame-retryGame">
        Еще раз
      </button>
    </div>
  );
};

EndGame.propTypes = {
  score: PropTypes.string.isRequired,
  retry: PropTypes.func.isRequired,
};

export default EndGame;
