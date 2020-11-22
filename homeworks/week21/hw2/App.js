/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Backgroung } from './Style.js';
import { Board, Information } from './Template.js';

function App() {
  const [board, setBoard] = React.useState(
    Array(19).fill(Array(19).fill(null)),
  );
  const [blackIsNext, setNext] = React.useState(true);
  const [winner, setWinner] = React.useState(null);

  const handleCalculate = (x, y, newBoard) => {
    const model = [];
    if (x + 4 <= 19) {
      if (y - 4 >= 0) {
        model.push([
          [x, y],
          [x + 1, y - 1],
          [x + 2, y - 2],
          [x + 3, y - 3],
          [x + 4, y - 4],
        ]);
        // right_top:{[x+1,y-1],[x+2,y-2],[x+3,y-3],[x+4,y-4]}
      }
      if (y + 4 <= 19) {
        model.push([
          [x, y],
          [x + 1, y + 1],
          [x + 2, y + 2],
          [x + 3, y + 3],
          [x + 4, y + 4],
        ]);
        // right_bottom:{[x+1,y+1],[x+2,y+2],[x+3,y+3],[x+4,y+4]}
      }
      model.push([
        [x, y],
        [x + 1, y],
        [x + 2, y],
        [x + 3, y],
        [x + 4, y],
      ]);
      // right:{[x+1,y],[x+2,y],[x+3,y],[x+4,y]}
    }
    if (x - 4 >= 0) {
      if (y + 4 <= 19) {
        model.push([
          [x, y],
          [x - 1, y + 1],
          [x - 2, y + 2],
          [x - 3, y + 3],
          [x - 4, y + 4],
        ]);
        // left_bottom:{[x-1,y+1],[x-2,y+2],[x-3,y+3],[x-4,y+4]},
      }
      if (y - 4 >= 0) {
        model.push([
          [x, y],
          [x - 1, y - 1],
          [x - 2, y - 2],
          [x - 3, y - 3],
          [x - 4, y - 4],
        ]);
        // left_top:{[x-1,y-1],[x-2,y-2],[x-3,y-3],[x-4,y-4]}
      }
      model.push([
        [x, y],
        [x - 1, y],
        [x - 2, y],
        [x - 3, y],
        [x - 4, y],
      ]);
      // left:{[x-1,y],[x-2,y],[x-3,y],[x-4,y]}
    }
    if (y + 4 <= 19) {
      model.push([
        [x, y],
        [x, y + 1],
        [x, y + 2],
        [x, y + 3],
        [x, y + 4],
      ]);
      // bottom:{[x,y+1],[x,y+2],[x,y+3],[x,y+4]},
    }
    if (y - 4 >= 0) {
      model.push([
        [x, y],
        [x, y - 1],
        [x, y - 2],
        [x, y - 3],
        [x, y - 4],
      ]);
      // top:{[x,y-1],[x,y-2],[x,y-3],[x,y-4]}
    }
    for (let modelNum = 0; modelNum < model.length; modelNum += 1) {
      const [[a, b], [c, d], [e, f], [g, h], [i, j]] = model[modelNum]; // y在前面，x在後面
      if (
        newBoard[b][a]
        && newBoard[b][a] === newBoard[d][c]
        && newBoard[b][a] === newBoard[f][e]
        && newBoard[b][a] === newBoard[h][g]
        && newBoard[b][a] === newBoard[j][i]
      ) {
        setWinner(newBoard[b][a]);
        return newBoard[b][a];
      }
    }
    return '';
  };

  const handleClick = (e) => {
    if (e.target.innerText && winner === null) {
      const row = parseInt(e.target.innerText / 19, 10);
      const column = e.target.innerText % 19;
      const newBoard = JSON.parse(JSON.stringify(board));
      newBoard[row][column] = blackIsNext ? 'black' : 'white';
      handleCalculate(column, row, newBoard);
      setNext(!blackIsNext);
      setBoard(newBoard);
      e.target.innerText = null;
    }
  };


  return (
    <Backgroung>
      <Board board={board} handleClick={handleClick} />
      <Information winner={winner} />
    </Backgroung>
  );
}

const Gobang = () => (
  <div>
    <App />
  </div>
);
export default Gobang;
