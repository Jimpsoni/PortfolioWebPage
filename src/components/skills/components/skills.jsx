import "../styles.css"

export const PythonSkill = () => (
  <div className='skill'>
    <h3 className='skillPageHeader'>Python</h3>
    <p className='descriptionText'>
      I&rsquo;ve written the majority of my code using Python, engaging in
      numerous small personal projects and larger exercises that have
      significantly expanded my knowledge. Additionally, I&rsquo;ve taken
      various online courses, including:
    </p>

    <ul id='certifications'>
      <li className='certification'>Data engineering With Python</li>
      <li className='certification'>Data-analysis with Python</li>
      <li className='certification'>Scientific Computing with Python</li>
    </ul>
  </div>
)

export const JavaScriptSkill = () => (
  <div className='skill'>
    <h3 className='skillPageHeader'>HTML, CSS, JS</h3>
    <p className='descriptionText'>
      University of Helsinki&rsquo;s &rsquo;&rsquo;Full Stack Mooc&rsquo;&rsquo;
      reignited the passion for web developement. While I&rsquo;ve done
      Freecodecamp certifications for JavaScript, HTML and CSS in the past, the
      Mooc took things deeper and I learned to build applications with{" "}
      <b>React</b>. The course also taught <b>React state managment</b>,{" "}
      <b>GraphQL</b>, <b>Typescript</b> and <b>CI/CD</b>. Here is some of the
      certifications I&rsquo;ve successfully completed:
    </p>
    <ul id='certifications'>
      <li className='certification'>Responsive Web Design</li>
      <li className='certification'>
        Javascript Algorithms and Data Structures
      </li>
    </ul>
  </div>
)

export const DataBaseSkill = () => (
  <div className='skill'>
    <h3 className='skillPageHeader'>Node Js, MongoDB, SQL</h3>
    <p className='descriptionText'>
      The Fullstack Mooc used NodeJS to make backends and then connected them to
      MongoDB with Mongoose. In my Python projects I&rsquo;ve used SQL. For
      example, I scraped Nettiauto.fi and then saved those records to Postgres
      database that I configured.
    </p>
  </div>
)

export const OtherSkill = () => (
  <div className='skill'>
    <h3 className='skillPageHeader'>Other technical skills</h3>
    <p className='descriptionText'>
      I&rsquo;ve tinkered much with AIs such as Stable Diffusion and ChatGPT.
      Currently playing around with Github Copilot to speed up the coding
      process.
    </p>
  </div>
)
