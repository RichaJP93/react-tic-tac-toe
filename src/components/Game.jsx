import React, {useState} from 'react';
import Board from './Board';
import {calculateWinner} from '../helpers';

const Game = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = () => {

  }

  const jumpTo = () => {
    
  }

  const renderMoves = () => {
    
  }

  const status = 'Next player: X';

  return (
    <Board squares={board} onClick={handleClick} status={status}/>
  );
}

export default Game