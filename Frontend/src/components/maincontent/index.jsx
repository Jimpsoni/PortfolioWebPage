import './styles.css'

const MainContent = () => {
  return (
    <>
      <div id='aboutme'>
        <section className='section'>
          <div id='firstpart'>
            <div className='imageContainer'>
              <img className='image' src='https://i.imgur.com/g72dl9P.jpg' />
            </div>
            <h1 id='mainHeader'>Hello! I am Jimi Jukkala</h1>
            <p className='sectionText'>
              I am a second-year student at the University of Jyväskylä, diving
              into the world of computer science.
            </p>
            <h2 className='subheading'>About me</h2>
            <p className='sectionText'>
              I am 22 years old, I love playing disc golf and love to learn new
              technologies. Currently tinkering with arduino projects
            </p>
          </div>
        </section>
      </div>

      <div className='spacer layer1'></div>

      <div id='experince'>
        <section className='whiteSection'>
          <h2 className='subheading2'>My Skills and projects</h2>
          <p className='whiteSectionText'>
            I&rsquo;m a passionate and creative full-stack developer with a
            focus on React and JavaScript. At 22, I&rsquo;ve already immersed
            myself in diverse projects, gaining hands-on experience in creating
            scalable and interactive web applications.
          </p>

          <div id='projectCards'>
            <div id='project'>
              <img />
              <p>This project taught me about robotics</p>
            </div>
            <div id='project'>
            <img />
              <p>This project taught me about robotics</p>
            </div>
          </div>
        </section>
      </div>

      <h2 className='subheading'>Job experience</h2>
      <p className='sectionText'>
        I am self-employed and currently work with Jyväsmuutot, providing a
        range of moving and transportation services on a freelance basis.
      </p>

      <h2 className='subheading'>My Skills and projects</h2>
      <p className='sectionText'>
        I&rsquo;m a passionate and creative full-stack developer with a focus on
        React and JavaScript. At 22, I&rsquo;ve already immersed myself in
        diverse projects, gaining hands-on experience in creating scalable and
        interactive web applications.
      </p>
    </>
  )
}

export default MainContent
