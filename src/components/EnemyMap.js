import React, { useContext } from 'react';
import { letterArray, numArr } from '../modules/gameBoard';
import EnemyTile from './EnemyTile';
import Letter from './Letter';
import Number from './Number';
import { GameContext } from '../contexts/GameContext';

const EnemyMap = ({ thisPlayer, thisEnemy, nextTurn, winner }) => {
  const { sinkTile, missedShot } = useContext(GameContext);
  const numberArr = numArr();

  const { playerInfo, enemyTiles } = thisPlayer;
  const { enemyInfo, enemysPersonalTiles, id } = thisEnemy;

  const hitTile = tile => {
    const x = tile.x;
    const y = tile.y;

    const enemyPTile = enemysPersonalTiles.filter(tile => tile.x === x && tile.y === y);

    const playTile = enemyTiles.filter(tile => tile.x === x && tile.y === y);

    if (!enemyPTile[0].isFree && !playTile[0].isHit) {
      // occupied by active ship tile
      console.log('hit');

      sinkTile(x, y, id);
      return 'hit';
    } else if (enemyPTile[0].isFree && !playTile[0].isHit && !playTile[0].isSplash) {
      // not occupied by anything
      console.log('splash');

      missedShot(x, y, id);
      return 'splash';
    }

    return false;
  }

  const TileComponents = enemyTiles.map((tile, i) => {
    return (
      <EnemyTile 
        key={i}
        tile={tile}
        hitTile={hitTile}
        nextTurn={nextTurn}
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
      <div className="empty"></div>
    )
  }

  return (
    <div className="tile-display">
      <h2 className="target-header">Choose a target</h2>
      <div className="numbers enemy">
        {NumberComponents}
      </div>
      <div className="tiles">
        {TileComponents}
      </div>
      <div className="letters enemy">
        {LetterComponents}
      </div>
    </div>
  )  
}

export default EnemyMap;
