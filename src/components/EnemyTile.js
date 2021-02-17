import React from 'react';

import './enemyTile.css';

const EnemyTile = ({ tile, hitTile, nextTurn }) => {
  let backgroundStyle;
  if (tile.isHit) backgroundStyle = 'black';
  else if (tile.isSplash) backgroundStyle = 'white';
  
  const displayPreview = event => {
    if (tile.isHit || tile.isSplash) return;
    
    event.target.classList.add('hover');
  }

  const removePreview = event => {
    if (tile.isHit || tile.isSplash) return;

    event.target.classList.remove('hover');
  }

  const fireCannon = event => {
    if (tile.isHit || tile.isSplash) return;

    const result = hitTile(tile);
    if (result === 'hit') {
      event.target.classList.add('hit');
    } else if (result === 'splash') {
      event.target.classList.add('splash');
    }

    nextTurn();
  }

  return (
    <div
      className="tile"
      onClick={fireCannon}
      onMouseOver={displayPreview}
      onMouseOut={removePreview}
      style={{
        backgroundColor: backgroundStyle
      }}
    >
    </div>
  )
}

export default EnemyTile;
