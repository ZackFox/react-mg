import React from 'react';

const EndGame = ({ score, retry }) => {
  return (
    <div className="menu">
      <div className="logo over-img" />
      <h1>
        Поздравляем! Ваш итоговый счет: <span>{score}</span>
      </h1>
      <button className="btn" onClick={retry} data-tid="EndGame-retryGame">
        Еще раз
      </button>
    </div>
  );
};

export default EndGame;
