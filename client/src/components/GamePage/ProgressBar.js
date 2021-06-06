import React from 'react'
import "../../css/progress_bar.css"

function ProgressBar(props) {
    return (
        <div className="container">
            <div className="progressbar-container">
                <div className="progressbar-complete" style={{width: `${props.progress}%`}}>
                    <div className="progressbar-liquid"></div>
                </div>
                <span className="progress">{props.progress}%</span>
            </div>
      </div>
    )
}

export default ProgressBar
