import React from "react";
import "./MainPage.css";
import Boss from "./Boss.png";
import Student from "./Student.png";

function MainPage() {
  return (
    <main id = {"HomeContainer"}>
      <div className = "round">      </div>
      <div className = "text">
        <h1>작전명</h1>
        <h1>미림털기</h1>
        <h2>지시 받은 물건들을 훔쳐라!</h2>  
        <img src = {Boss} className = "boss"></img>
        <button className = "startBtn"><a href="/how_to_use" className = "a">시작하기</a></button>
      </div>
      <img src = {Student} className = "student"></img>
      <a href="/game_ranking" className="gorank">랭킹</a>
    </main>
  );
}

export default MainPage;
