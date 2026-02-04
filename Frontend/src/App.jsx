import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import Home from './component/Home/Home'
import About from './component/About/About'
import Experience from './component/Experience/Experience'
import Project from './component/Project/Project'
import Footer from './Footer/Footer'
import WorkingExperience from './component/workingExperience/WorkExperience'

function App() {
  
  return (
    <div className='bg-slate-900 h-auto w-full overflow-hidden'>
    <Navbar />  
    <Home />
    <About />
    <Experience />
    <Project />
    <WorkingExperience />
    <Footer />
          
    </div>
  )
}

export default App
