import React, { useState, createContext, useEffect, useReducer } from 'react';
import gameReducer from '../reducers/gameReducer';

export const GameContext = createContext();

const GameContextProvider = (props) => {
  const [game, dispatch] = useReducer(gameReducer, [], () => {
    const storedGame = localStorage.getItem('battleship');
    return storedGame ? JSON.parse(storedGame) : [];
  });

  useEffect(() => {
    localStorage.setItem('battleship', JSON.stringify(game));
  }, [game]);

  const resetGame = () => {
    dispatch({type: 'RESET'});
  }

  const sinkTile = (x, y, enemyId) => {
    dispatch({type: 'HIT', player: {
      enemyId, x, y
    }});
  }

  const missedShot = (x, y, enemyId) => {
    dispatch({type: 'MISS', player: {
      enemyId, x, y
    }});
  }

  return (
    <GameContext.Provider
    value={{
      game, 
      dispatch, 
      resetGame,
      sinkTile,
      missedShot,
    }}>
      {props.children}
    </GameContext.Provider>
  )
}

export default GameContextProvider;
