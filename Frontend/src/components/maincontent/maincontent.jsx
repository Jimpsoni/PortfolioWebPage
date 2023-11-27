import Jobexperience from './Jobexperience'
import AboutMe from './aboutme'
import './styles.css'

const MainContent = () => {
  return (
    <>
      <AboutMe/>

      <div className='spacer layer1'></div>

      <div id='experince'>
        <section className='whiteSection'>
          <div className='skillSection'>
            <h2 className='subheading2'>Technical skills</h2>
            <p className='whiteSectionText'>
              I&rsquo;m a passionate and creative full-stack developer with a
              focus on React and JavaScript
            </p>

            <div className='skill'>
              <h3 className='skillHeader'>Python</h3>
              <p className='descriptionText'>
                I&rsquo;ve wrote most of my lines using Python. Tons of small
                personal projects and bigger projects for excercises left me
                with a lot of knowledge. Online courses I have taken:
              </p>

              <ul id='certifications'>
                <li className='certification'>Data engineering With Python</li>
                <li className='certification'>Data-analysis with Python</li>
                <li className='certification'>
                  Scientific Computing with Python
                </li>
              </ul>
            </div>

            <div className='skill'>
              <h3 className='skillHeader'>HTML, CSS, JS</h3>
              <p className='descriptionText'>
                I&rsquo;ve wrote most of my lines using Python. Tons of small
                personal projects and bigger projects for excercises left me
                with a lot of knowledge
              </p>
            </div>

            <div className='skill'>
              <h3 className='skillHeader'>Databases</h3>
              <p className='descriptionText'>
                I&rsquo;ve wrote most of my lines using Python. Tons of small
                personal projects and bigger projects for excercises left me
                with a lot of knowledge
              </p>
            </div>
          </div>

          <div className='skillSection'>
            <h2 className='subheading2'>Practical skills</h2>
            <p className='whiteSectionText'>
              I&rsquo;ve gained lot of valuable skills through my hobbies and
              work life
            </p>

            <div className='skill'>
              <h3 className='skillHeader'>Teamwork</h3>
              <p className='descriptionText'>
                I&rsquo;ve wrote most of my lines using Python. Tons of small
                personal projects and bigger projects for excercises left me
                with a lot of knowledge
              </p>
            </div>

            <div className='skill'>
              <h3 className='skillHeader'>Communications</h3>
              <p className='descriptionText'>
                I&rsquo;ve wrote most of my lines using Python. Tons of small
                personal projects and bigger projects for excercises left me
                with a lot of knowledge
              </p>
            </div>

            <div className='skill'>
              <h3 className='skillHeader'>Good work morale</h3>
              <p className='descriptionText'>
                I&rsquo;ve wrote most of my lines using Python. Tons of small
                personal projects and bigger projects for excercises left me
                with a lot of knowledge
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className='spacer2 layer2'></div>
      
      <Jobexperience/>
    </>
  )
}

export default MainContent
