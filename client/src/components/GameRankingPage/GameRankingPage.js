import React, { useState, useEffect } from "react";
import goldmedal from "../image/goldmedal.png";
import silvermedal from "../image/silvermedal.png";
import bronzemedal from "../image/bronzemedal.png";

import axios from "axios";
import "../../css/game_ranking.css";

function GameRanking() {
  const [score, setScore] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const endpoint = "http://localhost:5000/score/";
        setLoading(true);
        const response = await axios.get(endpoint);
        setScore([...response.data]);
      } catch(e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchScore();
  }, []);

  if(loading) return <div>로딩중...</div>;
  return (
    <div className="container">
      <div className="medalImage">
        <div className="silverScore">
          <img
            src={silvermedal}
            style={{ marginRight: "20px" }}
            width="250"
            height="300"
            alt="silver medal"
          />
          {score.map((s,index) => {
            if(index === 1) {
                return <p>{s.score}{s.NAME}</p>
            }
        })}
        </div>
        <div className="goldScore">
          <img src={goldmedal} width="300" height="370" alt="gold medal" />
          {score.map((s,index) => {
            if(index === 0) {
                return <p>{s.score}{s.NAME}</p>
            }
        })}
        </div>
        <div className="bronzeScore">
          <img src={bronzemedal} width="200" height="250" alt="bronze medal" />
          {score.map((s,index) => {
            if(index === 2) {
                return <p>{s.score}{s.NAME}</p>
            }
        })}
        </div>
      </div>
      <div className="gameRetry">
        <a href="/">Retry＞</a>
      </div>
      <div style={{  }}>
        {score.map((s,index) => {
            if(index >= 3) {
                return <p>{s.score}{s.NAME}</p>
            }
        })}
      </div>
    </div>
  );
  
}

export default GameRanking;
