import React, { useEffect, useRef, useState } from "react";
import Modal from 'react-modal';
import { useHistory } from "react-router-dom";
import ml5 from 'ml5';
import useInterval from '@use-it/interval';
import ProgressBar from "./ProgressBar";

import ImageModal from '../Modal/Modal';
import '../../css/game_page.css';

let classifier;

export default function GamePage(props) {
  const videoRef = useRef(null);
  const [result, setResult] = useState([]);
  const [time, setTime] = useState(0);
  const [percent, setPercent] = useState(0);
  const images = props.goodsImages;
  const [imageList, setImageList] = useState(images);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [hintTime, setHintTime] = useState(0);
  const history = useHistory();

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        
      } catch(err) {
        console.log(err)
      }
    };

    classifier = ml5.imageClassifier("./model/model.json", () => {
      getUserMedia();
    })
   
  }, []);
  

  useEffect(() => {
    if(imageList.length === 0) {
      console.log('성공');
      history.push({
        pathname: "/game_end_name",
        state: { time: time+hintTime }
      })
    }
  }, []);

  // 0.5초마다 분석
  useInterval(() => {
    if (classifier) {
      classifier.classify(videoRef.current, (error, results) => {
        if (error) {
          console.log(error);
          return;
        }
        
        // 2-1-1. 그 애를 화면에 보여주면서 정답! 이라고 해주고,
        // 2-2. 없으면 이미 찾은 물건이거나 틀린 물건이라고 말해주기
        // 1. 가장 높은 정확도를 가진 애를 찾은 후에
        setResult(results.filter((r) => {
          return r.confidence >= 0.99
        }))

        //imageList
        //{id: 12, imgsrc: "/static/media/12.fe9bca2e.jpg"}

        //result
        //label: "Class 5", confidence: 0.9998790025...

        if(result.length === 1) {
          setImageList(imageList.filter(image => image.id+'' !== (result[0].label.substr(6, 7))));
          setPercent(parseInt((8 - imageList.length) / props.goodsImages.length * 100));
        }
      });
    }
  }, 500);

  setTimeout(() => setTime(time+1), 1000);
  if(time === 120) {  //2분 제한시간
    history.push({
      pathname: "/game_end",
    })

    clearTimeout();
  }

  const openModal = () => {
    setModalIsOpen(true);
    
  }

  if(modalIsOpen) {
    if((hintTime % 5) === 0 && (hintTime !== 0)) {
      setModalIsOpen(false);
      
    }
    setTimeout(() => setHintTime(hintTime+1), 1000);
  }

  console.log(hintTime)
  return(
    <div className="GContainer">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ProgressBar className="progress-bar" progress={percent} />
      </div>
      <div style={{ display:'flex', flexDirection: 'row' }}>
        {/* <h3>{time}</h3> */}
      {parseInt(((120-time)%3600)/60)>0 ?
        <span className="lastTime">{parseInt(((120-time)%3600)/60)}분&nbsp; 
        {(120-time)%60}초 남았습니다.</span>:
        <span className="lastTime">{(120-time)%60}초 남았습니다.</span>
      }
      <span onClick={openModal} className="hintBtn">힌트보기</span>
      </div>
      

      <div style={{ marginTop:'110px'}}>
        <video
          ref={videoRef}
          style={{
            width:'100%',
            height:600,
            justifyContent:'center'
        }} 
        />
      </div>
      <Modal isOpen={modalIsOpen}>
        <ImageModal imageList={imageList}/>
      </Modal>
      </div>
          
  )
}