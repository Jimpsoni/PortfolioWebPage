import './styles.css'

const Projects = () => {
  return (
    <div id='projects'>
      <h2 id='projectsHeader'>My Projects</h2>
      <div id='projectContainer'>
        <div className='project'>
          <div className='thumbnailContainer'>
            <img
              className='projectImage'
              src='https://www.jyvasmuutot.net/media/Muuttoauto-44m3-2-scaled.jpg'/>
          </div>
          <h3 className='projectHeader'>Automatic Email Survey</h3>
          <p className='projectText'>This was an interesting project!</p>
        </div>

        <div className='project'>
          <div className='thumbnailContainer'>
            <img
              className='projectImage'
              src='https://www.jyvasmuutot.net/media/Muuttoauto-44m3-2-scaled.jpg'/>
          </div>
          <h3 className='projectHeader'>Personal Portfolio</h3>
          <p className='projectText'>My way or the highway!</p>
        </div>

        <div className='project'>
          <div className='thumbnailContainer'>
            <img
              className='projectImage'
              src='https://www.jyvasmuutot.net/media/Muuttoauto-44m3-2-scaled.jpg'/>
          </div>
          <h3 className='projectHeader'>Disc Register</h3>
          <p className='projectText'>Ohjelmointi 2 Courses Practical work!</p>
        </div>
      </div>
    </div>
  )
}

export default Projects
