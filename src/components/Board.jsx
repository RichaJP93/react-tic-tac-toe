import React from 'react';
import Square from './Square';

const Board = ({squares, onClick, status}) => (

  <div>
    <div >{status}</div>
    <div >
      <Square number={1} onClick={() => onClick("")}/>
      <Square number={2} onClick={() => onClick("")}/>
      <Square number={3} onClick={() => onClick("")}/>
    </div>
    <div >
      <Square number={4} onClick={() => onClick("")}/>
      <Square number={5} onClick={() => onClick("")}/>
      <Square number={6} onClick={() => onClick("")}/>
    </div>
    <div >
      <Square number={7} onClick={() => onClick("")}/>
      <Square number={8} onClick={() => onClick("")}/>
      <Square number={9} onClick={() => onClick("")}/>
    </div>
  </div>
);
  


export default Board;