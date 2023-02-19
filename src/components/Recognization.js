import React from 'react';
import './Recognization.css';

function Recognization() {
  return (
    <div className='recognization'>
        <div className='process'>
            <h2 className='title'>Robot Design</h2>
            <img src='./images/icon.png' alt='' className='pro'></img>
            
        </div>
            <p className='one'>
               <strong>Hardware Module Design</strong><br></br> <br></br>
               Control and Communication:
               <ul>
                  <li>Microcontroller</li>
                  <li>Remote control and receiver</li>
                  <li>Zigbee wireless Communication module</li>
                  <li>DL_LN32P wireless ad hoc network module</li>
                  <li>Human-computer interaction of SOLGU menu interface</li>
               </ul>
               <br></br>
               Motion Control:
               <ul>
                  <li>Encoder and motor</li>
                  <li>A4950 drive circuit</li>
                  <li>JY901 nine-axis attitude gyroscope</li>
                  <li>Power circuit</li>
                  <li>Functional circuit</li>
               </ul>
             </p>
             <p className='two'>
             <strong>Mechanical Structure Design</strong><br></br> <br></br>
              
               <ul>
                  <li>Internal transmission mechanism</li>
                  <li>Functional area structure</li>
                  <li>Overall structure</li>
                  
               </ul>
             </p>
             <p className='three'>
             <strong>Algorithm Implementation</strong><br></br> <br></br>
              
              <ul>
                 <li>Encoder position closed-loop PID algorithm</li>
                 <li>Gyroscope angle closed-loop PID algorithm</li>
                 <li>Data fusion algorithm</li>
                 <li>Kalman filter algorithm</li>
                 
              </ul>
             </p>
    </div>
  )
}

export default Recognization