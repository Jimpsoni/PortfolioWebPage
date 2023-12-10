import "./styles.css"
import { Link } from "react-router-dom"
import image from "../../../assets/technicalskills.png"
import image2 from "../../../assets/softskills.png"

const Skills = () => {
  return (
    <section id='skillSection'>
      <div id='skillContainer'>
        <div id='textContainer1' className='skillTextContainer'>
          <h2 className='skillHeader'>Technical Skills</h2>
          <h3 className='skillSubHeader'>Python, Javascript, MongoDB etc...</h3>
          <p className='commonText'>
            I&lsquo;ve been programming since middleschool and have acquired a
            lot of knowlegde on the way. Starting with small projects with
            Python all the way to fullstack applications with JS, data
            engineering with Python and desktop apps with Java
          </p>
          <Link to='/skills'>
            <span className='linkToSkills' style={{ marginRight: "7px" }}>
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
            src={image2}
          />
        </div>

        <div id='textContainer2' className='skillTextContainer'>
          <h2 className='skillHeader'>Soft Skills</h2>
          <h3 className='skillSubHeader'>
            Teamwork, collaboration and problem solving
          </h3>
          <p className='commonText'>
            Adaptable professional with diverse experience in four companies and
            freelancing. Strong in communication, team collaboration, and
            problem solving.
          </p>
          <Link to='/skills' className='linkContainer'>
            More on the &lsquo;skills&lsquo; page
            <span className='linkToSkills' style={{ marginLeft: "7px" }}>
              Learn&nbsp;more
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Skills
