import React from "react";

import "../../css/game_list.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">시간 초과</div>;
  }

  return (
    <div className="timer">
      <div className="value">{remainingTime}</div>
    </div>
  );
};

export default function GameListPage(props) {
  return (
    <div className="Container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <span className="mainText" style={{ marginTop: '3%' }}>
          <span>10</span>
          <span>초</span>
          <span>안</span>
          <span>에</span>
          <span>&nbsp;</span>
          <span>외</span>
          <span>우</span>
          <span>도</span>
          <span>록</span>
        </span>
      </div>
      <br />
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          size={180}
          strokeWidth={20}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [false, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>

      <div className="ImageContainer">
        <table className={"ImageTable"}>
          <tr>
            {props.goodsImages.map((data, index) => {
              return index < 4 ? (
                <td>
                  <img src={data.imgsrc} className="GoodsImage" alt="goods" />
                </td>
              ) : (
                ""
              );
            })}
          </tr>
          <tr>
            {props.goodsImages.map((data, index) => {
              return index >= 4 ? (
                <td>
                  <img src={data.imgsrc} className="GoodsImage" alt="goods" />
                </td>
              ) : (
                ""
              );
            })}
          </tr>
        </table>
      </div>
    </div>
  );
}
