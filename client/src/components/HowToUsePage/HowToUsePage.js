import React from 'react'
import "./HowToUsePage.css";

function HowToUsePage() {
    return (
        <main id ={"HowContainer"}>    
        <div className = "box">
          <p>10가지의 물건을 나에게 가져와라.</p>
          <p>가져올 물건은 처음 한 번만 보여줄 것이다.</p>
          <p>중한 힌트는 단 한 번, 딱 5초 기회줄 것이다.</p>
          <p>단,힌트를 보는 순간 10초 패널티가 있으니 주의하도록</p>
          <p>가장 바른 최후의 1인이 우리 조직에 함께할 수 있다.</p>
          <p>지금부터 2분 준다. 준비가 되었다면 시작하도록</p>
          <p>행운을 빌지</p>
        </div>  
        <h3>Boss R.N</h3>  
        <button id = "button" className="button"><a href="/game" className = "Btnstart">시작하기</a></button>        
      </main> 
      );
}

export default HowToUsePage;

