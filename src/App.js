
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Introduction from './components/pages/Introduction';
import Hareware_design from './components/pages/Hareware_design';
import S_design from './components/pages/S_design';
import alg from './components/pages/alg';
// import Signal_Simulation from './components/pages/Signal-Simulation';
// import Signal_Processing from './components/pages/Signal-Processing';
// import Achievement from './components/pages/Achievement';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router basename="/Robot">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' exact component={Introduction} />
          <Route path='/Hardware' exact component={Hareware_design} />
          <Route path='/Structure' exact component={S_design} />
          <Route path='/Algorithm' exact component={alg} />
        </Switch>
      </Router>
    </>
  );
}

export default App;