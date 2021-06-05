import React from "react";

import "../../css/game_list.css";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'


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

    return(
        <>
        <div className={"timer-wrapper"}>
            <CountdownCircleTimer
            isPlaying
            duration={10}
            colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
            onComplete={() => [false, 1000]}
            >
            {renderTime}
            </CountdownCircleTimer>
        </div>

        <div id={"Container"}>
            <table className={"ImageTable"}>
                <tr>
                {props.goodsImages.map((data, index) => {
                    return index < 4 ?
                    <td>
                        <img src={data.imgsrc} className="GoodsImage" alt="goods" />
                    </td> : ''
                })}
                </tr>
                <tr>
                {props.goodsImages.map((data, index) => {
                    return index >= 4 ?
                    <td>
                        <img src={data.imgsrc} className="GoodsImage" alt="goods" />
                    </td> : ''
                })}
                </tr>
            </table>

            
        </div>
        </>
    )
}