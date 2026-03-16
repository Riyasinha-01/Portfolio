import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

/**
 * App — Root component that assembles all portfolio sections.
 * Each section is a separate component for easy editing.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-pastel-bg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Achievements />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
