import React, { useState } from "react";
import "./GameEndRankPage.css";
import { useLocation } from "react-router";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import check from "./check-mark.png";
function GameEndRankPage() {
  const location = useLocation();
  const time = location.state.time;
  const [name, setName] = useState("");
  const history = useHistory();
  const ButtonClick = () => {
    if (name == "") {
      alert("이름을 입력해주세요");
    } else {
      axios
        .post("https://mirimtulgi.emirim.kr/send_score", {
          name: name,
          score: time,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      history.push({
        pathname: "/game_ranking",
      });
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="divContainer">
      <div className="gameover-container">
        <div className="gameover_text">
          <span className="gameOverText">Game Over</span>
        </div>
        <div className="time_text">{time}초</div>
        <div className="rank_name">
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            className="input_name"
            onChange={handleChange}
          />
          <img src={check} className="check" onClick={ButtonClick} />
        </div>
        <div className="go_game">
          <a href="/" className="no_rank">
            랭킹 참여안하기
          </a>
        </div>
      </div>
    </div>
  );
}
export default GameEndRankPage;
