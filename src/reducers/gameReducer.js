const gameReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_PLAYER':
      return [
        ...state,
        {
          player: action.player.name,
          id: action.player.id,
          enemyTiles: action.player.enemyTiles,
          personalTiles: action.player.personalTiles,
          tilesSunk: 0,
        }
      ];
    case 'MISS':
      return state.map(player => {
        if (player.id === action.player.enemyId) return player;
        
        return {
          ...player,
          enemyTiles: player.enemyTiles.map(tile => {
            if (tile.x === action.player.x && tile.y === action.player.y) {
              return {
                ...tile,
                isSplash: true
              }
            }

            return tile;
          })
        }
      });
    case 'HIT':
      return state.map(player => {
        if (player.id === action.player.enemyId) {
          return {
            ...player,
            personalTiles: player.personalTiles.map(tile => {
              if (tile.x === action.player.x && tile.y === action.player.y) {
                return {
                  ...tile,
                  isHit: true
                }
              }

              return tile;
            })
          }
        }
        
        return {
          ...player,
          enemyTiles: player.enemyTiles.map(tile => {
            if (tile.x === action.player.x && tile.y === action.player.y) {
              return {
                ...tile,
                isHit: true
              }
            }

            return tile;
          }),
          tilesSunk: player.tilesSunk + 1
        }
      });
    case 'RESET':
      return [];
    default:
      return state;
  }
}

export default gameReducer;
