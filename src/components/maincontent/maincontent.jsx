import Jobexperience from './jobexperience'
import AboutMe from './aboutme'
import Projects from './projects/projects'
import './styles.css'

const MainContent = () => {
  return (
    <>
      <AboutMe />

      <div className='spacer layer1'></div>

      <div id='experince'>
        <section className='whiteSection'>
          <div className='skillSection'>
            <h2 className='subheading2'>Technical skills</h2>
            <p className='whiteSectionText'>
              I&rsquo;m a aspiring and creative full-stack developer with a
              focus on React, JavaScript and Python
            </p>

            <div className='skill'>
              <h3 className='skillHeader'>Python</h3>
              <p className='descriptionText'>
                I&rsquo;ve written the majority of my code using Python,
                engaging in numerous small personal projects and larger
                exercises that have significantly expanded my knowledge.
                Additionally, I&rsquo;ve taken various online courses,
                including:
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
                University of Helsinki&rsquo;s &rsquo;&rsquo;Full Stack
                Mooc&rsquo;&rsquo; reignited the passion for web developement.
                While I&rsquo;ve done Freecodecamp certifications for
                JavaScript, HTML and CSS in the past, the Mooc took things
                deeper and I learned to build applications with <b>React</b>.
                The course also taught <b>React state managment</b>,{' '}
                <b>GraphQL</b>, <b>Typescript</b> and <b>CI/CD</b>. Here is some
                of the certifications I&rsquo;ve successfully completed:
              </p>
              <ul id='certifications'>
                <li className='certification'>Responsive Web Design</li>
                <li className='certification'>
                  Javascript Algorithms and Data Structures
                </li>
              </ul>
            </div>

            <div className='skill'>
              <h3 className='skillHeader'>Node Js, MongoDB, SQL</h3>
              <p className='descriptionText'>
                The Fullstack Mooc used NodeJS to make backends and then
                connected them to MongoDB with Mongoose. In my Python projects
                I&rsquo;ve used SQL. For example, I scraped Nettiauto.fi and
                then saved those records to Postgres database that I configured.
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
                From my time with Jyväsmuutot, I learned tons of crucial
                teamwork skills. Carrying heavy sofas and pianos requires a lot
                of <b>Teamwork</b> and <b>Communication</b>. I&rsquo;ve also
                played competetely videogames, which really honed my
                Communications
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

      <Jobexperience />
      <Projects />

      <div className='spacer2 layer3'></div>
    </>
  )
}

export default MainContent
