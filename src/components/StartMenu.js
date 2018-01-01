import React from 'react';

const StartMenu = ({ startGame }) => {
  return (
    <div className="menu">
      <div className="logo start-img" />
      <h1>MEMORY GAME</h1>
      <button className="btn" onClick={startGame} data-tid="NewGame-startGame">
        Начать игру
      </button>
    </div>
  );
};

export default StartMenu;
