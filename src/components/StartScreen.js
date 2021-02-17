import React from 'react';
import { Link } from 'react-router-dom';

import './startScreen.css';

const StartScreen = () => {
  return (
    <div className="set-players-container">
      <div id="welcome-header-container">
        <span id="welcome-header">Battleship</span>
      </div>

      <Link to="/player-names">
        <button className="set-players-btn">Set Players</button>
      </Link>
    </div>
  )
}

export default StartScreen;
