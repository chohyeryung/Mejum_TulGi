import React, { useState } from "react";
import "./GameEndPage.css";
import "./weather.css";
import student from "./sad_student.png";
import { useLocation } from "react-router";
function GameEndPage() {
  // const time = location.state.time;

  return (
    <div className="weather rain" style={{ width: "100%", height: "100vh" }}>
      <div className="divContainer weather rain">
        <div className="gameover-container">
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
              <span>O</span>
              <span>V</span>
              <span>E</span>
              <span>R</span>
            </span>
          </div>
          <div className="time_text">시간 초과</div>
          <div className="go_game">
            <a href="/" className="no_rank">
              홈으로 이동
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default GameEndPage;
