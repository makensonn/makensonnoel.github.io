import React, { useState } from 'react';

const SudokuGame = () => {
  // Define initial Sudoku board state
  const initialBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const [board, setBoard] = useState(initialBoard);

  // Handle user input for cell value
  const handleCellChange = (e, row, col) => {
    const newValue = parseInt(e.target.value, 10) || 0;
    const newBoard = [...board];
    newBoard[row][col] = newValue;
    setBoard(newBoard);
  };

  // Solve the Sudoku puzzle using backtracking algorithm
  const solveSudoku = () => {
    const newBoard = [...board];
    if (solve(newBoard)) {
      setBoard(newBoard);
    } else {
      console.log("Unable to solve the Sudoku puzzle.");
    }
  };

  // Function to reset the board to its initial state
  const resetBoard = () => {
    setBoard(initialBoard);
  };

  // Backtracking algorithm to solve the Sudoku puzzle
  const solve = (newBoard) => {
    const emptyCell = findEmptyCell(newBoard);

    if (!emptyCell) {
      return true; // Puzzle solved
    }

    const [row, col] = emptyCell;

    for (let num = 1; num <= 9; num++) {
      if (isValidMove(newBoard, row, col, num)) {
        newBoard[row][col] = num;

        if (solve(newBoard)) {
          return true;
        }

        newBoard[row][col] = 0; // Reset cell if solution not found
      }
    }

    return false; // No solution found
  };

  // Find the next empty cell in the Sudoku board
  const findEmptyCell = (newBoard) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (newBoard[row][col] === 0) {
          return [row, col];
        }
      }
    }
    return null; // Puzzle solved
  };

  // Check if a move is valid for a given cell in the Sudoku board
  const isValidMove = (newBoard, row, col, num) => {
    // Check row
    for (let i = 0; i < 9; i++) {
      if (newBoard[row][i] === num) {
        return false;
      }
    }

    // Check column
    for (let i = 0; i < 9; i++) {
      if (newBoard[i][col] === num) {
        return false;
      }
    }

    // Check 3x3 box
    const boxStartRow = Math.floor(row / 3) * 3;
    const boxStartCol = Math.floor(col / 3) * 3;

    for (let i = boxStartRow; i < boxStartRow + 3; i++) {
      for (let j = boxStartCol; j < boxStartCol + 3; j++) {
        if (newBoard[i][j] === num) {
          return false;
        }
      }
    }

    return true; // Valid move
  };

  // Render Sudoku board
  const renderBoard = () => {
    return (
      <table className="border-collapse border ">
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex} className="border">
                  <input
                    type="number"
                    min="1"
                    max="9"
                    value={cell || ''}
                    onChange={(e) => handleCellChange(e, rowIndex, colIndex)}
                    className="w-full h-full p-2 text-center text-gray-700 focus:outline-none"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Sudoku Game</h1>
        {renderBoard()}
        <div className="flex justify-center mt-4 space-x-4">
          <button className="px-4 py-2 rounded" onClick={solveSudoku}>
            Solve
          </button>
          <button className="px-4 py-2 rounded" onClick={resetBoard}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default SudokuGame;
