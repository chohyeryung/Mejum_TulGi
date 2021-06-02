import React from "react";

import "../../css/game_list.css";

export default function GameListPage(props) {
    
    console.log(props)

    return(
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
    )
}