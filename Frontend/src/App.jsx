import { useEffect } from 'react'
import './App.css'
import NavBar from './components/navbar'
import MainContent from './components/maincontent'
import Footer from './components/footer'
import ContactMe from './components/contactme'

function App() {
  useEffect(() => {
    function random(min, max) {
      return min + Math.random() * (max + 1 - min)
    }

    const elem = document.getElementById('main')
    const canvasSize = elem.offsetWidth * elem.offsetHeight
    const starsFraction = canvasSize / 25000

    for (let i = 0; i < starsFraction; i++) {
      // Set up random elements
      let xPos = random(0, 100)
      let yPos = random(0, 100)
      let alpha = random(0.5, 1)
      let size = random(1, 2)
      let colour = '#E8E8E8'

      const star = document.createElement('div')
      star.style.position = 'absolute'
      star.style.left = xPos + '%'
      star.style.top = yPos + '%'
      star.style.opacity = alpha
      star.style.width = size + 'px'
      star.style.height = size + 'px'
      star.style.backgroundColor = colour
      star.style.zIndex = 2
      document.body.appendChild(star)
    }
  }, [])

  return (
    <>
      <NavBar />
      <ContactMe />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
