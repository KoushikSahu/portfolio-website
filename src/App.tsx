import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import EventBox from './components/EventBox'
import Blogs from './components/Blogs'
import Skill from './components/Skill'
import Achievement from './components/Achievement'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App(): JSX.Element {
  return (
    <div className="main">
      <div className="left-column">
        <AboutMe />
        <Projects />
        <Blogs />
		<Experience />
        <Skill />
        <Achievement />
        <Contact />
      </div>
      <div className="right-column">
        <EventBox />
      </div>
    </div>
  );
}

export default App;
