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

  if (loading) return <div>로딩중...</div>;

  return (
    <div className="container">
      <div className="gameRetry">
        <a href="/">다시하기</a>
      </div>
      <div className="medalImage">
        <div className="bronzeScore">
          <img src={silvermedal} width="350" height="410" alt="silver medal" />
          {score.map((s, index) => {
            if (index === 1) {
              return (
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center' }}>{s.name}</span>
                  <span style={{ textAlign: 'center' }}>{s.score}s</span>
                </div>
              );
            }
          })}
        </div>
        <div className="goldScore">
          <img src={goldmedal} width="400" height="510" alt="gold medal" />
          {score.map((s, index) => {
            if (index === 0) {
              return (
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center' }}>{s.name}</span>
                  <span style={{ textAlign: 'center' }}>{s.score}s</span>
                </div>
              );
            }
          })}
        </div>
        <div className="bronzeScore">
          <img src={bronzemedal} width="300" height="370" alt="bronze medal" />
          {score.map((s, index) => {
            if (index === 2) {
              return (
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span style={{ textAlign: 'center' }}>{s.name}</span>
                  <span style={{ textAlign: 'center' }}>{s.score}s</span>
                </div>
              );
            }
          })}
        </div>
      </div>

      <div style={{}}>
        {score.map((s, index) => {
          if (index >= 3) {
            return (
              <div key={s.name} className="restRanking">
                <div className="attribute">
                  <div className="index">&nbsp;&nbsp;&nbsp;{index + 1}</div>
                  <div className="name">{s.NAME}</div>
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
