import React from 'react';
import './About.css';


function About() {
  return (
    <div className='About'>
        <div className='about-container'>
            <img className='radar' src='images/bb8.png' alt=''></img> 
            <div className='info'>
            
                <h2 className='title'>About</h2>
                <p className='intro'>This is a ball-shaped enclosed robot with good sealability, high moving flexibility, and strong stability, suitable for future
exploration of outer planets and detection of hazardous environments</p>
                <div className='detail'>
                <div className='photo-con'>
                    <div className='photo1'>
                        
                        <div className='rel'>
                            <img src='images/model.png' alt='' className='pro'></img>
                        </div>
                        
                       <p>
                        Our robot is inspired by BB-8, a droid character in the film 
                        Star Wars. Compared with the traditional robot, the spherical robot
                         has a fully enclosed spherical shell, which puts the control system,
                        power system, and communication system totally inside the spherical
                         shell. Because of the shell, the impact force of the robot when rolling is effectively 
                         buffered. And we change the position of the robot's center of mass to
                         solve the rollover problem (This idea is inspired by the tumbler).
                        <br></br><br></br>
                         For the hardware circuit part, we use MCU, receiver, encoder, A4950 motor driver module
                         , and gyroscope. In terms of communications, we utilized the Zigbee wireless 
                         communication module and DL_LN32 ad hoc network wireless
                          communication module to establish reliable communication between computers and each robot.

                         
                        </p>
                        
                            
                        
                    </div>    
                </div>
                                 
                </div>
            </div>
        </div>
    </div>
  )
}

export default About