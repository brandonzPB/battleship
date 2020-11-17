import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from '../contexts/GameContext';

const StartOverButton = () => {
  const { resetGame, game } = useContext(GameContext);

  if (game.length < 1) {
    return (
      <div className="empty" style={{ display: 'none' }}></div>
    )
  }

  return (
    <div className="start-over-container">
      <Link to="/">
        <button onClick={resetGame} className="start-over-btn">Start Over</button>
      </Link>
    </div>
  )
}

export default StartOverButton;
