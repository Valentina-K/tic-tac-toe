import React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import Board from "./Board";
import calculateWinner from "./utils/calculate";
import isDraw from "./utils/isDraw";
import { Modal } from "./Modal/Modal";
import pcPlayerStep from "./utils/pcPlayerStep";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings, images } from "./utils/constants";
import { choiseAvatar } from "./utils/choiseAvatar";
import { Play } from "./Play";
import { ButtonPlay, Button } from "./Game/Game.styled";

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [isUser, setIsUser] = useState(true);
  const [active, setActive] = useState(true);
  const [isChoiseAvatar, setIsChoiseAvatar] = useState(false);
  const checkFirstStep = useRef();
  const [user, setUser] = useState({});
  const [pc, setPc] = useState({});
  const [countUserWin, setCountUserWin] = useState(0);
  const [countPcWin, setCountPcWin] = useState(0);
  const [status, setStatus] = useState("");
  const [choiseU, setChoiseU] = useState("X");
  const [choisePc, setChoisePc] = useState("O");
  const [isStart, setIsStart] = useState(true);

  const handlePlay = () => {
    setIsUser(checkFirstStep.current.checked);
    let choise = checkFirstStep.current.checked ? "X" : "O";
    setChoiseU(choise);
    choise = !checkFirstStep.current.checked ? "X" : "O";
    setChoisePc(choise);
    setIsStart(false);
    setActive(false);
    if (!isChoiseAvatar) {
      setUser(images[0]);
      setPc(choiseAvatar(images[0].id));
    }
  };

  const handleNewGameClick = () => {
    clearSquares();
    setXIsNext(true);
    setIsStart(true);
    setCountPcWin(0);
    setCountUserWin(0);
    setIsChoiseAvatar(false);
    setActive(true);
  };

  const handleNewRound = () => {
    clearSquares();
    setXIsNext(true);
    setIsUser(checkFirstStep.current.checked);
    let choise = checkFirstStep.current.checked ? "X" : "O";
    setChoiseU(choise);
    choise = checkFirstStep.current.checked ? "O" : "X";
    setChoisePc(choise);
    setActive(false);
  };

  const handleClick = useCallback(
    (i) => {
      const squaresTemp = squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squaresTemp[i] = xIsNext ? "X" : "O";
      setSquares(squaresTemp);
      setXIsNext(!xIsNext);
      setIsUser(!isUser);
    },
    [squares, xIsNext, isUser]
  );

  const handleChoiseAvatar = (item) => {
    setUser(item);
    setPc(choiseAvatar(item.id));
    setIsChoiseAvatar(true);
  };

  const clearSquares = () => {
    setSquares(Array(9).fill(null));
  };

  const winner = calculateWinner(squares);
  const draw = isDraw(squares);

  useEffect(() => {
    if (winner) {
      if (winner === "X" && choiseU === "X") setCountUserWin((pr) => pr + 1);
      else if (winner === "O" && choiseU === "O")
        setCountUserWin((pr) => pr + 1);
      else setCountPcWin((pr) => pr + 1);
      setStatus("Выиграл  " + winner);
      setActive(true);
    }
  }, [winner, choiseU]);

  useEffect(() => {
    if (draw) {
      setStatus("Ничья");
      setActive(true);
    }
  }, [draw]);

  useEffect(() => {
    if (!isUser) handleClick(pcPlayerStep(squares));
  }, [isUser, squares, handleClick]);

  return (
    <>
      {isStart && (
        <Modal active={active} setActive={setActive}>
          <div className="container">
            <h2 className="modalTitle">Выбор игрока</h2>
            <Slider {...settings} afterChange={() => {}}>
              {images.map((item) => (
                <div key={item.id} onClick={() => handleChoiseAvatar(item)}>
                  <img src={item.src} alt={item.alt} className="img" />
                </div>
              ))}
            </Slider>
            {isChoiseAvatar && (
              <div className="playerBlock">
                <div>
                  <h3>Вы</h3>
                  <img src={user.src} alt={user.alt} className="img" />
                </div>
                <div>
                  <h3>ПК</h3>
                  <img src={pc.src} alt={pc.alt} className="img" />
                </div>
              </div>
            )}
            <div className="initialPlay">
              <label>
                <span>Первый ход мой </span>
                <input ref={checkFirstStep} type="checkbox" />
              </label>
            </div>
            <ButtonPlay onClick={() => handlePlay()}>
              <Play />
            </ButtonPlay>
          </div>
        </Modal>
      )}
      {!isStart && (
        <Modal active={active} setActive={setActive}>
          <div className="container">
            <h2 style={{ margin: "1rem 0", textAlign: "center" }}>{status}</h2>
            <div className="players">
              <div>
                <h3 style={{ textAlign: "center" }}>Вы - {choiseU}</h3>
                <img src={user.src} alt={user.alt} className="img" />
              </div>
              <div>
                <h3 style={{ textAlign: "center" }}>ПК - {choisePc}</h3>
                <img src={pc.src} alt={pc.alt} className="img" />
              </div>
            </div>
            <div style={{ textAlign: "center" }} className="result">
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: "700",
                }}
              >
                {countUserWin}:{countPcWin}
              </span>
            </div>
            <div className="initialPlay">
              <label>
                <span>Первый ход мой </span>
                <input ref={checkFirstStep} type="checkbox" />
              </label>
            </div>
            <div className="buttonBlock">
              <Button onClick={() => handleNewRound()}>Играть снова!</Button>
              <Button onClick={() => handleNewGameClick()}>Новая игра</Button>
            </div>
          </div>
        </Modal>
      )}
      <div className="game">
        <div className="game-board">
          <Board squares={squares} onClick={(i) => handleClick(i)} />
        </div>
      </div>
    </>
  );
}

export default Game;
