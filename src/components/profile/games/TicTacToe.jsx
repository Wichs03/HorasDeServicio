import React, { useState, useEffect } from "react";

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkWinner(board, player) {
  return WINNING_COMBINATIONS.some((combo) =>
    combo.every((index) => board[index] === player)
  );
}

function checkTie(board) {
  return board.every((cell) => cell !== null);
}

function getAvailableMoves(board) {
  return board.map((cell, idx) => (cell === null ? idx : null)).filter((i) => i !== null);
}

function aiMove(board, aiPlayer, humanPlayer) {
  for (let move of getAvailableMoves(board)) {
    const boardCopy = [...board];
    boardCopy[move] = aiPlayer;
    if (checkWinner(boardCopy, aiPlayer)) return move;
  }
  for (let move of getAvailableMoves(board)) {
    const boardCopy = [...board];
    boardCopy[move] = humanPlayer;
    if (checkWinner(boardCopy, humanPlayer)) return move;
  }
  if (board[4] === null) return 4;
  const corners = [0, 2, 6, 8].filter((i) => board[i] === null);
  if (corners.length) return corners[Math.floor(Math.random() * corners.length)];
  const available = getAvailableMoves(board);
  return available[Math.floor(Math.random() * available.length)];
}

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [tie, setTie] = useState(false);

  const humanPlayer = "X";
  const aiPlayer = "O";

  useEffect(() => {
    if (!isPlayerTurn && !winner && !tie) {
      const move = aiMove(board, aiPlayer, humanPlayer);
      if (move !== undefined) {
        setTimeout(() => {
          const newBoard = [...board];
          newBoard[move] = aiPlayer;
          setBoard(newBoard);
          if (checkWinner(newBoard, aiPlayer)) setWinner(aiPlayer);
          else if (checkTie(newBoard)) setTie(true);
          else setIsPlayerTurn(true);
        }, 500);
      }
    }
  }, [isPlayerTurn, board, winner, tie]);

  const handleClick = (idx) => {
    if (board[idx] || winner || tie || !isPlayerTurn) return;
    const newBoard = [...board];
    newBoard[idx] = humanPlayer;
    setBoard(newBoard);
    if (checkWinner(newBoard, humanPlayer)) setWinner(humanPlayer);
    else if (checkTie(newBoard)) setTie(true);
    else setIsPlayerTurn(false);
  };

  const restart = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
    setWinner(null);
    setTie(false);
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-gray-100 rounded-md select-none">
      <h3 className="text-center text-2xl font-bold text-blue-900 mb-4">Tic Tac Toe</h3>
      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, idx) => (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            className="w-20 h-20 text-4xl font-bold text-blue-900 bg-white rounded-md shadow hover:bg-blue-100 transition"
          >
            {cell}
          </button>
        ))}
      </div>
      <div className="mt-4 text-center text-lg text-blue-900 font-semibold min-h-[2rem]">
        {winner && (winner === humanPlayer ? "¡Ganaste!" : "Perdiste contra la máquina")}
        {!winner && tie && "Empate"}
        {!winner && !tie && (isPlayerTurn ? "Tu turno" : "Turno de la máquina")}
      </div>
      <button
        onClick={restart}
        className="mt-4 w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition"
      >
        Reiniciar
      </button>
    </div>
  );
}
