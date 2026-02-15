import { useState, useEffect } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import Background from './components/Background'
import Loader from './components/Loader'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'

import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader isLoading={isLoading} />
      <Navbar />
      <Background />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />

        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
