import React from 'react';
import PropTypes from 'prop-types';

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

StartMenu.propTypes = {
  startGame: PropTypes.func.isRequired,
};

export default StartMenu;
