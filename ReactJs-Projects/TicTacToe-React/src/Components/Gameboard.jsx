import React, { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onSelectSquare, activePlayerSymbol }) => {
  const [gameBoard, setGameboard] = useState(initialGameBoard);

  const changeSymbol = (rowIndex, colIndex) => {
    if (!gameBoard[rowIndex][colIndex]) {
      const newGameBoard = [...gameBoard];
      newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
      setGameboard(newGameBoard);

      onSelectSquare();
    }
  };

  const restart = () => {
    setGameboard(initialGameBoard);
  };

  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            <ol>
              {row.map((col, colIndex) => (
                <li key={colIndex}>
                  <button onClick={() => changeSymbol(rowIndex, colIndex)}>
                    {col}
                  </button>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
      <button onClick={restart} style={{width:'200px',border:'3px solid black',margin:'auto'}} >Restart</button>
    </>
  );
};

export default GameBoard;
