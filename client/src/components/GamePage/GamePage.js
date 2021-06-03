import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import ml5 from 'ml5';
import useInterval from '@use-it/interval';

let classifier;

export default function GamePage(props) {

  const videoRef = useRef(null);
  const [result, setResult] = useState([]);
  const [time, setTime] = useState(0);
  const images = props.goodsImages;
  const [imageList, setImageList] = useState(images);
  const history = useHistory();

  useEffect(() => {
    const getUserMedia = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
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
        pathname: "/game_end",
        state: { time: time }
      })
    }
  }, []);
  

  // 0.5초마다 분석
  useInterval(() => {
    if(classifier) {
      classifier.classify(videoRef.current, (error, results) => {
        if(error) {
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
        }
        console.log(imageList);
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

  return(
    <div style={{ display:'flex', flexDirection:'column', justifyContent:'center' }}>
      <h3>{time}</h3>
      {parseInt(((120-time)%3600)/60)>0 ?
      <h3>{parseInt(((120-time)%3600)/60)}분 {(120-time)%60}초 남았습니다.</h3>:
      <h3>{(120-time)%60}초 남았습니다.</h3>
      }
      
      <div style={{ marginTop:'60px' }}>
        <video
          style={{ justifyContent:'center', transform: "scale(-1,1)" }}
          ref={videoRef}
          width="1000"
          height="500"
        />
      </div>
      <div style={{ display:'flex', justifyContent:'center' }}>{ result.label }: { result.confidence }</div>
    </div>
    
  )
}