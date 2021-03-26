import React, {useState} from 'react';
import Board from './Board';
import {calculateWinner} from '../helpers';

const style = {
  width: '200px',
  margin: '20px auto'
}

const Game = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];

    if(winner || boardCopy[i]) return;

    boardCopy[i] = xIsNext ? 'X' : 'O';

    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  }

  const jumpTo = () => {
    
  }

  const renderMoves = () => {
    return <button onClick={() => setBoard(Array(9).fill(null))}>
      Start Game
    </button>
  }

  const status = xIsNext ? 'Next player: X' : 'Next player: O';

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div style={style}>
        <p>{winner ? 'Winner: ' + winner : status}</p>
        {renderMoves()}
      </div>
    </>
  );
}

export default Game