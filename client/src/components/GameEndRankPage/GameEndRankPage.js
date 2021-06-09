import React, {useState} from "react";
import "./GameEndRankPage.css";
import {useLocation} from "react-router";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import check from './check-mark.png'
function GameEndRankPage(){
  const location = useLocation();
  const time = 95;
  const [name, setName] = useState("")
  const history = useHistory();
  const ButtonClick = () => {

    if(name == ""){
      alert("이름을 입력해주세요")
    }else{
      axios.post('http://localhost:5000/score',{
        name: name,
        score: time
      })
      .then((res)=>{
        console.log(res)
      })
      .catch((err)=>{
        console.log(err)
      })
  
  
      history.push({
        pathname: "/game_ranking",
      })
    }
   
  }

  const handleChange =(e) =>{
    setName(e.target.value)
  }

  return(
      <div className="divContainer">
            <div className = 'gameover-container'>
                <div className ="gameover_text">Game Over</div>
                <div className ="time_text">{time}초</div>
                <div className="rank_name">
                  <input type="text" placeholder="이름을 입력해주세요" className="input_name" onChange={handleChange}/>
                  <img src={check} className="check" onClick={ButtonClick} />
                </div><br></br>
                  <div className="go_game"><a href="/" style={{ textDecoration: 'none',  textDecoration: 'none',  fontSize:'1em', fontFamily:'Noto Sans KR' }}>랭킹 참여안하기</a></div>
            </div>
      </div>
  );
}
export default GameEndRankPage;