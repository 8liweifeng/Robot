import React from 'react';
import "./Video.css";
function Video() {
  return (
    <div className='Video'>
        <div className='video-container'>
            <h2 className='title'>
                Introduction
            </h2>
            <video src='./videos/ball.mp4' controls/>
            <p className='note'>This video is introduced by Chinese. English subtitles will be uploaded soon.</p>
        </div>
    </div>
  )
}

export default Video