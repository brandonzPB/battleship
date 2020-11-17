import { v4 as uuidv4 } from 'uuid';

export const gameBoard = () => {
  const playTilesX = ['', '', '', '', '', '', '', '', '', '', ''];
  const playTilesY = ['', '', '', '', '', '', '', '', ''];
  let tiles = [];

  for (let y = playTilesY.length; y >= 1; y--) {
    for (let x = 1; x <= playTilesX.length; x++) {
      tiles.push({
        isFree: true,
        isHit: false,
        isSplash: false,
        x,
        y
      });
    }
  }

  return tiles;
}

const checkOverlap = (personalTiles, tile) => {
  if (tile.direction) {
    // horizontal
    for (let i = 0; i < tile.length; i++) {
      const xCoord = tile.coordinates[0] + i;
      const yCoord = tile.coordinates[1];

      const mapTile = personalTiles.find(tile => tile.x === xCoord && tile.y === yCoord);
      if (!mapTile.isFree) return true;
    }
  } else {
    // vertical
    for (let i = 0; i < tile.length; i++) {
      const yCoord = tile.coordinates[1] + i;
      const xCoord = tile.coordinates[0];

      const mapTile = personalTiles.find(tile => tile.y === yCoord && tile.x === xCoord);
      if (!mapTile.isFree) return true;
    }
  }

  return false;
}

const checkBoundary = tile => {
  const lengthRemainder = tile.length - 1;
  // if tile direction is true, it is placed horizontally
  // 0 corresponds to the x-axis; 1 corresponds to the y-axis
  const coord = tile.direction ? tile.coordinates[0] : tile.coordinates[1];
  // x-axis length: 11 tiles; y-axis length: 9 tiles
  const bound = tile.direction ? 11 : 9;

  // we expect this to be positive
  // if negative, that means the length goes past the bound
  const diff = bound - (coord + lengthRemainder);

  if (diff > 0) return false;

  return true;
}

function getStartTile() {
  const randomX = Math.floor(Math.random() * 11) + 1;
  const randomY = Math.floor(Math.random() * 9) + 1;
  return [randomX, randomY];
}

export const getShipPlacements = personalTiles => {
  let newTiles = personalTiles;

  for (let i = 1; i <= 5; i++) {    
    let length = i === 1 ? 5
      : i === 2 ? 4
      : i === 3 ? 4
      : i === 4 ? 3
      : 2;
    
    let tile = {
      length,
      coordinates: [],
      direction: Math.random() > 0.5 // true: horizontal
    }
  
    let isOverlapped;
    let isPastBound;

    do {
      tile.coordinates = getStartTile();
      isPastBound = checkBoundary(tile);
  
      if (isPastBound) {
        isOverlapped = true;
      } else {
        isOverlapped = checkOverlap(newTiles, tile);
      }
    } while (isOverlapped || isPastBound)

    for (let j = 0; j < length; j++) {
      if (tile.direction) {
        // horizontal
        const xCoord = tile.coordinates[0] + j;
        const yCoord = tile.coordinates[1];

        newTiles = newTiles.map(square => {
          if (square.x === xCoord && square.y === yCoord) {
            return {
              ...square,
              isFree: false
            }
          }

          return square;
        })
      } else {
        // vertical
        const yCoord = tile.coordinates[1] + j;
        const xCoord = tile.coordinates[0];

        newTiles = newTiles.map(square => {
          if (square.y === yCoord && square.x === xCoord) {
            return {
              ...square,
              isFree: false
            }
          }

          return square;
        })
      }
    }
  }

  return newTiles;
}

export const letterArray = [
  {
    text: 'A',
    id: uuidv4()
  },
  {
    text: 'B',
    id: uuidv4()
  },
  {
    text: 'C',
    id: uuidv4()
  },
  {
    text: 'D',
    id: uuidv4()
  },
  {
    text: 'E',
    id: uuidv4()
  },
  {
    text: 'F',
    id: uuidv4()
  },
  {
    text: 'G',
    id: uuidv4()
  },
  {
    text: 'H',
    id: uuidv4()
  },
  {
    text: 'I',
    id: uuidv4()
  },
  {
    text: 'J',
    id: uuidv4()
  },
  {
    text: 'K',
    id: uuidv4()
  }
];

export const numArr = () => {
  let numArray = [];

  for (let i = 9; i > 0; i--) {
    numArray.push({
      text: i,
      id: uuidv4()
    });
  }

  return numArray;
}

export const getShipLength = ships => {
  // returns remaining ship length
  
  if (ships === 0) return 1;
  if (ships === 1 || ships === 2) return 2;
  if (ships === 3) return 3;
  if (ships === 4) return 4;
}
