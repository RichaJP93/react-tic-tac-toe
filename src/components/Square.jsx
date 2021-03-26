import React from 'react';

const Square = ({value, onClick}) => (

  <button onClick={onClick} className="square">
    <p>{value}</p>
  </button>
);

export default Square