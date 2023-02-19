import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';

import Footer from '../Footer';
import About from '../About';
import Recognization from '../Recognization';
import Simulation from '../Simulation';
import Process from '../Process';
import Results from '../Results';
import Video from '../Video';
import Hardware from '../Hardware';
import Structure from '../Structure';
import Algorithm from '../Algorithm';
import Tree from '../Tree';
function Home () {
    return (
        <>
            <HeroSection />
            <About />
            <Video />
            <Recognization />
            <Hardware />
            <Structure />
            <Algorithm />
            {/* <Simulation />
            <Process />
            <Results /> */}
            <Footer />
        </>
    );
}

export default Home;

