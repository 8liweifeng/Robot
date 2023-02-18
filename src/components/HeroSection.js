import React from 'react';
import "./HeroSection.css";
import "../App.css";
import { Button } from './Button';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='./videos/BB8.mp4' autoPlay loop muted />
        <h1>Spherical Robot<br></br> Students Innovation and Entrepreneurship Program</h1>
        <p>Shengzhi Jin, Liwei Feng</p>
        <div className='hero-btns'>
            <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">
                Know More
            </Button>
            {/* <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large">
                Watch Trailer <i className='far fa-play-circle' />
            </Button> */}
        </div>
    </div>
  )
}

export default HeroSection;

