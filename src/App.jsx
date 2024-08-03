/* eslint-disable no-unused-vars */
import React from 'react'
import HeroSection from './components/HeroSection/HeroSection.jsx';
import AboutSection from './components/AboutSection/AboutSection.jsx';
import ProjectsSection from './components/ProjectsSection/ProjectsSection.jsx';

function App() {
  return (
    <div className='container'>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  )
  
}

export default App;
