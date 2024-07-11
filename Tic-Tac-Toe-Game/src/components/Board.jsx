import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [status, setStatus] = useState("Next Player : X");
  const [count, setCount] = useState(0);

  const checkWinner = () => {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winningPattern) {
      let [a, b, c] = pattern;
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
  };

  const handleClick = (index) => {
    if (state[index]) return;
    state[index] = isX ? "X" : "O";
    setState(state);
    setIsX(!isX);

    let winner = checkWinner();

    if (winner) {
      setIsDisabled(true);
      setStatus(`Winner : ${winner}`);
    } else {
      setStatus(`Next Player : ${isX ? "O" : "X"} `);
    }

    setCount((count) => count + 1);

    if (count == 8 && !winner) {
      setStatus("Match is Draw!");
    }
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
    setIsX(true);
    setIsDisabled(false);
    setStatus("Next Player : X");
    setCount(0);
  };

  return (
    <>
      <div className="game-container">
        <h1 className="title">Tic Tac Toe Game</h1>

        <div className="board">
          {state.map((_, index) => (
            <Square
              key={index}
              value={state[index]}
              handleClick={!isDisabled ? () => handleClick(index) : null}
            />
          ))}
        </div>
        <p className="status">{status}</p>

        <button className="btn" onClick={handleReset}>
          Reset Game
        </button>
      </div>
    </>
  );
};

export default Board;
