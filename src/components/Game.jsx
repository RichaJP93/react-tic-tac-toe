import React, {useState} from 'react';
import Board from './Board';
import {calculateWinner} from '../helpers';

const style = {
  width: '200px',
  margin: '20px auto'
}

const Game = () => {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const currentBoard = timeInHistory[stepNumber];
    const currentSquares = [...currentBoard]

    if(winner || currentSquares[i]) return;

    currentSquares[i] = xIsNext ? 'X' : 'O';

    setHistory([...timeInHistory, currentSquares]);
    setStepNumber(timeInHistory.length);
    setXIsNext(!xIsNext);
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0)
  }

  const renderMoves = () => (
    history.map((_step, pastMove) => {
      const buttonToRender = pastMove ? `Go to move #${pastMove}` : 'Restart';
      return (
        <li key={pastMove}>
          <button onClick={() => jumpTo(pastMove)}>{buttonToRender}</button>
        </li>
      )
    })
  )

  const status = xIsNext ? 'Next player: X' : 'Next player: O';

  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={style}>
        <p>{winner ? 'Winner! ' + winner : status}</p>
        {renderMoves()}
      </div>
    </>
  );
}

export default Game