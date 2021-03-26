import React from 'react';
import Square from './Square';

const style = {
  border: '4px solid darkblue', 
  borderRadius: '10px', 
  width: '249px',
  height: '330px',  
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}

const Board = ({squares, onClick}) => (

  <div>    
    <div style={style}>
      {squares.map((square, i) => (
        <Square key={i} number={square} onClick={() => onClick(i)}/>
      ))}
    </div>
  </div>
);
  


export default Board;