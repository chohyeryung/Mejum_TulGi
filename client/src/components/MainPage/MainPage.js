import React from "react";
import "./MainPage.css";
import Boss from "./Boss.png"

function MainPage() {
  return (
    <main id ={"HomeContainer"}>
    <p>작전명 미림털기</p>
    <img className = "photo" src = {Boss}></img>
    <a href="/how_to_use">시작하기</a>
    </main>
  );
}

export default MainPage;
