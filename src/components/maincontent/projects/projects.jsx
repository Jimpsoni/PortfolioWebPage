import './styles.css'

const Projects = () => {
  return (
    <div id='projects'>
      <h2 id='projectsHeader'>My Projects</h2>
      <div id='projectContainer'>
        <a className='project'>
          <div className='thumbnailContainer'>
            <img
              className='projectImage'
              src='https://www.jyvasmuutot.net/media/Muuttoauto-44m3-2-scaled.jpg'
            />
          </div>
          <h3 className='projectHeader'>Automatic Email Survey</h3>
          <p className='projectText'>
            I made an Automatic Email Survey for Jyväsmuutot using Python,
            Google Cloud. It automatically fetched
            clients email addressess from calendar and sends the survey everyday.
          </p>
          <p className='attributes'>Google Cloud, Python</p>
        </a>

        <a
          className='project'
          href='https://github.com/Jimpsoni/PortfolioWebPage'
        >
          <div className='thumbnailContainer'>
            <img
              className='projectImage'
              src='https://i.imgur.com/vPPDEz7.png'
            />
          </div>
          <h3 className='projectHeader'>Personal Portfolio</h3>
          <p className='projectText'>
            In developing my portfolio, I was committed to authenticity and a
            reflection of my identity. I took no shortcuts with this project
            because I wanted to look just like me. This project taught me a lot
            of Javascript, CSS and HTML. Im really proud how it turned out
          </p>
          <p className='attributes'>Javascript, HTML, CSS, React</p>
        </a>

        <a
          className='project'
          href='https://github.com/Jimpsoni/Kiekkorekisteri'
        >
          <div className='thumbnailContainer'>
            <img
              className='projectImage'
              src='https://www.hearthsong.com/cdn/shop/products/6a7477fb4078e24cf23cb0b0e87e8e698d655e2d20220902T175535Z.jpg?v=1675357225&width=1946'
            />
          </div>
          <h3 className='projectHeader'>Disc Register</h3>
          <p className='projectText'>
            This project was my Programming 2 courses practical work. It taught
            me about OOP and to structure projects.
          </p>
          <p className='attributes'>Java</p>
        </a>
      </div>
    </div>
  )
}

export default Projects
