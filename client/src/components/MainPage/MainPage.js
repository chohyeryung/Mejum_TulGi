import React from "react";
import "./MainPage.css";
import Boss from "./Boss.png"

function MainPage() {
  return (
    <main className = {"HomeContainer"}>
      <div className = "LeftContainer">
        <h1>작전명</h1>
        <h1>미림털기</h1>
        <h2>지시 받은 물건들을 훔쳐라!</h2>
      </div>
      {/* <img src = {Boss} className = "pho"></img> */}
      <button id = "startbtn"><a href="/how_to_use">시작하기</a></button>
    </main>
  );
}

export default MainPage;
