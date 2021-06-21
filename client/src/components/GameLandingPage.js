import React, { useState, useEffect } from "react";
import GameListPage from "./GameListPage/GameListPage";
import GamePage from "./GamePage/GamePage";
import { ImageData } from "../data/ImageData";

function GameLandingPage() {
  const [time, setTime] = useState(0);
  const [goodsImages, setGoodsImages] = useState([]);
  setTimeout(() => setTime(time + 1), 1000);

  useEffect(() => {
    let results = [
      ImageData[10],
      ImageData[11],
      ImageData[13],
      ImageData[14],
      ImageData[19],
      ImageData[20],
      ImageData[23],
      ImageData[25],
    ];
    // for(let i=0; i<8; i++) {
    //     let n = Math.floor(Math.random() * ImageData.length);
    //     if(results.indexOf(ImageData[n]) === -1) {
    //         results.push(ImageData[n]);
    //     }else {
    //         i--;
    //     }
    // }

    setGoodsImages(results);
  }, []);

  return (
    <div>
      {time <= 10 ? (
        <GameListPage goodsImages={goodsImages} />
      ) : (
        <GamePage goodsImages={goodsImages} />
      )}
    </div>
  );
}

export default GameLandingPage;
