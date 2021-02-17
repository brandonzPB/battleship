import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from '../contexts/GameContext';
import { gameBoard, getShipPlacements } from '../modules/gameBoard';

import './playerForm.css';

const PlayerForm = () => {
  const [player, setPlayer] = useState('');
  const { game, dispatch, winner } = useContext(GameContext);

  const handleChange = (event) => {
    setPlayer(event.target.value);
  }

  const addPlayer = (event) => {
    event.preventDefault();

    const playerId = (game.length === 0) ? 'A' : 'B';

    const placements = gameBoard();
    const enemyTiles = gameBoard();

    const personalTiles = getShipPlacements(placements);

    dispatch({
      type: 'ADD_PLAYER',
      player: {
        id: playerId,
        name: player,
        personalTiles,
        enemyTiles
      }
    });

    setPlayer('');
  }

  if (game.length === 2) {
    return (
      <div className="start-btn-container">
        <Link to="/play">
          <button className="start-btn">Start Game</button>
        </Link>
      </div>
    )
  }

  return (
    <div id="player-form-container">
      <form onSubmit={addPlayer} className="player-form">
        <span className="name-label">
          {
            game.length === 0 ? 'Enter First Name: ' : 'Enter Second Name: '
          }
        </span>
        <input 
          type="text"
          name="player"
          value={player}
          onChange={handleChange}
          placeholder='Captain Morgan'
          className="name-input"
        />
        <button className="submit-form-btn">Submit</button>
      </form>
    </div>
  )
}

export default PlayerForm;
