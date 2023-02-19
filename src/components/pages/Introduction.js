import React from 'react';
import '../../App.css';


import About from '../About';
import Recognization from '../Recognization';
import Video from '../Video';
// import Simulation from '../Simulation';
// import Process from '../Process';
// import Results from '../Results';

function Introduction() {
  return (
    <div>
      
            <About />
            <Video />
            <Recognization />
            {/* <Simulation />
            <Process />
            <Results /> */}
            
    </div>
  )
}

export default Introduction