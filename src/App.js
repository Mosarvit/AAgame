import React, { useEffect, useState } from "react";

function App() {
  const [marginTop, setMarginTop] = useState(50);
  const [counter, setCounter] = useState(0);
  const [gewonnen, setGewonnen] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  useEffect(() => {
    startNewGame();
  }, []);

  function startNewGame() {
    setStartTime(Date.now());
    setCounter(0);
    setGewonnen(false);
  }

  function handleClick() {
    let rand = Math.random();
    setMarginTop(rand * 95);
    setCounter(counter + 1);
    if (counter > 0) {
      gameFinished();
    }
  }

  function gameFinished() {
    setGewonnen(true);
    setEndTime(Date.now());
  }

  return (
    <>
      <div
        style={{
          height: "10%",
          width: "20%",
          backgroundColor: "yellow",
          marginTop: marginTop + "vh",
          marginLeft: "50%",
          display: gewonnen ? "none" : "block",
          position: "fixed",
          textAlign: "center"
        }}
        onClick={() => {
          handleClick();
        }}
      >
        Hello World !
      </div>
      <div
        style={{
          height: "100px",
          width: "200px",
          backgroundColor: "green",
          marginTop: 45 + "vh",
          marginLeft: "50%",
          display: gewonnen ? "block" : "none",
          position: "absolute"
        }}
        onClick={() => startNewGame()}
      >
        Gewonnen!
        <br />
        Deine Zeit lautet: {(endTime - startTime) / 1000} sekunden
      </div>
    </>
  );
}

export default App;
