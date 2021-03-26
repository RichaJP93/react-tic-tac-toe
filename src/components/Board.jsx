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

const Board = ({squares, onClick, status}) => (

  <div>
    <div>{status}</div>
    <div style={style}>
      <Square number={1} onClick={() => onClick("")}/>
      <Square number={2} onClick={() => onClick("")}/>
      <Square number={3} onClick={() => onClick("")}/>    
      <Square number={4} onClick={() => onClick("")}/>
      <Square number={5} onClick={() => onClick("")}/>
      <Square number={6} onClick={() => onClick("")}/>    
      <Square number={7} onClick={() => onClick("")}/>
      <Square number={8} onClick={() => onClick("")}/>
      <Square number={9} onClick={() => onClick("")}/>
    </div>
  </div>
);
  


export default Board;