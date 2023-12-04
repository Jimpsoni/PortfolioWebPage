import Jobexperience from "./jobexperience"
import AboutMe from "./aboutme"
import Projects from "./projects/projects"
import "./styles.css"
import Skills from "./skills"

const MainContent = () => {
  return (
    <>
      <AboutMe />
      <div className='spacer layer1'></div>
      <Skills/>
      <div className='spacer2 layer2'></div>
      <Jobexperience />
      <Projects />

      <div className='spacer2 layer3'></div>
    </>
  )
}

export default MainContent
