import './styles.css'
import { FaGithub } from 'react-icons/fa'
import { AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { useLocation } from "react-router-dom"

const Footer = () => {
  const { pathname } = useLocation()
  let mainID;
  (pathname === '/skills')  ? mainID='mainFooterSkills' : mainID='mainFooter';

  return (
    <footer id={mainID}>
      <address id='addressess'>
        <ul id='addresslist'>
          <div>
            <a href='https://github.com/Jimpsoni' className='addressbar' >
              <FaGithub className='icon'/>
              <li>Github</li>
            </a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/jimi-jukkala-820877261/' className='addressbar'>
              <AiFillLinkedin className='icon'/>
              <li>LinkedIn</li>
            </a>
          </div>
          <div>
            <a href='mailto: jukkalajimi@gmail.com' className='addressbar'>
              <SiGmail  className='icon'/>
              <li>JukkalaJimi@gmail.com</li>
            </a>
          </div>
        </ul>
      </address>
    </footer>
  )
}

export default Footer
