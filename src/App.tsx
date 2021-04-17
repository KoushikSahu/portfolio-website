import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import EventBox from './components/EventBox'

function App(): JSX.Element {
  return (
    <div className="main">
      <div className="left-column">
        <AboutMe />
        <Projects />
      </div>
      <div className="right-column">
        <EventBox />
      </div>
    </div>
  );
}

export default App;
