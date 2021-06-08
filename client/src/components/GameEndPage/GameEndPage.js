import React, {useState} from "react";
import "./GameEndPage.css";
import { Link, useHistory } from "react-router-dom";
import Boss from "./Boss.png";

function GameEndRankPage(){
  const history = useHistory();

  return(
      <div id ={"divContainer"}>
            <div className = "round">      </div>
        
            <div className = 'text'>
                <div className ="gameover_text">Game Over</div>
                <button onClick={() =>history.push({pathname: "/"})} className="end">완료</button>
                <img src = {Boss} className = "photo"></img>
            </div>
      </div>
  );
}
export default GameEndRankPage;