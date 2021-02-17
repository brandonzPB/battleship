import React from 'react';

import './letter.css';

const Letter = ({ char }) => {
  return (
    <div className="letter">{char.text}</div>
  )
}

export default Letter;
