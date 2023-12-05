{
  /*import React, { useState, useEffect } from "react";

const initialBoard = Array(9).fill("");

const TicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    if (currentPlayer === "O" && !winner) {
      makeComputerMove();
    }
  }, [currentPlayer, winner]);

  const handleCellClick = (index) => {
    if (board[index] === "" && !winner && currentPlayer === "X") {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      checkWinner(newBoard);
      setCurrentPlayer("O");
    }
  };

  const makeComputerMove = () => {
    const availableCells = board.reduce(
      (acc, cell, index) => (cell === "" ? [...acc, index] : acc),
      [],
    );

    const randomIndex = Math.floor(Math.random() * availableCells.length);
    const computerMove = availableCells[randomIndex];

    const newBoard = [...board];
    newBoard[computerMove] = currentPlayer;
    setBoard(newBoard);
    checkWinner(newBoard);
    setCurrentPlayer("X");
  };

  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }

    if (!board.includes("")) {
      setWinner("draw");
    }
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setCurrentPlayer("X");
    setWinner(null);
  };

  const renderCell = (index) => {
    return (
      <div
        key={index}
        className="cell bg-gray-200 border border-gray-300 text-4xl text-center cursor-pointer flex items-center justify-center"
        onClick={() => handleCellClick(index)}
      >
        <span className="block w-16 h-16">{board[index]}</span>
      </div>
    );
  };

  return (
    <div className="tic-tac-toe">
      <div className="flex justify-center items-center">
        <h1> Tic Tac Toe</h1>
      </div>
      <div className="board grid grid-cols-3 gap-4 w-64 mx-auto mt-8">
        {board.map((cell, index) => renderCell(index))}
      </div>
      {winner && (
        <div className="winner text-center text-xl font-bold mt-4">
          {winner === "draw" ? "It's a draw!" : `Player ${winner} wins!`}
        </div>
      )}
      <button
        className="reset-button block mx-auto mt-4 px-4 py-2 rounded bg-blue-500 text-white"
        onClick={resetGame}
      >
        Reset Game
      </button>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default TicTacToe;
*/
}
