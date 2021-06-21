import React from "react";
import "./HowToUsePage.css";

function HowToUsePage() {
  return (
    <main id={"HowContainer"}>
      <div className="box">
        <p>8가지의 물건을 나에게 가져와라.</p>
        <p>가져올 물건은 처음 한 번만 보여줄 것이다.</p>
        <p>힌트는 여러번 볼 수 있지만, 5초 후 사라진다.</p>
        <p>단, 힌트를 보는 순간에도 시간은 흐르니 주의하도록</p>
        <p>가장 빠른 최후의 1인이 우리 조직에 함께할 수 있다.</p>
        <p>지금부터 2분 준다. 준비가 되었다면 시작하도록</p>
        <p>행운을 빌지</p>
      </div>
      <h3>Boss R.N</h3>
      <a href="/game" className="Btnstart">
        시작하기
      </a>
    </main>
  );
}

export default HowToUsePage;
