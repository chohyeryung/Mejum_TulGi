import React, { useState, useEffect } from "react";

function GameRanking(props) {
  const [score, setScore] = useState(0);
  function scoreHandle(e) {
    setScore(100);
  }

  function print() {
    console.log("hi");
  }
  useEffect(() => {
    setScore(70);
    print();
  }, []);
  return (
    <div>
      <button onClick={scoreHandle}>{score}</button>
    </div>
  );
}

export default GameRanking;
