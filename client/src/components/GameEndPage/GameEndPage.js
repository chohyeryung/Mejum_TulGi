import React, {useState} from "react";
import "./GameEndPage.css";
import { Link, useHistory } from "react-router-dom";

function GameEndRankPage(){
  const history = useHistory();

  return(
      <div id ={"divContainer"}>
            <div className = 'container'>
                <div className ="gameover_text">Game Over</div>
                <button onClick={() =>history.push({pathname: "/how-to-use"})} className="end">완료</button>
            </div>
      </div>
  );
}
export default GameEndRankPage;