import "./styles.css"
import NavBar from "../navbar/navbar"
import Footer from "../footer"
import { ScrollToTop } from "../functions"

const Skills = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <div id='experince'>
        <section className='whiteSection'>
          <div className='skillSection'>
            <h2 className='subheading2'>Technical skills</h2>
            <p className='whiteSectionText'>
              I&rsquo;m a aspiring and creative full-stack developer with a
              focus on React, JavaScript and Python
            </p>

            <div className='skill'>
              <h3 className='skillPageHeader'>Python</h3>
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
              <h3 className='skillPageHeader'>HTML, CSS, JS</h3>
              <p className='descriptionText'>
                University of Helsinki&rsquo;s &rsquo;&rsquo;Full Stack
                Mooc&rsquo;&rsquo; reignited the passion for web developement.
                While I&rsquo;ve done Freecodecamp certifications for
                JavaScript, HTML and CSS in the past, the Mooc took things
                deeper and I learned to build applications with <b>React</b>.
                The course also taught <b>React state managment</b>,{" "}
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
              <h3 className='skillPageHeader'>Node Js, MongoDB, SQL</h3>
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
              <h3 className='skillPageHeader'>Teamwork and collaboration</h3>
              <p className='descriptionText'>
                From my time with Jyväsmuutot, I learned tons of crucial
                teamwork skills. Carrying heavy sofas and pianos requires a lot
                of <b>Teamwork</b> and <b>Communication</b>. I&rsquo;ve also
                played competetely videogames, which really honed my
                Communications
              </p>
            </div>

            <div className='skill'>
              <h3 className='skillPageHeader'>Problem-Solving</h3>
              <p className='descriptionText'>
                I started my programming journey as a self-learner and
                encountered numerous challenges that demanded innovative
                problem-solving. This lead me to become good problem-solver who
                isn&rsquo;t scared of obsticles
              </p>
            </div>

            <div className='skill'>
              <h3 className='skillPageHeader'>Customer-Service</h3>
              <p className='descriptionText'>
                There is nothing harder than keeping a big smile your face after
                10 hour shift of carrying boxes and furniture around, but I
                still managed to do it everytime
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Skills
