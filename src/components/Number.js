import React from 'react';

import './number.css';

const Number = ({ num }) => {
  return (
    <div className="number">{num.text}</div>
  )
}

export default Number;
