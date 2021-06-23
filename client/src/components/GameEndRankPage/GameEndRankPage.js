import React, { useState } from "react";
import "./GameEndRankPage.css";
import { useLocation } from "react-router";
import { useHistory } from "react-router-dom";
import axios from "axios";
import check from "./check-mark.png";
import student from "./happy_student.png";

function GameEndRankPage() {
  const location = useLocation();
  const time = location.state.time;
  const [name, setName] = useState("");
  const history = useHistory();
  const ButtonClick = () => {
    if (name === "") {
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
        <div className="pyro">
          <div className="before"></div>
          <div className="after"></div>
        </div>
        <div className="gameover_text">
          <img
              src={student}
              alt="sad student"
              width="700"
              height="700"
              style={{ position: "absolute", right: "0%" }}
            />
          <span className="gameOverText">
              <span>G</span>
              <span>A</span>
              <span>M</span>
              <span>E</span>
              <span>&nbsp;</span>
              <span>C</span>
              <span>L</span>
              <span>E</span>
              <span>A</span>
              <span>R</span>
            </span>
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
        <div style={{ textAlign: 'center', fontFamily: 'Noto Sans KR' }}><span>학번과 이름을 적은 1,2,3등에게는 상품이 있으니 많은 참여 부탁드립니다!</span></div>
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Noto Sans KR' }}>
          <a className="go_game" href="/">랭킹 참여안하기</a>
        </div>
      </div>
    </div>
  );
}
export default GameEndRankPage;
