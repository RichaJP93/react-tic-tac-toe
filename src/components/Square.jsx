import React from 'react';

const style = {
  background: 'lightblue',
  border: '2px solid darkblue',  
  fontSize: '30px',
  fontWeight: '800',
  cursor: 'pointer',
  outline: 'none'
}

const Square = ({number, onClick}) => (

  <button style={style} onClick={onClick}>
    <p>{number}</p>
  </button>
);

export default Square