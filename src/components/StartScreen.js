import React from 'react';
import { Link } from 'react-router-dom';

const StartScreen = () => {
  return (
    <div className="set-players-container">
      <Link to="/player-names">
        <button className="set-players-btn">Set Players</button>
      </Link>
    </div>
  )
}

export default StartScreen;
