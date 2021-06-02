import React, { useEffect, useRef, useState } from "react";
import ml5 from 'ml5';
import useInterval from '@use-it/interval';

let classifier;

export default function GamePage(props) {

  const videoRef = useRef(null);
  const [result, setResult] = useState([]);
  const [time, setTime] = useState(0);
  const images = props.data;

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

  // 0.5초마다 분석
  useInterval(() => {
    if(classifier) {
      classifier.classify(videoRef.current, (error, results) => {
        if(error) {
          console.log(error);
          return;
        }
        results.map((r) => {
          return r.confidence >= 99.9
        })
        setResult(results[0]);
      });
    }
  }, 500);

  setTimeout(() => setTime(time+1), 1000);

  return(
    <div style={{ display:'flex', flexDirection:'column', justifyContent:'center' }}>
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