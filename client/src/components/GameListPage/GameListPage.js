import React, { useEffect, useState } from "react";

import "../../css/game_list.css";
import { ImageData } from "../../data/ImageData";

export default function GameListPage() {
    const [goodsImages, setGoodsImages] = useState([]);

    useEffect(() => {
        let results = [];
        for(let i=0; i<8; i++) {
            let n = Math.floor(Math.random() * ImageData.length);
            if(results.indexOf(ImageData[n]) === -1) {
                results.push(ImageData[n]);
            }else {
                i--;
            }
        }

        setGoodsImages(results);

    }, []);

    return(
        
        <div id={"Container"}>
            <table className={"ImageTable"}>
                <tr>
                {goodsImages.map((data, index) => {
                    return index < 4 ?
                    <td>
                        <img src={data.imgsrc} className={"GoodsImage"} />
                    </td> : ''
                })}
                </tr>
                <tr>
                {goodsImages.map((data, index) => {
                    return index >= 4 ?
                    <td>
                        <img src={data.imgsrc} className={"GoodsImage"} />
                    </td> : ''
                })}
                </tr>
            </table>
        </div>
        
    )
}