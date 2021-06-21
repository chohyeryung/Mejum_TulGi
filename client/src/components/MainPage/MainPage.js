import React from "react";
import "./MainPage.css";
import backpag from "../../assets/images/backpack.png";
import graduation from "../../assets/images/graduation-hat.png";
import pen from "../../assets/images/pen.png";
import white_board from "../../assets/images/white-board.png";
import Boss from "./Boss.png";
import Student from "./student.png";

function MainPage() {
  return (
    <div className="HomeContainer">
      <div className="round">
        <img
          src={backpag}
          alt="backpag"
          width="100"
          height="100"
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            animation: "rotate_image 3s linear infinite",
            transformOrigin: "50% 50%",
          }}
        />
        <img
          src={graduation}
          alt="hat"
          width="100"
          height="100"
          style={{
            position: "absolute",
            top: "10%",
            right: "10%",
            animation: "rotate_image 3s linear infinite",
            transformOrigin: "50% 50%",
          }}
        />
        <img
          src={pen}
          alt="hat"
          width="100"
          height="100"
          style={{
            position: "absolute",
            top: "40%",
            left: "30%",
            animation: "rotate_image 3s linear infinite",
            transformOrigin: "50% 50%",
          }}
        />
        <img
          src={white_board}
          alt="white board"
          width="100"
          height="100"
          style={{
            position: "absolute",
            top: "20%",
            right: "30%",
            animation: "rotate_image 3s linear infinite",
            transformOrigin: "50% 50%",
          }}
        />
      </div>
      <div className="left">
        <img src={Student} className="student" alt="Student"></img>
      </div>
      <div className="center">
        <span className="mainText">
          <span>작</span>
          <span>전</span>
          <span>명</span>
        </span>
        <br></br>
        <span className="mainText">
          <span>미</span>
          <span>림</span>
          <span>털</span>
          <span>기</span>
        </span>
        <h2>지시 받은 물건들을 훔쳐라!</h2>
        <a className="startBtn" href="/how_to_use">
          시작하기
        </a>
        <a class="ranking-text" href="/game_ranking">
          <u>랭킹으로 바로가기</u>
        </a>
      </div>
      <div className="right">
        <img src={Boss} className="boss" alt="Boss"></img>
      </div>
    </div>
  );
}

export default MainPage;
