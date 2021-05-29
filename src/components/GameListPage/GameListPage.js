import React from "react";

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

    return(
        <div id={"Container"}>
            <table className={"ImageTable"}>
                <tr>
                {ImageData.map((data, index) => {
                    return index < 4 ?
                    <td>
                        <img src={data.imgsrc} className={"GoodsImage"} />
                    </td> : ''
                })}
                </tr>
                <tr>
                {ImageData.map((data, index) => {
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