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
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchScore();
  }, []);

  if (loading) 
  return (
  <div style={{ display: 'flex', justifyContent:'center', alignContent: 'center', backgroundColor: 'rgb(224, 224, 224)', width: '100%', height: '100vh' }}>
    <h1>로딩중...</h1>
  </div>
  );

  return (
    <div className="container">
      <div className="medalImage">
      <div className="gameRetry">
        <a href="/" style={{ textDecoration: 'none', color: 'blue' }}>다시하기</a>
      </div>
        <div className="bronzeScore">
          <img src={silvermedal} width="250" height="310" alt="silver medal" />
          {score.map((s, index) => {
            if (index === 1) {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ textAlign: "center", fontWeight: 'bold' }}>{s.name}</span>
                  <span style={{ textAlign: "center" }}>{s.score}s</span>
                </div>
              );
            }
          })}
        </div>
        <div className="goldScore">
          <img src={goldmedal} width="300" height="410" alt="gold medal" />
          {score.map((s, index) => {
            if (index === 0) {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ textAlign: "center", fontWeight: 'bold' }}>{s.name}</span>
                  <span style={{ textAlign: "center" }}>{s.score}s</span>
                </div>
              );
            }
          })}
        </div>
        <div className="bronzeScore">
          <img src={bronzemedal} width="240" height="310" alt="bronze medal" />
          {score.map((s, index) => {
            if (index === 2) {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ textAlign: "center", fontWeight: 'bold' }}>{s.name}</span>
                  <span style={{ textAlign: "center" }}>{s.score}s</span>
                </div>
              );
            }
          })}
        </div>
      </div>

      <div className="leastContainer">
        {score.map((s, index) => {
          if (index >= 3) {
            return (
              <div key={s.name} className="restRanking">
                <div className="attribute">
                  <div className="index">&nbsp;&nbsp;&nbsp;{index + 1}</div>
                  <div className="name">{s.name}</div>
                  <div className="score">{s.score}s&nbsp;&nbsp;</div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default GameRanking;
