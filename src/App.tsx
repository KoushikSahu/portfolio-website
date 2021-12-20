import React from 'react';
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
    <div className="py-5 text-gray-300 bg-slate-900 grid md:grid-cols-5 md:gap-10 lg:pl-52">
      <div className="md:col-span-3">
        <AboutMe />
        <Projects />
        <Blogs />
				<Experience />
        <Skill />
        <Achievement />
        <Contact />
      </div>
      <div className="md:col-span-2 lg:pr-52">
        <EventBox />
      </div>
    </div>
  );
}

export default App;
