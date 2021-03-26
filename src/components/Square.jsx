import React from 'react';

const Square = (props) => {
  const {number} = props;
  return (
    <button className="square">
      <p>{number}</p>
    </button>
  );
  
}

export default Square