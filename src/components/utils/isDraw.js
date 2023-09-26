import calculateWinner from "./calculate";
function isDraw(squares) {
  const isNotEmpty = squares.every((item) => item !== null);
  const win = calculateWinner(squares);
  return isNotEmpty && !win;
}

export default isDraw;
