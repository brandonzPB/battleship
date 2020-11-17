import React from 'react';
import { letterArray, numArr } from '../modules/gameBoard';
import OwnTile from './OwnTile';
import Letter from './Letter';
import Number from './Number';

const OwnMap = ({ thisPlayer, winner, loser }) => {
  const numberArr = numArr();

  const { playerInfo } = thisPlayer;
  const personalTiles = playerInfo.personalTiles;

  const TileComponents = personalTiles.map((tile, i) => {
    return (
      <OwnTile 
        key={i}
        tile={tile}
      />
    )
  });

  const LetterComponents = letterArray.map(char => {
    return (
      <Letter 
        key={char.id}
        char={char}
      />
    )
  });

  const NumberComponents = numberArr.map(num => {
    return (
      <Number 
        key={num.id}
        num={num}
      />
    )
  });

  if (winner.id.length > 0) {
    return (
      <div className="game-result">
        <h1>Congratulations to {winner.id} for defeating {loser.id}!</h1>
      </div>
    )
  }

  return (
    <div className="tile-display">
      <h2>These are your ships, {playerInfo.player}</h2>
      <div className="numbers">
        {NumberComponents}
      </div>
      <div className="tiles">
        {TileComponents}
      </div>
      <div className="letters">
        {LetterComponents}
      </div>
    </div>
  )
}

export default OwnMap;
