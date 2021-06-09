import React, { useState } from "react";
import "./GameEndPage.css";
import { Link, useHistory } from "react-router-dom";
import Boss from "./Boss.png";
import axios from "axios";

function EndGamePage() {
  const [name, setName] = useState("");
  const history = useHistory();
  const ButtonClick = () => {
    axios
      .post("http://localhost:5000/score", {
        name: name,
        score: 3000,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    history.push({
      pathname: "/game_list",
    });
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <main id={"HomeContainer"}>
      <div className="container">
        <div className="gameover_text">Game Over</div>

        <input
          type="text"
          placeholder="이름을 입력해주세요"
          className="input_name"
          onChange={handleChange}
        />
        <button onClick={ButtonClick} className="send_name">
          완료
        </button>

        <Link to={{ pathname: "/how-to-use" }}>
          <p className="go_game">랭킹 참여안하기</p>
        </Link>
      </div>
    </main>
  );
}
export default EndGamePage;
