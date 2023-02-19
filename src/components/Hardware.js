import React from 'react';
import './Hardware.css';


function Hardware() {
  return (
    <div className='Hardware'>
        <div className='about-container'>
           
            <div className='info'>
            
                <h2 className='title'>Hardware Module Design</h2>
                
                <div className='detail'>
                <div className='photo-con'>
                    <div className='photo1'>
                        
                        <div className='rel'>
                            <p>Total Control Panel</p>
                            <img src='images/circuit.JPG' alt='' className='pro'></img>
                        </div>
                        
                        <div className='rel'>
                            <p>Functional Circuit</p>
                            <img src='images/func.JPG' alt='' className='pro'></img>
                        </div>
                        
                            
                        
                    </div>    
                </div>
                                 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hardware