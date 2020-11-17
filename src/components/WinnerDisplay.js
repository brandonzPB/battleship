import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

const WinnerDisplay = () => {
  const { winner, loser } = useContext(GameContext);

  return (
    <div className="winner-display">
      <h1>Congratulations to {winner.id} for defeating {loser.id}</h1>
    </div>
  )
}

export default WinnerDisplay;
