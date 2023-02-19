import React from 'react';
import './Algorithm.css';


function Algorithm() {
  return (
    <div className='Algorithm'>
        <div className='about-container'>
           
            <div className='info'>
            
                <h2 className='title'>Algorithm Implementation</h2>
                <p className='intro'>Most algorithms are used for controlling
                the positions and speeds of motors to make sure the robot could move smoothly.</p>
                <div className='detail'>
                <div className='photo-con'>
                    <div className='photo1'>
                        
                        <div className='rel'>
                            <p><strong>Kalman Filter Algorithm</strong></p>
                            <img src='images/speed.png' alt='' className='pro'></img>
                            <p>Kalman Filter Algorithm is used to reduce data instability.
                                The green line is the angular acceleration of one motor after
                                using Kalman Filter Algorithm</p>
                        </div>
                        
                        
                        
                            
                        
                    </div>    
                </div>
                                 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Algorithm