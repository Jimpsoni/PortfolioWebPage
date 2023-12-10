import ContactMe from "../contactme"
import "./styles.css"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

const changeNavBarColor = (location, onTop) => {
  const elem = document.getElementById("navMain").style
  const text = document.getElementById("navHeader").style
  if (location === "/") {
    if (onTop) {
      text.color = "#f8f7da"
      elem.background = "#02020e"
    } else {
      elem.background = "#f8f7da"
      text.color = "#02020e"
    }
  }

  if (location === "/skills") {
    if (onTop) {
      text.color = "#f8f7da"
      elem.background = "#02020e"
    } else {
      elem.background = "#C62368"
      text.color = "#000"
    }
  }
}

const NavBar = () => {
  const [modal, openModal] = useState()
  const { pathname } = useLocation()

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY === 0) {
        changeNavBarColor(pathname, true)
      } else {
        changeNavBarColor(pathname, false)
      }
    }
  })

  const openContactInfo = (event) => {
    event.preventDefault()
    openModal(!modal)
  }

  return (
    <>
      <ContactMe open={modal} setOpen={openModal} />
      <header id='navMain'>
        <div className='navbarContainer'></div>
        <div id='headerContainer'>
          <Link to='/'>
            <h1 id='navHeader'>Jimi Jukkala</h1>
          </Link>
        </div>
        <div className='buttonContainer'>
          <a href='./contact' id='link'>
            <div id='contact-me-button' onClick={openContactInfo}>
              Contact me
            </div>
          </a>
        </div>
      </header>
    </>
  )
}

export default NavBar
