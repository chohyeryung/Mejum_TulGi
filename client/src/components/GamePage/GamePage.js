import React, { useEffect, useRef, useState } from "react";
import ml5 from 'ml5';
import useInterval from '@use-it/interval';
import { ToastProvider } from 'react-toast-notifications';

let classifier;

export default function GamePage() {

  const videoRef = useRef(null);
  const [result, setResult] = useState([]);
  const [time, setTime] = useState(0);
  const [now, setNow] = useState({});
  
  const images = [
    { id: 1, label: '1.jpg' },
    { id: 2, label: '2.jpg' },
    { id: 3, label: '3.jpg' },
    { id: 4, label: '4.jpg' },
    { id: 5, label: '5.jpg' },
    { id: 6, label: '6.jpg' },
  ];
  const [imageList, setImageList] = useState(images);

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
          setNow(imageList.filter(image => image.id+'' === (result[0].label.substr(6, 7))));
          setImageList(imageList.filter(image => image.id+'' !== (result[0].label.substr(6, 7))));
          setNow({});
        }
        
        console.log(imageList);
      });
    }
  }, 500);

  setTimeout(() => setTime(time+1), 1000);

  return(
    <ToastProvider autoDismiss={true} autoDismissTimeout={3000}>
      <div style={{ display:'flex', flexDirection:'column', justifyContent:'center' }}>
      <div style={{ marginTop:'60px' }}>
        <video
          style={{ justifyContent:'center', transform: "scale(-1,1)" }}
          ref={videoRef}
          width="1000"
          height="500"
        />
      </div>
      시간 : {time}
      </div>
    </ToastProvider>
    
  )
}

