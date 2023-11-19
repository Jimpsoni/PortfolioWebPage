import './styles.css'

const NavBar = () => {
  return (
    <header className={'headerStyle'}>
      <h1>Jimi Jukkala</h1>
      <ul className={'navBarStyle'}>
        <a href='./Home'>
          <li className={'listStyle'}>Home</li>
        </a>
        <a href='./About-me'>
          <li className={'listStyle'}>About me</li>
        </a>
        <a href='my-projects'>
          <li className={'listStyle'}>My projects</li>
        </a>
      </ul>
      <a href='./contact'><button>Contact</button></a>
    </header>
  )
}

export default NavBar
