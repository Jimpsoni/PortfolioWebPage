import ContactMe from '../contactme'
import './styles.css'
import { useEffect, useState } from 'react'

const NavBar = () => {
  const [modal, openModal] = useState()

  useEffect(() => {
    window.onscroll = () => {
      const elem = document.getElementById('navMain').style
      const text = document.getElementById('headerContainer').style
      if (window.scrollY === 0) {
        elem.background = '#02020e'
        text.color = '#f8f7da'
      } else {
        elem.background = '#f8f7da'
        text.color = '#02020e'

      }
    console.log("refresh")
    return () => (window.onscroll = null)
  }})

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
        <h1 id='navHeader'>Jimi Jukkala</h1>
      </div>
      <div className='buttonContainer'>
        <a href='./contact' id='link'>
          <div id='contact-me-button' onClick={openContactInfo}>Contact me</div>
        </a>
      </div>
    </header>
    </>
  )
}

export default NavBar
