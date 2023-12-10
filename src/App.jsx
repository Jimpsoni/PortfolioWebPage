import "./App.css"
import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useLocation } from 'react-router-dom'

// Components
import NavBar from "./components/navbar"
import MainContent from "./components/maincontent"
import Footer from "./components/footer"
import Skills from "./components/skills/skills"
import { ScrollToTop, drawstars } from "./components/functions"


const mainpage = (
  <>
    <ScrollToTop/>
    <NavBar />
    <MainContent />
    <Footer />
  </>
)

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    drawstars('aboutme')
  }, [pathname])

  return (
    <>
      <Routes>
        <Route path='/' element={mainpage} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </>
  )
}

export default App
