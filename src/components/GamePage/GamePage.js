import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

export default function GamePage() {
    const [time, setTime] = useState(0);
    let model, maxPredictions, labelContainer;

    const videoConstraints = {
        width: 1000,
        height: 720,
        facingMode: "user"
    };

    useEffect(() => {
        const script1 = document.createElement("script");
        script1.src = "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js";
        script1.async = true;
        document.body.appendChild(script1);

        const script2 = document.createElement("script");
        script2.src = "https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js";
        script2.async = true;
        document.body.appendChild(script2);

        init().then(() => {
            predict();
        })
        return setTimeout(() => setTime(time+1), 1000);

    }, [time]);

    async function init() {
        const modelURL = "../../my_model/model.json";
        const metadataURL = "../../my_model/metadata.json";

        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();
    
    
        document.getElementById("webcam-container").appendChild(webcam.canvas);
        labelContainer = document.getElementById("label-container");
        for (let i = 0; i < maxPredictions; i++) {
          // and class labels
          labelContainer.appendChild(document.createElement("div"));
        }
    }

    async function predict() {
        // predict can take in an image, video or canvas html element
        const prediction = await model.predict(webcam.canvas);
        for (let i = 0; i < maxPredictions; i++) {
          const classPrediction =
            prediction[i].className + ": " + prediction[i].probability.toFixed(2);
          labelContainer.childNodes[i].innerHTML = classPrediction;
        }
      }

    
    return (
        <>
            <Webcam
            audio={false}
            height={720}
            width={1000}
            videoConstraints={videoConstraints}
            />

            <h3>{time}</h3>
        </>

    )
}