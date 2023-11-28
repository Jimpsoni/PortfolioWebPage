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
            Google Cloud and Google calendar API. It fetches clients Emails from
            Google calendar Jyväsmuutot uses and then with Mailchimp API it
            sends clients surveys!
          </p>
        </a>

        <a className='project' href='https://github.com/Jimpsoni/PortfolioWebPage'>
          <div className='thumbnailContainer'>
            <img
              className='projectImage'
              src='https://images.ctfassets.net/spoqsaf9291f/47eAIX9xm8lyuvBhzbsWJD/3999d42dd361206b4e04dc512a43f323/online-portfolio-alexander-noles-desktop.png'
            />
          </div>
          <h3 className='projectHeader'>Personal Portfolio</h3>
          <p className='projectText'>
            Taking no shortcuts, I really wanted a portfolio that would look
            just like me. This project taught me a lot of Javascript, CSS and
            HTML. Im really proud how it turned out
          </p>
        </a>

        <a className='project' href='https://github.com/Jimpsoni/Kiekkorekisteri'>
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
        </a>
      </div>
    </div>
  )
}

export default Projects
