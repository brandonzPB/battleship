import React from 'react';

const OwnTile = ({ tile }) => {
  let backgroundStyle;
  if (tile.isHit) backgroundStyle = 'black';
  else if (!tile.isFree) backgroundStyle = 'rgb(150,18,6)';
  else backgroundStyle = 'rgb(123,199,247)';

  return (
    <div
      className="tile" 
      style={{
        background: backgroundStyle
      }}
    >
    </div>
  )
}

export default OwnTile;
