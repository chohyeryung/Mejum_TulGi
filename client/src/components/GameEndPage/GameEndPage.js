import React, {useState} from "react";
import "./GameEndPage.css";
import {useLocation} from "react-router";
function GameEndPage(){
  const location = useLocation();
  // const time = location.state.time;


  return(
      <div className="divContainer">
            <div className = 'gameover-container'>
                <div className ="gameover_text">Game Over</div>
                <div className ="time_text">시간 초과</div>
                <div className="go_game"><a href="/"  className="no_rank">홈으로 이동</a></div>
            </div>
      </div>
  );
}
export default GameEndPage;