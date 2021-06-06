import React, { useState, useEffect } from "react";
import goldmedal from "../image/goldmedal.png";
import silvermedal from "../image/silvermedal.png";
import bronzemedal from "../image/bronzemedal.png";
import axios from "axios";
import "../../css/game_ranking.css";

function GameRanking(props) {
  const [score, setScore] = useState([]);

  useEffect(() => {
    const endpoint = "http://localhost:5000/score";
    axios.get(endpoint).then((response) => {
      return setScore([...response.data]);
    });
  }, []);

  return (
    <div className="container">
      <div className="medalImage">
        <div className="silverScore">
          <img
            src={silvermedal}
            style={{ marginRight: "80px" }}
            width="250"
            height="300"
            alt="silver medal"
          />
          <p>{score[1].NAME}</p>
          <p>{score[2].score}</p>
        </div>
        <div className="goldScore">
          <img
            src={goldmedal}
            style={{ marginRight: "80px" }}
            width="300"
            height="370"
            alt="gold medal"
          />
          <p>{score[0].NAME}</p>
          <p>{score[2].score}</p>
        </div>
        <div className="bronzeScore">
          <img src={bronzemedal} width="200" height="250" alt="bronze medal" />
          <p>{score[2].NAME}</p>
          <p>{score[2].score}</p>
        </div>
      </div>
      <div className="gameRetry">
        <a href="/">다시하기</a>
      </div>
      <div className="restRanking">
        <p
          align="center"
          style="width:80%; height: 100px; border: 1px solid orange; border-radius: 2em;"
        >
          {" "}
          4위{" "}
        </p>
        <p
          align="center"
          style="width:80%; height: 100px; border: 1px solid orange; border-radius: 2em;"
        >
          {" "}
          5위{" "}
        </p>
        <p
          align="center"
          style="width:80%; height: 100px; border: 1px solid orange; border-radius: 2em;"
        >
          {" "}
          6위{" "}
        </p>
      </div>
    </div>
  );
}

export default GameRanking;
