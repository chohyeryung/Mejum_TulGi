import React from 'react';
import '../../css/modal.css';

export default function Modal( props ) {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { imageList } = props;

    return (
        // // 모달이 열릴때 openModal 클래스가 생성된다.
        // <div className={ open ? 'openModal modal' : 'modal' }>
        //     { open ? (  
        //         <section>
        //             <header>
        //                 {header}
                    
        //             </header>
        //             <main>
        //                 {props.children}
        //             </main>
        //             <footer>
    
        //             </footer>
        //         </section>
        //     ) : null }
        // </div>
        <div className="ModalContainer">
            <table className="ModalImage">
                <tr>
                {imageList.map((data, index) => {
                    return index < 4 ?
                    <td>
                        <img src={data.imgsrc} className="GoodsImage" alt="goods" />
                    </td> : ''
                })}
                </tr>
                <tr>
                {imageList.map((data, index) => {
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