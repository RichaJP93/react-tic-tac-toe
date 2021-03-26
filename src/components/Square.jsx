import React from 'react';

const Square = ({number, onClick}) => (

  <button onClick={onClick} className="square">
    <p>{number}</p>
  </button>
);

export default Square