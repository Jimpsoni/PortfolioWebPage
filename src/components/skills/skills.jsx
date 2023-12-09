import "./styles.css"
import "./spacers.css"
import NavBar from "../navbar/navbar"
import Footer from "../footer"
import { ScrollToTop } from "../functions"
import { useEffect, useState } from "react"

import {
  PythonSkill,
  JavaScriptSkill,
  DataBaseSkill,
  OtherSkill,
} from "./components/skills"


// eslint-disable-next-line react/prop-types
const DisplaySkill = ({ display }) => {
  switch (display) {
    case "python":
      return <PythonSkill />
    case "javascript":
      return <JavaScriptSkill />
    case "database":
      return <DataBaseSkill />
    case "other":
      return <OtherSkill />
  }
}

const Skills = () => {
  useEffect(() => {}, []) // CHANGE THE NAVBAR COLOR
  const [display, setDisplay] = useState("python")

  return (
    <>
      <ScrollToTop />
      <NavBar />
      <div id='techexperince'>
        <section className='whiteSection'>
          <div className='skillSection'>
            <h2 className='subheading2'>Technical skills</h2>
            <p className='whiteSectionText'>
              I&rsquo;m a aspiring and creative full-stack developer with a
              focus on React, JavaScript and Python
            </p>

            <div>
              <input
                type='radio'
                className='skillButton'
                onClick={() => setDisplay("python")}
                id='python'
                name='display'
                checked={display === "python"}
              />
              <label htmlFor='python'>Python</label>

              <input
                type='radio'
                className='skillButton'
                onClick={() => setDisplay("javascript")}
                name='display'
                id='javascript'
                checked={display === "javascript"}
              />
              <label htmlFor='javascript'>Javascript</label>

              <input
                type='radio'
                className='skillButton'
                onClick={() => setDisplay("database")}
                name='display'
                id='database'
                checked={display === "database"}
              />
              <label htmlFor='database'>Database</label>

              <input
                type='radio'
                className='skillButton'
                onClick={() => setDisplay("other")}
                name='display'
                id='other'
                checked={display === "other"}
              />
              <label htmlFor='other'>other</label>
            </div>
            <DisplaySkill display={display}/>
          </div>
        </section>
      </div>

      <div className='skill-spacer skill-layer1'></div>
      <div id='softexperience'>
      <section className='secondSection-skill'>
        <div className='skillSection'>
          <h2 className='subheading2'>Practical skills</h2>
          <p className='whiteSectionText'>
            I&rsquo;ve gained lot of valuable skills through my hobbies and work
            life
          </p>

          <div className='skill'>
            <h3 className='skillPageHeader'>Teamwork and collaboration</h3>
            <p className='descriptionText'>
              From my time with Jyväsmuutot, I learned tons of crucial teamwork
              skills. Carrying heavy sofas and pianos requires a lot of{" "}
              <b>Teamwork</b> and <b>Communication</b>. I&rsquo;ve also played
              competetely videogames, which really honed my Communications
            </p>
          </div>

          <div className='skill'>
            <h3 className='skillPageHeader'>Problem-Solving</h3>
            <p className='descriptionText'>
              I started my programming journey as a self-learner and encountered
              numerous challenges that demanded innovative problem-solving. This
              lead me to become good problem-solver who isn&rsquo;t scared of
              obsticles
            </p>
          </div>

          <div className='skill'>
            <h3 className='skillPageHeader'>Customer-Service</h3>
            <p className='descriptionText'>
              There is nothing harder than keeping a big smile your face after
              10 hour shift of carrying boxes and furniture around, but I still
              managed to do it everytime
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
