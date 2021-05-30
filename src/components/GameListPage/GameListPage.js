import React, { useEffect, useState } from "react";

import "../../css/game_list.css";
import { ImageData } from "../../data/ImageData";

// const goodsImages = [
//     goodsImage1,
//     goodsImage2,
//     goodsImage3,
//     goodsImage4,
//     goodsImage5,
//     goodsImage6,
//     goodsImage7,
//     goodsImage8,
// ];


export default function GameListPage() {
    const [goodsImages, setGoodsImages] = useState([]);

    useEffect(() => {
        let results = [];
        for(let i=0; i<8; i++) {
            let n = Math.floor(Math.random() * ImageData.length);
            // console.log(n);
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