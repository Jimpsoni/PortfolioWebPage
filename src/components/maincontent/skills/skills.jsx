import "./styles.css"
import { Link } from "react-router-dom"
import image from '../../../assets/technicalskills.png'

console.log(image)

const Skills = () => {
  return (
    <section id='skillSection'>
      <div id='skillContainer'>

        <div id='textContainer1' className="skillTextContainer">
          <h2 className='skillHeader'>Technical Skills</h2>
          <h3 className='skillSubHeader'>Python, Javascript, MongoDB etc...</h3>
          <p className='commonText'>
            I&lsquo;ve been programming since middleschool and have acquired a
            lot of knowlegde on the way. Starting with small projects with
            Python all the way to fullstack applications with JS, data
            engineering with Python and desktop apps with Java
          </p>
          <Link to='/skills'>
            <span className="linkToSkills" style={{marginRight: '7px'}}>
            Learn&nbsp;more
            </span>
            on the &lsquo;skills&lsquo; page
          </Link>
        </div>

        <div id='container2'>
          <img
            className='gridImage'
            alt='image with computer on it'
            src={image}
          />
        </div>

        <div id='container3'>
          <img
            className='gridImage'
            alt='image with computer on it'
            src='https://www.paxedutainment.com/blog/wp-content/uploads/2020/06/Communication_.jpg'
          />
        </div>

        <div id='textContainer2' className="skillTextContainer">
          <h2 className='skillHeader'>Soft Skills</h2>
          <h3 className='skillSubHeader'>
            Teamwork, collaboration and problem solving
          </h3>
          <p className='commonText'>
            I&lsquo;ve worked in 4 different companies and as a freelance, all
            of which have taught me a lot of valuable skills
          </p>
          <Link to='/skills'>
            More on the &lsquo;skills&lsquo; page
            <span className="linkToSkills" style={{marginLeft: '7px'}}>
            Learn&nbsp;more
            </span>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Skills
