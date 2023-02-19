import React from 'react';
import './Structure.css';


function Structure() {
  return (
    <div className='Structure'>
        <div className='about-container'>
           
            <div className='info'>
            
                <h2 className='title'>Mechanical Structure Design</h2>
                <p className='intro'>Drawing lessons from the principle of tumbler (upper is light and lower is heavy), 
                the ball robot has a lower center of gravity and is not easy to overturn. When the robot moves, 
                the center of mass is offset to achieve smooth movement. And we also mimic the structure of diamond to
                design the motor for stability. </p>
                <div className='detail'>
                <div className='photo-con'>
                    <div className='photo1'>
                        
                        <div className='rel'>
                            <img src='images/1.png' alt='' className='pro'></img>
                        </div>
                        
                        <div className='rel'>
                            <img src='images/2.png' alt='' className='pro'></img>
                        </div>
                        <div className='rel'>
                            <img src='images/3.png' alt='' className='pro'></img>
                        </div>
                        <div className='rel'>
                            <img src='images/4.png' alt='' className='pro'></img>
                        </div>
                        
                            
                        
                    </div>    
                </div>
                                 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Structure