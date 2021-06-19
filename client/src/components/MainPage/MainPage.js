import React from "react";
import "./MainPage.css";
import Boss from "./Boss.png";
import Student from "./student.png";

function MainPage() {
  return (
    <div className="HomeContainer">
      <div className="round"></div>
      <div className="left">
        <img src={Student} className="student" alt="Student"></img>
      </div>
      <div className="center">
        <span>작전명</span><br></br>
        <span>미림털기</span>
        <h2>지시 받은 물건들을 훔쳐라!</h2>
        <button className="startBtn"><a href="/how_to_use">시작하기</a></button>
      </div>
      <div className="right">
        <img src={Boss} className="boss" alt="Boss"></img>
      </div>
    </div>
  );
}

export default MainPage;
