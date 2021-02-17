import React, { useState, useEffect, useContext } from 'react';
import EnemyMap from './EnemyMap';
import OwnMap from './OwnMap';
import { GameContext } from '../contexts/GameContext';
import Loading from './Loading';
import WinnerDisplay from './WinnerDisplay';

import './game.css';

const Game = () => {
  const { game } = useContext(GameContext);

  const [loading, setLoading] = useState(true);
  const [turn, setTurn] = useState(0);
  const [check, setCheck] = useState(false);

  const [winner, setWinner] = useState({
    id: ''
  });

  const [loser, setLoser] = useState({
    id: ''
  });

  const [thisPlayer, setThisPlayer] = useState({
    id: 'B',
    playerInfo: [],
    enemyTiles: []
  });

  const [thisEnemy, setThisEnemy] = useState({
    id: 'A',
    enemyInfo: [],
    enemysPersonalTiles: []
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextOne = getNextPlayer(thisPlayer.id);
      const playerInfo = game.filter(player => player.id === nextOne);
      
      setThisPlayer({
        ...thisPlayer,
        id: nextOne,
        playerInfo: playerInfo[0],
        enemyTiles: playerInfo[0].enemyTiles
      });

      const nextEnemy = getNextPlayer(thisEnemy.id);
      const enemyInfo = game.filter(player => player.id === nextEnemy);

      setThisEnemy({
        ...thisEnemy,
        id: nextEnemy,
        enemyInfo: enemyInfo[0],
        enemysPersonalTiles: enemyInfo[0].personalTiles
      });

      toggleCheck();
    }, 1400);

    return () => clearTimeout(timer);
  }, [turn]);

  useEffect(() => {
    setTimeout(() => {
      const isOver = isGameOver();
        if (isOver === 'winner') setResults('winner');
        else if (isOver === 'loser') setResults('loser');

      toggleLoading();
    }, 1800);
  }, [check]);

  const getNextPlayer = id => {
    return id === 'A' ? 'B' : 'A';
  }

  const toggleLoading = () => {
    setLoading(!loading);
  }

  const toggleCheck = () => {
    setCheck(!check);
  }

  const nextTurn = () => {
    toggleLoading();

    turn === 0 ?
      setTurn(turn + 1) :
      setTurn(turn - 1);
  }

  const isGameOver = () => {
    const isLoser = thisEnemy.enemyInfo.tilesSunk === 18;
    const isWinner = thisPlayer.playerInfo.tilesSunk === 18;
    if (isWinner) return 'winner';
    else if (isLoser) return 'loser';
    else return false;
  }

  const setResults = result => {
    const winnerName = result === 'winner' ? thisPlayer.playerInfo.player : thisEnemy.enemyInfo.player;
    /* const loserName = result === 'loser' ? thisEnemy.enemyInfo.player : thisPlayer.playerInfo.player; */
    const loserName = winnerName === thisEnemy.enemyInfo.player ? thisPlayer.playerInfo.player : thisEnemy.enemyInfo.player;

    setWinner({
      ...winner,
      id: winnerName
    });

    setLoser({
      ...loser,
      id: loserName
    });
  }

  return (
    <div className="game-container">

      {
        loading ?
          <Loading /> :
          <div className="game-display">
            <div className="tile-container">
              <OwnMap
                thisPlayer={thisPlayer} 
                winner={winner}
                loser={loser}
              />
              <EnemyMap 
                thisPlayer={thisPlayer}
                thisEnemy={thisEnemy}
                nextTurn={nextTurn}
                winner={winner}
                loser={loser}
              />
            </div>
          </div>
      }
      {
        winner.id.trim() ? 
          <div className="empty"></div> :
          <div className="legend-container">
            <div className="splash-info">
              <span className="splash-text">Miss = </span>
              <div className="splash-legend-tile"></div>
            </div>
            <div className="hit-info">
              <span className="hit-text">Hit = </span>
              <div className="hit-legend-tile"></div>
            </div>
          </div>
      }
      
    </div>
  )
}

export default Game;
