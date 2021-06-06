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
    const request = axios.get(endpoint).then((response) => {
      return setScore(response.data);
    });

    score.forEach((s) => console.log(s));
  }, []);

  return (
    <div className="container">
      <div className="medalImage">
        <div className="silverScore">
          <img
            src={silvermedal}
            style={{ marginRight: "20px" }}
            width="250"
            height="300"
          />
        </div>
        <div className="goldScore">
          <img src={goldmedal} width="300" height="370" />
        </div>
        <div className="bronzeScore">
          <img src={bronzemedal} width="200" height="250" />
        </div>
      </div>
      <div className="gameRetry">
        <a href="/">Retry＞</a>
      </div>
    </div>
  );
}

export default GameRanking;
