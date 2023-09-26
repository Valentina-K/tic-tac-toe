function pcPlayerStep(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let pcStep = squares.indexOf(null);
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a]) {
      if (squares[a] === squares[b] && squares[c] === null) {
        pcStep = c;
      } else if (squares[a] === squares[c] && squares[b] === null) {
        pcStep = b;
      }
    } else if (squares[b] === squares[c] && squares[a] === null) {
      pcStep = a;
    }
  }
  return pcStep;
}

export default pcPlayerStep;
